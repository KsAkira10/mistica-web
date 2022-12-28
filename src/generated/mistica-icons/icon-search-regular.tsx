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

const IconSearchRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.786 20.786l-5.893-5.893a7.84 7.84 0 001.821-5.036C17.714 5.536 14.18 2 9.857 2 5.536 2 2 5.536 2 9.857c0 4.322 3.536 7.857 7.857 7.857a7.84 7.84 0 005.036-1.821l5.893 5.893a.705.705 0 00.5.214.705.705 0 00.5-.214.69.69 0 000-1zM3.429 9.857c0-3.536 2.892-6.428 6.428-6.428s6.429 2.892 6.429 6.428-2.893 6.429-6.429 6.429c-3.536 0-6.428-2.893-6.428-6.429z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.701 14.884l5.62 5.896a.744.744 0 01-.004 1.012.662.662 0 01-.96 0l-5.62-5.9c-1.299 1.136-2.967 1.82-4.785 1.82-4.126 0-7.482-3.524-7.482-7.856S5.826 2 9.952 2c4.127 0 7.487 3.524 7.483 7.86 0 1.908-.651 3.66-1.733 5.024zM9.953 3.428c-3.375 0-6.122 2.884-6.122 6.428s2.747 6.428 6.122 6.428c3.376 0 6.123-2.884 6.123-6.428s-2.747-6.428-6.123-6.428z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.021 17.83A7.846 7.846 0 014.472 4.435a7.848 7.848 0 0111.473 10.677l5.704 5.704a.561.561 0 01-.793.793l-5.697-5.697a7.792 7.792 0 01-5.138 1.918zm0-14.571A6.726 6.726 0 005.265 14.74a6.728 6.728 0 009.512-.036 6.724 6.724 0 000-9.473 6.672 6.672 0 00-4.756-1.972z"
                />
            </svg>
        );
    }
};

export default IconSearchRegular;
