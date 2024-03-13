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

const IconHotelFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12.023c0-9.053-7.504-9.815-9.431-9.86a50 50 0 0 0-.933-.008c-1.975.02-9.322.695-9.322 9.812 0 9.13 7.414 9.843 9.392 9.872.254.004.527.001.768-.002l.134-.001c1.88-.037 9.392-.743 9.392-9.813m-8.18-5.165h2.16c.227 0 .41.182.41.41v9.467a.41.41 0 0 1-.41.409h-2.16a.41.41 0 0 1-.408-.41v-3.576h-2.516v3.577a.41.41 0 0 1-.409.409h-2.16a.41.41 0 0 1-.408-.41V7.268a.41.41 0 0 1 .409-.409h2.16a.41.41 0 0 1 .408.41v3.45h2.516v-3.45a.41.41 0 0 1 .409-.41"
            />
        </svg>
    );
};

export default IconHotelFilled;
