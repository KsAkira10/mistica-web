import {openStoryPage, screen} from '../test-utils';
import type {Device} from '../test-utils';

const testDevices: Array<Device> = ['MOBILE_IOS', 'DESKTOP'];

test.each(testDevices)('ButtonLayout UI package, device: %s', async (device) => {
    await openStoryPage({
        id: 'components-layouts-buttonlayout--default',
        device,
    });

    const element = await screen.findByTestId('screenshot');

    const image = await element.screenshot();
    expect(image).toMatchImageSnapshot();
});
