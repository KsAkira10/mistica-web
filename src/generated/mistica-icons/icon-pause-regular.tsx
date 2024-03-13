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

const IconPauseRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.11 4.5c1.465 0 2.61 1.204 2.61 2.63v9.748A2.615 2.615 0 0 1 8.11 19.5c-1.466 0-2.61-1.204-2.61-2.63V7.13c0-1.426 1.144-2.63 2.61-2.63m7.78 0c1.466 0 2.61 1.204 2.61 2.63v9.748a2.615 2.615 0 0 1-2.61 2.622c-1.465 0-2.61-1.204-2.61-2.63V7.13c0-1.426 1.145-2.63 2.61-2.63M8.11 6C7.498 6 7 6.507 7 7.13v9.74c0 .623.498 1.13 1.11 1.13.611 0 1.11-.5 1.11-1.122V7.129C9.22 6.507 8.72 6 8.11 6M17 7.13C17 6.506 16.502 6 15.89 6c-.611 0-1.11.507-1.11 1.13v9.74c0 .623.499 1.13 1.11 1.13S17 17.5 17 16.878z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.5 2C5.1 2 4 3.162 4 4.55v14.4c0 1.388 1.1 2.55 2.5 2.55S9 20.338 9 18.95V4.55C9 3.162 7.9 2 6.5 2m-1 2.55c0-.6.467-1.05 1-1.05s1 .45 1 1.05v14.4c0 .6-.467 1.05-1 1.05s-1-.45-1-1.05zM17 2c-1.4 0-2.5 1.162-2.5 2.55v14.4c0 1.388 1.1 2.55 2.5 2.55s2.5-1.162 2.5-2.55V4.55C19.5 3.162 18.4 2 17 2m-1 2.55c0-.6.467-1.05 1-1.05s1 .45 1 1.05v14.4c0 .6-.467 1.05-1 1.05s-1-.45-1-1.05z"
                />
            </svg>
        );
    }
};

export default IconPauseRegular;
