import * as React from 'react';
import * as styles from './logo.css';
import {getO2NewSkin} from './skins/o2-new';
import {applyCssVars} from './utils/css';
import {calcInlineVars} from './logo-common';

import type {LogoImageProps} from './logo-common';

const O2NewLogoImage = ({size, isDarkMode, isInverse, color: colorProp}: LogoImageProps): JSX.Element => {
    const {colors} = getO2NewSkin();
    const color = colorProp || (isInverse && !isDarkMode ? colors.inverse : colors.brand);

    return (
        <svg
            className={styles.svg}
            style={applyCssVars(calcInlineVars(size))}
            viewBox="0 0 72 72"
            fill={color}
            role="presentation"
        >
            <path d="M64.6464 48.1005C65.5273 48.3194 66.3797 48.7244 67.0163 49.3673C67.555 49.8826 67.9234 50.5497 68.1381 51.2513C68.3932 52.1193 68.4578 53.0409 68.3406 53.9362C68.2286 54.7438 67.9502 55.5225 67.5851 56.2533C66.899 57.5977 65.9414 58.7894 64.9183 59.9048C63.8168 61.0986 62.6299 62.214 61.4443 63.3281C63.8331 63.3205 66.222 63.3277 68.6108 63.3243C68.7406 63.3231 68.8729 63.3164 69 63.3499V66.1656C68.9276 66.1744 68.8561 66.1841 68.7849 66.187L56.6515 66.1866V63.1532C56.9278 62.8849 57.223 62.6362 57.5061 62.3746C58.7357 61.2826 59.9476 60.1702 61.0896 58.9906C62.1882 57.8312 63.2582 56.619 64.0232 55.2197C64.3697 54.5626 64.6602 53.8473 64.655 53.0979C64.6516 52.5621 64.4529 52.0228 64.0723 51.6312C63.578 51.1099 62.8587 50.8466 62.1481 50.7611C61.1887 50.6609 60.2199 50.855 59.327 51.1913C58.6379 51.4458 57.9983 51.8056 57.3725 52.1792C57.2747 51.1712 57.173 50.1635 57.0791 49.1551C58.6163 48.4104 60.3087 47.9609 62.0261 47.8824C62.9031 47.8313 63.7918 47.895 64.6464 48.1005ZM44.5216 15.9479C46.2174 16.5777 47.8288 17.4272 49.2842 18.4844C51.7084 20.2329 53.6818 22.5547 55.0432 25.1725C56.3106 27.5865 57.064 30.2404 57.3669 32.9308C57.5113 34.2801 57.5716 35.6404 57.4945 36.9961C57.3885 39.1497 56.97 41.2895 56.2443 43.3274C55.1022 46.5373 53.168 49.4901 50.5956 51.7934C48.1348 54.0137 45.0922 55.6109 41.841 56.4164C39.4569 57.011 36.9711 57.1964 34.5189 57.0169C32.0275 56.8353 29.5623 56.2462 27.2864 55.2382C24.6566 54.0787 22.2902 52.3616 20.3927 50.2449C18.0655 47.6619 16.445 44.5002 15.6352 41.1616C15.2392 39.5413 15.0384 37.8792 15 36.2153V35.3469C15.0353 33.9564 15.1603 32.5664 15.4189 31.1973C16.0352 27.8905 17.3992 24.692 19.5312 22.0352C21.1736 19.9734 23.2664 18.2546 25.6285 17.0201C28.6633 15.4237 32.1089 14.6354 35.5471 14.5511C38.5915 14.4593 41.6699 14.8883 44.5216 15.9479ZM35.3058 20.656C34.0556 20.7554 32.817 21.0309 31.6603 21.5068C30.4359 22.0054 29.3042 22.714 28.3199 23.5799C27.0856 24.6597 26.078 25.9726 25.3009 27.397C24.1179 29.5695 23.456 31.9948 23.2715 34.442C23.1655 35.8798 23.2284 37.3286 23.4426 38.7551C23.7215 40.5808 24.2533 42.3768 25.0885 44.0369C25.797 45.4479 26.7296 46.7608 27.8988 47.8476C29.1348 49.0096 30.6453 49.8935 32.2813 50.4072C33.7802 50.8797 35.3705 51.0542 36.9413 50.9883C38.4027 50.9208 39.8611 50.6344 41.2092 50.0734C43.2433 49.2406 44.9767 47.7906 46.2355 46.037C47.8603 43.7815 48.7769 41.0966 49.1372 38.3786C49.613 34.8311 49.0941 31.1331 47.4931 27.8998C46.776 26.4703 45.8494 25.1281 44.6828 24.0085C43.4299 22.7706 41.8862 21.8075 40.1968 21.241C38.632 20.7114 36.9543 20.5386 35.3058 20.656Z" />
        </svg>
    );
};

export default O2NewLogoImage;
