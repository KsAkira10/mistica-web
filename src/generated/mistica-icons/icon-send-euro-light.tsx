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

const IconSendEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.074 2c-.553 0-1.045.348-1.258.882a1.48 1.48 0 0 0 .296 1.56l2.06 2.162-2.674 2.813a.74.74 0 0 0 0 1.01.66.66 0 0 0 .962 0l3.637-3.823-3.023-3.173h8.089v8.491L17.14 8.75l-3.78 3.969a.74.74 0 0 0 0 1.01.654.654 0 0 0 .958 0l2.818-2.958 2.06 2.163c.392.411.971.53 1.48.31.51-.223.842-.74.842-1.32V2zM8.934 12.718c.714 0 1.411.215 2.017.622a.663.663 0 0 0 .94-.215.74.74 0 0 0-.204-.988 4.9 4.9 0 0 0-2.749-.846c-2.217 0-4.103 1.495-4.808 3.571h-.98c-.375 0-.68.32-.68.714s.305.713.68.713h.696c-.008.119-.017.238-.017.357s.009.237.017.356H3.15c-.374 0-.679.32-.679.714s.305.713.68.713h.98C4.83 20.505 6.717 22 8.938 22c.976 0 1.925-.293 2.749-.846a.733.733 0 0 0 .204-.988.66.66 0 0 0-.94-.214 3.6 3.6 0 0 1-2.017.621c-1.45 0-2.71-.873-3.332-2.144H8.59c.374 0 .68-.32.68-.713 0-.394-.306-.714-.68-.714H5.205a5 5 0 0 1-.017-.356c0-.12.009-.238.017-.357H8.59c.374 0 .68-.32.68-.713 0-.394-.306-.714-.68-.714H5.602c.623-1.27 1.881-2.144 3.332-2.144"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 11.742c0 .451-.256.838-.675 1.01q-.212.084-.424.084a1.08 1.08 0 0 1-.763-.321l-2.458-2.46-1.91 1.91a.357.357 0 0 1-.511 0 .36.36 0 0 1 0-.512l2.425-2.426 2.97 2.97a.355.355 0 0 0 .396.08.36.36 0 0 0 .224-.335v-9.01h-9.009a.36.36 0 0 0-.335.223.355.355 0 0 0 .08.395l2.97 2.971-3.995 4a.357.357 0 0 1-.512 0 .357.357 0 0 1 0-.512l3.478-3.488-2.458-2.458a1.07 1.07 0 0 1-.238-1.188A1.08 1.08 0 0 1 12.265 2H22zm-7.998.81a.727.727 0 0 0 0 1.453.727.727 0 0 0 0-1.453m-3.105.689a4.36 4.36 0 0 0-2.351-.69 4.38 4.38 0 0 0-4.111 2.902h3.743a.364.364 0 0 1 0 .726H4.244c-.037.238-.065.48-.065.727q.001.37.065.726h3.938a.364.364 0 0 1 0 .727H4.435a4.37 4.37 0 0 0 4.11 2.91c.834 0 1.649-.238 2.352-.69a.367.367 0 0 1 .502.113.367.367 0 0 1-.111.502A5.1 5.1 0 0 1 8.546 22a5.1 5.1 0 0 1-4.88-3.637H2.364a.364.364 0 0 1 0-.726h1.15a5 5 0 0 1-.056-.727c0-.246.023-.489.056-.726h-1.15a.364.364 0 0 1 0-.727h1.304a5.1 5.1 0 0 1 4.879-3.636c.973 0 1.918.28 2.742.805a.363.363 0 0 1 .111.503.363.363 0 0 1-.502.112"
                />
            </svg>
        );
    }
};

export default IconSendEuroLight;
