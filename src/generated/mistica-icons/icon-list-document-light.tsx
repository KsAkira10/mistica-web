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

const IconListDocumentLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m7.424 7.527 2.178 2.19 4.022-4.043a.744.744 0 0 0 0-1.048.734.734 0 0 0-1.042 0l-2.98 2.996L8.466 6.48a.734.734 0 0 0-1.042 0 .744.744 0 0 0 0 1.047M9.602 14.828l-2.178-2.19a.744.744 0 0 1 0-1.048.734.734 0 0 1 1.042 0l1.136 1.142 2.98-2.996a.734.734 0 0 1 1.042 0 .744.744 0 0 1 0 1.048zM7.424 17.895l2.178 2.19 4.022-4.044a.744.744 0 0 0 0-1.047.734.734 0 0 0-1.042 0l-2.98 2.996-1.136-1.143a.734.734 0 0 0-1.042 0 .744.744 0 0 0 0 1.048"
                />
                <path
                    fill={fillColor}
                    d="M5 22V4.223C5 3.02 6.014 2 7.212 2h9.577C17.986 2 19 3.02 19 4.223V22zm1.471-1.479h11.053V4.223c0-.374-.363-.74-.736-.74H7.208c-.373 0-.736.366-.736.74z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.283 22H5V3.854C5 2.834 5.804 2 6.797 2h10.057c.988 0 1.797.83 1.797 1.854v13.33c0 .203-.161.37-.359.37a.365.365 0 0 1-.358-.37V3.854c0-.612-.483-1.11-1.076-1.11H6.793c-.593 0-1.076.498-1.076 1.11V21.26h12.566c.198 0 .358.165.358.37 0 .203-.16.369-.358.369"
                />
                <path
                    fill={fillColor}
                    d="M17.566 19.407a.73.73 0 0 1 .717-.74.73.73 0 0 1 .717.74.73.73 0 0 1-.717.74.726.726 0 0 1-.717-.74M7.257 6.707l1.87 1.93 3.659-3.783a.376.376 0 0 0 0-.522.345.345 0 0 0-.506 0L9.123 7.59l-1.36-1.403a.35.35 0 0 0-.506 0 .37.37 0 0 0 0 .521M9.127 13.747l-1.87-1.93a.37.37 0 0 1 0-.521.35.35 0 0 1 .505 0l1.36 1.403 3.158-3.256a.345.345 0 0 1 .506 0 .376.376 0 0 1 0 .521zM7.257 17.08l1.87 1.929 3.659-3.783a.376.376 0 0 0 0-.522.345.345 0 0 0-.506 0l-3.157 3.257-1.36-1.403a.35.35 0 0 0-.506 0 .37.37 0 0 0 0 .521"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.39 3.571c0-.742-.586-1.42-1.224-1.42H5.846c-.638 0-1.224.678-1.221 1.42v16.846c0 .757.571 1.418 1.224 1.418l12.317.002c.652 0 1.224-.66 1.224-1.417zm-.821 0v16.85c0 .34-.24.596-.398.599l-12.33-.003c-.157 0-.398-.258-.398-.6V3.571c0-.327.263-.599.398-.599h12.33c.135 0 .398.272.398.6M7.745 8.714a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64m.821 3.28a.82.82 0 1 0-1.64 0 .82.82 0 0 0 1.64 0m2.056-3.28a.41.41 0 0 1-.414-.409.41.41 0 0 1 .414-.409h5.731c.23 0 .415.185.415.41a.41.41 0 0 1-.415.408zm6.146 3.69a.41.41 0 0 0-.415-.41h-5.73a.41.41 0 0 0-.415.41c0 .226.187.408.414.408h5.731c.23 0 .415-.185.415-.409m-9.023 2.873a.82.82 0 1 1 .002 1.64.82.82 0 0 1-.002-1.64m9.023 1.227a.413.413 0 0 0-.415-.409h-5.73a.41.41 0 0 0-.415.41c0 .226.187.408.414.408h5.731a.41.41 0 0 0 .415-.409"
                />
            </svg>
        );
    }
};

export default IconListDocumentLight;
