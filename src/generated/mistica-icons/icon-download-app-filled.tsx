/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDownloadAppFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.695 2.832C17.15 2.272 16.35 2 15.24 2H8.602C6.445 2 5.353 3.106 5.353 5.291v13.104c0 2.216 1.062 3.291 3.25 3.291h6.638c2.188 0 3.25-1.075 3.25-3.291V5.29c0-1.106-.261-1.91-.796-2.46zm-4.947 16.221c-.196.199-.479.305-.82.305-.343 0-.628-.106-.822-.305-.193-.199-.288-.47-.288-.81 0-.697.415-1.114 1.112-1.114.697 0 1.11.417 1.11 1.115-.003.339-.102.61-.292.81zM12.3 15.74l3.308-3.81a.5.5 0 00-.381-.83h-1.49V6.234c.005-.03.005-.058.005-.09a.872.872 0 00-.874-.868h-1.834a.912.912 0 00-.743.289.853.853 0 00-.232.616v4.922H8.622a.506.506 0 00-.328.123.498.498 0 00-.05.706l3.3 3.81a.502.502 0 00.756 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDownloadAppFilled;
