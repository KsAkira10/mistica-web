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

const IconImportRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M6.142 13.216l5.852 5.856 5.857-5.856c.463-.464.607-1.212.355-1.856-.248-.608-.783-.964-1.39-.964h-2.144v-7.68a.715.715 0 10-1.43 0v9.108h3.57s.035 0 .071.072c.036.104.036.248-.036.32l-4.853 4.856-4.853-4.856c-.072-.068-.072-.212-.036-.32.036-.072.072-.072.072-.072h3.57V2.716a.717.717 0 00-1.431-.004v7.68H7.173c-.608 0-1.14.356-1.391.964-.248.644-.104 1.396.36 1.86z"
                    fill={fillColor}
                />
                <path
                    d="M4.143 22h15.702c1.18 0 2.143-.964 2.155-2.144V12a.715.715 0 10-1.431 0v7.856a.718.718 0 01-.716.716H4.147a.718.718 0 01-.716-.716V12A.715.715 0 102 12v7.856C2 21.036 2.963 22 4.143 22z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M5.74 10.956l5.72 5.728a.853.853 0 001.196 0l5.647-5.655.01-.008a.845.845 0 10-1.202-1.185l-4.208 4.213V2.999a.844.844 0 00-1.69 0v11.05l-4.28-4.286a.844.844 0 00-1.193 1.193zm16.101 5.955a.844.844 0 00-.843-.843.838.838 0 00-.84.843v3.244H3.844v-3.244a.845.845 0 00-1.689 0v4.087c0 .465.378.843.843.843h18a.844.844 0 00.843-.843v-4.087z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconImportRegular;
