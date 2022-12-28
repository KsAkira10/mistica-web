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

const IconChevronDownRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.84 8.16a.545.545 0 00-.77 0L12 15.23 4.93 8.16a.545.545 0 00-.77.77L12 16.77l7.84-7.84a.545.545 0 000-.77z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.266 8.2a.79.79 0 00-1.049 0 .641.641 0 000 .962l7.238 6.639c.15.137.348.204.545.199a.777.777 0 00.545-.2l7.238-6.638a.642.642 0 000-.963.79.79 0 00-1.05 0L12 14.376 5.266 8.199z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4 8.339c0-.235.105-.46.285-.617a.928.928 0 011.256.048l6.518 6.651 6.393-6.646a.928.928 0 011.256-.055c.355.3.392.82.08 1.163l-.018.02-7.046 7.323a.905.905 0 01-.654.274.913.913 0 01-.658-.268L4.237 8.907A.803.803 0 014 8.34z"
                />
            </svg>
        );
    }
};

export default IconChevronDownRegular;
