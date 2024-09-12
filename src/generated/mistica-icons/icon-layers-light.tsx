'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLayersLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.289 11.12a1.016 1.016 0 0 1-.003 1.804l-1.6.815 1.602.824a1.02 1.02 0 0 1-.002 1.81l-8.916 4.543a.98.98 0 0 1-.91-.003l-8.763-4.544a1.017 1.017 0 0 1-.002-1.8l1.58-.827-1.578-.818a1.017 1.017 0 0 1-.002-1.801l1.58-.826-1.578-.818a1.017 1.017 0 0 1-.002-1.802l8.762-4.582a1.002 1.002 0 0 1 .916-.006l8.915 4.583a1.02 1.02 0 0 1-.002 1.81l-1.6.815zm-9.37-7.126L3.154 8.577l8.765 4.546 8.916-4.546zm-8.765 8.028 8.765 4.543 8.916-4.543-2.258-1.162-6.207 3.162a.98.98 0 0 1-.91-.003l-6.09-3.157zm8.765 7.989 8.916-4.544-2.258-1.16-6.207 3.166c-.14.07-.297.106-.451.106a1 1 0 0 1-.46-.112l-6.09-3.16-2.215 1.16z"
            />
        </svg>
    );
};

export default IconLayersLight;
