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

const IconMapRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m16.841 2.168 4.476.737c.303.05.527.311.527.62v16.954a.63.63 0 0 1-.221.48.65.65 0 0 1-.51.14l-4.328-.715-4.596 1.431a.648.648 0 0 1-.38-.003l-4.405-1.428-4.52.714a.628.628 0 0 1-.729-.619V3.527a.63.63 0 0 1 .53-.622l4.669-.737q.013-.001.024.002.01.003.02.001.01-.001.02-.005.015-.005.034-.006.043.002.081.015l.042.01a.1.1 0 0 0 .033.002q.02-.001.04.004l4.356 1.412 4.549-1.415q.018-.006.038-.004.016 0 .032-.002l.034-.008q.04-.012.084-.014.017 0 .032.006l.024.005q.008 0 .017-.002.015-.002.027 0M3.416 4.062v15.686l3.411-.54V3.524zm17.17 15.678V4.06l-3.218-.53v15.68zM16.11 3.642l-3.482 1.084v15.641l3.482-1.084zm-8.028.011v15.633l3.291 1.067V4.72z"
            />
        </svg>
    );
};

export default IconMapRegular;
