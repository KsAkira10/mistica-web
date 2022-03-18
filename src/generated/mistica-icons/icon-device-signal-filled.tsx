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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.868 2c1.881 0 3.42 1.504 3.515 3.388H2.009C2.104 3.504 3.642 2 5.524 2h6.344zm6.831 14.906a.7.7 0 01-.487-.196.722.722 0 01-.027-1.01 5.318 5.318 0 00-.09-7.385.722.722 0 010-1.01.699.699 0 01.997 0 6.745 6.745 0 01.117 9.377.693.693 0 01-.51.224zm-1.137-1.911a4.381 4.381 0 00-.126-6.013.699.699 0 00-.997 0 .722.722 0 000 1.01 2.947 2.947 0 01.085 4.038.726.726 0 00.04 1.01.69.69 0 00.48.188.682.682 0 00.518-.233zM2 6.458v11.084h13.396V6.458H2zM5.524 22c-1.882 0-3.42-1.504-3.515-3.388h13.374C15.288 20.496 13.749 22 11.868 22H5.524z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeviceSignalFilled;
