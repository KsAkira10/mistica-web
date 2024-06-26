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

const IconVideoDisabledLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.554 6.592a.74.74 0 0 0-.806.15l-4.67 4.584V7.664c0-.623-.499-1.13-1.11-1.13H7.495l-4.23-4.313a.73.73 0 0 0-1.048 0 .765.765 0 0 0 0 1.067l12.376 12.607v.444H3.483V8.041h.74c.408 0 .74-.338.74-.753a.75.75 0 0 0-.74-.754h-1.11c-.612 0-1.11.507-1.11 1.13v9.057c0 .623.498 1.13 1.11 1.13h11.855c.417 0 .777-.241.967-.59l4.434 4.517a.72.72 0 0 0 1.043 0 .765.765 0 0 0 0-1.068l-5.335-5.438v-2.217l4.671 4.584a.73.73 0 0 0 .801.154.75.75 0 0 0 .45-.695V7.283a.74.74 0 0 0-.445-.69M8.98 8.042h5.619v5.723zm8.355 4.148 3.191-3.13v6.26z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.927 6.368a.34.34 0 0 1 .384-.08.36.36 0 0 1 .212.34v10.75a.37.37 0 0 1-.217.34.4.4 0 0 1-.135.03.34.34 0 0 1-.248-.11l-5.054-5.306v3.21l3.613 3.793c.14.143.14.375 0 .522a.34.34 0 0 1-.248.109.34.34 0 0 1-.249-.11l-3.111-3.266v.598c0 .199-.154.36-.344.36H2.832a.35.35 0 0 1-.344-.36V6.814c0-.2.154-.36.344-.36h2.465c.19 0 .344.16.344.36s-.154.36-.344.36H3.17v9.653h12.022v-.958L2.583 2.633a.38.38 0 0 1 0-.522.335.335 0 0 1 .497 0l4.141 4.343h8.31c.19 0 .343.161.343.36v4.86zm-5.74.806H7.903l7.284 7.648zm5.636 9.302V7.525L16.56 12zm0 5.524c.389 0 .705-.332.705-.74 0-.407-.316-.74-.705-.74s-.704.333-.704.74c0 .408.316.74.704.74"
                />
            </svg>
        );
    }
};

export default IconVideoDisabledLight;
