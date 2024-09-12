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

const IconNoTicketsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.818 14.225 9.771 2.175a.643.643 0 0 0-.885 0L6.475 4.589a.623.623 0 0 0 0 .886.69.69 0 0 1 0 .975.705.705 0 0 1-.975 0 .627.627 0 0 0-.886 0L2.185 8.882A.6.6 0 0 0 2 9.325c0 .168.064.325.182.443l3.579 3.579-1.097 1.907c-.2.35-.214.728-.036 1.035.179.307.511.482.915.482h3.643l5.043 5.047a.63.63 0 0 0 .885 0l2.429-2.432a.623.623 0 0 0 0-.886.69.69 0 0 1 0-.975.69.69 0 0 1 .975 0c.243.243.646.24.89-.003l2.406-2.408a.63.63 0 0 0 .004-.889M9.804 8.829l3.842 6.689H5.958zm9.085 7.439a1.945 1.945 0 0 0-2.6 2.604l-1.618 1.617-3.714-3.718h3.107c.404 0 .74-.175.915-.482.178-.307.164-.685-.04-1.035l-4.26-7.418c-.2-.35-.522-.554-.875-.554-.354 0-.675.2-.876.554l-2.517 4.382L3.514 9.32l1.618-1.618a1.95 1.95 0 0 0 2.232-.367 1.95 1.95 0 0 0 .372-2.233l1.6-1.6 11.157 11.165zm-9.54-3.404v-1.928a.446.446 0 1 1 .894 0v1.928a.446.446 0 1 1-.893 0m1.012 1.515a.566.566 0 0 1-1.129 0 .566.566 0 0 1 1.129 0"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.818 14.225 9.771 2.175a.643.643 0 0 0-.885 0L6.475 4.589a.623.623 0 0 0 0 .886.69.69 0 0 1 0 .975.705.705 0 0 1-.975 0 .627.627 0 0 0-.886 0L2.185 8.882A.6.6 0 0 0 2 9.325c0 .168.064.325.182.443l3.579 3.579-1.097 1.907c-.2.35-.214.728-.036 1.035.179.307.511.482.915.482h3.643l5.043 5.047a.63.63 0 0 0 .885 0l2.429-2.432a.623.623 0 0 0 0-.886.69.69 0 0 1 0-.975.69.69 0 0 1 .975 0c.243.243.646.24.89-.003l2.406-2.408a.63.63 0 0 0 .004-.889M9.804 8.829l3.842 6.689H5.958zm9.085 7.439a1.945 1.945 0 0 0-2.6 2.604l-1.618 1.617-3.714-3.718h3.107c.404 0 .74-.175.915-.482.178-.307.164-.685-.04-1.035l-4.26-7.418c-.2-.35-.522-.554-.875-.554-.354 0-.675.2-.876.554l-2.517 4.382L3.514 9.32l1.618-1.618a1.95 1.95 0 0 0 2.232-.367 1.95 1.95 0 0 0 .372-2.233l1.6-1.6 11.157 11.165zm-9.54-3.404v-1.928a.446.446 0 1 1 .894 0v1.928a.446.446 0 1 1-.893 0m1.012 1.515a.566.566 0 0 1-1.129 0 .566.566 0 0 1 1.129 0"
                />
            </svg>
        );
    }
};

export default IconNoTicketsRegular;
