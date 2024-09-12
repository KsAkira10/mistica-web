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

const IconRookLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.292 18.31h1.02c.238 0 .429.189.429.427v2.689c0 .232-.19.42-.426.42H6.685a.423.423 0 0 1-.426-.42v-2.69c0-.232.19-.42.426-.42h1.02v-1.924c0-.232.19-.42.425-.42h.781a.4.4 0 0 1-.01-.146l.812-6.944h-.437a.423.423 0 0 1-.426-.42V6.655H7.51a.423.423 0 0 1-.425-.42V2.571c0-.232.19-.42.426-.42h1.877c.235 0 .425.188.425.42v1.154h.905V2.571c0-.232.19-.42.426-.42h1.627c.236 0 .426.188.426.42v1.227l.936-.014V2.571c0-.232.19-.42.426-.42h1.955c.235 0 .425.188.425.42V6.23c0 .232-.19.42-.425.42h-1.275v1.807c0 .232-.19.42-.426.42h-.434l.813 6.944q.007.075-.014.145h.689c.235 0 .425.188.425.42zm.594 2.69v-1.849H7.11V21zm-8.328-2.69h6.883v-1.503H8.558zm2.015-9.43-.824 7.039q-.004.017-.01.033l-.007.017h4.628l-.007-.016a.1.1 0 0 1-.01-.034l-.824-7.04zm-.869-.838h4.684V6.655H9.704zm-.748-5.053H7.934v2.823h8.148V2.986h-1.1v1.207c0 .23-.188.418-.42.42l-1.79.028a.45.45 0 0 1-.306-.12.42.42 0 0 1-.126-.3V2.99h-.776V4.14c0 .233-.19.42-.426.42H9.382a.423.423 0 0 1-.426-.42z"
            />
        </svg>
    );
};

export default IconRookLight;
