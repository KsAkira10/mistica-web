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

const IconEscalatorFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 9.06c0 .703-.26 1.357-.736 1.849a2.4 2.4 0 0 1-1.764.764h-1.993l-8.601 8.955a1.72 1.72 0 0 1-1.07.372H4.5C3.12 21 2 19.83 2 18.388c0-.702.26-1.357.736-1.849a2.42 2.42 0 0 1 1.764-.764h1.993l.863-.902V9.06c0-.83.48-1.547 1.161-1.872a2.35 2.35 0 0 1-.89-1.857c0-1.285 1-2.331 2.23-2.331s2.234 1.046 2.234 2.33c0 .76-.351 1.433-.89 1.863a2.06 2.06 0 0 1 1.16 1.872v.592l2.546-2.66c.352-.367.745-.544 1.202-.544H19.5C20.876 6.448 22 7.618 22 9.06"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 9.06c0 .703-.26 1.357-.736 1.849a2.4 2.4 0 0 1-1.764.764h-1.993l-8.601 8.955a1.72 1.72 0 0 1-1.07.372H4.5C3.12 21 2 19.83 2 18.388c0-.702.26-1.357.736-1.849a2.42 2.42 0 0 1 1.764-.764h1.993l.863-.902V9.06c0-.83.48-1.547 1.161-1.872a2.35 2.35 0 0 1-.89-1.857c0-1.285 1-2.331 2.23-2.331s2.234 1.046 2.234 2.33c0 .76-.351 1.433-.89 1.863a2.06 2.06 0 0 1 1.16 1.872v.592l2.546-2.66c.352-.367.745-.544 1.202-.544H19.5C20.876 6.448 22 7.618 22 9.06"
                />
            </svg>
        );
    }
};

export default IconEscalatorFilled;
