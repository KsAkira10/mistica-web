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

const IconDisturbLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m18.695 18.012 2.636 2.768a.744.744 0 0 1-.004 1.012.66.66 0 0 1-.96 0l-2.69-2.824a8.7 8.7 0 0 1-5.504 1.96c-1.291 0-2.548-.264-3.65-.768l-5.188 1.456a.66.66 0 0 1-.655-.184.74.74 0 0 1-.175-.688l1.39-5.463c-.484-1.168-.731-2.448-.731-3.812 0-1.436.274-2.784.819-4.008a.665.665 0 0 1 .903-.344c.339.164.487.592.327.948-.457 1.032-.69 2.176-.69 3.404 0 1.244.24 2.404.71 3.444a.74.74 0 0 1 .041.488l-1.15 4.52 4.282-1.205a.66.66 0 0 1 .468.044c.972.484 2.114.74 3.3.74 1.69 0 3.256-.58 4.525-1.56L2.68 3.222a.74.74 0 0 1 0-1.012.66.66 0 0 1 .964 0l2.29 2.404c1.672-1.668 3.912-2.612 6.243-2.612 2.411 0 4.674.984 6.377 2.768 1.699 1.784 2.636 4.163 2.636 6.695 0 2.464-.884 4.78-2.495 6.547m1.135-6.547c0-4.432-3.432-8.035-7.653-8.035a7.5 7.5 0 0 0-5.28 2.196l10.826 11.366a8.2 8.2 0 0 0 2.107-5.527"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 21.284a.716.716 0 1 1-1.432 0 .716.716 0 0 1 1.432 0M18.497 17.92l-.037.036 1.468 1.468a.355.355 0 0 1-.252.608.36.36 0 0 1-.252-.104l-1.496-1.496a9.2 9.2 0 0 1-5.927 2.136c-1.38 0-2.68-.272-3.872-.816l-5.68 1.52a.357.357 0 0 1-.344-.092.36.36 0 0 1-.092-.344l1.52-5.68a9.3 9.3 0 0 1-.816-3.872c0-1.687.416-3.263 1.244-4.675a.354.354 0 0 1 .488-.128c.172.1.228.316.128.488-.76 1.3-1.148 2.752-1.148 4.315 0 1.32.268 2.56.804 3.688.04.076.044.164.024.244l-1.392 5.208 5.204-1.396a.37.37 0 0 1 .244.024 8.6 8.6 0 0 0 3.688.804 8.53 8.53 0 0 0 5.415-1.936L2.105 2.61a.355.355 0 0 1 0-.504c.14-.14.364-.14.504 0l2.716 2.716A9.34 9.34 0 0 1 12 2c2.483 0 4.815.964 6.563 2.716a9.22 9.22 0 0 1 2.716 6.568 9.22 9.22 0 0 1-2.716 6.567q-.032.035-.067.069M12 2.718a8.63 8.63 0 0 0-6.172 2.608l12.123 12.123a8.54 8.54 0 0 0 2.62-6.16c0-4.727-3.844-8.571-8.571-8.571"
                />
            </svg>
        );
    }
};

export default IconDisturbLight;
