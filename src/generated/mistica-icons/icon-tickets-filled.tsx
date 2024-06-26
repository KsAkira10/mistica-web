'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTicketsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m6.372 15.918 4.948 4.947a3.86 3.86 0 0 0 5.456.002l4.091-4.09a3.86 3.86 0 0 0-.002-5.458l-4.947-4.947-3.325.766.767-3.324-.683-.683A3.86 3.86 0 0 0 7.22 3.13L3.13 7.22a3.86 3.86 0 0 0 .001 5.457l.683.683 3.324-.767zm4.636-6.324-1.414 1.414-.884-.884 1.414-1.414z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m12.27 11.105 1.176-.228-.59.963a.54.54 0 0 0-.019.544l.6 1.121-1.186-.265a.53.53 0 0 0-.511.154l-.841.88-.121-1.27a.55.55 0 0 0-.316-.443l-1.028-.465 1.102-.465a.54.54 0 0 0 .33-.437l.135-1.154.753.884a.54.54 0 0 0 .516.181"
                />
                <path
                    fill={fillColor}
                    d="m21.893 9.007-2.497-2.498a.356.356 0 0 0-.511 0 .987.987 0 0 1-1.39 0 .99.99 0 0 1 0-1.391.36.36 0 0 0 .107-.256.36.36 0 0 0-.107-.256l-2.496-2.498a.356.356 0 0 0-.512 0L2.108 14.482a.357.357 0 0 0 0 .512l2.496 2.498c.07.07.163.107.256.107s.19-.037.256-.107a.987.987 0 0 1 1.39 0 .99.99 0 0 1 0 1.391.357.357 0 0 0 0 .512l2.496 2.498c.07.07.163.107.256.107a.36.36 0 0 0 .255-.107L21.888 9.509a.34.34 0 0 0 .004-.502m-6.866 1.386-1.084 1.75 1.018 1.893a.54.54 0 0 1-.046.586.54.54 0 0 1-.553.2l-2.05-.46-1.45 1.52a.562.562 0 0 1-.572.14.54.54 0 0 1-.363-.46l-.205-2.14-1.873-.852a.55.55 0 0 1-.32-.502.54.54 0 0 1 .334-.493l1.957-.828.246-2.075a.543.543 0 0 1 .953-.288l1.358 1.59 2.087-.4a.542.542 0 0 1 .563.82"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m12.27 11.105 1.176-.228-.59.963a.54.54 0 0 0-.019.544l.6 1.121-1.186-.265a.53.53 0 0 0-.511.154l-.841.88-.121-1.27a.55.55 0 0 0-.316-.443l-1.028-.465 1.102-.465a.54.54 0 0 0 .33-.437l.135-1.154.753.884a.54.54 0 0 0 .516.181"
                />
                <path
                    fill={fillColor}
                    d="m21.893 9.007-2.497-2.498a.356.356 0 0 0-.511 0 .987.987 0 0 1-1.39 0 .99.99 0 0 1 0-1.391.36.36 0 0 0 .107-.256.36.36 0 0 0-.107-.256l-2.496-2.498a.356.356 0 0 0-.512 0L2.108 14.482a.357.357 0 0 0 0 .512l2.496 2.498c.07.07.163.107.256.107s.19-.037.256-.107a.987.987 0 0 1 1.39 0 .99.99 0 0 1 0 1.391.357.357 0 0 0 0 .512l2.496 2.498c.07.07.163.107.256.107a.36.36 0 0 0 .255-.107L21.888 9.509a.34.34 0 0 0 .004-.502m-6.866 1.386-1.084 1.75 1.018 1.893a.54.54 0 0 1-.046.586.54.54 0 0 1-.553.2l-2.05-.46-1.45 1.52a.562.562 0 0 1-.572.14.54.54 0 0 1-.363-.46l-.205-2.14-1.873-.852a.55.55 0 0 1-.32-.502.54.54 0 0 1 .334-.493l1.957-.828.246-2.075a.543.543 0 0 1 .953-.288l1.358 1.59 2.087-.4a.542.542 0 0 1 .563.82"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.693 2.155h2.238c1.05 0 1.905.852 1.905 1.9v14.249c0 1.047-.854 1.899-1.905 1.899h-2.254a1.01 1.01 0 0 1-.99-.816.9.9 0 0 0-.882-.722.9.9 0 0 0-.882.723 1.01 1.01 0 0 1-.989.815h-.82a.9.9 0 0 1-.373.434l-1.754.983a1.7 1.7 0 0 1-.848.221q-.237.001-.474-.064a1.73 1.73 0 0 1-1.047-.82L2.38 9.891a1.735 1.735 0 0 1 .663-2.364l1.737-.972a.944.944 0 0 1 1.213.249.757.757 0 0 0 1.305-.731.933.933 0 0 1 .418-1.163l1.736-.972c.11-.061.23-.098.35-.134a1.9 1.9 0 0 1 1.88-1.647h2.238c.504 0 .925.364.997.865a.906.906 0 0 0 .891.768c.445 0 .83-.33.894-.768a.993.993 0 0 1 .991-.868M5.43 10.603l4.373 7.521-.006-9.933zm6.448-4.386v9.972c0 .23.185.414.415.414h7.143c.23 0 .414-.185.414-.414V6.214a.414.414 0 0 0-.414-.415h-7.143v.003a.414.414 0 0 0-.415.415"
                />
            </svg>
        );
    }
};

export default IconTicketsFilled;
