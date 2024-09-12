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

const IconHighPriorityLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.052 6.107a.345.345 0 0 1 .5 0l1.9 1.966-1.9 1.966a.345.345 0 0 1-.5 0 .375.375 0 0 1 0-.517L10.1 8.439H6.004c-.299 0-.626.158-.886.427s-.411.607-.411.914v6.147c0 .306.152.644.412.914s.588.427.885.427h5.113a.36.36 0 0 1 .353.366.36.36 0 0 1-.353.366H6.004c-.527 0-1.025-.27-1.384-.642-.36-.372-.62-.887-.62-1.431V9.78c0-.544.26-1.06.618-1.431.36-.372.857-.642 1.386-.642H10.1L9.051 6.624a.375.375 0 0 1 0-.517m3.478 1.966a.36.36 0 0 1 .353-.366h6.764a.36.36 0 0 1 .353.366.36.36 0 0 1-.353.366h-6.764a.36.36 0 0 1-.353-.366m0 4.78a.36.36 0 0 1 .353-.365h6.764a.36.36 0 0 1 .353.366.36.36 0 0 1-.353.365h-6.764a.36.36 0 0 1-.353-.365m0 4.781a.36.36 0 0 1 .353-.366h6.764a.36.36 0 0 1 .353.366.36.36 0 0 1-.353.366h-6.764a.36.36 0 0 1-.353-.366"
            />
        </svg>
    );
};

export default IconHighPriorityLight;
