'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDartboardRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.488 4.906a.52.52 0 0 0-.483-.338h-1.924v-2.02c0-.22-.13-.422-.322-.506a.51.51 0 0 0-.572.117L15.74 4.728a.56.56 0 0 0-.152.39v2.338l-.962 1.01a7.2 7.2 0 0 0-2.671-1.55 6.98 6.98 0 0 0-5.592.578c-1.731.967-2.997 2.587-3.566 4.555-1.176 4.067 1.02 8.378 4.89 9.613A7 7 0 0 0 9.83 22a7 7 0 0 0 3.45-.911c1.73-.967 2.996-2.588 3.565-4.555a8.04 8.04 0 0 0-.38-5.513c-.166-.367-.582-.526-.931-.353a.75.75 0 0 0-.336.977c.627 1.4.734 2.982.309 4.461-.46 1.592-1.485 2.903-2.886 3.691a5.66 5.66 0 0 1-4.527.465c-3.136-1.005-4.912-4.494-3.963-7.786.46-1.592 1.485-2.902 2.885-3.69a5.66 5.66 0 0 1 4.527-.466 5.8 5.8 0 0 1 2.08 1.193l-1.239 1.3a4.04 4.04 0 0 0-2.567-.929c-2.313 0-4.197 1.977-4.197 4.405s1.884 4.405 4.197 4.405c2.312 0 4.196-1.977 4.196-4.405a4.5 4.5 0 0 0-.886-2.696l3.199-3.357h2.227a.51.51 0 0 0 .372-.16l2.447-2.569a.57.57 0 0 0 .116-.6m-8.875 9.383c0 1.62-1.253 2.935-2.796 2.935-1.544 0-2.796-1.315-2.796-2.935s1.252-2.935 2.796-2.935c.581 0 1.122.188 1.57.507L9.445 13.9a.57.57 0 0 0 0 .78.51.51 0 0 0 .743 0l1.941-2.038c.305.47.484 1.037.484 1.648m4.021-7.157v-1.79l1.396-1.464v1.24c0 .305.233.549.523.549h1.181L18.34 7.132z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.488 4.906a.52.52 0 0 0-.483-.338h-1.924v-2.02c0-.22-.13-.422-.322-.506a.51.51 0 0 0-.572.117L15.74 4.728a.56.56 0 0 0-.152.39v2.338l-.962 1.01a7.2 7.2 0 0 0-2.671-1.55 6.98 6.98 0 0 0-5.592.578c-1.731.967-2.997 2.587-3.566 4.555-1.176 4.067 1.02 8.378 4.89 9.613A7 7 0 0 0 9.83 22a7 7 0 0 0 3.45-.911c1.73-.967 2.996-2.588 3.565-4.555a8.04 8.04 0 0 0-.38-5.513c-.166-.367-.582-.526-.931-.353a.75.75 0 0 0-.336.977 6.52 6.52 0 0 1 .309 4.461c-.46 1.592-1.485 2.903-2.886 3.691a5.66 5.66 0 0 1-4.527.465c-3.136-1.005-4.912-4.494-3.963-7.786.46-1.592 1.485-2.902 2.885-3.69a5.66 5.66 0 0 1 4.527-.466 5.8 5.8 0 0 1 2.08 1.193l-1.239 1.3a4.04 4.04 0 0 0-2.567-.929c-2.313 0-4.197 1.977-4.197 4.405s1.884 4.405 4.197 4.405c2.312 0 4.196-1.977 4.196-4.405a4.5 4.5 0 0 0-.886-2.696l3.199-3.357h2.227a.51.51 0 0 0 .372-.16l2.447-2.569a.57.57 0 0 0 .116-.6m-8.875 9.383c0 1.62-1.253 2.935-2.796 2.935-1.544 0-2.796-1.315-2.796-2.935s1.252-2.935 2.796-2.935c.581 0 1.122.188 1.57.507L9.445 13.9a.57.57 0 0 0 0 .78.51.51 0 0 0 .743 0l1.941-2.038c.305.47.484 1.037.484 1.648m4.021-7.157v-1.79l1.396-1.464v1.24c0 .305.233.549.523.549h1.181L18.34 7.132z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.247 5.118a.6.6 0 0 1 .533.334.61.61 0 0 1-.056.624l-1.516 2.056a.6.6 0 0 1-.484.244h-.009l-2.913-.048-.742.743c.899 1.14 1.535 2.756 1.535 5.078 0 7.115-5.894 7.67-7.367 7.695-.137.002-.297.005-.457.005q-.126 0-.25-.003c-1.55-.022-7.366-.582-7.366-7.745 0-7.148 5.762-7.68 7.31-7.694h.16c.197 0 .398.003.572.008.877.02 3.216.238 5.03 1.787l.662-.66-.118-3.015a.6.6 0 0 1 .216-.484L18.074 2.3a.599.599 0 0 1 .986.462V4.41a.594.594 0 0 1 .734.075c.168.168.21.41.14.62zm-4.266-.339.062 1.608.812-.812V4.048zm2.443 2.392.636-.86-1.224-.014-.852.852zm-6.305 6.978c0-.714-.073-1.339-.292-1.849l-1.93 1.93.527.009a.6.6 0 0 1-.011 1.201h-.011l-1.942-.033q-.01 0-.02-.005l-.019-.004-.022-.002c-.046-.005-.091-.009-.135-.026l-.011-.005q-.005-.004-.011-.006l-.03-.015-.018-.01a.6.6 0 0 1-.129-.09.578.578 0 0 1-.146-.199l-.008-.017a.6.6 0 0 1-.042-.168l-.151-1.733a.6.6 0 0 1 .546-.65.595.595 0 0 1 .653.546l.04.448 2.094-2.092c-.456-.297-1.087-.47-1.966-.49l-.591-.006c-2.378.022-2.866 1.305-2.866 3.221 0 1.939.502 3.235 2.953 3.272l.185.003.392-.006c2.456-.045 2.96-1.322 2.96-3.224m-2.914 6.496c1.86-.037 6.185-.737 6.185-6.496 0-1.91-.484-3.258-1.187-4.221l-1.488 1.487c.602 1 .608 2.165.608 2.731 0 1.079 0 4.353-4.151 4.426l-.415.006-.19-.003C5.43 18.515 5.43 15.194 5.43 14.1c0-1.084 0-4.386 4.067-4.423 0 0 .46.003.619.009 1.286.028 2.176.358 2.795.832l1.47-1.47c-1.394-1.169-3.178-1.407-4.212-1.432a17 17 0 0 0-.543-.009H9.48c-1.84.014-6.12.681-6.12 6.493 0 5.827 4.322 6.518 6.179 6.544l.232.003c.151 0 .303 0 .434-.003"
                />
            </svg>
        );
    }
};

export default IconDartboardRegular;
