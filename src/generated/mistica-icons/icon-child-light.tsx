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

const IconChildLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 15.26c0-1.45-1.044-1.977-1.94-1.986-.054.004-.087.004-.127.004q-.037 0-.092.002v-1.412c-.076-2.857-.572-6.686-3.927-7.123a4 4 0 0 0-.177-.023l-.182-.01a8 8 0 0 0-1.02 0h-1.543c.146-.175.232-.401.232-.701 0-.336-.095-.6-.282-.776q-.276-.253-.774-.255c-.33 0-.59.084-.77.255q-.281.266-.28.776c0 .3.087.526.232.7L9.61 4.697q-.126 0-.253-.004-.133-.003-.274-.004c-3.689 0-4.63 2.341-4.795 5.907H2.558a.4.4 0 0 0-.403.395c0 .219.18.395.403.395h1.703l-.005.49.008 1.407-.043-.002-.12-.004H4.1c-.896.008-1.941.532-1.941 1.986s1.05 1.983 1.95 1.997h.162c.053-.003.28-.017.4-.03.521 2.058 1.71 3.79 4.412 3.79a7 7 0 0 0 .499-.02h4.767a6.497 6.497 0 0 0 1.02 0h.221q.085 0 .157-.034c2.129-.272 3.098-1.877 3.552-3.765l.07.016a1 1 0 0 0 .112.024c.104.01.19.016.247.016h.162c.902-.014 1.952-.546 1.952-1.997M5.093 10.594C5.278 6.832 6.351 5.48 9.08 5.48c.072 0 .101.002.159.007l.032.002.064.003c.583 0 1.12.05 1.622.14q-.546.315-.991.74C8.9 7.38 8.298 8.797 8.163 10.592zm13.785 3.224c-.112 4.131-1.171 6.156-3.336 6.372a.4.4 0 0 0-.079.017h-.117c-.309.022-.614.02-.967 0H9.556c-.154.011-.309.02-.474.02-2.686 0-3.888-1.914-4.008-6.404l-.011-1.944.005-.496h13.787c.009.16.017.32.023.488zm2.157 1.445c0 1.034-.726 1.199-1.157 1.204l-.137.003-.03-.002a2 2 0 0 1-.167-.015.3.3 0 0 1-.09-.014c.14-.832.197-1.582.222-2.37.081-.002.135-.002.216-.002.425.003 1.143.165 1.143 1.196m-7.272 2.291a.41.41 0 0 0-.572 0c-.386.378-.776.572-1.154.577-.378-.01-.798-.187-1.199-.58a.41.41 0 0 0-.57 0 .39.39 0 0 0 0 .56c.548.541 1.136.813 1.747.813h.034c.599-.008 1.176-.283 1.714-.81a.39.39 0 0 0 0-.56m-1.625-11.6a4.7 4.7 0 0 1 1.61.987c.903.857 1.421 2.084 1.55 3.653H8.98c.126-1.566.645-2.796 1.55-3.653a4.8 4.8 0 0 1 1.607-.986m1.18-.324c.5-.09 1.039-.14 1.621-.14v-.006h.05l.14.001c.073 0 .143 0 .239.005l.073.008.098.009c1.927.196 2.977 1.823 3.266 5.084H16.11c-.134-1.796-.74-3.213-1.8-4.222-.3-.283-.631-.526-.992-.74M4.256 16.467l-.135-.002c-.431-.006-1.156-.171-1.156-1.205 0-1.03.717-1.193 1.142-1.196.062 0 .101 0 .171-.003.025.768.084 1.588.224 2.39a4 4 0 0 1-.246.016m5.305-3.484a.4.4 0 0 1 .404.395v1.851a.4.4 0 0 1-.404.395.4.4 0 0 1-.403-.395v-1.851a.4.4 0 0 1 .403-.395m5.227.395a.4.4 0 0 0-.403-.395.4.4 0 0 0-.404.395v1.851c0 .219.18.395.404.395a.4.4 0 0 0 .403-.395z"
            />
        </svg>
    );
};

export default IconChildLight;
