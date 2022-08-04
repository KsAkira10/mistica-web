/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPercentRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.841 12.001c0-6.706-3.627-9.846-9.846-9.846-6.218 0-9.84 3.14-9.84 9.846 0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zm-9.846 8.61c-5.793 0-8.61-2.817-8.61-8.61 0-5.798 2.817-8.616 8.61-8.616 5.798 0 8.616 2.818 8.616 8.616 0 5.793-2.82 8.61-8.616 8.61zm3.826-13.56a.571.571 0 00-.8.104l-6.945 8.927a.575.575 0 10.908.706l6.941-8.93a.572.572 0 00-.1-.804l-.004-.003zm-6.145 3.891c-1.048 0-1.656-.53-1.656-1.655 0-1.13.611-1.659 1.656-1.659s1.658.53 1.658 1.659c0 1.128-.613 1.655-1.658 1.655zm-.507-1.655c0 .453.05.507.507.507.456 0 .507-.05.507-.507 0-.451-.056-.507-.507-.507-.457 0-.507.05-.507.507zm5.151 3.89c1.045 0 1.658.53 1.658 1.659 0 1.128-.61 1.655-1.658 1.655-1.045 0-1.655-.527-1.655-1.655 0-1.132.607-1.659 1.655-1.659zm0 2.163c.457 0 .51-.053.51-.507 0-.451-.056-.507-.51-.507-.457 0-.507.05-.507.507 0 .454.05.507.507.507z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPercentRegular;
