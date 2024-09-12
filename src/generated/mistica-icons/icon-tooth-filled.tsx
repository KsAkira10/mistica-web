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

const IconToothFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.586 21.85h-.115c-.157 0-.274-.04-.347-.065a1.76 1.76 0 0 1-.756-.572 6 6 0 0 1-.485-.748l-.076-.165a17 17 0 0 1-.316-.804c-.264-.694-1.023-2.692-1.496-3.213-.473.521-1.23 2.521-1.493 3.213-.146.387-.24.633-.314.796l-.008.039-.073.134a6 6 0 0 1-.49.754 1.7 1.7 0 0 1-.717.552 1.1 1.1 0 0 1-.37.075h-.112c-.157 0-.275-.039-.347-.064a1.74 1.74 0 0 1-.754-.572 5.5 5.5 0 0 1-.423-.644l-.045-.075a20 20 0 0 1-1.406-3.07 21 21 0 0 1-.714-2.289c-.042-.16-.093-.367-.149-.59l-.028-.116c-1.025-1.784-1.75-3.554-2.16-5.26-.582-2.44-.078-4.488 1.421-5.76.857-.736 2.022-1.176 3.28-1.24 1.294-.07 2.639.252 3.874.938.333.188.67.378 1.03.591.373-.216.707-.406 1.032-.588 1.235-.686 2.582-1.011 3.88-.941 1.254.064 2.42.504 3.28 1.243 1.495 1.272 2 3.317 1.417 5.757-.41 1.706-1.138 3.473-2.16 5.26l-.025.098c-.056.233-.107.446-.154.617a21 21 0 0 1-.715 2.282 20 20 0 0 1-1.389 3.04l-.059.1a6 6 0 0 1-.428.65 1.7 1.7 0 0 1-.717.552.9.9 0 0 1-.373.084"
            />
        </svg>
    );
};

export default IconToothFilled;
