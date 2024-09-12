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

const IconProcessLoadingFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
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
                    d="M11.26 5.704a.74.74 0 0 0 1.48 0V2.74a.74.74 0 0 0-1.48 0zm0 15.556a.74.74 0 0 0 1.48 0v-2.964a.74.74 0 0 0-1.48 0zm4.296.036a.73.73 0 0 1-.668-.444l-1.148-2.74a.75.75 0 0 1 .408-.964.75.75 0 0 1 .964.408l1.148 2.74a.75.75 0 0 1-.408.964c-.062 0-.124.011-.18.021a1 1 0 0 1-.116.015m2.48-2.224a.74.74 0 0 0 .52.224.71.71 0 0 0 .516-.224.715.715 0 0 0 0-1.036l-2.112-2.112a.715.715 0 0 0-1.036 0 .715.715 0 0 0 0 1.036zm2.52-2.776c-.112 0-.184 0-.296-.076l-2.74-1.144a.75.75 0 0 1-.408-.964.75.75 0 0 1 .964-.408l2.74 1.148a.75.75 0 0 1 .408.964.71.71 0 0 1-.668.48m-14.668-6.04c.112.076.184.076.296.076a.71.71 0 0 0 .668-.484.75.75 0 0 0-.408-.964l-2.74-1.148a.75.75 0 0 0-.964.408.75.75 0 0 0 .408.964zM21.26 12.74h-2.964a.74.74 0 0 1 0-1.48h2.964a.74.74 0 0 1 0 1.48m-18.52 0h2.964a.74.74 0 0 0 0-1.48H2.74a.74.74 0 0 0 0 1.48m15.076-2.408a.73.73 0 0 1-.668-.444.75.75 0 0 1 .408-.964l2.74-1.148a.75.75 0 0 1 .964.408.75.75 0 0 1-.408.964l-2.74 1.148c-.056 0-.104.01-.15.018a.7.7 0 0 1-.146.018m-15.04 5.52c.112.26.372.444.668.444.056 0 .102-.009.148-.018a.7.7 0 0 1 .148-.018l2.74-1.148a.75.75 0 0 0 .408-.964.75.75 0 0 0-.964-.408l-2.74 1.148a.75.75 0 0 0-.408.964m13.668-7.556a.74.74 0 0 1-.52-.224.715.715 0 0 1 0-1.036l2.112-2.112a.715.715 0 0 1 1.036 0 .715.715 0 0 1 0 1.036L16.96 8.072a.7.7 0 0 1-.516.224M4.924 19.072a.707.707 0 0 0 1.036 0l2.076-2.076a.715.715 0 0 0 0-1.036.715.715 0 0 0-1.036 0l-2.076 2.076a.715.715 0 0 0 0 1.036m9.484-12.148c-.112 0-.184 0-.296-.076a.75.75 0 0 1-.408-.964l1.148-2.74a.75.75 0 0 1 .964-.408.75.75 0 0 1 .408.964l-1.148 2.74a.71.71 0 0 1-.668.484M8.148 21.22c.112.076.184.076.296.076.296 0 .592-.184.668-.484l1.148-2.74a.75.75 0 0 0-.408-.964.75.75 0 0 0-.964.408l-1.148 2.74a.75.75 0 0 0 .408.964"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.155 12.001c0-6.443 3.403-9.846 9.84-9.846 6.443 0 9.846 3.403 9.846 9.846 0 6.437-3.406 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84m10.49-4.174V4.802a.604.604 0 1 0-1.21 0v3.025a.604.604 0 1 0 1.21 0m3.527 4.818h3.022a.604.604 0 1 0 0-1.21h-3.022a.604.604 0 1 0 0 1.21m.46 4.902a.6.6 0 0 0 .85-.003.604.604 0 0 0 0-.857l-2.136-2.137a.605.605 0 0 0-.855.854zM11.955 19.8a.604.604 0 0 0 .605-.605V16.17a.604.604 0 1 0-1.21 0v3.025c0 .336.269.605.605.605m-2.512-4.453a.6.6 0 0 0 0-.83.606.606 0 0 0-.855-.022L6.452 16.63a.605.605 0 0 0 .854.854zM4.802 11.35a.606.606 0 0 0 0 1.21h3.025a.604.604 0 1 0 0-1.21zm9.75-2.7a.61.61 0 0 0-.002.854.605.605 0 0 0 .854 0l2.14-2.137a.605.605 0 0 0-.854-.854z"
                />
            </svg>
        );
    }
};

export default IconProcessLoadingFilled;
