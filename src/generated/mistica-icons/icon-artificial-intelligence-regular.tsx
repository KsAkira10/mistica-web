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

const IconArtificialIntelligenceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m4.332 7.975-.79-1.75-1.75-.79a.5.5 0 0 1 0-.91l1.75-.79.79-1.76a.5.5 0 0 1 .91 0l.79 1.75 1.76.79a.5.5 0 0 1 0 .91l-1.75.79-.79 1.76c-.18.39-.74.39-.92 0M6.539 22.014l-.79-1.75-1.75-.79a.5.5 0 0 1 0-.91l1.75-.79.79-1.76a.5.5 0 0 1 .91 0l.79 1.75 1.76.79a.5.5 0 0 1 0 .91l-1.75.79-.79 1.76c-.18.39-.74.39-.92 0M13.416 9.5l1.59-3.5c.35-.78 1.47-.78 1.82 0l1.59 3.5 3.5 1.59c.78.36.78 1.47 0 1.82l-3.5 1.59-1.59 3.5c-.36.78-1.47.78-1.82 0l-1.59-3.5-3.5-1.59c-.78-.36-.78-1.47 0-1.82zm2.04 5.5c.18.39.74.39.92 0l.79-1.76 1.75-.79a.5.5 0 0 0 0-.91l-1.76-.79-.79-1.75a.5.5 0 0 0-.91 0l-.79 1.76-1.75.79a.5.5 0 0 0 0 .91l1.75.79z"
            />
        </svg>
    );
};

export default IconArtificialIntelligenceRegular;
