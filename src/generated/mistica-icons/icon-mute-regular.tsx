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

const IconMuteRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m15.998 14.971 5.79 5.79a.716.716 0 0 1 0 1.02.7.7 0 0 1-.513.214.72.72 0 0 1-.512-.214l-4.756-4.757v4.245a.73.73 0 0 1-.73.731.74.74 0 0 1-.368-.098l-9.466-5.539h-2.35a.727.727 0 0 1-.727-.726V8.73c0-.4.326-.727.726-.727h2.546a.727.727 0 0 1 0 1.453h-1.82v5.455h1.82c.13 0 .256.033.368.098l8.54 4.999v-4.431L2.213 3.241A.728.728 0 0 1 3.24 2.213L7.7 6.677l7.2-4.213a.73.73 0 0 1 1.098.628zM14.546 4.364 8.77 7.743l5.776 5.776z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m15.998 14.971 5.79 5.79a.716.716 0 0 1 0 1.02.7.7 0 0 1-.513.214.72.72 0 0 1-.512-.214l-4.756-4.757v4.245a.73.73 0 0 1-.73.731.74.74 0 0 1-.368-.098l-9.466-5.539h-2.35a.727.727 0 0 1-.727-.726V8.73c0-.4.326-.727.726-.727h2.546a.727.727 0 0 1 0 1.453h-1.82v5.455h1.82c.13 0 .256.033.368.098l8.54 4.999v-4.431L2.213 3.241A.728.728 0 0 1 3.24 2.213L7.7 6.677l7.2-4.213a.73.73 0 0 1 1.098.628zM14.546 4.364 8.77 7.743l5.776 5.776z"
                />
            </svg>
        );
    }
};

export default IconMuteRegular;
