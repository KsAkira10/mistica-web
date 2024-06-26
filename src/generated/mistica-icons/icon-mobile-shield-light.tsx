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

const IconMobileShieldLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.186 5.214c-1.204 0-2.17-.759-2.318-.877C17.375 2.974 16.095 2 14.59 2H8.996C7.066 2 5.5 3.6 5.5 5.571V18.43C5.5 20.399 7.067 22 8.996 22h5.595c1.93 0 3.496-1.6 3.496-3.571v-5.226c1.423-.645 2.798-1.985 2.798-3.7V5.214zM8.996 3.427h5.595c.828 0 1.54.498 1.88 1.211-.425.256-1.101.572-1.88.572H6.928c.17-1.01 1.03-1.783 2.068-1.783m0 17.146c-1.039 0-1.898-.772-2.068-1.787h9.727c-.166 1.015-1.025 1.787-2.064 1.787zm-2.1-3.219V6.641h6.992V9.5c0 1.715 1.374 3.059 2.798 3.699v4.156zM17.39 11.95c-.891-.375-2.1-1.28-2.1-2.451V6.586c.91-.146 1.652-.549 2.1-.846.447.297 1.186.7 2.1.846V9.5c0 1.17-1.21 2.08-2.1 2.45"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.885 9.499V5.57h-.35c-1.244 0-2.242-.722-2.502-.928C17.77 3.143 16.484 2 14.94 2H8.647C6.91 2 5.5 3.44 5.5 5.214v13.572C5.5 20.56 6.91 22 8.647 22h6.293c1.737 0 3.147-1.44 3.147-3.214v-3.928a.353.353 0 0 0-.35-.357c-.192 0-.348.16-.348.357v3.928c0 1.38-1.097 2.5-2.449 2.5H8.647c-1.352 0-2.449-1.12-2.449-2.5v-.357h7.346c.192 0 .349-.16.349-.357a.353.353 0 0 0-.35-.356H6.199V6.284h8.393V9.5c0 1.728 1.571 3.054 3.035 3.553l.112.036.112-.036c1.459-.499 3.035-1.82 3.035-3.553m-4.548 8.573a.707.707 0 0 0-.698-.713.707.707 0 0 0-.699.713c0 .393.314.713.699.713s.698-.32.698-.713m-1.397-12.5H6.198v-.358c0-1.38 1.097-2.5 2.449-2.5h6.293c1.182 0 2.176.863 2.4 2.007-.363.265-1.28.85-2.4.85m2.798-.266c.407.302 1.307.878 2.448.978V9.5c0 1.417-1.423 2.45-2.448 2.835-1.025-.384-2.449-1.418-2.449-2.835V6.284c1.142-.1 2.046-.68 2.449-.978"
                />
            </svg>
        );
    }
};

export default IconMobileShieldLight;
