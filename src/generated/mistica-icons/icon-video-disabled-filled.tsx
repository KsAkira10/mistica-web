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

const IconVideoDisabledFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.375 6.734a.37.37 0 0 1 .4-.076c.136.062.22.194.225.341v10.369a.37.37 0 0 1-.371.37.37.37 0 0 1-.254-.104l-5.26-5.126v2.954l5.538 5.59a.56.56 0 0 1 0 .787.55.55 0 0 1-.39.161.55.55 0 0 1-.39-.161L2.162 2.95a.56.56 0 0 1 0-.787.546.546 0 0 1 .78 0l4.433 4.475h8.383c.198 0 .357.161.357.36v4.86zm-6.04 11L4.352 6.643v-.005h-1.8a.36.36 0 0 0-.356.36v10.374c0 .199.16.36.357.36z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.375 6.734a.37.37 0 0 1 .4-.076c.136.062.22.194.225.341v10.369a.37.37 0 0 1-.371.37.37.37 0 0 1-.254-.104l-5.26-5.126v2.954l5.538 5.59a.56.56 0 0 1 0 .787.55.55 0 0 1-.39.161.55.55 0 0 1-.39-.161L2.162 2.95a.56.56 0 0 1 0-.787.546.546 0 0 1 .78 0l4.433 4.475h8.383c.198 0 .357.161.357.36v4.86zm-6.04 11L4.352 6.643v-.005h-1.8a.36.36 0 0 0-.356.36v10.374c0 .199.16.36.357.36z"
                />
            </svg>
        );
    }
};

export default IconVideoDisabledFilled;
