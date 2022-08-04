/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconComputerFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.787 5.5c.782 0 1.426.647 1.426 1.442h.005v7.947H3.792V6.942c0-.79.64-1.442 1.426-1.442h13.569zM2 16.332v-.36h20v.36c0 1.192-.964 2.168-2.143 2.168H4.144C2.964 18.5 2 17.524 2 16.332z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M5.598 17.454l12.803.008c1.118 0 1.986-.31 2.58-.927.572-.591.86-1.437.86-2.512V7.745c0-2.199-1.221-3.412-3.44-3.412L5.595 4.325c-2.219 0-3.44 1.21-3.44 3.412v6.277c0 1.076.289 1.922.863 2.513.59.616 1.46.927 2.58.927zm-2.883 2.213l18.566.008c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56l-18.566-.009a.562.562 0 00-.56.56c0 .309.252.56.56.56z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconComputerFilled;
