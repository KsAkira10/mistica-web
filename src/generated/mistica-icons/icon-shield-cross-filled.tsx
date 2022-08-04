/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconShieldCrossFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M4 4.752v5.872h7.45V2c-.907.742-3.676 2.752-7.087 2.752H4zm16 0v5.872h-7.45V2c.907.742 3.676 2.752 7.087 2.752H20zm-7.456 6.97V22C15.863 20.877 20 18.919 20 14.659v-2.936h-7.456zm-8.544 0h7.456v10.273C7.886 20.788 4 18.858 4 14.658v-2.935z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.666 3.662c-1.073.731-1.925 1.311-3.527 1.053a.615.615 0 00-.524.11.637.637 0 00-.232.49v.03c0 .36-.004 3.194.132 5.855h7.874V2.155c-1.7.143-2.77.86-3.723 1.507zM20.61 5.348v-.03c-.003-.026-.006-.05-.006-.079a.636.636 0 00-.725-.53c-1.62.256-2.477-.316-3.552-1.047-.953-.647-2.023-1.364-3.723-1.507v9.048h7.877c.132-2.66.13-5.492.129-5.855zM12.604 21.84v-9.395h7.804c-.062.891-.14 1.715-.246 2.345v.003c-.558 3.271-6.014 6.263-7.558 7.047zM3.59 12.443c.065.894.143 1.718.252 2.348.555 3.274 6.006 6.266 7.55 7.047v-9.395H3.59z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconShieldCrossFilled;
