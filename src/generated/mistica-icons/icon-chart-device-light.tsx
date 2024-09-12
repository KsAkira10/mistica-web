'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconChartDeviceLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.489 8.431a4.11 4.11 0 0 0-3.612-4.073 3.57 3.57 0 0 0-3.355-2.354H8.094c-1.97 0-3.57 1.6-3.57 3.57V18.43c0 1.97 1.6 3.57 3.57 3.57h6.428c1.97 0 3.57-1.6 3.57-3.57v-5.956c1.925-.343 3.396-2.021 3.396-4.042m-1.075 0c0 .645-.2 1.24-.544 1.733L18.138 8.43 19.87 6.7a3 3 0 0 1 .544 1.732m-6.07 0c0-1.49 1.083-2.729 2.5-2.985v2.985c0 .137.05.275.155.38l2.112 2.112a3.02 3.02 0 0 1-1.732.544 3.04 3.04 0 0 1-3.036-3.036m3.57-2.985c.438.078.845.252 1.197.494l-1.197 1.198zM8.094 3.43h6.428c.772 0 1.44.416 1.815 1.033a4.1 4.1 0 0 0-1.51.755H5.983A2.146 2.146 0 0 1 8.094 3.43m6.428 17.143H8.094a2.146 2.146 0 0 1-2.112-1.787h10.652a2.146 2.146 0 0 1-2.112 1.787M5.95 17.36V6.644h7.735a4.1 4.1 0 0 0-.416 1.787 4.11 4.11 0 0 0 3.392 4.042v4.886z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.14 17.36a.714.714 0 0 1 0 1.426.714.714 0 0 1 0-1.427m2.144-5.002a3.93 3.93 0 0 1-3.927-3.927c0-.79.238-1.527.645-2.148H5.499v11.433h7.502a.357.357 0 0 1 0 .713H5.499v.357c0 1.38 1.12 2.5 2.5 2.5h6.428c1.38 0 2.5-1.12 2.5-2.5v-5.358a.357.357 0 0 1 .714 0v5.358a3.215 3.215 0 0 1-3.214 3.213H8a3.215 3.215 0 0 1-3.214-3.213V5.218A3.215 3.215 0 0 1 8 2.004h6.427a3.215 3.215 0 0 1 3.132 2.5h.082v.019a3.934 3.934 0 0 1 3.57 3.908 3.926 3.926 0 0 1-3.927 3.927m2.51-5.934-2.002 2.003 2.002 2.002a3.2 3.2 0 0 0 0-4.005m-2.153 1.143 1.646-1.645a3.2 3.2 0 0 0-1.646-.686zM5.499 5.57h9.102a3.9 3.9 0 0 1 2.226-1.038 2.5 2.5 0 0 0-2.4-1.815H8c-1.38 0-2.5 1.12-2.5 2.5zm11.785 6.075c.76 0 1.454-.265 2.003-.704l-2.259-2.258a.4.4 0 0 1-.077-.115.4.4 0 0 1-.028-.137V5.236a3.22 3.22 0 0 0-2.857 3.195 3.225 3.225 0 0 0 3.218 3.214"
                />
            </svg>
        );
    }
};

export default IconChartDeviceLight;
