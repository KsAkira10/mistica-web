/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDeviceSignalFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.7 16.906a.7.7 0 01-.488-.196.722.722 0 01-.027-1.01 5.318 5.318 0 00-.09-7.385.722.722 0 010-1.01.699.699 0 01.997 0 6.745 6.745 0 01.117 9.377.693.693 0 01-.51.224zm-1.138-1.911a4.381 4.381 0 00-.126-6.013.699.699 0 00-.997 0 .722.722 0 000 1.01 2.947 2.947 0 01.085 4.038.726.726 0 00.04 1.01.69.69 0 00.48.188.681.681 0 00.518-.233zm-2.18-9.607C15.289 3.504 13.75 2 11.869 2H5.524c-1.882 0-3.42 1.504-3.515 3.388h13.374zM2 6.458v11.084h13.396V6.458H2zm.009 12.154C2.104 20.496 3.642 22 5.524 22h6.344c1.881 0 3.42-1.504 3.515-3.388H2.009z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeviceSignalFilled;
