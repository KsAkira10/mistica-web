/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconListDocumentLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.283 22H5V3.854C5 2.834 5.804 2 6.797 2h10.057c.988 0 1.797.83 1.797 1.854v13.33c0 .203-.161.37-.359.37a.365.365 0 01-.358-.37V3.854c0-.612-.483-1.11-1.076-1.11H6.793c-.593 0-1.076.498-1.076 1.11V21.26h12.566c.198 0 .358.165.358.37 0 .203-.16.369-.358.369z"
                    fill={fillColor}
                />
                <path
                    d="M17.566 19.407a.73.73 0 01.717-.74.73.73 0 01.717.74.73.73 0 01-.717.74.726.726 0 01-.717-.74zM7.257 6.707l1.87 1.93 3.659-3.783a.376.376 0 000-.522.345.345 0 00-.506 0L9.123 7.59l-1.36-1.403a.349.349 0 00-.506 0 .371.371 0 000 .521zm1.87 7.04l-1.87-1.93a.372.372 0 010-.521.349.349 0 01.505 0l1.36 1.403 3.158-3.256a.345.345 0 01.506 0 .376.376 0 010 .521l-3.659 3.783zm-1.87 3.333l1.87 1.929 3.659-3.783a.376.376 0 000-.522.345.345 0 00-.506 0l-3.157 3.257-1.36-1.403a.349.349 0 00-.506 0 .371.371 0 000 .521z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.39 3.571c0-.742-.586-1.42-1.224-1.42H5.846c-.638 0-1.224.678-1.221 1.42v16.846c0 .757.571 1.418 1.224 1.418l12.317.002c.652 0 1.224-.66 1.224-1.417V3.571zm-.821 0v16.85c0 .34-.24.596-.398.599l-12.33-.003c-.157 0-.398-.258-.398-.6V3.571c0-.327.263-.599.398-.599h12.33c.135 0 .398.272.398.6zM7.745 8.714a.82.82 0 110-1.64.82.82 0 010 1.64zm.821 3.28a.82.82 0 10-1.64 0 .82.82 0 001.64 0zm2.056-3.28a.412.412 0 01-.414-.409.41.41 0 01.414-.409h5.731c.23 0 .415.185.415.41a.412.412 0 01-.415.408h-5.73zm6.146 3.69a.412.412 0 00-.415-.41h-5.73a.41.41 0 00-.415.41c0 .226.187.408.414.408h5.731c.23 0 .415-.185.415-.409zm-9.023 2.873a.82.82 0 11.002 1.64.82.82 0 01-.002-1.64zm9.023 1.227a.413.413 0 00-.415-.409h-5.73a.41.41 0 00-.415.41c0 .226.187.408.414.408h5.731a.41.41 0 00.415-.409z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconListDocumentLight;
