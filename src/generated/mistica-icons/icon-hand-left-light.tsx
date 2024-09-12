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

const IconHandLeftLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.732 17.394q-.117.347-.118.773c0 1.257.79 2.036 2.065 2.036h7c.969 0 1.745-.272 2.3-.81.557-.54.865-1.378.865-2.36V9.244c0-.782-.745-1.126-1.062-1.272-.298-.137-1.265-.613-2.396-1.17l-.08-.04-.424-.208a405 405 0 0 0-5.223-2.537c-.854-.4-1.742-.24-2.263.41a1.8 1.8 0 0 0-.398 1.13c.003.44.154.866.432 1.208.29.364.694.67 1.271 1.008l-7.428.003c-1.348.087-2.118.863-2.118 2.13 0 1.316.83 2.133 2.16 2.136h2.904q-.088.313-.09.684c0 1.003.505 1.703 1.354 1.944a2.5 2.5 0 0 0-.118.776c0 1.005.51 1.708 1.367 1.947m10.67 1.417c-.398.386-.98.58-1.729.58l-6.991-.003c-.824 0-1.241-.412-1.241-1.224q-.005-.266.075-.518a.8.8 0 0 0-.056-.64.82.82 0 0 0-.504-.4c-.51-.143-.767-.535-.767-1.165a1.6 1.6 0 0 1 .075-.52.819.819 0 0 0-.555-1.04c-.504-.143-.758-.535-.758-1.163q0-.257.058-.465.03-.107.031-.218a.82.82 0 0 0-.82-.812H4.316c-.876 0-1.338-.457-1.338-1.32 0-.53.137-1.238 1.347-1.316H11.7c.37 0 .695-.247.793-.6a.81.81 0 0 0-.373-.916c-.526-.308-.84-.551-1.047-.812a1.12 1.12 0 0 1-.255-.703c0-.23.075-.448.218-.625.278-.347.765-.414 1.266-.179 1.449.678 3.77 1.82 5.636 2.74 1.118.551 2.177 1.07 2.496 1.218.42.193.586.345.586.535v7.787c0 .762-.222 1.392-.62 1.779"
            />
        </svg>
    );
};

export default IconHandLeftLight;
