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

const IconChevronDownLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.266 8.2a.79.79 0 0 0-1.049 0 .64.64 0 0 0 0 .962l7.238 6.639c.15.137.348.204.545.199a.78.78 0 0 0 .545-.2l7.238-6.638a.642.642 0 0 0 0-.963.79.79 0 0 0-1.05 0L12 14.376z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.883 8.111a.37.37 0 0 1 0 .538l-7.585 7.24a.41.41 0 0 1-.46.071.4.4 0 0 1-.14-.088L5.402 9.864a.377.377 0 0 1 0-.55.42.42 0 0 1 .577 0l6.04 5.765 7.3-6.968a.41.41 0 0 1 .564 0M4.59 9.134c.326 0 .59-.252.59-.563a.577.577 0 0 0-.59-.564.577.577 0 0 0-.59.564c0 .31.264.563.59.563"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20 7.68a.7.7 0 0 1-.16.45l-7.314 8.658a.577.577 0 0 1-.897 0L4.178 8.129a.71.71 0 0 1 0-.939.595.595 0 0 1 .872 0l7.02 8.171 6.862-8.132a.584.584 0 0 1 .868-.005l.004.005c.114.12.185.28.196.451"
                />
            </svg>
        );
    }
};

export default IconChevronDownLight;
