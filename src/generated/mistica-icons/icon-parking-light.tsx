/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconParkingLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.08 20.856c.203 0 .369.171.369.382 0 .21-.166.38-.375.386H3.854C2.83 21.624 2 20.764 2 19.713V2.91C2 1.855 2.834 1 3.854 1h16.293C21.17 1 22 1.86 22 2.91v16.803c0 .865-.569 1.627-1.389 1.842a.367.367 0 01-.45-.273.38.38 0 01.265-.465c.493-.132.835-.581.835-1.104V2.91c0-.63-.498-1.144-1.11-1.144H3.854c-.612 0-1.11.513-1.11 1.144v16.802c0 .63.498 1.143 1.11 1.143h12.225zM18.297 22c.407 0 .74-.342.74-.762a.752.752 0 00-.74-.763.752.752 0 00-.74.763c0 .42.332.762.74.762zm-8.889-4.58v-4.965h3.333c2.043 0 3.702-1.71 3.702-3.816 0-2.107-1.659-3.817-3.702-3.817H8.67V17.42c0 .21.166.381.37.381.203 0 .37-.171.37-.381zm3.333-11.836H9.409v6.109h3.333c1.635 0 2.963-1.368 2.963-3.054 0-1.686-1.328-3.055-2.963-3.055z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.25 8.525c.017-2.11-.537-3.7-1.621-4.726a5.502 5.502 0 00-2.535-1.266 15.894 15.894 0 00-3.748-.37H5.909a.41.41 0 00-.409.41v18.86a.41.41 0 00.409.408h4.275a.408.408 0 00.408-.409v-6.1H13.2a10.295 10.295 0 003.26-.46 5.265 5.265 0 002.284-1.493 7.096 7.096 0 001.507-4.854zm-.798-.009a6.353 6.353 0 01-1.297 4.305 4.401 4.401 0 01-1.94 1.267 9.382 9.382 0 01-3.015.417h-3.014a.407.407 0 00-.406.409v6.112H6.315V2.98h6.03c1.205-.025 2.41.09 3.586.345a4.765 4.765 0 012.143 1.09c.913.82 1.378 2.237 1.378 4.1zM13.895 5.44c.454.09.874.3 1.221.608.605.698.9 1.614.815 2.535a3.696 3.696 0 01-.888 2.69c-.31.316-.697.548-1.123.672a6.65 6.65 0 01-1.63.165h-2.104a.405.405 0 01-.406-.409V5.687c0-.227.182-.409.406-.409h1.998a7.643 7.643 0 011.711.162zm1.216 3.166a2.924 2.924 0 01-.645 2.084c-.21.218-.473.378-.767.46a5.785 5.785 0 01-1.443.14h-1.658V6.095h1.588c.513 0 1.023.056 1.524.165.303.06.585.202.815.41a2.63 2.63 0 01.586 1.935z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconParkingLight;
