'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMobileShieldFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.087 5.244s-1.188 1.07-2.797 1.07v3.565c0 1.64 1.609 2.816 2.797 3.208 1.19-.392 2.798-1.568 2.798-3.208V6.314c-1.609 0-2.798-1.07-2.798-1.07"
            />
            <path
                fill={fillColor}
                d="M17.703 14.264c-1.748-.57-3.637-2.21-3.637-4.385V6.136H5.5V17.9h12.587v-3.493zM5.5 18.97C5.605 20.645 6.969 22 8.647 22h6.294c1.678 0 3.042-1.355 3.146-3.03zM15.29 5.03c1.084 0 1.923-.713 1.993-.748l.49-.428C17.283 2.784 16.199 2 14.94 2H8.647C6.969 2 5.605 3.355 5.5 5.03z"
            />
            <path
                fill={fillColor}
                d="M18.087 5.244s-1.188 1.07-2.797 1.07v3.565c0 1.64 1.609 2.816 2.797 3.208 1.19-.392 2.798-1.568 2.798-3.208V6.314c-1.609 0-2.798-1.07-2.798-1.07"
            />
        </svg>
    );
};

export default IconMobileShieldFilled;
