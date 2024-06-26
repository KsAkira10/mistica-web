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

const IconEsimRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m15.067 2.68 3.616 3.64c.413.428.726 1.144.722 1.752V22H4.625L4.59 4.32C4.59 3 5.49 2 6.658 2h6.893c.586 0 1.103.248 1.516.68M6.002 20.572h12.033v-12.5c0-.216-.135-.572-.309-.752l-3.62-3.644c-.173-.176-.343-.248-.551-.248H6.662c-.482 0-.69.464-.69.892z"
                />
                <path
                    fill={fillColor}
                    d="M9.587 15.536c-.104-.32-.139-.644-.173-1.036 0 0 0-.036-.008-.068v-.144c0-1.464 1.173-2.644 2.586-2.644 1.516 0 2.585 1.14 2.585 2.784 0 .284-.243.536-.517.536h-3.55c.017.036.026.081.034.126.01.045.018.09.035.126.035.104.104.248.174.356.243.396.69.644 1.173.68.517.072 1.034-.144 1.412-.5a.487.487 0 0 1 .726 0 .53.53 0 0 1 0 .752c-.482.536-1.239.82-1.964.82h-.274a2.64 2.64 0 0 1-1.93-1.144 3 3 0 0 1-.309-.644m3.894-1.64c-.174-.716-.725-1.18-1.482-1.18-.721 0-1.343.5-1.516 1.18z"
                />
                <path
                    fill={fillColor}
                    d="M8.553 9.68h6.892c.757 0 1.378.64 1.378 1.428v8.212H7.176v-8.212c0-.784.62-1.428 1.377-1.428m0 8.212h6.892v-6.784H8.553z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m15.067 2.68 3.616 3.64c.413.428.726 1.144.722 1.752V22H4.625L4.59 4.32C4.59 3 5.49 2 6.658 2h6.893c.586 0 1.103.248 1.516.68M6.002 20.572h12.033v-12.5c0-.216-.135-.572-.309-.752l-3.62-3.644c-.173-.176-.343-.248-.551-.248H6.662c-.482 0-.69.464-.69.892z"
                />
                <path
                    fill={fillColor}
                    d="M9.587 15.536c-.104-.32-.139-.644-.173-1.036 0 0 0-.036-.008-.068v-.144c0-1.464 1.173-2.644 2.586-2.644 1.516 0 2.585 1.14 2.585 2.784 0 .284-.243.536-.517.536h-3.55c.017.036.026.081.034.126.01.045.018.09.035.126.035.104.104.248.174.356.243.396.69.644 1.173.68.517.072 1.034-.144 1.412-.5a.487.487 0 0 1 .726 0 .53.53 0 0 1 0 .752c-.482.536-1.239.82-1.964.82h-.274a2.64 2.64 0 0 1-1.93-1.144 3 3 0 0 1-.309-.644m3.894-1.64c-.174-.716-.725-1.18-1.482-1.18-.721 0-1.343.5-1.516 1.18z"
                />
                <path
                    fill={fillColor}
                    d="M8.553 9.68h6.892c.757 0 1.378.64 1.378 1.428v8.212H7.176v-8.212c0-.784.62-1.428 1.377-1.428m0 8.212h6.892v-6.784H8.553z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.21 16.111c-.12-.338-.16-.68-.201-1.094 0 0 0-.038-.009-.072v-.152C9 13.247 10.361 12 12 12c1.76 0 3 1.204 3 2.94 0 .3-.282.567-.6.567h-4.12c.02.038.03.086.04.133a.5.5 0 0 0 .041.133c.04.11.121.262.202.376.282.419.801.68 1.36.719.6.076 1.2-.152 1.64-.529a.603.603 0 0 1 .841 0 .526.526 0 0 1 0 .795c-.56.566-1.437.866-2.279.866h-.318a3.13 3.13 0 0 1-2.238-1.209 3 3 0 0 1-.359-.68m4.518-1.732c-.201-.756-.841-1.247-1.719-1.247-.837 0-1.558.529-1.76 1.247z"
                />
                <path
                    fill={fillColor}
                    d="M17 10.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5zM8 11h8v8H8z"
                />
                <path
                    fill={fillColor}
                    d="M19 20V4a2 2 0 0 0-2-2h-6.793a.5.5 0 0 0-.353.146L5.146 6.854A.5.5 0 0 0 5 7.207V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2M17 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7.414L10.414 3z"
                />
            </svg>
        );
    }
};

export default IconEsimRegular;
