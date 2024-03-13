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

const IconHandFreeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m18.464 17.888 2.84 2.874a.714.714 0 0 1-.003 1.022.7.7 0 0 1-.504.216.7.7 0 0 1-.503-.216L2.687 3.964a.706.706 0 0 1 0-1.018.686.686 0 0 1 1.006 0l3.62 3.675V3.82c0-1.022.829-1.82 1.8-1.82 1.01 0 1.797.838 1.797 1.82v3.455a1.82 1.82 0 0 1 1.078-.365c.93 0 1.652.73 1.759 1.635.328-.22.685-.365 1.117-.365.863 0 1.62.654 1.727 1.491.328-.256.685-.4 1.117-.4.97 0 1.798.837 1.798 1.82v4.36c0 .108-.146 1.6-1.042 2.437m-12.94-4.982c0-1.054.791-2.545 1.798-2.726l10.243 10.365v1.451H8.938V19.96c-.614-.617-3.415-3.78-3.415-6.69z"
            />
        </svg>
    );
};

export default IconHandFreeFilled;
