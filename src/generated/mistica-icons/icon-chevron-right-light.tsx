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

const IconChevronRightLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.2 18.734a.79.79 0 0 0 0 1.049c.265.29.696.29.962 0l6.639-7.238A.78.78 0 0 0 17 12a.78.78 0 0 0-.2-.545l-6.638-7.238a.64.64 0 0 0-.963 0 .79.79 0 0 0 0 1.05L15.376 12z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.111 4.117a.37.37 0 0 1 .538 0l7.24 7.585c.118.124.142.31.071.46a.4.4 0 0 1-.088.14l-6.008 6.296a.377.377 0 0 1-.55 0 .42.42 0 0 1 0-.577l5.765-6.04-6.968-7.3a.41.41 0 0 1 0-.564m1.023 15.293a.577.577 0 0 0-.563-.59.577.577 0 0 0-.564.59c0 .326.252.59.564.59a.577.577 0 0 0 .563-.59"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.613 20a.58.58 0 0 1-.442-.198.644.644 0 0 1 0-.875l7.356-6.99-7.318-6.865A.635.635 0 0 1 9.17 4.2a.585.585 0 0 1 .846-.037l7.794 7.312a.645.645 0 0 1 .025.886l-.024.025-7.795 7.46a.6.6 0 0 1-.404.154"
                />
            </svg>
        );
    }
};

export default IconChevronRightLight;
