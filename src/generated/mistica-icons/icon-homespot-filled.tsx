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

const IconHomespotFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.935 1.713c0-.393.32-.713.713-.713 4.133 0 7.502 3.365 7.498 7.497a.714.714 0 0 1-1.427 0 6.08 6.08 0 0 0-6.07-6.07.714.714 0 0 1-.714-.714m5.001 7.502c.394 0 .714-.32.714-.713 0-2.757-2.245-5.002-4.997-4.997a.714.714 0 0 0 0 1.426c1.97 0 3.57 1.6 3.57 3.57 0 .394.32.714.713.714m-2.5-.713V21H6.86V8.502c0-.983.8-1.788 1.787-1.788h5.001c.983 0 1.788.805 1.788 1.788m-4.288.004c-.786 0-1.426.64-1.426 1.427 0 .786.64 1.426 1.426 1.426s1.426-.64 1.426-1.426c0-.787-.64-1.427-1.426-1.427"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.935 1.713c0-.393.32-.713.714-.713 4.132 0 7.501 3.365 7.497 7.497a.714.714 0 0 1-1.427 0 6.08 6.08 0 0 0-6.07-6.07.714.714 0 0 1-.714-.714m5.001 7.502c.394 0 .714-.32.714-.713 0-2.757-2.245-5.002-4.997-4.997a.714.714 0 0 0 0 1.426c1.97 0 3.57 1.6 3.57 3.57 0 .394.32.714.713.714m-2.5-.713V21H6.86V8.502c0-.983.8-1.788 1.787-1.788h5.002c.982 0 1.787.805 1.787 1.788m-4.288.004c-.786 0-1.426.64-1.426 1.427 0 .786.64 1.426 1.426 1.426s1.426-.64 1.426-1.426c0-.787-.64-1.427-1.426-1.427"
                />
            </svg>
        );
    }
};

export default IconHomespotFilled;
