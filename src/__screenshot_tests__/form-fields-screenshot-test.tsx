import {openStoryPage, screen} from '../test-utils';
import {within} from '@telefonica/acceptance-testing';

import type {Device} from '../test-utils';

const TESTABLE_DEVICES: Array<Device> = ['MOBILE_IOS', 'DESKTOP'];

test.each(TESTABLE_DEVICES)('All variants in %s', async (device) => {
    const page = await openStoryPage({
        id: 'components-input-fields--variants',
        device,
    });

    const image = await page.screenshot({fullPage: true});

    expect(image).toMatchImageSnapshot();
});

test.each(TESTABLE_DEVICES)('Default textfield appears properly on %s', async (device) => {
    await openStoryPage({
        id: 'components-input-fields--variants',
        device,
    });

    const fieldWrapper = await screen.findByTestId('normal-field');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('Textfield collapses its label when autofill fills out the form', async () => {
    await openStoryPage({
        id: 'components-input-fields--variants',
        device: 'DESKTOP',
    });

    const fieldWrapper = await screen.findByTestId('normal-field');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();

    // it simulates a data autofill
    await page.evaluate(() => {
        const input = document.querySelector('input[data-testid="normal-field-text-field"]');
        Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')?.set?.call(input, 'ciao');
        input?.dispatchEvent(new Event('input', {bubbles: true}));
    });

    const secondImage = await fieldWrapper.screenshot();
    expect(secondImage).toMatchImageSnapshot();
});

test.each(TESTABLE_DEVICES)('Default textfield appears properly (focus) on %s', async (device) => {
    const page = await openStoryPage({
        id: 'components-input-fields--variants',
        device,
    });

    const fieldWrapper = await screen.findByTestId('normal-field');
    await page.click(await screen.findByLabelText('Normal field (opcional)'));
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test.each(TESTABLE_DEVICES)('Default textfield appears properly (typing) on %s', async (device) => {
    const page = await openStoryPage({
        id: 'components-input-fields--variants',
        device,
    });

    const fieldWrapper = await screen.findByTestId('normal-field');
    await page.type(await screen.findByLabelText('Normal field (opcional)'), 'hello moto', {delay: 100});
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test.each(TESTABLE_DEVICES)('Default textfield appears properly (typing and blur) on %s', async (device) => {
    const page = await openStoryPage({
        id: 'components-input-fields--variants',
        device,
    });

    const fieldWrapper = await screen.findByTestId('normal-field');
    await page.type(await screen.findByLabelText('Normal field (opcional)'), 'hello moto', {delay: 100});
    await page.click(await screen.findByLabelText('Multiline (opcional)'));
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('Search text field', async () => {
    const page = await openStoryPage({
        id: 'components-input-fields--types-controlled',
        device: 'MOBILE_ANDROID',
    });

    const fieldWrapper = await screen.findByTestId('search');
    const field = await screen.findByLabelText('Search');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await page.type(field, 'hello moto', {delay: 100});
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('Multiline text field', async () => {
    const page = await openStoryPage({
        id: 'components-input-fields--variants',
        device: 'MOBILE_ANDROID',
    });

    const field = await screen.findByLabelText('Multiline with maxLength');
    const fieldWrapper = await screen.findByTestId('multiline-max-length');

    const emptyScreenshot = await fieldWrapper.screenshot();
    expect(emptyScreenshot).toMatchImageSnapshot();

    const lines = ['1111111111', '2222222222', '3333333333', '4444444444'].join('\n');

    await page.type(field, lines);

    const afterWriteScreenshot = await fieldWrapper.screenshot();
    expect(afterWriteScreenshot).toMatchImageSnapshot();

    await page.click(await screen.findByLabelText('Normal field (opcional)'));
    const filledBlurScreenshot = await fieldWrapper.screenshot();
    expect(filledBlurScreenshot).toMatchImageSnapshot();

    await page.click(field);
    const filledFocusScreenshot = await fieldWrapper.screenshot();
    expect(filledFocusScreenshot).toMatchImageSnapshot();
});

test('date field', async () => {
    await openStoryPage({
        id: 'components-input-fields--types-uncontrolled',
        device: 'MOBILE_ANDROID',
    });

    const fieldWrapper = await screen.findByTestId('date');
    const field = await screen.findByLabelText('Date (opcional)');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.focus();

    await field.type('06' + '10' + '1980', {delay: 0});
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('date-time field', async () => {
    await openStoryPage({
        id: 'components-input-fields--types-uncontrolled',
        device: 'MOBILE_ANDROID',
    });

    const fieldWrapper = await screen.findByTestId('datetime');
    const field = await screen.findByLabelText('DateTime (opcional)');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.focus();
    await field.type('06' + '10' + '1980' + '13' + '14', {delay: 0});

    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('month field', async () => {
    await openStoryPage({
        id: 'components-input-fields--types-uncontrolled',
        device: 'MOBILE_ANDROID',
    });

    const fieldWrapper = await screen.findByTestId('month');
    const field = await screen.findByLabelText('Month (opcional)');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.focus();

    await field.type('10', {delay: 0});
    page.keyboard.press('Tab');
    await field.type('2021', {delay: 0});

    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('Very long label should show ellipsis', async () => {
    await openStoryPage({
        id: 'components-input-fields--variants',
        device: 'MOBILE_IOS',
    });

    const fieldWrapper = await screen.findByTestId('long-label');

    expect(await fieldWrapper.screenshot()).toMatchImageSnapshot();

    const field = await screen.findByLabelText(
        'This TextField has a very long label and should display ellipsis (opcional)'
    );
    await field.type('Some text');

    expect(await fieldWrapper.screenshot()).toMatchImageSnapshot();
});

test('PinField', async () => {
    await openStoryPage({
        id: 'components-input-fields--types-uncontrolled',
        device: 'MOBILE_IOS',
    });

    const fieldGroup = await screen.findByLabelText('OTP');
    expect(await fieldGroup.screenshot()).toMatchImageSnapshot();

    const firstDigitField = await within(fieldGroup).findByLabelText('Dígito 1 de 6');
    await firstDigitField.focus();
    expect(await fieldGroup.screenshot()).toMatchImageSnapshot();

    await firstDigitField.type('1');
    expect(await fieldGroup.screenshot()).toMatchImageSnapshot();
});

test('PinField (hideCode)', async () => {
    await openStoryPage({
        id: 'components-input-fields--types-uncontrolled',
        device: 'MOBILE_IOS',
    });

    const fieldGroup = await screen.findByLabelText('PIN');

    const firstDigitField = await within(fieldGroup).findByLabelText('Dígito 1 de 6');
    await firstDigitField.type('1');
    expect(await fieldGroup.screenshot()).toMatchImageSnapshot();
});

test.each`
    skin          | number
    ${'Vivo'}     | ${'2145678901'}
    ${'Vivo'}     | ${'+34654834455'}
    ${'Movistar'} | ${'654834455'}
`('Phone number field $skin $number', async ({skin, number}) => {
    await openStoryPage({
        id: 'components-input-fields--types-uncontrolled',
        device: 'MOBILE_IOS',
        skin,
    });

    const field = await screen.findByLabelText('Phone');

    await field.click({clickCount: 3});
    await field.type(number);

    expect(await field.screenshot()).toMatchImageSnapshot();
});
