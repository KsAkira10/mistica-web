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

const IconOnlineReloadRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.81 14.456a5.4 5.4 0 0 0 1.236.135c2.395 0 3.714-1.289 3.711-3.63q0-1.1-.377-1.883l.032.009.236.064a.422.422 0 0 0 .224-.812l-.235-.065-.236-.064c-.32-.089-.525-.145-.644-.168-.485-.098-.854.143-.958.627a6 6 0 0 0-.076.474l-.014.103a6 6 0 0 1-.075.505.42.42 0 0 0 .818.182 7 7 0 0 0 .09-.575l.007-.057q.37.646.37 1.66c0 1.876-.94 2.79-2.873 2.79a4.5 4.5 0 0 1-1.04-.112.42.42 0 1 0-.196.818M8.607 12.709q-.376-.782-.377-1.883c0-2.342 1.32-3.63 3.715-3.63a5.3 5.3 0 0 1 1.246.137.422.422 0 1 1-.185.82q-.005 0-.01-.002a4.6 4.6 0 0 0-1.051-.112c-1.933 0-2.874.913-2.874 2.79 0 .67.123 1.223.366 1.651l.006-.052c.026-.201.054-.409.09-.574a.423.423 0 0 1 .496-.327.423.423 0 0 1 .328.495q0 .005-.003.006c-.028.129-.054.32-.076.504l-.014.103c-.023.17-.045.339-.076.474-.092.423-.372.658-.753.658q-.104 0-.207-.022a11 11 0 0 1-.67-.175l-.207-.058-.235-.064a.422.422 0 0 1 .224-.812l.235.064z"
            />
            <path
                fill={fillColor}
                d="M5.446 16.933h13.11c1.097 0 1.94-.328 2.503-.972.521-.6.788-1.468.788-2.583V8.44c0-1.115-.264-1.984-.788-2.583-.562-.644-1.406-.972-2.504-.972H5.446c-1.1 0-1.941.328-2.504.972-.521.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.983.787 2.585.563.642 1.406.97 2.504.97M3.788 6.596c.344-.394.885-.588 1.658-.588l13.11-.003c.77 0 1.313.194 1.658.589.338.39.512 1.01.512 1.846v4.938c0 .835-.174 1.457-.512 1.846-.345.395-.888.588-1.659.588H5.446c-.77 0-1.314-.193-1.658-.588-.34-.39-.513-1.011-.513-1.846V8.44c0-.835.174-1.457.513-1.844M21.253 19.118H2.749a.56.56 0 0 1-.56-.56c0-.309.252-.561.56-.561h18.504c.308 0 .56.252.56.56s-.252.56-.56.56"
            />
        </svg>
    );
};

export default IconOnlineReloadRegular;
