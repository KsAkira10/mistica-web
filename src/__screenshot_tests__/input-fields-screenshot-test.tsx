import {openStoryPage, screen} from '../test-utils';
import {within} from '@telefonica/acceptance-testing';

test('TextField - appears properly on desktop', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'DESKTOP',
    });

    const field = await screen.findByTestId('text-field');
    const image = await field.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - label', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - optional', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: '', optional: true},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - multiline and optional', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: '', optional: true, multiline: true},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - multiline and maxLength', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: '', maxLength: true, multiline: true},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - long label', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: '', label: 'This TextField has a very long label and should display ellipsis'},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');

    const image = await fieldWrapper.screenshot();

    const field = await screen.findByTestId('text-field');
    await field.type('Some text');

    expect(await fieldWrapper.screenshot()).toMatchImageSnapshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - long value', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: 'This TextField has a very long text and should cover the entire field'},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - label and default value', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - helper text', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {helperText: 'Helper text'},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - error', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {error: true, helperText: 'I am a descriptive error'},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - prefix', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {prefix: 'Prefix'},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - end icon', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {icon: true},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - disabled', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {icon: true, disabled: true},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - read only', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {icon: true, readOnly: true},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const field = await screen.findByTestId('text-field');

    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();

    field.click();
    const focused = await fieldWrapper.screenshot();

    expect(focused).toMatchImageSnapshot();
});

test('TextField - inverse and helper text', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {inverse: true, helperText: 'Helper text'},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - inverse and error', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {inverse: true, error: true, helperText: 'I am a descriptive error'},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - collapses its label when autofill fills out the form', async () => {
    const page = await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();

    // it simulates a data autofill
    await page.evaluate(() => {
        const input = document.querySelector('input[data-testid="text-field"]');
        Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')?.set?.call(input, 'ciao');
        input?.dispatchEvent(new Event('input', {bubbles: true}));
    });

    const secondImage = await fieldWrapper.screenshot();
    expect(secondImage).toMatchImageSnapshot();
});

test('TextField - appears properly (focus)', async () => {
    const page = await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    await page.click(await screen.findByTestId('text-field'));
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - appears properly (typing)', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const field = await screen.findByTestId('text-field');
    await field.type('hello moto');
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - appears properly (typing and blur)', async () => {
    await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('text-field-wrapper');
    const field = await screen.findByTestId('text-field');
    await field.type('hello moto');

    await field.evaluate((el) => (el as HTMLInputElement).blur());
    const image = await fieldWrapper.screenshot();

    expect(image).toMatchImageSnapshot();
});

test('TextField - multiline', async () => {
    const page = await openStoryPage({
        id: 'components-input-fields-textfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: '', multiline: true},
    });

    const field = await screen.findByTestId('text-field');
    const fieldWrapper = await screen.findByTestId('text-field-wrapper');

    const emptyScreenshot = await fieldWrapper.screenshot();
    expect(emptyScreenshot).toMatchImageSnapshot();

    const lines = ['1111111111', '2222222222', '3333333333', '4444444444', '5555555555', '6666666666'].join(
        '\n'
    );

    await field.type(lines);

    const afterWriteScreenshot = await fieldWrapper.screenshot();
    expect(afterWriteScreenshot).toMatchImageSnapshot();

    await field.evaluate((el) => (el as HTMLInputElement).blur());
    const filledBlurScreenshot = await fieldWrapper.screenshot();
    expect(filledBlurScreenshot).toMatchImageSnapshot();

    await page.click(field);
    const filledFocusScreenshot = await fieldWrapper.screenshot();
    expect(filledFocusScreenshot).toMatchImageSnapshot();
});

