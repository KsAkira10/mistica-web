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

const IconVolumeUpFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.455 21.63V2.389a.39.39 0 0 0-.182-.333.33.33 0 0 0-.364 0L4.982 7.938H2.364c-.219 0-.364.148-.364.37v7.4c0 .223.145.37.364.37h2.618l9.927 5.884c.073.037.11.037.182.037.073 0 .109 0 .182-.037a.39.39 0 0 0 .181-.333M20 11.27h1.273c.4 0 .727.332.727.74 0 .406-.327.74-.727.74H20v1.294c0 .407-.327.74-.727.74a.736.736 0 0 1-.727-.74V12.75h-1.273a.736.736 0 0 1-.727-.74c0-.407.327-.74.727-.74h1.273V9.974c0-.407.327-.74.727-.74s.727.333.727.74z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.455 21.63V2.389a.39.39 0 0 0-.182-.333.33.33 0 0 0-.364 0L4.982 7.938H2.364c-.219 0-.364.148-.364.37v7.4c0 .223.145.37.364.37h2.618l9.927 5.884c.073.037.11.037.182.037.073 0 .109 0 .182-.037a.39.39 0 0 0 .181-.333M20 11.27h1.273c.4 0 .727.332.727.74 0 .406-.327.74-.727.74H20v1.294c0 .407-.327.74-.727.74a.736.736 0 0 1-.727-.74V12.75h-1.273a.736.736 0 0 1-.727-.74c0-.407.327-.74.727-.74h1.273V9.974c0-.407.327-.74.727-.74s.727.333.727.74z"
                />
            </svg>
        );
    }
};

export default IconVolumeUpFilled;
