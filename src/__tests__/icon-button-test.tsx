import * as React from 'react';
import {render, screen} from '@testing-library/react';
import ThemeContextProvider from '../theme-context-provider';
import {makeTheme} from './test-utils';
import userEvent from '@testing-library/user-event';
import IconLightningRegular from '../generated/mistica-icons/icon-lightning-regular';
import IconButton from '../icon-button';

import type {TouchableElement} from '../touchable';

test('IconButton is accesible', () => {
    render(
        <ThemeContextProvider theme={makeTheme()}>
            <IconButton Icon={IconLightningRegular} aria-label="icon-button" onPress={() => {}} />
        </ThemeContextProvider>
    );

    expect(screen.getByRole('button', {name: 'icon-button'})).toBeInTheDocument();
});

test('"to" uses a Link Component', () => {
    const Link = () => '(Link Component)' as any;

    const {asFragment} = render(
        <ThemeContextProvider theme={makeTheme({Link})}>
            <IconButton Icon={IconLightningRegular} aria-label="icon-button" to="/test" />
        </ThemeContextProvider>
    );

    expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          (Link Component)
        </DocumentFragment>
    `);
});

test('<a> is rendered when using "to" prop', () => {
    render(
        <ThemeContextProvider theme={makeTheme()}>
            <IconButton Icon={IconLightningRegular} aria-label="icon-button" to="/test" />
        </ThemeContextProvider>
    );

    const anchor = screen.getByRole('button', {name: 'icon-button'});

    expect(anchor).toHaveAttribute('href', '/test');
});

test('IconButton can track events', async () => {
    const logEventSpy = jest.fn();
    const trackingEvent = {
        category: 'someCategory',
        action: 'someAction',
        label: 'someLabel',
    };

    render(
        <ThemeContextProvider theme={makeTheme({analytics: {logEvent: logEventSpy}})}>
            <IconButton
                Icon={IconLightningRegular}
                trackingEvent={trackingEvent}
                onPress={() => {}}
                aria-label="icon-button"
            />
        </ThemeContextProvider>
    );

    const iconButton = await screen.findByRole('button', {name: 'icon-button'});

    await userEvent.click(iconButton);
    expect(logEventSpy).toHaveBeenCalledWith(trackingEvent);
    expect(logEventSpy).toHaveBeenCalledTimes(1);

    await userEvent.click(iconButton);
    expect(logEventSpy).toHaveBeenCalledWith(trackingEvent);
    expect(logEventSpy).toHaveBeenCalledTimes(2);
});

test('IconButton ref', () => {
    const TestComponent = () => {
        const refOnPress = React.useRef<TouchableElement>(null);
        const refHref = React.useRef<TouchableElement>(null);
        const refTo = React.useRef<TouchableElement>(null);

        React.useEffect(() => {
            expect(refOnPress.current?.tagName).toBe('BUTTON');
            expect(refHref.current?.tagName).toBe('A');
            expect(refTo.current?.tagName).toBe('A');
        });

        return (
            <ThemeContextProvider theme={makeTheme()}>
                <IconButton Icon={IconLightningRegular} ref={refOnPress} onPress={() => {}} />
                <IconButton Icon={IconLightningRegular} ref={refHref} href="/" />
                <IconButton Icon={IconLightningRegular} ref={refTo} to="/" />
            </ThemeContextProvider>
        );
    };

    render(<TestComponent />);
});
