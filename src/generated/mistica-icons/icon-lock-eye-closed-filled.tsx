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

const IconLockEyeClosedFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.85 15.926c0 .492-.382.892-.852.892s-.851-.4-.851-.892c0-.493.38-.893.851-.893.47 0 .852.4.852.893"
                />
                <path
                    fill={fillColor}
                    d="M11.998 13.6c-2.802 0-3.917 1.741-4.21 2.326.293.592 1.389 2.324 4.21 2.324 2.802 0 3.917-1.74 4.211-2.324-.294-.593-1.393-2.325-4.21-2.325m0 4.29c-1.034 0-1.878-.884-1.878-1.968s.844-1.97 1.878-1.97c1.035 0 1.878.885 1.878 1.97 0 1.088-.843 1.968-1.878 1.968"
                />
                <path
                    fill={fillColor}
                    d="M17.79 9.851v-1.78C17.79 4.724 15.194 2 11.998 2S6.207 4.721 6.207 8.07v1.781c-.943 0-1.707.8-1.707 1.789v8.571C4.5 21.2 5.264 22 6.207 22h11.587c.942 0 1.706-.8 1.706-1.789V11.64c-.012-.985-.775-1.789-1.71-1.789M7.573 8.071c0-2.558 1.986-4.638 4.425-4.638s4.425 2.08 4.425 4.637v1.781h-8.85zm4.425 11.244c-4.054 0-5.2-3.073-5.246-3.205a.52.52 0 0 1 0-.372c.046-.129 1.192-3.206 5.246-3.206s5.2 3.077 5.246 3.206a.52.52 0 0 1 0 .372c-.046.128-1.191 3.205-5.246 3.205"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.85 15.926c0 .492-.382.892-.852.892s-.851-.4-.851-.892c0-.493.38-.893.851-.893.47 0 .852.4.852.893"
                />
                <path
                    fill={fillColor}
                    d="M11.998 13.6c-2.802 0-3.917 1.741-4.21 2.326.293.592 1.389 2.324 4.21 2.324 2.802 0 3.917-1.74 4.211-2.324-.294-.593-1.393-2.325-4.21-2.325m0 4.29c-1.034 0-1.878-.884-1.878-1.968s.844-1.97 1.878-1.97c1.035 0 1.878.885 1.878 1.97 0 1.088-.843 1.968-1.878 1.968"
                />
                <path
                    fill={fillColor}
                    d="M17.79 9.851v-1.78C17.79 4.724 15.194 2 11.998 2S6.207 4.721 6.207 8.07v1.781c-.943 0-1.707.8-1.707 1.789v8.571C4.5 21.2 5.264 22 6.207 22h11.587c.942 0 1.706-.8 1.706-1.789V11.64c-.012-.985-.775-1.789-1.71-1.789M7.573 8.071c0-2.558 1.986-4.638 4.425-4.638s4.425 2.08 4.425 4.637v1.781h-8.85zm4.425 11.244c-4.054 0-5.2-3.073-5.246-3.205a.52.52 0 0 1 0-.372c.046-.129 1.192-3.206 5.246-3.206s5.2 3.077 5.246 3.206a.52.52 0 0 1 0 .372c-.046.128-1.191 3.205-5.246 3.205"
                />
            </svg>
        );
    }
};

export default IconLockEyeClosedFilled;
