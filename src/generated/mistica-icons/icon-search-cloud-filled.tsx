/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSearchCloudFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.841 11.13c0 3.868-2.838 5.24-5.266 5.24l-.395.003a4.626 4.626 0 01-.644 1.073l3.33 3.364a.609.609 0 010 .858l-.005.005a.598.598 0 01-.846-.005l-3.337-3.365-.007-.01a.044.044 0 00-.006-.012 4.603 4.603 0 01-2.737.908A4.635 4.635 0 017.687 16.4l-1.658.003c-2.448-.249-3.874-1.87-3.874-4.339 0-2.526 1.386-3.574 2.456-4.002.19-5.62 5.404-5.908 6.465-5.908.824 0 4.866.188 6.11 3.784 2.324.216 4.655 1.67 4.655 5.19zM8.494 14.508a3.468 3.468 0 003.462 3.462 3.463 3.463 0 10-3.462-3.462z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchCloudFilled;
