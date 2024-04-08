'use client';
import * as React from 'react';
import classnames from 'classnames';
import ScreenReaderOnly from './screen-reader-only';
import * as classes from './touchable.css';
import {useTheme} from './hooks';
import {isInsideNovumNativeApp} from './utils/platform';
import {ENTER, SPACE} from './utils/keys';
import {getPrefixedDataAttributes} from './utils/dom';
import {redirect} from './utils/browser';

import type {DataAttributes, TrackingEvent} from './utils/types';
import type {Location} from 'history';

export type PressHandler = (event: React.MouseEvent<HTMLElement>) => void;

interface CommonProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    'aria-label'?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-checked'?: 'true' | 'false' | boolean;
    'aria-controls'?: string;
    'aria-expanded'?: 'true' | 'false' | boolean;
    'aria-haspopup'?: 'true' | 'false' | 'menu' | 'dialog' | boolean;
    'aria-hidden'?: 'true' | 'false' | boolean;
    'aria-selected'?: 'true' | 'false' | boolean;
    'aria-labelledby'?: string;
    'aria-live'?: 'polite' | 'off' | 'assertive';
    /** IMPORTANT: try to avoid using role="link" with onPress and first consider other alternatives like to/href + onNavigate */
    role?: string;
    type?: 'button' | 'submit';
    tabIndex?: number;
    as?: 'a';
    stopPropagation?: boolean;
}

/*
 * We are using "href", "to" and "onPress" as union discriminant.
 * this way we can know the type of the union by checking that property
 * See https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

interface PropsHref extends CommonProps {
    maybe?: undefined;
    href: string;
    newTab?: boolean;
    loadOnTop?: boolean;
    to?: undefined;
    onPress?: undefined;
    /** with "href", onNavigate will be executed before the navigation */
    onNavigate?: () => void | Promise<void>;
}

interface PropsMaybeHref extends CommonProps {
    maybe: true;
    href?: string;
    newTab?: boolean;
    loadOnTop?: boolean;
    to?: undefined;
    onPress?: undefined;
    /** with "href", onNavigate will be executed before the navigation */
    onNavigate?: () => void | Promise<void>;
}

interface PropsTo extends CommonProps {
    maybe?: undefined;
    to: string | Location;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    href?: undefined;
    onPress?: undefined;
    /** with "to", onNavigate will be executed in parallel to the navigation */
    onNavigate?: () => void | Promise<void>;
}

interface PropsMaybeTo extends CommonProps {
    maybe: true;
    to?: string | Location;
    fullPageOnWebView?: boolean;
    replace?: boolean;
    href?: undefined;
    onPress?: undefined;
    /** with "to", onNavigate will be executed in parallel to the navigation */
    onNavigate?: () => void | Promise<void>;
}

interface PropsOnPress extends CommonProps {
    maybe?: undefined;
    onPress: PressHandler;
    href?: undefined;
    to?: undefined;
    formId?: string;
    onNavigate?: undefined;
}

interface PropsMaybeOnPress extends CommonProps {
    maybe: true;
    onPress?: PressHandler;
    href?: undefined;
    to?: undefined;
    formId?: string;
    onNavigate?: undefined;
}

export type TouchableProps =
    | PropsHref
    | PropsTo
    | PropsOnPress
    | PropsMaybeHref
    | PropsMaybeTo
    | PropsMaybeOnPress;

export type TouchableElement = HTMLDivElement | HTMLAnchorElement | HTMLButtonElement;

