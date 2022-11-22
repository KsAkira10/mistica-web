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

const IconSearchFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.711 14.884l5.62 5.896a.744.744 0 01-.004 1.012.662.662 0 01-.96 0l-5.62-5.9c-1.299 1.136-2.967 1.82-4.785 1.82-4.126 0-7.482-3.524-7.482-7.856S5.836 2 9.962 2c4.127 0 7.487 3.524 7.483 7.86 0 1.908-.652 3.66-1.734 5.024zM9.962 3.428c-3.375 0-6.122 2.884-6.122 6.428s2.747 6.428 6.122 6.428c3.376 0 6.123-2.884 6.123-6.428s-2.747-6.428-6.123-6.428z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.125 5.984a5.73 5.73 0 00-8.104 0 5.73 5.73 0 000 8.104 5.73 5.73 0 009.782-4.053 5.687 5.687 0 00-1.678-4.05z"
                    fill={fillColor}
                />
                <path
                    d="M2.175 9.984a7.846 7.846 0 007.846 7.846 7.792 7.792 0 005.138-1.918l5.697 5.697a.55.55 0 00.395.165.561.561 0 00.398-.958l-5.704-5.704A7.848 7.848 0 004.473 4.435a7.854 7.854 0 00-2.298 5.55zm12.67 4.726a.55.55 0 00-.095.094 6.728 6.728 0 01-9.485-.064A6.726 6.726 0 0110.02 3.258a6.68 6.68 0 014.793 2.006 6.725 6.725 0 01.03 9.446z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconSearchFilled;
