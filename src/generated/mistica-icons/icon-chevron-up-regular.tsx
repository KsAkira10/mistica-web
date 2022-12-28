/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconChevronUpRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.16 16.612a.545.545 0 00.77 0L12 9.542l7.07 7.07a.544.544 0 10.77-.771L12 8l-7.84 7.84a.545.545 0 000 .772z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.733 15.8a.79.79 0 001.05 0 .641.641 0 000-.962L12.545 8.2A.777.777 0 0012 8a.777.777 0 00-.545.2l-7.238 6.638a.641.641 0 000 .963.79.79 0 001.05 0L12 9.624l6.733 6.177z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20 15.661a.823.823 0 01-.285.617.928.928 0 01-1.256-.048L11.94 9.579l-6.392 6.646a.928.928 0 01-1.257.055.804.804 0 01-.08-1.163l.018-.02 7.046-7.323a.905.905 0 01.654-.274.913.913 0 01.658.268l7.175 7.325a.803.803 0 01.237.568z"
                />
            </svg>
        );
    }
};

export default IconChevronUpRegular;
