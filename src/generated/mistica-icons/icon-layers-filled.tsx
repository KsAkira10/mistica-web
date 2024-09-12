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

const IconLayersFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.958 10.472c.544.328.888.91.888 1.552 0 .641-.347 1.218-.888 1.543.544.33.888.91.888 1.555 0 .686-.387 1.314-1 1.622l-8.092 4.086a1.813 1.813 0 0 1-1.65-.006L3.15 16.742a1.812 1.812 0 0 1-.104-3.17 1.82 1.82 0 0 1-.884-1.547 1.81 1.81 0 0 1 .885-1.552 1.81 1.81 0 0 1-.885-1.543c0-.684.378-1.309.983-1.622l7.952-4.12a1.81 1.81 0 0 1 1.661-.006l8.093 4.12a1.808 1.808 0 0 1 .106 3.17m-.933-1.55-8.092-4.12-7.952 4.12 7.952 4.085zM3.981 15.12l7.952 4.087 8.095-4.087-1.045-.532-6.23 3.145a1.8 1.8 0 0 1-.817.197 1.85 1.85 0 0 1-.832-.202L5 14.592zm0-3.098 7.955 4.09 8.092-4.087-1.045-.532-6.23 3.145a1.814 1.814 0 0 1-1.65-.006L5 11.495z"
            />
        </svg>
    );
};

export default IconLayersFilled;
