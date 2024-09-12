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

const IconCleaningRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.45 4.991h1.676V2h-6.523c-.148 0-.3.076-.411.184L7.768 4.987a.52.52 0 0 0-.076.597c.076.184.3.336.523.336h1.49v2.242H6.87v11.596A2.246 2.246 0 0 0 9.106 22h5.218a2.246 2.246 0 0 0 2.236-2.242V8.17h-2.795V6.116l.036-.076.782 1.31c.112.184.3.264.483.264.09 0 .155-.024.237-.054l.063-.022c.263-.149.335-.485.183-.785L14.543 5.07l.076-.076c.008-.004.83-.004.83-.004m-.376 14.767a.75.75 0 0 1-.746.749H9.114a.75.75 0 0 1-.747-.75V9.665h6.707zm-4.283-14.39c0-.301-.264-.561-.56-.561H9.41l1.453-1.682h5.143v.749h-1.677a.54.54 0 0 0-.447.224l-1.118 1.494a.6.6 0 0 0-.112.336V8.17h-1.86z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.45 4.991h1.676V2h-6.523c-.148 0-.3.076-.411.184L7.768 4.987a.52.52 0 0 0-.076.597c.076.184.3.336.523.336h1.49v2.242H6.87v11.596A2.246 2.246 0 0 0 9.106 22h5.218a2.246 2.246 0 0 0 2.236-2.242V8.17h-2.795V6.116l.036-.076.782 1.31c.112.184.3.264.483.264.09 0 .155-.024.237-.054l.063-.022c.263-.149.335-.485.183-.785L14.543 5.07l.076-.076c.008-.004.83-.004.83-.004m-.376 14.767a.75.75 0 0 1-.746.749H9.114a.75.75 0 0 1-.747-.75V9.665h6.707zm-4.283-14.39c0-.301-.264-.561-.56-.561H9.41l1.453-1.682h5.143v.749h-1.677a.54.54 0 0 0-.447.224l-1.118 1.494a.6.6 0 0 0-.112.336V8.17h-1.86z"
                />
            </svg>
        );
    }
};

export default IconCleaningRegular;
