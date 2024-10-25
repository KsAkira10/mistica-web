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

const IconBellRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.428 16.815a1 1 0 0 0 .95 1.31h3.52a3.126 3.126 0 0 0 6.205 0h3.518a1 1 0 0 0 .951-1.31l-.715-2.19-.695-6.994a5 5 0 0 0-4.975-4.506h-2.374a5 5 0 0 0-4.975 4.506l-.695 6.994zm1.295.06.65-1.991.709-7.13a3.75 3.75 0 0 1 3.731-3.379h2.374a3.75 3.75 0 0 1 3.731 3.38l.709 7.129.65 1.991zm4.44 1.25h3.674a1.876 1.876 0 0 1-3.675 0"
                />
            </svg>
        );
    } else if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.43 17.643a10.1 10.1 0 0 1-2-6v-2.5C19.43 5.214 16.216 2 12.287 2S5.145 5.214 5.145 9.143v2.5c0 2.143-.715 4.286-2 6-.179.214-.179.5-.072.75s.357.393.643.393h5.75c0 .107-.036.25-.036.357A2.866 2.866 0 0 0 12.287 22a2.866 2.866 0 0 0 2.858-2.857c0-.107 0-.25-.036-.357h5.75c.286 0 .535-.143.643-.393s.107-.536-.072-.75m-7.714 1.5c0 .786-.643 1.428-1.429 1.428a1.433 1.433 0 0 1-1.428-1.428c0-.107 0-.25.036-.357h2.75c.071.107.071.25.071.357m-8.679-1.786c1-1.714 1.536-3.714 1.536-5.714v-2.5c0-3.143 2.572-5.714 5.714-5.714S18.002 6 18.002 9.143v2.5c0 2 .535 4 1.535 5.714z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.953 17.644a10.25 10.25 0 0 1-1.958-6v-2.5C18.995 5.216 15.847 2 12.003 2 8.158 2 5.01 5.216 5.01 9.144v2.5c0 2.144-.7 4.284-1.957 6-.177.216-.177.5-.07.752.105.252.348.392.63.392h5.63c0 .055-.01.118-.018.181a1 1 0 0 0-.018.175c0 1.572 1.257 2.856 2.796 2.856s2.795-1.284 2.795-2.856c0-.108 0-.252-.035-.356h5.626c.278 0 .525-.144.63-.392.106-.248.106-.54-.066-.752m-7.553 1.5c0 .784-.63 1.428-1.397 1.428-.768 0-1.398-.644-1.398-1.428 0-.108 0-.252.035-.356h2.69c.07.104.07.248.07.356M6.412 11.64v-2.5c0-3.144 2.517-5.716 5.595-5.716s5.59 2.576 5.59 5.72v2.5c0 2 .525 4 1.504 5.716H4.908v-.004a11.6 11.6 0 0 0 1.504-5.716"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.953 17.644a10.25 10.25 0 0 1-1.958-6v-2.5C18.995 5.216 15.847 2 12.003 2 8.158 2 5.01 5.216 5.01 9.144v2.5c0 2.144-.7 4.284-1.957 6-.177.216-.177.5-.07.752.105.252.348.392.63.392h5.63c0 .055-.01.118-.018.181-.01.062-.018.123-.018.175 0 1.572 1.257 2.856 2.796 2.856s2.795-1.284 2.795-2.856c0-.108 0-.252-.035-.356h5.626c.278 0 .525-.144.63-.392.106-.248.106-.54-.066-.752m-7.553 1.5c0 .784-.63 1.428-1.397 1.428-.768 0-1.398-.644-1.398-1.428 0-.108 0-.252.035-.356h2.69c.07.104.07.248.07.356M6.412 11.64v-2.5c0-3.144 2.517-5.716 5.595-5.716s5.59 2.576 5.59 5.72v2.5c0 2 .525 4 1.504 5.716H4.908v-.004a11.6 11.6 0 0 0 1.504-5.716"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.002 21.82c-1.633 0-2.911-.973-3.025-2.805l-.006-.15h-5.57a.42.42 0 0 1-.396-.272.4.4 0 0 1 .13-.456c1.37-1.094 1.798-2.928 1.927-4.143l.03-.329.015-.288.007-.24-.002-.29-.003-.077v-3.9c0-1.101.175-2.076.508-2.923l.117-.278.417-.773a5.5 5.5 0 0 1 .894-1.056C8.195 2.795 9.61 2.4 10.64 2.255l.312-.038.281-.024.247-.013.295-.005.23.007.229-.007.186.001.228.009.264.018.297.03c1.04.125 2.543.505 3.75 1.604 1.22 1.107 1.87 2.692 1.931 4.714l.005.323-.003 3.955-.003.204.007.31.013.255.023.29.016.155.042.331c.176 1.197.646 2.781 1.88 3.766a.408.408 0 0 1-.192.721l-.074.007h-1.726l-1.126-.003h-2.712l-.008.16c-.149 1.829-1.412 2.796-3.031 2.796m0-1.1c1.073 0 1.823-.56 1.932-1.755l.006-.1h-3.868l.005.11c.085 1.182.842 1.746 1.925 1.746m.22-17.346-.146.006h-.141c-.36-.022-.93.008-1.566.14-.874.18-1.663.514-2.308 1.03l-.21.179-.188.183a4 4 0 0 0-.348.412l-.139.199-.348.638c-.303.675-.477 1.464-.512 2.366l-.007.344-.003 3.807.007.203v.271c-.02 1.519-.303 3.002-1.008 4.243l-.163.27h12.614l1.126.003-.037-.057a7 7 0 0 1-.51-1.032l-.104-.277a9.5 9.5 0 0 1-.484-2.213c-.042-.405-.058-.77-.057-1.082l.006-.283v-3.85c0-1.856-.527-3.226-1.543-4.15-.678-.616-1.542-1.007-2.511-1.206a6.7 6.7 0 0 0-1.42-.144"
                />
            </svg>
        );
    }
};

export default IconBellRegular;
