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

const IconHeadphoneBluetoothRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path fill={fillColor} d="m12.767 11.674-.54.568.003-1.136z" />
                <path
                    fill={fillColor}
                    d="M9.556 10.506c0-2.715.983-3.427 2.407-3.427 1.425 0 2.408.716 2.408 3.427s-.983 3.424-2.408 3.424-2.407-.708-2.407-3.424m2.19 2.948 1.692-1.776-1.113-1.172 1.116-1.171-1.691-1.776v2.343l-.93-.975-.335.352 1.162 1.231-1.166 1.228.336.352.93-.976z"
                />
                <path fill={fillColor} d="m12.226 8.77.541.568-.537.564z" />
                <path
                    fill={fillColor}
                    d="M18.73 4.927C16.93 3.04 14.538 2 11.993 2S7.057 3.04 5.259 4.927s-2.789 4.4-2.789 7.071v6.25c0 1.005.335 1.94.941 2.632A3.24 3.24 0 0 0 5.871 22h1.7v-7.502h-1.7c-.757 0-1.466.252-2.041.715v-3.215c0-4.727 3.661-8.57 8.164-8.57s8.164 3.843 8.164 8.57v3.215a3.22 3.22 0 0 0-2.042-.715h-1.7v7.498h1.7c.956 0 1.832-.396 2.46-1.12.606-.692.942-1.627.942-2.631v-6.247c0-2.671-.99-5.183-2.789-7.07M5.871 15.925h.339v4.643h-.34c-1.18 0-2.041-.975-2.041-2.32 0-1.343.857-2.323 2.042-2.323m11.905 4.643v-4.643h.339c1.18 0 2.042.976 2.042 2.32s-.858 2.323-2.042 2.323z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path fill={fillColor} d="m12.767 11.674-.54.568.003-1.136z" />
                <path
                    fill={fillColor}
                    d="M9.556 10.506c0-2.715.983-3.427 2.407-3.427 1.425 0 2.408.716 2.408 3.427s-.983 3.424-2.408 3.424-2.407-.708-2.407-3.424m2.19 2.948 1.692-1.776-1.113-1.172 1.116-1.171-1.691-1.776v2.343l-.93-.975-.335.352 1.162 1.231-1.166 1.228.336.352.93-.976z"
                />
                <path fill={fillColor} d="m12.226 8.77.541.568-.537.564z" />
                <path
                    fill={fillColor}
                    d="M18.729 4.927C16.931 3.04 14.539 2 11.994 2S7.057 3.04 5.259 4.927s-2.789 4.4-2.789 7.071v6.25c0 1.005.335 1.94.941 2.632A3.24 3.24 0 0 0 5.871 22h1.7v-7.502h-1.7c-.757 0-1.466.252-2.041.715v-3.215c0-4.727 3.66-8.57 8.164-8.57s8.164 3.843 8.164 8.57v3.215a3.22 3.22 0 0 0-2.042-.715h-1.7v7.498h1.7c.956 0 1.832-.396 2.46-1.12.606-.692.942-1.627.942-2.631v-6.247c0-2.671-.99-5.183-2.789-7.07M5.872 15.925h.339v4.643h-.34c-1.18 0-2.041-.975-2.041-2.32 0-1.343.857-2.323 2.042-2.323m11.905 4.643v-4.643h.339c1.18 0 2.042.976 2.042 2.32s-.858 2.323-2.042 2.323z"
                />
            </svg>
        );
    }
};

export default IconHeadphoneBluetoothRegular;