const RawTouchable = React.forwardRef<TouchableElement, TouchableProps>((props, ref) => {
    const {texts, analytics, platformOverrides, Link, useHrefDecorator} = useTheme();
    const hrefDecorator = useHrefDecorator();
    const isClicked = React.useRef(false);
    let trackingEvents: ReadonlyArray<TrackingEvent> = [];
    if (props.trackingEvent) {
        if (Array.isArray(props.trackingEvent)) {
            trackingEvents = props.trackingEvent;
        } else {
            trackingEvents = [props.trackingEvent as TrackingEvent];
        }
    }

    const children = props.children;

    const commonProps = {
        className: props.className,
        disabled: props.disabled,
        style: props.style,
        role: props.role,
        'aria-checked': props['aria-checked'],
        'aria-disabled': props.disabled ? true : undefined,
        'aria-controls': props['aria-controls'],
        'aria-expanded': props['aria-expanded'],
        'aria-haspopup': props['aria-haspopup'],
        'aria-hidden': props['aria-hidden'],
        'aria-selected': props['aria-selected'],
        'aria-live': props['aria-live'],
        tabIndex: props.tabIndex,
        ...getPrefixedDataAttributes(props.dataAttributes, 'Touchable'),
    };

    const type = props.type ? props.type : 'button';

    const openNewTab = !!props.href && !!props.newTab;
    const loadOnTop = !openNewTab && !!props.href && !!props.loadOnTop;

    const stopPropagationIfNeeded = (event: React.MouseEvent<HTMLElement>) => {
        if (props.stopPropagation) {
            event.stopPropagation();
        }
    };

    const onPress = (event: React.MouseEvent<HTMLElement>) => {
        if (props.onPress) {
            props.onPress(event);
        }
    };

    const getHref = (): string => {
        if (props.href) {
            return hrefDecorator(props.href);
        }
        if (props.to && props.fullPageOnWebView) {
            if (typeof props.to === 'string') {
                return props.to;
            }
            return props.to.pathname ?? '';
        }
        return '';
    };

    const trackEvent = () => Promise.all(trackingEvents.map((event) => analytics.logEvent(event)));

    const trackOnce = (callback: () => void) => {
        if (isClicked.current) return;
        isClicked.current = true;

        trackEvent().finally(() => {
            isClicked.current = false;
            callback();
        });
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        stopPropagationIfNeeded(event);
        // synchronously execute handler when no tracking is needed
        if (!trackingEvents.length) {
            onPress(event);
            return;
        }

        trackOnce(() => onPress(event));
    };

    const handleHrefClick = (event: React.MouseEvent<HTMLElement>) => {
        stopPropagationIfNeeded(event);

        const hasOnNavigate = !!(props.href && props.onNavigate);

        if (!trackingEvents.length && !hasOnNavigate) {
            return; // let the browser handle the href
        }
        event.preventDefault();

        Promise.resolve(hasOnNavigate ? props.onNavigate?.() : undefined).finally(() => {
            trackOnce(() => redirect(getHref(), openNewTab, loadOnTop));
        });
    };

    const handleToClick = (event: React.MouseEvent<HTMLElement>) => {
        stopPropagationIfNeeded(event);
        if (props.to && props.onNavigate) {
            props.onNavigate();
        }
        trackEvent();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === ENTER || event.key === SPACE) {
            event.preventDefault();
            event.currentTarget.click();
        }
    };

    if (!!props.href || (props.to && props.fullPageOnWebView && isInsideNovumNativeApp(platformOverrides))) {
        return (
            <a
                {...commonProps}
                aria-label={props['aria-label']}
                aria-labelledby={props['aria-labelledby']}
                onClick={handleHrefClick}
                onKeyDown={handleKeyDown}
                href={props.disabled ? undefined : getHref()}
                target={(() => {
                    if (openNewTab) return '_blank';
                    if (loadOnTop) return '_top';
                    return undefined;
                })()}
                rel={openNewTab ? 'noopener noreferrer' : undefined}
                ref={ref as React.RefObject<HTMLAnchorElement>}
            >
                {children}
                {openNewTab && (
                    <ScreenReaderOnly>
                        <span>{texts.linkOpensInNewTab}</span>
                    </ScreenReaderOnly>
                )}
            </a>
        );
    }

    if (props.to) {
        return (
            <Link
                {...commonProps}
                aria-label={props['aria-label']}
                aria-labelledby={props['aria-labelledby']}
                innerRef={ref as React.RefObject<HTMLAnchorElement>}
                to={props.disabled ? '' : props.to}
                replace={props.replace}
                onClick={handleToClick}
                onKeyDown={handleKeyDown}
            >
                {children}
            </Link>
        );
    }

    if (props.onPress) {
        const elementType = props.as ?? 'button';
        const role = commonProps.role ?? (props.as === 'a' ? 'button' : undefined);
        return React.createElement(elementType, {
            ...commonProps,
            role,
            // this "form" attribute is useful when the form's submit button
            // is located outside the <form> element, for example if you use
            // a ButtonFixedFooter layout inside a form with the submit
            // button located at the footer, which is redered using a Portal
            form: type === 'submit' && props.formId ? props.formId : undefined,
            'aria-label': props['aria-label'],
            'aria-labelledby': props['aria-labelledby'],
            type,
            ref: ref as React.RefObject<HTMLButtonElement>,
            onClick: handleButtonClick,
            children,
        });
    }

    return (
        <div
            {...commonProps}
            ref={ref as React.RefObject<HTMLDivElement>}
            className={classnames(commonProps.className, classes.notTouchable)}
        >
            {children}
        </div>
    );
});

const Touchable = React.forwardRef<TouchableElement, TouchableProps>((props, ref) => {
    return <RawTouchable {...props} className={classnames(classes.touchable, props.className)} ref={ref} />;
});

// Used internally by Mística's components to avoid styles collisions
export const BaseTouchable = React.forwardRef<TouchableElement, TouchableProps & {resetMargin?: boolean}>(
    ({resetMargin = true, ...props}, ref) => {
        return (
            <RawTouchable
                {...props}
                className={classnames(classes.base, props.className, {[classes.marginReset]: resetMargin})}
                ref={ref}
            />
        );
    }
);

export default Touchable;
