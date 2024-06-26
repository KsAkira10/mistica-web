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

const IconDataCentreLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.246 2H8.524v2.5H6.092v2.501H3.66V22h11.808V9.145c0-1.18-.938-2.144-2.085-2.144H7.479v-1.07h8.335c.383 0 .694.32.694.714v12.141c0 .393.311.713.693.713.383 0 .694-.32.694-.713V6.645c0-1.18-.938-2.144-2.085-2.144h-5.9V3.43h8.336c.382 0 .694.32.694.713v12.142c0 .393.31.713.693.713s.694-.32.694-.713V4.144C20.33 2.964 19.393 2 18.247 2m-4.165 13.93H5.05v-3.215h9.03zm-9.03 1.073h9.03v3.57H5.05zm9.03-7.858v2.5H5.05V8.433h8.336c.382 0 .694.32.694.713m-5.557 1.431H6.612a.544.544 0 0 1-.52-.535c0-.283.244-.535.52-.535h1.912c.275 0 .52.252.52.535a.544.544 0 0 1-.52.535M6.612 14.86h1.912c.275 0 .52-.252.52-.535a.544.544 0 0 0-.52-.535H6.612a.544.544 0 0 0-.52.535c0 .283.244.535.52.535m1.912 4.283H6.612a.544.544 0 0 1-.52-.535c0-.284.244-.535.52-.535h1.912c.275 0 .52.252.52.535a.544.544 0 0 1-.52.535"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.18 3.854c.223 0 .37-.147.37-.37v-.74h5.92c.63 0 1.108.484 1.108 1.11v9.997c0 .223.147.37.37.37.222 0 .37-.147.37-.37V3.854A1.834 1.834 0 0 0 18.464 2H8.481v2.593h-2.59v2.593H3.3V22h11.84V9.04a1.834 1.834 0 0 0-1.851-1.854h-6.66V5.333h1.109v.739c0 .223.147.37.37.37.222 0 .369-.147.369-.37v-.74h.739v.74c0 .223.146.37.369.37s.37-.147.37-.37v-.74h5.92c.63 0 1.108.484 1.108 1.11v12.59c0 .223.147.37.37.37.222 0 .369-.147.369-.37V6.447a1.835 1.835 0 0 0-1.852-1.854H9.22V2.744h1.109v.74c0 .223.146.37.369.37s.37-.147.37-.37v-.74h.738v.74c.005.223.152.37.374.37m-6.659 9.073h2.037c.223 0 .37-.147.37-.37s-.147-.37-.37-.37H5.52c-.222 0-.37.147-.37.37s.148.37.37.37m0 3.707h2.037c.223 0 .37-.147.37-.37s-.147-.37-.37-.37H5.52c-.222 0-.37.147-.37.37s.148.37.37.37m2.037 3.517H5.52c-.222 0-.37-.147-.37-.37 0-.222.148-.37.37-.37h2.037c.223 0 .37.148.37.37 0 .223-.147.37-.37.37m6.848-5.409v2.816H4.044v-2.816zm-10.362-.74v-2.886h10.362v2.887zm0 4.296h10.362v2.962H4.044zM14.402 9.04v1.332H4.044V7.926h1.108v.74c0 .222.147.369.37.369.222 0 .369-.147.369-.37v-.74h.739v.74c0 .223.146.37.369.37s.37-.147.37-.37v-.74h5.92c.63.005 1.113.484 1.113 1.115m4.812 7.035a.74.74 0 0 1 1.477 0 .74.74 0 0 1-1.478 0"
                />
            </svg>
        );
    }
};

export default IconDataCentreLight;
