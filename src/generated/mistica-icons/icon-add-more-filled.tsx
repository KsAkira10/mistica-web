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

const IconAddMoreFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 2a1 1 0 0 0-1 1v7.498H3.002a1.002 1.002 0 1 0 0 2.004H11V21a1 1 0 1 0 2 0v-8.498h7.998a1.002 1.002 0 1 0 0-2.004H13V3a1 1 0 0 0-1-1"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 2a1 1 0 0 0-1 1v7.498H3.002a1.002 1.002 0 1 0 0 2.004H11V21a1 1 0 1 0 2 0v-8.498h7.998a1.002 1.002 0 1 0 0-2.004H13V3a1 1 0 0 0-1-1"
                />
            </svg>
        );
    }
};

export default IconAddMoreFilled;
