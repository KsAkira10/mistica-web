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

const IconNoTicketsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 14.668a.63.63 0 0 1-.182.443l-2.407 2.407a.627.627 0 0 1-.89.003.69.69 0 0 0-.975 0 .69.69 0 0 0 0 .975.63.63 0 0 1 0 .886l-2.428 2.432a.63.63 0 0 1-.89.004l-4.12-4.125h3.942c.736 0 1.379-.354 1.718-.947.343-.592.328-1.325-.036-1.96l-4.25-7.397c-.368-.639-.993-1.018-1.678-1.018-.686 0-1.315.383-1.679 1.018l-3.036 5.282-2.903-2.903a.627.627 0 0 1-.004-.886L4.611 6.45a.627.627 0 0 1 .886 0c.26.26.714.26.974 0a.69.69 0 0 0 0-.975.624.624 0 0 1-.007-.879l2.418-2.421a.643.643 0 0 1 .886 0l12.046 12.05a.62.62 0 0 1 .186.443m-11.754-1.804v-1.928a.447.447 0 0 0-.892 0v1.928a.447.447 0 0 0 .892 0m.115 1.515a.566.566 0 0 0-1.129 0 .566.566 0 0 0 1.129 0m4.614 1.896c.179-.307.164-.682-.04-1.032l-4.256-7.41c-.2-.35-.522-.554-.875-.554-.354 0-.672.2-.875.553l-4.258 7.41c-.2.35-.214.73-.039 1.033.179.307.51.482.914.482h8.511c.407 0 .74-.175.918-.482M9.804 8.821l3.839 6.686H5.96z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 14.668a.63.63 0 0 1-.182.443l-2.407 2.407a.627.627 0 0 1-.89.003.69.69 0 0 0-.975 0 .69.69 0 0 0 0 .975.63.63 0 0 1 0 .886l-2.428 2.432a.63.63 0 0 1-.89.004l-4.12-4.125h3.942c.736 0 1.379-.354 1.718-.947.343-.592.328-1.325-.036-1.96l-4.25-7.397c-.368-.639-.993-1.018-1.678-1.018-.686 0-1.315.383-1.679 1.018l-3.036 5.282-2.903-2.903a.627.627 0 0 1-.004-.886L4.611 6.45a.627.627 0 0 1 .886 0c.26.26.714.26.974 0a.69.69 0 0 0 0-.975.624.624 0 0 1-.007-.879l2.418-2.421a.643.643 0 0 1 .886 0l12.046 12.05a.62.62 0 0 1 .186.443m-11.754-1.804v-1.928a.446.446 0 1 0-.892 0v1.928a.446.446 0 1 0 .892 0m.115 1.515a.566.566 0 0 0-1.129 0 .566.566 0 0 0 1.129 0m4.614 1.896c.179-.307.164-.682-.04-1.032l-4.256-7.41c-.2-.35-.522-.554-.875-.554-.354 0-.672.2-.875.553l-4.258 7.41c-.2.35-.214.73-.039 1.033.179.307.51.482.914.482h8.511c.407 0 .74-.175.918-.482M9.804 8.821l3.839 6.686H5.96z"
                />
            </svg>
        );
    }
};

export default IconNoTicketsFilled;