test('SearchField', async () => {
    await openStoryPage({
        id: 'components-input-fields-searchfield--controlled',
        device: 'MOBILE_IOS',
    });

    const fieldWrapper = await screen.findByTestId('search-field-wrapper');
    const field = await screen.findByTestId('search-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('hello moto');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('DateField', async () => {
    await openStoryPage({
        id: 'components-input-fields-datefield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('date-field-wrapper');
    const field = await screen.findByTestId('date-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.focus();
    await field.type('06' + '10' + '1980');

    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('DateTimeField', async () => {
    await openStoryPage({
        id: 'components-input-fields-datetimefield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('datetime-field-wrapper');
    const field = await screen.findByTestId('datetime-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.focus();
    await field.type('06' + '10' + '1980' + '13' + '14');

    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('MonthField', async () => {
    const page = await openStoryPage({
        id: 'components-input-fields-monthfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('month-field-wrapper');
    const field = await screen.findByTestId('month-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.focus();
    await field.type('10');
    page.keyboard.press('Tab');
    await field.type('2021');

    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('PinField', async () => {
    await openStoryPage({
        id: 'components-input-fields-pinfield--uncontrolled',
        device: 'MOBILE_IOS',
    });

    const fieldGroup = await screen.findByTestId('pin-field-wrapper');
    expect(await fieldGroup.screenshot()).toMatchImageSnapshot();

    const firstDigitField = await within(fieldGroup).findByLabelText('Dígito 1 de 6');
    await firstDigitField.focus();
    expect(await fieldGroup.screenshot()).toMatchImageSnapshot();

    await firstDigitField.type('1');
    expect(await fieldGroup.screenshot()).toMatchImageSnapshot();
});

test('PinField - hideCode', async () => {
    await openStoryPage({
        id: 'components-input-fields-pinfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {hideCode: true},
    });

    const fieldGroup = await screen.findByTestId('pin-field-wrapper');

    const firstDigitField = await within(fieldGroup).findByLabelText('Dígito 1 de 6');
    await firstDigitField.type('1');
    expect(await fieldGroup.screenshot()).toMatchImageSnapshot();
});

test.each`
    skin          | number
    ${'Vivo'}     | ${'2145678901'}
    ${'Vivo'}     | ${'+34654834455'}
    ${'Movistar'} | ${'654834455'}
`('PhoneNumberField - $number in $skin skin', async ({skin, number}) => {
    await openStoryPage({
        id: 'components-input-fields-phonenumberfield--uncontrolled',
        device: 'MOBILE_IOS',
        skin,
        args: {defaultValue: number},
    });

    const field = await screen.findByTestId('phone-number-field');

    await field.click({clickCount: 3});
    await field.type(number);

    expect(await field.screenshot()).toMatchImageSnapshot();
});

test('CreditCardExpirationField', async () => {
    await openStoryPage({
        id: 'components-input-fields-creditcardexpirationfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('credit-card-expiration-field-wrapper');
    const field = await screen.findByTestId('credit-card-expiration-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('a10b25c');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('CreditCardNumberField', async () => {
    await openStoryPage({
        id: 'components-input-fields-creditcardnumberfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('credit-card-number-field-wrapper');
    const field = await screen.findByTestId('credit-card-number-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('d1234567812ab345678c');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('CvvField', async () => {
    await openStoryPage({
        id: 'components-input-fields-cvvfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('cvv-field-wrapper');
    const field = await screen.findByTestId('cvv-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('1234abc123');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('DecimalField', async () => {
    await openStoryPage({
        id: 'components-input-fields-decimalfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('decimal-field-wrapper');
    const field = await screen.findByTestId('decimal-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('123a,456bc,.3');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('EmailField', async () => {
    await openStoryPage({
        id: 'components-input-fields-emailfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('email-field-wrapper');
    const field = await screen.findByTestId('email-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('aitor.menta@gmail.com');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('IbanField', async () => {
    await openStoryPage({
        id: 'components-input-fields-ibanfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('iban-field-wrapper');
    const field = await screen.findByTestId('iban-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('ES2114650100722030876293');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('IntegerField', async () => {
    await openStoryPage({
        id: 'components-input-fields-integerfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('integer-field-wrapper');
    const field = await screen.findByTestId('integer-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('123abc123');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();
});

test('PasswordField', async () => {
    const page = await openStoryPage({
        id: 'components-input-fields-passwordfield--uncontrolled',
        device: 'MOBILE_IOS',
        args: {defaultValue: ''},
    });

    const fieldWrapper = await screen.findByTestId('password-field-wrapper');
    const field = await screen.findByTestId('password-field');

    const emptyScreenshot = await fieldWrapper.screenshot();

    expect(emptyScreenshot).toMatchImageSnapshot();

    await field.type('password123');
    const filledScreenshot = await fieldWrapper.screenshot();

    expect(filledScreenshot).toMatchImageSnapshot();

    await page.click(await screen.findByLabelText('Mostrar u ocultar contraseña'));

    const visibleScreenshot = await fieldWrapper.screenshot();

    expect(visibleScreenshot).toMatchImageSnapshot();
});
