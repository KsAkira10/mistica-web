/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconChipDeviceLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.64 17.826c-.504 0-.831.266-.831.834 0 .275.075.477.21.614.145.148.358.221.621.221.264 0 .477-.073.622-.221.135-.137.21-.342.21-.614-.002-.568-.33-.834-.832-.834z"
            />
            <path
                fill={fillColor}
                d="M14.232 21.834H7.047c-1.026 0-1.762-.24-2.25-.734-.487-.493-.72-1.238-.72-2.277V5.167c0-2.025.973-3.01 2.97-3.01h7.185c2.025 0 2.969.957 2.969 3.01v1.365h1.723c.619 0 1.002.383 1.002 1.002v6.746c0 .616-.386 1-1.002 1H17.2v3.543c0 1.04-.236 1.784-.723 2.277-.487.493-1.221.734-2.246.734zM16.64 5.167c0-1.742-.698-2.45-2.41-2.45H7.048c-1.69 0-2.41.733-2.41 2.45v13.656c0 .885.183 1.501.561 1.885.378.384.98.569 1.849.569h7.185c.868 0 1.473-.185 1.848-.569.376-.384.56-1 .56-1.885V15.28h-1.736c-.62 0-1.003-.384-1.003-1.003V8.445a.29.29 0 01.081-.2l1.639-1.632a.277.277 0 01.199-.081h.82V5.167zm2.283 9.552c.31 0 .442-.131.442-.442V7.532c0-.311-.132-.443-.442-.443h-2.986l-1.474 1.47v5.718c0 .31.132.442.443.442h4.017z"
            />
            <path
                fill={fillColor}
                d="M18.601 13.775h-3.375a.28.28 0 01-.28-.28V9.95a.28.28 0 01.28-.28h3.375a.28.28 0 01.28.28v3.543a.282.282 0 01-.28.283zm-.28-1.686v-.734h-2.814v.734h2.814zm-1.129-1.294v-.566h-.563v.566h.563zm-1.123 0v-.566h-.563v.566h.563zm-.56 1.854v.566h.56v-.566h-.56zm1.12 0v.566h.563v-.566h-.563zm1.692-1.854v-.566h-.568v.566h.568zm0 2.42v-.566h-.568v.566h.568z"
            />
        </svg>
    );
};

export default IconChipDeviceLight;
