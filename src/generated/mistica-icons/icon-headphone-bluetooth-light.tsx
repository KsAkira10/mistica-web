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

const IconHeadphoneBluetoothLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
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
                    d="M18.729 4.927C16.931 3.04 14.539 2 11.994 2S7.057 3.04 5.259 4.927s-2.789 4.4-2.789 7.071v6.25c0 1.005.335 1.94.941 2.632A3.24 3.24 0 0 0 5.871 22h1.7v-7.502h-1.7c-.757 0-1.466.252-2.041.715v-3.215c0-4.727 3.66-8.57 8.164-8.57s8.164 3.843 8.164 8.57v3.215a3.22 3.22 0 0 0-2.042-.715h-1.7v7.498h1.7c.956 0 1.832-.396 2.46-1.12.606-.692.942-1.627.942-2.631v-6.247c0-2.671-.99-5.183-2.789-7.07M5.872 15.925h.339v4.643h-.34c-1.18 0-2.041-.975-2.041-2.32 0-1.343.857-2.323 2.042-2.323m11.905 4.643v-4.643h.339c1.18 0 2.042.976 2.042 2.32s-.858 2.323-2.042 2.323z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.488 14.5c0-.196.155-.356.345-.356s.346.16.35.356v4.108c0 1.932-1.343 3.392-3.119 3.392h-1.385v-6.788h1.385c1 0 1.862.464 2.424 1.212zm-3.118 6.784h.694c1.38 0 2.424-1.148 2.424-2.676s-1.043-2.68-2.424-2.68h-.694zM21.528 12.356c0 .396-.311.716-.695.716a.705.705 0 0 1-.694-.716c0-.395.31-.716.694-.716s.695.32.695.716M3.17 11.644v4.78a2.99 2.99 0 0 1 2.424-1.208h1.389V22H5.598c-1.78 0-3.118-1.456-3.118-3.392l.002-.071.002-.065c-.004-.016-.004-.028-.004-.044v-6.784c0-2.576.97-5 2.738-6.82C6.983 3.004 9.33 2 11.828 2c2.249 0 4.42.836 6.116 2.352a9.73 9.73 0 0 1 3.126 5.816.36.36 0 0 1-.291.408.35.35 0 0 1-.396-.3c-.643-4.308-4.32-7.56-8.556-7.56-4.77 0-8.657 4.004-8.657 8.928m2.424 9.64h.695v-5.36h-.695c-1.38 0-2.424 1.152-2.424 2.68s1.044 2.68 2.424 2.68"
                />
                <path fill={fillColor} d="m12.068 9.908-.004-1.132.55.568z" />
                <path
                    fill={fillColor}
                    d="M9.341 10.508c0-2.712 1-3.424 2.451-3.424s2.448.712 2.448 3.424-.997 3.424-2.448 3.424c-1.45 0-2.45-.712-2.45-3.424m2.234 2.948 1.722-1.776-1.136-1.172 1.136-1.172-1.722-1.776v2.344l-.946-.976-.341.352 1.186 1.232-1.187 1.224.342.356.946-.976z"
                />
                <path fill={fillColor} d="m12.064 12.244.55-.564-.546-.564z" />
            </svg>
        );
    }
};

export default IconHeadphoneBluetoothLight;
