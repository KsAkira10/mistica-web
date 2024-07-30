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

const IconMmsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.425 3.5H5.57C3.6 3.5 2 5.12 2 7.117v6.51c0 1.872 1.413 3.418 3.214 3.599v2.552a.72.72 0 0 0 .713.722c.187 0 .37-.074.507-.213l3.004-3.038h8.992c1.97 0 3.57-1.62 3.57-3.617V7.117C22 5.125 20.395 3.5 18.425 3.5m2.144 10.132c0 1.195-.96 2.172-2.144 2.172H9.141a.7.7 0 0 0-.503.213l-1.998 2.02v-1.51a.72.72 0 0 0-.713-.723H5.57c-1.18 0-2.144-.972-2.144-2.172V7.117c0-1.195.96-2.172 2.144-2.172h12.855c1.18 0 2.144.972 2.144 2.172zm-5.249-1.45V8.567a.544.544 0 0 0-.411-.528.536.536 0 0 0-.604.287l-1.307 2.65-1.308-2.65a.54.54 0 0 0-.603-.287.54.54 0 0 0-.412.528v3.617c0 .3.238.542.535.542s.535-.241.535-.542v-1.32l.773 1.56a.532.532 0 0 0 .96 0l.772-1.56v1.32c0 .3.238.542.535.542s.535-.241.535-.542m1.856.543c.914 0 1.554-.602 1.554-1.464 0-.908-.739-1.255-1.25-1.495l-.03-.014c-.461-.204-.461-.32-.461-.394 0-.25.448-.26.498-.26.036 0 .228.005.416.056a.537.537 0 0 0 .658-.38.546.546 0 0 0-.375-.666 2.8 2.8 0 0 0-.7-.093c-.927 0-1.572.556-1.572 1.348 0 .898.8 1.255 1.102 1.389.608.273.64.37.64.505 0 .092 0 .38-.48.38a1.2 1.2 0 0 1-.485-.088.533.533 0 0 0-.704.287.545.545 0 0 0 .284.713c.274.12.567.176.905.176"
                />
                <path
                    fill={fillColor}
                    d="M10 8.566v3.617a.536.536 0 0 1-.535.542.536.536 0 0 1-.535-.542v-1.32l-.772 1.56a.532.532 0 0 1-.96 0l-.773-1.56v1.32a.536.536 0 0 1-.535.542.536.536 0 0 1-.535-.542V8.566c0-.25.17-.472.412-.528.242-.055.489.06.603.287l1.308 2.65 1.307-2.65a.536.536 0 0 1 .604-.287.544.544 0 0 1 .411.528"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.425 3.5H5.57C3.6 3.5 2 5.12 2 7.117v6.51c0 1.872 1.413 3.418 3.214 3.599v2.552a.72.72 0 0 0 .713.722c.187 0 .37-.074.507-.213l3.004-3.038h8.992c1.97 0 3.57-1.62 3.57-3.617V7.117C22 5.125 20.395 3.5 18.425 3.5m2.144 10.132c0 1.195-.96 2.172-2.144 2.172H9.141a.7.7 0 0 0-.503.213l-1.998 2.02v-1.51a.72.72 0 0 0-.713-.723H5.57c-1.18 0-2.144-.972-2.144-2.172V7.117c0-1.195.96-2.172 2.144-2.172h12.855c1.18 0 2.144.972 2.144 2.172zm-5.249-1.45V8.567a.544.544 0 0 0-.411-.528.536.536 0 0 0-.604.287l-1.307 2.65-1.308-2.65a.54.54 0 0 0-.603-.287.54.54 0 0 0-.412.528v3.617c0 .3.238.542.535.542s.535-.241.535-.542v-1.32l.773 1.56a.532.532 0 0 0 .96 0l.772-1.56v1.32c0 .3.238.542.535.542s.535-.241.535-.542m1.856.543c.914 0 1.554-.602 1.554-1.464 0-.908-.739-1.255-1.25-1.495l-.03-.014c-.461-.204-.461-.32-.461-.394 0-.25.448-.26.498-.26.036 0 .228.005.416.056a.537.537 0 0 0 .658-.38.546.546 0 0 0-.375-.666 2.8 2.8 0 0 0-.7-.093c-.927 0-1.572.556-1.572 1.348 0 .898.8 1.255 1.102 1.389.608.273.64.37.64.505 0 .092 0 .38-.48.38a1.2 1.2 0 0 1-.485-.088.533.533 0 0 0-.704.287.545.545 0 0 0 .284.713c.274.12.567.176.905.176"
                />
                <path
                    fill={fillColor}
                    d="M10 8.566v3.617a.536.536 0 0 1-.535.542.536.536 0 0 1-.535-.542v-1.32l-.772 1.56a.532.532 0 0 1-.96 0l-.773-1.56v1.32a.536.536 0 0 1-.535.542.536.536 0 0 1-.535-.542V8.566c0-.25.17-.472.412-.528.242-.055.489.06.603.287l1.308 2.65 1.307-2.65a.536.536 0 0 1 .604-.287.544.544 0 0 1 .411.528"
                />
            </svg>
        );
    }
};

export default IconMmsRegular;
