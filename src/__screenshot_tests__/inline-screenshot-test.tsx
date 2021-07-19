import {openStoryPage} from '../test-utils';

test('Inline ', async () => {
    const page = await openStoryPage({id: 'components-layouts-inline--default'});

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
});
