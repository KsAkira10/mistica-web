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

const IconVideoChatFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.347 21.279c5.072 0 9.18-4.315 9.18-9.64S17.415 2 12.343 2s-9.181 4.314-9.181 9.64c0 1.433.303 2.79.836 4.015l-1.505 5.904a.36.36 0 0 0 .086.337c.063.066.15.104.235.104a.3.3 0 0 0 .086-.014l5.632-1.58a8.76 8.76 0 0 0 3.816.873M17.468 9.83l-1.722 1.808 1.722 1.809zm1.058-1.343v6.303a.55.55 0 0 1-.325.512.518.518 0 0 1-.579-.119l-2.274-2.387v2.364H7.225V8.118h8.123v2.363l2.274-2.387a.52.52 0 0 1 .579-.119c.194.086.325.29.325.513M14.29 14.05H8.287V9.228h6.003z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.347 21.279c5.072 0 9.18-4.315 9.18-9.64S17.415 2 12.343 2s-9.181 4.314-9.181 9.64c0 1.433.303 2.79.836 4.015l-1.505 5.904a.36.36 0 0 0 .086.337c.063.066.15.104.235.104a.3.3 0 0 0 .086-.014l5.632-1.58a8.76 8.76 0 0 0 3.816.873M17.468 9.83l-1.722 1.808 1.722 1.809zm1.058-1.343v6.303a.55.55 0 0 1-.325.512.518.518 0 0 1-.579-.119l-2.274-2.387v2.364H7.225V8.118h8.123v2.363l2.274-2.387a.52.52 0 0 1 .579-.119c.194.086.325.29.325.513M14.29 14.05H8.287V9.228h6.003z"
                />
            </svg>
        );
    }
};

export default IconVideoChatFilled;
