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

const IconFunnelFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.45 2.185A.354.354 0 0020.146 2H3.852a.348.348 0 00-.304.185.395.395 0 00-.004.37l6.864 12.876v4.9c0 .92.716 1.669 1.596 1.669.88 0 1.596-.749 1.596-1.668v-4.905l6.855-12.872a.383.383 0 00-.005-.37z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.255 19.776c0 1.228-1.012 2.224-2.25 2.224s-2.26-.996-2.26-2.224v-4.443L3.09 3.091a.723.723 0 01.019-.73A.75.75 0 013.752 2h16.497a.75.75 0 01.642.36c.14.223.144.503.02.73l-6.656 12.243v4.443z"
                />
            </svg>
        );
    }
};

export default IconFunnelFilled;
