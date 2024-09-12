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

const IconProcessLoadingLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.26 5.704a.74.74 0 0 0 1.48 0V2.74a.74.74 0 0 0-1.48 0zm0 15.556a.74.74 0 0 0 1.48 0v-2.964a.74.74 0 0 0-1.48 0zm4.296.036a.73.73 0 0 1-.668-.444l-1.148-2.74a.75.75 0 0 1 .408-.964.75.75 0 0 1 .964.408l1.148 2.74a.75.75 0 0 1-.408.964c-.062 0-.124.011-.18.021a1 1 0 0 1-.116.015m2.48-2.224a.74.74 0 0 0 .52.224.71.71 0 0 0 .516-.224.715.715 0 0 0 0-1.036l-2.112-2.112a.715.715 0 0 0-1.036 0 .715.715 0 0 0 0 1.036zm2.52-2.776c-.112 0-.184 0-.296-.076l-2.74-1.144a.75.75 0 0 1-.408-.964.75.75 0 0 1 .964-.408l2.74 1.148a.75.75 0 0 1 .408.964.71.71 0 0 1-.668.48m-14.668-6.04c.112.076.184.076.296.076a.71.71 0 0 0 .668-.484.75.75 0 0 0-.408-.964l-2.74-1.148a.75.75 0 0 0-.964.408.75.75 0 0 0 .408.964zM21.26 12.74h-2.964a.74.74 0 0 1 0-1.48h2.964a.74.74 0 0 1 0 1.48m-18.52 0h2.964a.74.74 0 0 0 0-1.48H2.74a.74.74 0 0 0 0 1.48m15.076-2.408a.73.73 0 0 1-.668-.444.75.75 0 0 1 .408-.964l2.74-1.148a.75.75 0 0 1 .964.408.75.75 0 0 1-.408.964l-2.74 1.148c-.056 0-.104.01-.15.018a.7.7 0 0 1-.146.018m-15.04 5.52c.112.26.372.444.668.444.056 0 .102-.009.148-.018a.7.7 0 0 1 .148-.018l2.74-1.148a.75.75 0 0 0 .408-.964.75.75 0 0 0-.964-.408l-2.74 1.148a.75.75 0 0 0-.408.964m13.668-7.556a.74.74 0 0 1-.52-.224.715.715 0 0 1 0-1.036l2.112-2.112a.715.715 0 0 1 1.036 0 .715.715 0 0 1 0 1.036L16.96 8.072a.7.7 0 0 1-.516.224M4.924 19.072a.707.707 0 0 0 1.036 0l2.076-2.076a.715.715 0 0 0 0-1.036.715.715 0 0 0-1.036 0l-2.076 2.076a.715.715 0 0 0 0 1.036m9.484-12.148c-.112 0-.184 0-.296-.076a.75.75 0 0 1-.408-.964l1.148-2.74a.75.75 0 0 1 .964-.408.75.75 0 0 1 .408.964l-1.148 2.74a.71.71 0 0 1-.668.484M8.148 21.22c.112.076.184.076.296.076.296 0 .592-.184.668-.484l1.148-2.74a.75.75 0 0 0-.408-.964.75.75 0 0 0-.964.408l-1.148 2.74a.75.75 0 0 0 .408.964"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.716 6.151c-.216 0-.356-.147-.356-.364V2.864c0-.22.144-.364.356-.364.216 0 .356.147.356.364v2.923c0 .22-.144.364-.356.364M12.716 21.5c-.216 0-.356-.147-.356-.364v-2.923c0-.22.144-.364.356-.364.216 0 .356.147.356.364v2.923c0 .22-.144.364-.356.364M15.824 20.587c.036.148.176.221.32.221.036 0 .072 0 .144-.037.18-.073.252-.29.18-.474L15.36 17.59c-.072-.184-.284-.258-.464-.184s-.252.29-.18.475zM19.036 18.835a.32.32 0 0 1-.252-.11l-2.036-2.084a.357.357 0 0 1 0-.511.34.34 0 0 1 .5 0l2.036 2.083a.357.357 0 0 1 0 .512.37.37 0 0 1-.248.11M20.82 15.835c.036.037.108.037.144.037.144 0 .288-.106.32-.221.104-.184 0-.401-.18-.475l-2.644-1.134c-.18-.106-.392 0-.464.185-.104.184 0 .4.18.474zM7.108 9.99c-.036 0-.108 0-.144-.037L4.32 8.82c-.18-.074-.284-.29-.18-.475.072-.184.284-.29.464-.184l2.644 1.133c.18.074.284.291.18.475-.072.148-.176.221-.32.221M18.788 12.364h2.856c.212 0 .356-.143.356-.364 0-.217-.14-.364-.356-.364h-2.856c-.212 0-.356.147-.356.364s.14.364.356.364M6.644 12.364h-2.86c-.216 0-.356-.147-.356-.364s.144-.364.356-.364H6.64c.216 0 .356.147.356.364a.355.355 0 0 1-.352.364M18 9.77c.036.147.176.22.32.22.036 0 .108 0 .144-.037l2.644-1.133c.18-.074.252-.29.18-.475-.072-.184-.284-.258-.464-.184L18.18 9.294c-.18.074-.252.291-.18.475M4.464 15.872c-.144 0-.284-.074-.32-.221-.072-.184 0-.401.18-.475l2.644-1.134c.18-.073.392 0 .464.185.072.184 0 .4-.18.474l-2.644 1.134c-.016.002-.04.01-.063.017-.03.01-.061.02-.081.02M16.748 7.87c.072.074.144.11.252.11a.31.31 0 0 0 .248-.11l2.036-2.083a.357.357 0 0 0 0-.512.34.34 0 0 0-.5 0l-2.036 2.083a.357.357 0 0 0 0 .512M6.392 18.835a.31.31 0 0 1-.248-.11.357.357 0 0 1 0-.512l2-2.046a.34.34 0 0 1 .5 0 .357.357 0 0 1 0 .511l-2 2.047a.32.32 0 0 1-.252.11M14.892 6.589c.036.037.108.037.144.037.144 0 .284-.07.32-.221l1.108-2.706c.104-.184 0-.4-.18-.475-.212-.07-.392 0-.464.185l-1.108 2.705c-.104.184 0 .401.18.475M9.284 20.808c-.036 0-.108 0-.144-.037-.18-.073-.284-.29-.18-.474l1.108-2.706c.072-.184.284-.29.464-.184.18.074.284.29.18.475l-1.108 2.705c-.032.148-.176.221-.32.221M2.716 8.349a.724.724 0 0 0 .716-.733.724.724 0 0 0-.716-.732.724.724 0 0 0-.716.732c0 .405.32.733.716.733"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 2.155c6.415 0 9.843 3.395 9.843 9.843s-3.395 9.843-9.843 9.843-9.843-3.395-9.843-9.843 3.395-9.843 9.843-9.843m0 18.866c5.964 0 9.023-3.034 9.023-9.023s-3.026-9.022-9.023-9.022-9.022 3.059-9.022 9.022c0 5.964 3.025 9.023 9.022 9.023m.41-16.404a.407.407 0 0 0-.41-.378.41.41 0 0 0-.409.409v3.087a.41.41 0 0 0 .41.409.417.417 0 0 0 .408-.41zm-4.264 7.325a.41.41 0 0 1-.41.41h-3.12a.41.41 0 0 1 0-.819h3.118a.41.41 0 0 1 .412.41m1.087 2.76a.41.41 0 0 0-.58-.029s-2.174 2.182-2.171 2.182a.41.41 0 0 0 .286.695.38.38 0 0 0 .31-.123l2.157-2.149.017-.017a.394.394 0 0 0-.017-.557zm2.711 1.128a.41.41 0 0 1 .41.41v3.075a.41.41 0 0 1-.819 0v-3.076a.406.406 0 0 1 .41-.409m5.518 1.081-2.182-2.182a.41.41 0 0 0-.574 0l-.003.003a.41.41 0 0 0 .003.58l2.185 2.182c.076.076.18.115.286.115a.42.42 0 0 0 .285-.115l.003-.003a.41.41 0 0 0-.003-.58m1.855-5.291a.41.41 0 0 1 0 .818h-3.076a.41.41 0 0 1 0-.818zM14.732 9.3a.44.44 0 0 0 .294.116.47.47 0 0 0 .255-.115l2.216-2.182a.41.41 0 0 0 .003-.535.41.41 0 0 0-.578-.048l-2.19 2.182a.42.42 0 0 0 0 .583"
                />
            </svg>
        );
    }
};

export default IconProcessLoadingLight;
