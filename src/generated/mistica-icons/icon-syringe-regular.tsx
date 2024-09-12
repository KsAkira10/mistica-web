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

const IconSyringeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m18.998 2.332 2.658 2.678c.247.241.247.636.003.869a.586.586 0 0 1-.723.1l-2.249 2.266 1.205 1.216a.627.627 0 0 1 0 .877.65.65 0 0 1-.434.182.65.65 0 0 1-.435-.182l-.179-.182-8.204 8.266a.63.63 0 0 1-.434.182.65.65 0 0 1-.438-.182l-.927-.933-.008.013q-.003.006-.008.012l-1.06 1.068a.6.6 0 0 1-.433.182.6.6 0 0 1-.437-.182l-.32-.323-3.372 3.398a.612.612 0 0 1-.868 0 .627.627 0 0 1 0-.877l3.37-3.389-.247-.25a.61.61 0 0 1 0-.876l1.058-1.076.013-.008.013-.008-.78-.785a.61.61 0 0 1 0-.876l8.197-8.267-.157-.156a.627.627 0 0 1 0-.877.6.6 0 0 1 .871 0l1.101 1.106 2.25-2.274a.62.62 0 0 1 .106-.712c.246-.24.63-.24.868 0m-2.356 3.86 1.174 1.182 2.224-2.24-1.174-1.183zm-9.574 7.754 3.135 3.165 7.77-7.824-3.143-3.165-.608.62 1.126 1.106a.54.54 0 0 1 0 .762.5.5 0 0 1-.378.156.57.57 0 0 1-.378-.148l-1.123-1.123-1.272 1.28 2.045 2.059a.53.53 0 0 1 0 .759.54.54 0 0 1-.378.157.58.58 0 0 1-.378-.157l-2.034-2.059-1.272 1.272 1.207 1.19a.54.54 0 0 1 0 .76.52.52 0 0 1-.378.165.57.57 0 0 1-.375-.157l-1.207-1.2-.986 1 1.832 1.844a.54.54 0 0 1 0 .753.52.52 0 0 1-.378.157.52.52 0 0 1-.379-.157l-1.832-1.843zm.885 2.694.012-.008.016-.011-.574-.586-.008.013q-.002.006-.009.013l-.624.635.566.572z"
            />
        </svg>
    );
};

export default IconSyringeRegular;
