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

const IconTagPoundFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.094 6.615a.71.71 0 0 1-.5-1.213l3.194-3.194a.71.71 0 0 1 1.004 1.004l-3.194 3.194a.7.7 0 0 1-.504.21m2.485-.686v7.552c0 .568-.223 1.104-.623 1.504l-6.392 6.393A2.12 2.12 0 0 1 12.06 22c-.546 0-1.09-.209-1.504-.622l-7.934-7.934A2.1 2.1 0 0 1 2 11.94c0-.567.223-1.104.622-1.503l6.389-6.393a2.1 2.1 0 0 1 1.504-.623h7.551l-1.231 1.231a1.778 1.778 0 0 0 0 2.508 1.778 1.778 0 0 0 2.508 0zm-6.302 8.851h-2.93q.088-.252.09-.531v-1.6h1.6a.53.53 0 0 0 .531-.531.53.53 0 0 0-.531-.532h-1.6v-1.418a1.065 1.065 0 0 1 1.731-.827.534.534 0 0 0 .673-.827 2.134 2.134 0 0 0-3.471 1.658v1.418h-.173a.53.53 0 0 0-.532.532.53.53 0 0 0 .532.532h.177v1.6c0 .299-.232.53-.532.53a.53.53 0 0 0-.531.532.53.53 0 0 0 .531.532h4.44a.535.535 0 0 0-.005-1.068"
            />
        </svg>
    );
};

export default IconTagPoundFilled;
