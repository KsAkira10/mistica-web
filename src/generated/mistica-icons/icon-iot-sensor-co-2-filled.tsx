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

const IconIotSensorCo2Filled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.174 9.342h-.357C16.566 6.902 14.495 5 12.032 5S7.498 6.902 7.247 9.342h-.393C4.176 9.305 2 11.497 2 14.152 2 16.809 4.18 19 6.822 19h10.356C19.82 19 22 16.845 22 14.153c-.005-2.656-2.185-4.811-4.826-4.811m-4.502 2.444a1.45 1.45 0 0 0-1.463 1.47c0 .823.645 1.47 1.463 1.47a1.45 1.45 0 0 0 1.462-1.47c0-.822-.64-1.47-1.462-1.47m-3.995 2.509a.515.515 0 0 1 .75 0 .52.52 0 0 1 0 .754c-.466.468-1.106.716-1.787.716a2.55 2.55 0 0 1-2.537-2.55 2.55 2.55 0 0 1 2.537-2.55c.676 0 1.284.253 1.787.717a.52.52 0 0 1 0 .754.514.514 0 0 1-.75 0 1.44 1.44 0 0 0-1.037-.432 1.45 1.45 0 0 0-1.463 1.47c0 .822.64 1.553 1.463 1.553.393 0 .75-.143 1.037-.432m3.995 1.512a2.55 2.55 0 0 1-2.537-2.55 2.55 2.55 0 0 1 2.537-2.55 2.55 2.55 0 0 1 2.536 2.55 2.55 2.55 0 0 1-2.536 2.55m3.752 1.612a.53.53 0 0 1-.498-.358.565.565 0 0 1 .142-.611s.822-.754 1.284-1.222c.32-.322.466-.611.393-.79a.5.5 0 0 0-.393-.253c-.215 0-.43.179-.43.432a.55.55 0 0 1-.534.537.55.55 0 0 1-.535-.537 1.51 1.51 0 0 1 1.499-1.507 1.45 1.45 0 0 1 1.357.896c.142.358.252 1.075-.644 1.975a2.2 2.2 0 0 1-.32.285h.535c.283 0 .534.253.534.538 0 .294-.214.615-.498.615z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.174 9.342h-.357C16.566 6.902 14.495 5 12.032 5S7.498 6.902 7.247 9.342h-.393C4.176 9.305 2 11.497 2 14.152 2 16.809 4.18 19 6.822 19h10.356C19.82 19 22 16.845 22 14.153c-.005-2.656-2.185-4.811-4.826-4.811m-4.502 2.444a1.45 1.45 0 0 0-1.463 1.47c0 .823.645 1.47 1.463 1.47a1.45 1.45 0 0 0 1.462-1.47c0-.822-.64-1.47-1.462-1.47m-3.995 2.509a.515.515 0 0 1 .75 0 .52.52 0 0 1 0 .754c-.466.468-1.106.716-1.787.716a2.55 2.55 0 0 1-2.537-2.55 2.55 2.55 0 0 1 2.537-2.55c.676 0 1.284.253 1.787.717a.52.52 0 0 1 0 .754.514.514 0 0 1-.75 0 1.44 1.44 0 0 0-1.037-.432 1.45 1.45 0 0 0-1.463 1.47c0 .822.64 1.553 1.463 1.553.393 0 .75-.143 1.037-.432m3.995 1.512a2.55 2.55 0 0 1-2.537-2.55 2.55 2.55 0 0 1 2.537-2.55 2.55 2.55 0 0 1 2.536 2.55 2.55 2.55 0 0 1-2.536 2.55m3.752 1.612a.53.53 0 0 1-.498-.358.565.565 0 0 1 .142-.611s.822-.754 1.284-1.222c.32-.322.466-.611.393-.79a.5.5 0 0 0-.393-.253c-.215 0-.43.179-.43.432a.55.55 0 0 1-.534.537.55.55 0 0 1-.535-.537 1.51 1.51 0 0 1 1.499-1.507 1.45 1.45 0 0 1 1.357.896c.142.358.252 1.075-.644 1.975a2.2 2.2 0 0 1-.32.285h.535c.283 0 .534.253.534.538 0 .294-.214.615-.498.615z"
                />
            </svg>
        );
    }
};

export default IconIotSensorCo2Filled;
