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

const IconCareWinRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <g clipPath="url(#a)">
                <path
                    fill={fillColor}
                    d="M10.118 4.406c.445-.39.98-.688 1.596-.892l-1.38-2.129H8.186zm2.802-1.158a8 8 0 0 1 1.047-.063q.577 0 1.095.068L17 .24h4.898L18.71 5.506c.473.837.712 1.887.712 3.134 0 1.79-.491 3.164-1.462 4.102-.927.905-2.27 1.352-3.993 1.352s-3.065-.458-3.992-1.352c-.971-.928-1.462-2.313-1.462-4.102q.001-2.015.823-3.316L6.07.229h4.91zm5.015 1.267 1.847-3.119h-2.16l-1.364 2.129a4.5 4.5 0 0 1 1.677.99M5.087 22.985H3.353c-.742 0-1.353-.6-1.353-1.352v-6.23c0-.741.6-1.352 1.353-1.352h1.734c.656 0 1.209.468 1.329 1.097.566.059 1.12.204 1.65.42l.916.381a4.8 4.8 0 0 0 1.603.36l1.113.076a1.62 1.62 0 0 1 1.569 1.911l5.326-1.681c.458-.142.938-.12 1.374.076s.775.545.971.993c.207.469.207 1.003.011 1.472-.196.48-.567.851-1.036 1.048l-8.662 3.534a2.8 2.8 0 0 1-.818.142c-.273 0-.546-.054-.808-.164l-3.377-1.395c-.237.399-.667.664-1.16.664m1.353-1.823 3.633 1.496c.24.098.49.098.73 0l8.662-3.523a.77.77 0 0 0 .415-.415.74.74 0 0 0-.01-.59.755.755 0 0 0-.94-.424l-5.595 1.767a3 3 0 0 1-.884.142l-3.6.054a.573.573 0 1 1-.011-1.145l2.67-.04a.6.6 0 0 1 .166-.026.466.466 0 0 0 .47-.469.466.466 0 0 0-.47-.469h-.032l-1.113-.066a6 6 0 0 1-1.986-.447l-.916-.382a4.6 4.6 0 0 0-1.189-.32zm-3.087-5.955a.195.195 0 0 0-.197.197v6.229c0 .109.088.196.197.196h1.734c.11 0 .197-.087.197-.196v-6.23a.195.195 0 0 0-.197-.196zm9.872-4.003a.56.56 0 0 1-.436-.208l-1.396-1.745a.5.5 0 0 1-.11-.393.54.54 0 0 1 .96-.273l.95 1.2 2.618-3.501a.5.5 0 0 1 .36-.208.54.54 0 0 1 .404.098c.12.088.185.219.207.36a.54.54 0 0 1-.098.404l-3.033 4.07a.55.55 0 0 1-.425.196m-2.52-5.815c-.709.72-1.069 1.811-1.069 3.262 0 1.45.36 2.542 1.08 3.262s1.811 1.08 3.262 1.08 2.542-.36 3.262-1.08 1.08-1.811 1.08-3.262-.36-2.542-1.08-3.262q-1.096-1.08-3.273-1.08c-1.45 0-2.542.36-3.261 1.08"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill={fillColor} d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default IconCareWinRegular;
