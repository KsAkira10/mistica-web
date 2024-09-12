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

const IconInvoicePlanFileFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.752 8.252V2H19.5v20h-15V8.252zm-2.68 9.64h7.856a.547.547 0 0 0 .536-.536.55.55 0 0 0-.536-.536H8.072a.55.55 0 0 0-.536.536c0 .284.252.536.536.536m7.856-3.572a.55.55 0 0 0 .536-.536.55.55 0 0 0-.536-.536H8.072a.55.55 0 0 0-.536.536c0 .284.252.536.536.536z"
                />
                <path fill={fillColor} d="M4.752 7.18 9.68 2.248V7.18z" />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.752 8.252V2H19.5v20h-15V8.252zm-2.68 9.64h7.856a.547.547 0 0 0 .536-.536.55.55 0 0 0-.536-.536H8.072a.55.55 0 0 0-.536.536c0 .284.252.536.536.536m7.856-3.572a.55.55 0 0 0 .536-.536.55.55 0 0 0-.536-.536H8.072a.55.55 0 0 0-.536.536c0 .284.252.536.536.536z"
                />
                <path fill={fillColor} d="M4.752 7.18 9.68 2.248V7.18z" />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.08 7.491 13.618 2.31a.56.56 0 0 0-.384-.154H5.853c-.569 0-1.107.538-1.107 1.106v17.48c0 .588.519 1.106 1.107 1.106H18.15c.588 0 1.106-.518 1.106-1.107V7.898a.56.56 0 0 0-.176-.406m-3.535 11.345H8.444a.56.56 0 0 1-.56-.56c0-.309.252-.56.56-.56h7.1c.309 0 .56.251.56.56 0 .308-.251.56-.56.56M8.444 15.83a.56.56 0 0 1-.56-.56c0-.308.252-.56.56-.56h7.1c.309 0 .56.252.56.56s-.251.56-.56.56zm7.1-3.003h-7.1a.56.56 0 0 1-.56-.56c0-.308.252-.56.56-.56h7.1c.309 0 .56.252.56.56s-.251.56-.56.56m-1.442-5.532c-.384-.384-.588-.933-.588-1.583V3.754l4.353 4.13h-2.182c-.653 0-1.2-.205-1.583-.589"
                />
            </svg>
        );
    }
};

export default IconInvoicePlanFileFilled;
