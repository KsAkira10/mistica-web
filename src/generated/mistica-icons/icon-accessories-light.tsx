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

const IconAccessoriesLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.145 5.27c0-1.809-1.45-3.27-3.225-3.27H8.529C6.745 2 5.3 3.47 5.3 5.27v13.46C5.3 20.54 6.75 22 8.525 22h5.387c1.784 0 3.225-1.47 3.225-3.27v-3.688c.327-.232.54-.61.54-1.046V8.551a2.38 2.38 0 0 0-.54-1.51V5.27zm-.54 8.738a.185.185 0 0 1-.18.184.184.184 0 0 1-.182-.184v-3.64a.537.537 0 0 0-.54-.548h-.358c-.43 0-.992-.183-1.252-.403V7.673c.268-.216.823-.404 1.252-.404.69 0 1.252.571 1.252 1.27v5.465h.008zM8.53 20.559c-.992 0-1.792-.818-1.792-1.816V5.27c0-1.006.808-1.817 1.792-1.817h5.383c.992 0 1.791.819 1.791 1.817v.942c-.118-.016-.236-.032-.358-.032-.634 0-1.744.295-2.229.95a.54.54 0 0 0-.102.331V9.65c0 .12.04.231.102.331.438.595 1.394.89 2.044.942v3.102c0 .435.213.81.54 1.046v3.689c.011.978-.8 1.8-1.788 1.8zm14.07-13.425c-.485-.65-1.595-.95-2.23-.95-1.283 0-2.33 1.062-2.33 2.363v5.457c0 .699.563 1.27 1.252 1.27s1.252-.571 1.252-1.27v-3.098c.65-.048 1.61-.347 2.044-.942a.54.54 0 0 0 .102-.331v-2.18a.44.44 0 0 0-.09-.32m-.97 2.295.005-.004v.004zm0 0c-.27.214-.821.4-1.248.4h-.358c-.291 0-.54.239-.54.546v3.641a.185.185 0 0 1-.18.184.184.184 0 0 1-.182-.184V8.551c0-.699.564-1.27 1.253-1.27.429 0 .992.184 1.252.404v1.744z"
                />
                <path
                    fill={fillColor}
                    d="M11.4 4.547H8.529a.731.731 0 0 0 0 1.461h2.87a.731.731 0 0 0 0-1.461"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.116 21.288a.71.71 0 0 1-.708.712.71.71 0 0 1-.708-.712.71.71 0 0 1 .708-.712.71.71 0 0 1 .708.712M8.496 4.144h2.131c.588 0 1.061.476 1.061 1.068s-.473 1.068-1.061 1.068h-2.13a1.06 1.06 0 0 1-1.062-1.068c0-.592.473-1.068 1.061-1.068m0 1.428h2.131a.356.356 0 0 0 0-.712h-2.13a.356.356 0 0 0 0 .712"
                />
                <path
                    fill={fillColor}
                    d="M16.662 4.86v1.716a2.13 2.13 0 0 1 1.061 1.852v5.36a1.062 1.062 0 1 1-2.123 0v-3.216c-.596 0-1.626-.268-2.059-.86a.35.35 0 0 1-.072-.212V7.356a.35.35 0 0 1 .072-.212c.441-.592 1.463-.86 2.06-.86.118 0 .242.016.353.032V4.86a2.14 2.14 0 0 0-2.13-2.144H8.141a2.14 2.14 0 0 0-2.13 2.144v13.932a2.14 2.14 0 0 0 2.13 2.144h2.131a.356.356 0 0 1 0 .712h-2.13a2.85 2.85 0 0 1-2.843-2.86V4.86C5.3 3.28 6.58 2 8.142 2h5.677a2.85 2.85 0 0 1 2.843 2.86m.004 9.284c.194 0 .353-.16.353-.356V8.42c0-.784-.636-1.424-1.415-1.424-.449 0-1.125.208-1.415.492v1.88c.29.28.966.492 1.415.492h.354c.195 0 .354.16.354.356v3.572c0 .196.159.356.354.356m5.959-7.004c-.434-.592-1.463-.86-2.06-.86a2.14 2.14 0 0 0-2.13 2.144v5.36a1.062 1.062 0 1 0 2.123 0v-3.216c.596 0 1.617-.268 2.059-.86a.35.35 0 0 0 .071-.212V7.36a.28.28 0 0 0-.063-.22M20.57 9.86h-.354a.356.356 0 0 0-.354.356v3.572a.356.356 0 0 1-.354.356.356.356 0 0 1-.354-.356v-5.36c0-.784.636-1.424 1.416-1.424.449 0 1.125.212 1.415.492v1.872c-.29.284-.966.492-1.415.492"
                />
                <path
                    fill={fillColor}
                    d="M16.308 15.928a.356.356 0 0 0-.354.356v2.504c0 .94-.628 1.788-1.53 2.056a.36.36 0 0 0 .095.704c.032 0 .063-.008.103-.016a2.865 2.865 0 0 0 2.036-2.736v-2.504a.35.35 0 0 0-.35-.364"
                />
            </svg>
        );
    }
};

export default IconAccessoriesLight;
