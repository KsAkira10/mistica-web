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

const IconMobileCoverageLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.849 2h6.316c1.936 0 3.508 1.605 3.508 3.576v12.853c0 1.97-1.572 3.571-3.508 3.571H8.849c-1.937 0-3.509-1.6-3.509-3.571V5.57C5.34 3.601 6.912 2 8.848 2M6.741 6.467v11.075h10.53V6.467zm2.106-3.036c-1.1 0-2.008.864-2.097 1.966h10.512c-.09-1.102-.998-1.966-2.098-1.966zm0 17.147h6.317c1.1 0 2.008-.864 2.098-1.966H6.75c.09 1.102.997 1.966 2.097 1.966m2.4-7.837v2.816a.53.53 0 0 1-.526.535.53.53 0 0 1-.526-.535v-2.816c0-.297.234-.535.526-.535s.525.238.525.535m2.574 2.84V10.61a.53.53 0 0 0-.526-.535.53.53 0 0 0-.526.535v4.97c0 .297.234.535.526.535a.53.53 0 0 0 .526-.535m2.574-7.12v7.12a.53.53 0 0 1-.526.534.53.53 0 0 1-.526-.535V8.46c0-.296.234-.534.526-.534s.526.238.526.535m-7.723 7.115v-1.052a.53.53 0 0 0-.525-.535.53.53 0 0 0-.526.535v1.052c0 .297.234.535.526.535a.53.53 0 0 0 .525-.535"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.25 5.214v13.572c0 1.774-1.4 3.214-3.125 3.214h-6.25C7.15 22 5.75 20.56 5.75 18.786V5.214C5.75 3.44 7.15 2 8.875 2h6.25c1.725-.005 3.125 1.44 3.125 3.214M15.818 15.91c.192 0 .347-.16.347-.357V8.441a.35.35 0 0 0-.347-.356.35.35 0 0 0-.346.356v7.118c0 .192.155.352.346.352m-2.778-5.326c0-.196.156-.356.347-.356.195 0 .351.16.347.356v4.965a.35.35 0 0 1-.347.356.35.35 0 0 1-.347-.356zm-1.733 4.965v-2.816a.35.35 0 0 0-.347-.357.35.35 0 0 0-.347.357v2.816c0 .196.156.356.347.356s.346-.16.346-.356m-3.125-1.052c0-.196.155-.356.346-.356s.347.16.347.356v1.07a.35.35 0 0 1-.347.357.35.35 0 0 1-.346-.357zM6.443 5.57h11.114v-.356c0-1.38-1.09-2.5-2.432-2.5h-6.25c-1.342 0-2.432 1.12-2.432 2.5zm11.114 13.212V6.283H6.443v11.429h7.295c.191 0 .347.16.347.357a.35.35 0 0 1-.347.356H6.443v.357c0 1.38 1.09 2.5 2.432 2.5h6.25c1.343 0 2.432-1.12 2.432-2.5m-2.432-.713c0-.394.311-.714.694-.714.386 0 .697.32.693.713a.704.704 0 0 1-.694.714.704.704 0 0 1-.693-.713"
                />
            </svg>
        );
    }
};

export default IconMobileCoverageLight;
