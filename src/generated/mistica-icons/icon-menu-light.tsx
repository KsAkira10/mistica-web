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

const IconMenuLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2.735 5.752a.575.575 0 0 1-.58-.568c0-.314.26-.569.58-.569h18.53c.319 0 .58.255.58.569s-.261.568-.58.568zm18.527 5.678c.319 0 .58.255.58.569s-.261.568-.58.568H2.735a.575.575 0 0 1-.58-.568c0-.314.26-.569.58-.569zm.58 7.384a.575.575 0 0 0-.58-.569H2.735c-.32 0-.58.255-.58.569s.26.569.58.569h18.527c.319 0 .58-.255.58-.57"
            />
        </svg>
    );
};

export default IconMenuLight;
