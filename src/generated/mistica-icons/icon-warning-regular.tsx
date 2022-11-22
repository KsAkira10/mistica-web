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

const IconWarningRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.992 17.86a1.2 1.2 0 010-2.4 1.2 1.2 0 010 2.4zm-.668-11.792h1.356V14h-1.356V6.068z"
                    fill={fillColor}
                />
                <path
                    d="M12 2c5.328 0 10 4.672 10 10s-4.672 10-10 10S2 17.328 2 12 6.672 2 12 2zm0 18.644c4.604 0 8.644-4.04 8.644-8.644S16.604 3.356 12 3.356 3.356 7.396 3.356 12s4.04 8.644 8.644 8.644z"
                    fill={fillColor}
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 6.644a.718.718 0 00-.716.716v6.784c0 .392.32.716.716.716.392 0 .716-.32.716-.716V7.36A.718.718 0 0012 6.644zm0 9.284a.892.892 0 110 1.784.892.892 0 010-1.784z"
                    fill={fillColor}
                />
                <path
                    d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12zm1.428 0c0 4.716 3.856 8.572 8.572 8.572 4.716 0 8.572-3.856 8.572-8.572 0-4.716-3.856-8.572-8.572-8.572-4.716 0-8.572 3.856-8.572 8.572z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M23 12.03C23 1.914 14.617 1.063 12.46 1.013c-.257-.01-.554-.013-.842-.013h-.2C9.21 1.019 1 1.776 1 11.964c0 10.2 8.29 10.998 10.496 11.033a12.12 12.12 0 01.344.003c.232 0 .464-.003.664-.006C14.601 22.954 23 22.167 23 12.03zm-1.374-.003c0 8.5-6.396 9.536-9.147 9.586-.194.004-.416.007-.645.007l-.322-.003c-2.749-.038-9.14-1.058-9.14-9.656 0-8.58 6.332-9.562 9.055-9.587h.191c.276 0 .56.003.808.01 2.767.065 9.2 1.139 9.2 9.643zm-9.63 3.878a.689.689 0 01-.688-.689V5.72a.689.689 0 011.377 0v9.496a.693.693 0 01-.688.689zm.787 1.718a.787.787 0 00-.786-.783.784.784 0 000 1.568H12a.788.788 0 00.783-.785z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWarningRegular;
