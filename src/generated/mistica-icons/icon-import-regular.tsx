/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconImportRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.142 13.216l5.852 5.856 5.857-5.856c.463-.464.607-1.212.355-1.856-.248-.608-.783-.964-1.39-.964h-2.144v-7.68a.715.715 0 10-1.43 0v9.108h3.57s.035 0 .071.072c.036.104.036.248-.036.32l-4.853 4.856-4.853-4.856c-.072-.068-.072-.212-.036-.32.036-.072.072-.072.072-.072h3.57V2.716a.717.717 0 00-1.431-.004v7.68H7.173c-.608 0-1.14.356-1.391.964-.248.644-.104 1.396.36 1.86zm-2 8.784h15.703c1.18 0 2.143-.964 2.155-2.144V12a.715.715 0 10-1.431 0v7.856a.718.718 0 01-.716.716H4.147a.718.718 0 01-.716-.716V12A.715.715 0 102 12v7.856C2 21.036 2.963 22 4.143 22z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.585 10.801l5.72 5.728c.16.157.373.247.6.247a.869.869 0 00.596-.247l5.647-5.655a.152.152 0 01.01-.008c.004-.005.01-.009.013-.014a.844.844 0 00-1.216-1.171l-4.207 4.213V2.843a.844.844 0 00-1.69 0v11.05l-4.28-4.286A.844.844 0 005.586 10.8zm16.101 5.955a.844.844 0 00-.843-.843.838.838 0 00-.84.843V20H3.689v-3.244a.846.846 0 00-1.689 0v4.087c0 .465.378.843.843.843h18a.844.844 0 00.843-.843v-4.087z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconImportRegular;
