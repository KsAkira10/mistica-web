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

const IconExchangeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m19.148 4.075 2.518 2.535a.77.77 0 0 1 .107.787.72.72 0 0 1-.662.42l-.823.009c-.16 1.006-.68 2.947-2.359 4.482 3.56 2.134 3.603 6.09 3.603 6.131 0 .972-.793 1.765-1.765 1.765a1.77 1.77 0 0 1-1.765-1.753c-.008-.583-.277-3.3-4.137-3.832l-.002.002-.004.006c-.434.415-1.061.625-1.862.625s-1.429-.21-1.86-.628q-.006-.004-.008-.01l-.004-.004c-4.056.538-4.243 3.485-4.249 3.849A1.774 1.774 0 0 1 4.111 20.2a1.77 1.77 0 0 1-1.764-1.759c0-.045.045-4.033 3.675-6.16-1.639-1.518-2.154-3.406-2.314-4.456l-.826-.006a.72.72 0 0 1-.653-.417.75.75 0 0 1 .093-.79l2.56-2.585c.075-.101.246-.2.44-.222a.73.73 0 0 1 .537.154l.12.12 2.46 2.485c.219.27.255.577.132.838a.73.73 0 0 1-.661.417l-.636.006c.23.905.93 2.255 3.02 2.854.422-.328.983-.504 1.694-.504.712 0 1.277.176 1.7.507 2.09-.6 2.79-1.952 3.023-2.857l-.642-.006a.72.72 0 0 1-.652-.414.75.75 0 0 1 .09-.79l2.627-2.658a.73.73 0 0 1 1.014.117m-.025 3.107.036-.572.787-.003-1.364-1.375-1.356 1.375.815.009-.002.647c-.045.63-.429 3.344-3.65 4.46a3.537 3.537 0 0 1 .059 1.756c4.549.832 4.764 4.498 4.77 4.963a.542.542 0 1 0 1.081.003c-.003-.151-.095-3.838-3.745-5.465l-.994-.44.896-.619c2.35-1.63 2.633-4.235 2.667-4.74M4.1 18.982c.297 0 .538-.24.544-.537.005-.468.227-4.17 4.885-4.98a3.6 3.6 0 0 1-.081-.746c0-.372.053-.7.145-.997-3.224-1.117-3.605-3.829-3.65-4.456L5.9 6.613l.86-.003-1.362-1.375L4.036 6.61l.728.006.095.566c.031.504.32 3.098 2.625 4.722l.89.628-.996.434c-3.72 1.613-3.813 5.328-3.816 5.485 0 .288.241.529.538.532m9.208-6.263c0-.28-.037-.504-.107-.689a.9.9 0 0 0-.202-.339c-.246-.238-.689-.288-1.014-.288s-.764.05-1.01.288a.85.85 0 0 0-.202.34 2 2 0 0 0-.104.691q0 .36.075.614.075.266.23.414c.244.236.686.283 1.011.283.328 0 .768-.047 1.017-.285a.9.9 0 0 0 .23-.412 2.2 2.2 0 0 0 .075-.617"
            />
        </svg>
    );
};

export default IconExchangeRegular;
