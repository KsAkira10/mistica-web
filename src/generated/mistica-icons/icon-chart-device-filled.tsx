'use client';
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

const IconChartDeviceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.64 5.391H4.532a3.57 3.57 0 0 1 3.561-3.387h6.428a3.56 3.56 0 0 1 2.976 1.614c-.042 0-.078-.005-.12-.005a4.8 4.8 0 0 0-3.739 1.778M8.093 22.004h6.428a3.57 3.57 0 0 0 3.56-3.388H4.534a3.575 3.575 0 0 0 3.561 3.388m9.285-8.754a4.827 4.827 0 0 1-4.823-4.823c0-.7.155-1.367.425-1.97H4.524v11.08h13.572V13.19c-.237.037-.475.06-.717.06m4.11-4.819a4.11 4.11 0 0 1-4.106 4.106 4.115 4.115 0 0 1-4.11-4.106 4.115 4.115 0 0 1 4.106-4.11 4.116 4.116 0 0 1 4.11 4.11m-3.575-1.293L19.11 5.94a3 3 0 0 0-1.197-.494zm-.535 4.329c.644 0 1.239-.201 1.732-.544L17 8.81a.53.53 0 0 1-.155-.38V5.446a3.04 3.04 0 0 0-2.5 2.985 3.04 3.04 0 0 0 3.035 3.036m3.035-3.036c0-.644-.2-1.239-.544-1.732L18.138 8.43l1.732 1.733a3.02 3.02 0 0 0 .544-1.733"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.64 5.391H4.532a3.57 3.57 0 0 1 3.561-3.387h6.428a3.56 3.56 0 0 1 2.976 1.614c-.042 0-.078-.005-.12-.005a4.8 4.8 0 0 0-3.739 1.778M8.093 22.004h6.428a3.57 3.57 0 0 0 3.56-3.388H4.534a3.575 3.575 0 0 0 3.561 3.388m9.285-8.754a4.827 4.827 0 0 1-4.823-4.823c0-.7.155-1.367.425-1.97H4.524v11.08h13.572V13.19c-.237.037-.475.06-.717.06m4.11-4.819a4.11 4.11 0 0 1-4.106 4.106 4.115 4.115 0 0 1-4.11-4.106 4.115 4.115 0 0 1 4.106-4.11 4.116 4.116 0 0 1 4.11 4.11m-3.575-1.293L19.11 5.94a3 3 0 0 0-1.197-.494zm-.535 4.329c.644 0 1.239-.201 1.732-.544L17 8.81a.53.53 0 0 1-.155-.38V5.446a3.04 3.04 0 0 0-2.5 2.985 3.04 3.04 0 0 0 3.035 3.036m3.035-3.036c0-.644-.2-1.239-.544-1.732L18.138 8.43l1.732 1.733a3.02 3.02 0 0 0 .544-1.733"
                />
            </svg>
        );
    }
};

export default IconChartDeviceFilled;
