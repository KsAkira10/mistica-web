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

const IconPlugRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.553 5.074c2.443 0 4.443 2.077 4.443 4.614L22 16.995c0 .42-.332.768-.74.768-.404 0-.74-.344-.74-.768V9.688c0-1.694-1.331-3.077-2.963-3.077s-2.963 1.387-2.963 3.077v7.697c0 2.5-2.112 4.615-4.632 4.615-2.443 0-4.443-2.077-4.443-4.615v-1.923C3.484 15.076 2 13.232 2 11.038V5.846h1.664V2.768c0-.423.34-.768.744-.768s.74.345.74.768v3.078H7.37V2.768c0-.423.332-.768.744-.768.404 0 .74.345.74.768v3.074h1.663v5.192c0 2.193-1.483 4.038-3.519 4.424v1.923c0 1.695 1.336 3.078 2.963 3.078 1.664 0 3.148-1.425 3.148-3.078V9.688c0-2.537 2-4.614 4.443-4.614M3.483 7.379v3.655c0 1.579 1.264 2.883 2.78 2.883s2.776-1.304 2.776-2.883V7.38z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.553 5.074c2.443 0 4.443 2.077 4.443 4.614L22 16.995c0 .42-.332.768-.74.768-.404 0-.74-.344-.74-.768V9.688c0-1.694-1.331-3.077-2.963-3.077s-2.963 1.387-2.963 3.077v7.697c0 2.5-2.112 4.615-4.632 4.615-2.443 0-4.443-2.077-4.443-4.615v-1.923C3.484 15.076 2 13.232 2 11.038V5.846h1.664V2.768c0-.423.34-.768.744-.768s.74.345.74.768v3.078H7.37V2.768c0-.423.332-.768.744-.768.404 0 .74.345.74.768v3.074h1.663v5.192c0 2.193-1.483 4.038-3.519 4.424v1.923c0 1.695 1.336 3.078 2.963 3.078 1.664 0 3.148-1.425 3.148-3.078V9.688c0-2.537 2-4.614 4.443-4.614M3.483 7.379v3.655c0 1.579 1.264 2.883 2.78 2.883s2.776-1.304 2.776-2.883V7.38z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.983 7.421h-.608V3.754a1.603 1.603 0 0 0-3.204 0v3.664l-2.502-.002V3.754a1.603 1.603 0 0 0-3.204 0v3.662h-.46c-.638 0-1.162.52-1.162 1.204 0 2.776 1.168 4.26 2.258 5.04v1.14c0 .865.355 1.358.647 1.613.356.327.843.501 1.437.532v3.95a.95.95 0 0 0 .95.946h1.728a.947.947 0 0 0 .946-.947v-3.95c.6-.027 1.093-.2 1.449-.531.288-.26.633-.754.633-1.614v-1.145c1.09-.785 2.257-2.264 2.257-5.003v-.07a1.17 1.17 0 0 0-1.165-1.16m-.062 1.23c0 1.944-.66 3.344-1.969 4.157a.61.61 0 0 0-.288.518v1.47c0 .331-.079.572-.236.715-.198.182-.537.221-.787.221h-3.28q-.547.001-.804-.232-.24-.211-.24-.703V13.33a.61.61 0 0 0-.292-.52c-1.294-.802-1.955-2.191-1.97-4.177l9.858.006v.01zM12.583 20.62h-1.18v-3.661h1.18zM8.686 3.754c0-.204.174-.378.381-.378.204 0 .378.174.378.378v3.661h-.759zm6.087-.378c.204 0 .378.174.378.378v3.667h-.759V3.754c0-.204.174-.378.381-.378"
                />
            </svg>
        );
    }
};

export default IconPlugRegular;
