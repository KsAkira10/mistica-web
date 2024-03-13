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

const IconHandFreeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.85 13.784v-.356c0-.284.138-.572.342-.784v1.144c0 .396.311.716.688.716s.688-.324.688-.716v-2.144c0-.396-.312-.716-.688-.716-1.303 0-2.402 1.144-2.402 2.5v.356c0 2.856 2.47 5.568 3.259 6.392v1.108c0 .396.31.716.688.716.38 0 .687-.324.687-.716v-1.752l-.242-.216c-.034-.032-3.02-2.852-3.02-5.532"
            />
            <path
                fill={fillColor}
                d="m18.413 18.212 2.47 2.572a.705.705 0 0 1 .005.996.67.67 0 0 1-.48.216.67.67 0 0 1-.481-.216l-2.264-2.356v1.856c0 .392-.307.716-.687.716-.377 0-.688-.32-.688-.716v-3.212L3.115 4.284a.713.713 0 0 1 0-1 .65.65 0 0 1 .96 0l3.078 3.252V4.144C7.153 2.964 8.045 2 9.18 2c1.168 0 2.094.964 2.094 2.144v2.752a1.9 1.9 0 0 1 .653-.108c.892 0 1.645.604 1.956 1.428a2 2 0 0 1 .823-.18c.822 0 1.544.532 1.886 1.284.242-.144.55-.216.861-.216 1.134 0 2.06.964 2.06 2.144v4.356c0 .108-.138 1.712-1.1 2.608M9.255 3.428c-.376 0-.687.32-.687.716v3.82l8.907 9.256c.504-.392.662-1.324.712-1.617l.01-.063v-4.252c0-.392-.31-.716-.687-.716s-.688.32-.688.716c0 .392-.307.716-.688.716-.377 0-.688-.32-.688-.716v-1.072c0-.392-.307-.716-.688-.716-.345 0-.687.248-.687.644v.072c0 .392-.308.716-.688.716-.377 0-.688-.32-.688-.716V8.964c0-.392-.308-.716-.688-.716a.676.676 0 0 0-.688.68c0 .392-.307.716-.688.716-.376 0-.688-.32-.688-.716V4.144c0-.392-.307-.716-.688-.716"
            />
        </svg>
    );
};

export default IconHandFreeRegular;
