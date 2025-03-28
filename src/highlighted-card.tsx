'use client';
import * as React from 'react';
import {useIsInverseOrMediaVariant} from './theme-variant-context';
import Stack from './stack';
import {BaseTouchable} from './touchable';
import {Text, Text2} from './text';
import * as textProps from './text-props';
import {Boxed} from './boxed';
import MaybeDismissable, {useIsDismissable} from './maybe-dismissable';
import * as styles from './highlighted-card.css';
import {vars} from './skins/skin-contract.css';
import {useTheme} from './hooks';

import type {ExclusifyUnion} from './utils/utility-types';
import type {TouchableComponentProps} from './touchable';
import type {ButtonLink, NullableButtonElement} from './button';
import type {DataAttributes, HeadingType, RendersNullableElement, TrackingEvent} from './utils/types';

// At least one of title or description is required
type TextProps =
    | {
          title?: string;
          description: string;
      }
    | {
          title: string;
          description?: string;
      };

type CommonProps = TextProps & {
    titleAs?: HeadingType;
    titleLinesMax?: number;
    descriptionLinesMax?: number;
    imageUrl?: string;
    imageFit?: 'fit' | 'fill' | 'fill-center';
    imageAlt?: string;
    onClose?: () => void;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    isInverse?: boolean;
    children?: void;
    'aria-label'?: string;
    width?: string | number;
    dataAttributes?: DataAttributes;
};

type ButtonProps = CommonProps & {
    button: NullableButtonElement | RendersNullableElement<typeof ButtonLink> | undefined;
};

type TouchableCardProps = TouchableComponentProps<CommonProps>;

type Props = ExclusifyUnion<ButtonProps | TouchableCardProps>;

const Content = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {
        title,
        description,
        imageUrl,
        imageFit,
        imageAlt,
        titleAs = 'h3',
        width,
        dataAttributes,
        titleLinesMax,
        descriptionLinesMax,
        ...restProps
    } = props;
    const isInverseOutside = useIsInverseOrMediaVariant();
    const isInverse = props.isInverse ?? isInverseOutside;
    const isDismissable = useIsDismissable();
    const {textPresets} = useTheme();

    const content = (
        <Boxed
            ref={ref}
            variant={isInverse ? 'inverse' : 'default'}
            className={styles.container}
            dataAttributes={{
                'component-name': 'HighlightedCard',
                testid: 'HighlightedCard',
                ...dataAttributes,
            }}
            width={width ? `${width}px` : '100%'}
            minHeight="100%"
        >
            <div
                // don't create another region when the Content is inside a Dismissable wrapper
                role={!isDismissable ? 'region' : undefined}
                className={styles.textContainerVariant[imageUrl ? 'withImage' : 'withoutImage']}
                // aria-label is already in Dismisable wrapper
                aria-label={!isDismissable ? restProps['aria-label'] : undefined}
            >
                <Stack space={8}>
                    {!!title && (
                        <Text
                            {...textProps.text4}
                            truncate={titleLinesMax}
                            weight={textPresets.cardTitle.weight}
                            as={titleAs}
                            hyphens="auto"
                            dataAttributes={{testid: 'title'}}
                        >
                            {title}
                        </Text>
                    )}
                    {!!description && (
                        <Text2
                            regular
                            color={vars.colors.textSecondary}
                            truncate={descriptionLinesMax}
                            as="p"
                            hyphens="auto"
                            dataAttributes={{testid: 'description'}}
                        >
                            {description}
                        </Text2>
                    )}
                </Stack>
                {restProps.button && (
                    <>
                        <div style={{minHeight: 16, flexGrow: 1}} />
                        {restProps.button}
                    </>
                )}
            </div>
            {imageUrl && (
                <div
                    data-testid="image"
                    {...(imageAlt
                        ? {
                              role: 'img',
                              'aria-label': imageAlt,
                          }
                        : {})}
                    className={styles.imageContent}
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: imageFit === 'fit' ? 'contain' : 'cover',
                        backgroundPosition:
                            imageFit === 'fit'
                                ? 'bottom right'
                                : `center ${imageFit === 'fill-center' ? 'center' : 'right'}`,
                    }}
                />
            )}
        </Boxed>
    );

    if (restProps.button) {
        return content;
    }

    if (restProps.onPress || restProps.to || restProps.href) {
        return (
            <BaseTouchable {...restProps} className={styles.touchableContainer}>
                {content}
            </BaseTouchable>
        );
    }

    return content;
});

const HighlightedCard = React.forwardRef<HTMLDivElement, Props>(
    ({'aria-label': ariaLabel, ...props}, ref) => {
        const label = ariaLabel || props.title || props.description;

        const isInverseOutside = useIsInverseOrMediaVariant();
        const isInverse = props.isInverse ?? isInverseOutside;
        return (
            <MaybeDismissable
                onClose={props.onClose}
                aria-label={label}
                width={props.width}
                variant={props.imageUrl ? 'media' : isInverse ? 'inverse' : undefined}
            >
                <Content {...props} aria-label={label} ref={ref} />
            </MaybeDismissable>
        );
    }
);

export default HighlightedCard;
