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

const IconCurtainRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.177 15.243a1.99 1.99 0 0 0-1.412 1.9c0 1.097.895 1.987 2 1.987s2-.89 2-1.987a1.99 1.99 0 0 0-1.412-1.9V13.52h3.53v6.311H4.117V13.52h11.059zm5.882 4.588V5.455A2.463 2.463 0 0 0 18.589 3H5.411a2.463 2.463 0 0 0-2.47 2.455V19.83h-.354a.586.586 0 0 0-.588.585c0 .322.263.584.588.584h18.824a.586.586 0 0 0 .588-.584.586.586 0 0 0-.588-.585zm-1.177-7.48h-3.53V8.844h3.53zm0-6.896v2.22h-3.53V4.17h2.236a1.29 1.29 0 0 1 1.294 1.286M4.118 12.35V8.844h11.059v3.507zm0-6.896c0-.71.579-1.286 1.294-1.286h9.765v3.506H4.117zM14.94 17.143a.82.82 0 0 1 .824-.818.82.82 0 0 1 .823.818.82.82 0 0 1-.823.818.82.82 0 0 1-.824-.818"
            />
        </svg>
    );
};

export default IconCurtainRegular;
