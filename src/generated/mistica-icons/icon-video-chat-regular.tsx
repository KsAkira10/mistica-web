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

const IconVideoChatRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.343 2C7.28 2 3.164 6.323 3.164 11.632c0 1.354.262 2.657.776 3.881L2.495 21.08a.76.76 0 0 0 .177.707.68.68 0 0 0 .67.19L8.64 20.46a8.7 8.7 0 0 0 3.698.814c5.064 0 9.179-4.323 9.179-9.632 0-5.31-4.11-9.642-9.175-9.642m0 17.818a7.4 7.4 0 0 1-3.339-.787.68.68 0 0 0-.479-.046l-4.372 1.251 1.193-4.588a.76.76 0 0 0-.044-.502 8.46 8.46 0 0 1-.75-3.504c0-4.51 3.499-8.18 7.796-8.18 4.296 0 7.795 3.67 7.795 8.18-.004 4.504-3.503 8.176-7.8 8.176M16.72 8.017c.2-.2.496-.256.75-.14a.73.73 0 0 1 .416.66v5.817a.73.73 0 0 1-.417.666.672.672 0 0 1-.75-.135l-1.777-1.754v1.954H6.627V7.817h8.315V9.77zm-3.162 5.616V9.268H8.015v4.365zm1.703-2.177 1.242 1.223v-2.447z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.343 2C7.28 2 3.164 6.323 3.164 11.632c0 1.354.262 2.657.776 3.881L2.495 21.08a.76.76 0 0 0 .177.707.68.68 0 0 0 .67.19L8.64 20.46a8.7 8.7 0 0 0 3.698.814c5.064 0 9.179-4.323 9.179-9.632 0-5.31-4.11-9.642-9.175-9.642m0 17.818a7.4 7.4 0 0 1-3.339-.787.68.68 0 0 0-.479-.046l-4.372 1.251 1.193-4.588a.76.76 0 0 0-.044-.502 8.46 8.46 0 0 1-.75-3.504c0-4.51 3.499-8.18 7.796-8.18 4.296 0 7.795 3.67 7.795 8.18-.004 4.504-3.503 8.176-7.8 8.176M16.72 8.017c.2-.2.496-.256.75-.14a.73.73 0 0 1 .416.66v5.817a.73.73 0 0 1-.417.666.672.672 0 0 1-.75-.135l-1.777-1.754v1.954H6.627V7.817h8.315V9.77zm-3.162 5.616V9.268H8.015v4.365zm1.703-2.177 1.242 1.223v-2.447z"
                />
            </svg>
        );
    }
};

export default IconVideoChatRegular;
