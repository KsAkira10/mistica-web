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

const Icon3DViewRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.436 18.207c0-.38.306-.69.68-.69h3.402v3.448c0 .38-.306.69-.68.69a.687.687 0 0 1-.68-.69v-1.137C18.32 21.172 15.497 22 12.333 22 6.79 22 2.47 19.345 2.47 15.966c0-1.483.816-2.828 2.381-3.931v-5.38c0-.241.136-.448.34-.586l6.803-3.966a.61.61 0 0 1 .68 0l6.803 3.966c.204.103.34.345.34.586v7.931c0 .242-.136.448-.34.586l-6.803 3.966a.65.65 0 0 1-.34.103.65.65 0 0 1-.34-.103L5.19 15.172a.67.67 0 0 1-.34-.586v-.793c-.578.586-1.02 1.31-1.02 2.173 0 2.551 3.81 4.655 8.503 4.655 2.721 0 5.17-.655 6.769-1.724h-.987a.687.687 0 0 1-.68-.69m-5.782-7.173L6.212 7.829v6.379l5.442 3.172zm1.36 6.31 5.442-3.137v-6.38l-5.442 3.207zm4.728-10.689-5.408-3.172-5.408 3.172 5.408 3.173z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.436 18.207c0-.38.306-.69.68-.69h3.402v3.448c0 .38-.306.69-.68.69a.687.687 0 0 1-.68-.69v-1.137C18.32 21.172 15.497 22 12.333 22 6.79 22 2.47 19.345 2.47 15.966c0-1.483.816-2.828 2.381-3.931v-5.38c0-.241.136-.448.34-.586l6.803-3.966a.61.61 0 0 1 .68 0l6.803 3.966c.204.103.34.345.34.586v7.931c0 .242-.136.448-.34.586l-6.803 3.966a.65.65 0 0 1-.34.103.65.65 0 0 1-.34-.103L5.19 15.172a.67.67 0 0 1-.34-.586v-.793c-.578.586-1.02 1.31-1.02 2.173 0 2.551 3.81 4.655 8.503 4.655 2.721 0 5.17-.655 6.769-1.724h-.987a.687.687 0 0 1-.68-.69m-5.782-7.173L6.212 7.829v6.379l5.442 3.172zm1.36 6.31 5.442-3.137v-6.38l-5.442 3.207zm4.728-10.689-5.408-3.172-5.408 3.172 5.408 3.173z"
                />
            </svg>
        );
    }
};

export default Icon3DViewRegular;
