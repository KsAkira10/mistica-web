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

const IconDigitalLibraryLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.082 14.398c-.524.535-1.285.807-2.258.807h-4.352v.843h6.938c.224 0 .406.18.409.404a.405.405 0 0 1-.41.403h-6.937v1.269a.405.405 0 0 1-.41.403c-3.133 0-5.51 1.194-5.559 1.218a.5.5 0 0 1-.178.043l-.013.002a.4.4 0 0 1-.19-.044c-.049-.025-2.427-1.219-5.558-1.219a.4.4 0 0 1-.409-.4v-8.12c0-.214.165-.387.378-.407a12.5 12.5 0 0 1 2.26.078V7.152c0-.919.258-1.642.763-2.152.523-.523 1.282-.79 2.254-.79l11.017-.005c.972 0 1.731.269 2.252.793.505.51.762 1.232.762 2.15v5.09c0 .92-.255 1.645-.759 2.16M5.612 7.155l.005 2.655c.86.157 1.801.426 2.7.868 2.63-1.302 5.653-1.086 5.782-1.075.213.017.378.19.378.4v4.398l4.353-.003c.742 0 1.303-.187 1.667-.56.35-.358.53-.896.53-1.6v-5.09c0-.702-.18-1.234-.53-1.587-.364-.364-.925-.55-1.67-.55L7.81 5.018c-.745 0-1.308.185-1.669.55-.35.352-.53.887-.53 1.588m2.294 4.218c-1.897-.921-4.073-1-4.93-.98v7.336c1.692.056 3.358.406 4.93 1.036zm.818 7.392c.888-.364 2.689-.969 4.93-1.036v-7.336c-.863-.012-3.034.056-4.93.977z"
            />
        </svg>
    );
};

export default IconDigitalLibraryLight;
