'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAmplifierSignalFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.765 7.06a.51.51 0 0 1-.366-.152.5.5 0 0 1 .008-.716 4.98 4.98 0 0 1 3.476-1.397h.008c1.31 0 2.543.49 3.472 1.387a.5.5 0 0 1 .01.715.517.517 0 0 1-.725.01c-1.525-1.466-4.002-1.461-5.522.011a.54.54 0 0 1-.361.142"
            />
            <path
                fill={fillColor}
                d="M8.329 4.839a.51.51 0 0 1-.366-.153.5.5 0 0 1 .007-.715A7.04 7.04 0 0 1 12.88 2h.011c1.85 0 3.592.695 4.905 1.958a.5.5 0 0 1 .01.715.517.517 0 0 1-.724.01C14.767 2.456 11 2.464 8.69 4.698a.54.54 0 0 1-.361.142M6.785 8.682v.003h11.432c.898 0 1.593.447 2.072 1.333.223.413.395.922.508 1.505.117.61.177 1.31.177 2.082V15.7H4.025v-2.095c0-1.537.23-2.743.688-3.587.48-.886 1.175-1.336 2.072-1.336M4.713 19.652c.477.886 1.172 1.335 2.072 1.335h11.432c.898 0 1.593-.449 2.072-1.335.39-.722.614-1.71.67-2.94H4.04c.057 1.232.282 2.218.673 2.94M9.757 18.5c0-.34.283-.62.628-.62s.628.28.628.62c0 .341-.283.62-.628.62a.626.626 0 0 1-.628-.62m2.117-.003c0-.34.282-.62.627-.62s.628.28.628.62c0 .341-.282.62-.628.62a.626.626 0 0 1-.627-.62m2.113 0c0-.34.283-.62.628-.62s.628.28.628.62c0 .341-.283.62-.628.62a.626.626 0 0 1-.628-.62"
            />
            <path
                fill={fillColor}
                d="M18.217 22H6.785c-.64 0-1.227-.165-1.737-.488-.502-.318-.918-.785-1.24-1.385-.466-.862-.733-2.009-.794-3.414H4.04c.057 1.23.282 2.217.673 2.94.477.885 1.172 1.335 2.072 1.335h11.432c.898 0 1.593-.45 2.072-1.336.39-.722.614-1.71.67-2.94H22c-.061 1.406-.341 2.553-.806 3.418q-.488.902-1.24 1.384a3.23 3.23 0 0 1-1.737.486M22 16.067v.646zm0-.367v-2.092c0-.834-.065-1.599-.194-2.273-.133-.687-.34-1.292-.612-1.795-.324-.597-.74-1.062-1.242-1.38a3.2 3.2 0 0 0-1.735-.488H6.785c-.64 0-1.224.163-1.734.488-.502.318-.92.783-1.243 1.382-.536.992-.808 2.359-.808 4.063V15.7h1.025v-2.095c0-1.537.23-2.743.688-3.587.48-.886 1.175-1.336 2.072-1.336v.003h11.432c.898 0 1.593.447 2.072 1.333.223.413.395.922.508 1.505.117.61.177 1.31.177 2.082V15.7z"
            />
        </svg>
    );
};

export default IconAmplifierSignalFilled;
