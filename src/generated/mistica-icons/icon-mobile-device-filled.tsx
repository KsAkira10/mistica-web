/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconMobileDeviceFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.695 2.832C17.15 2.272 16.35 2 15.24 2H8.602c-2.157 0-3.25 1.106-3.25 3.291v13.104c0 2.216 1.063 3.291 3.25 3.291h6.639c2.188 0 3.25-1.075 3.25-3.291V5.291c0-1.106-.261-1.91-.796-2.46zm-4.947 16.221c-.196.2-.48.306-.82.306-.343 0-.628-.107-.822-.306-.193-.199-.288-.47-.288-.81 0-.697.414-1.114 1.112-1.114.697 0 1.11.417 1.11 1.115-.004.339-.102.61-.292.81z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobileDeviceFilled;
