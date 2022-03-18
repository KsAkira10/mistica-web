/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconHospitalLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.843 6.246c0-.252-.043-1.076-.589-1.076h-2.526V3.358c0-.63-.544-1.202-1.143-1.202H6.42c-.6 0-1.143.572-1.143 1.202V5.17H2.744c-.546 0-.588.824-.588 1.076V20.77c0 .325.056 1.075.588 1.075h18.51c.532 0 .588-.75.588-1.075V6.246zM17.91 21.022V3.36c0-.185-.19-.381-.328-.381H6.417c-.135 0-.325.199-.325.38v17.665H9.12v-6.888c0-.227.182-.41.409-.41h4.947c.224 0 .408.186.408.41v6.888h3.026v-.003zm3.117-.255V6.243a1.33 1.33 0 00-.022-.255h-2.26c-.012.07-.02.157-.02.255v14.779h2.283v-.005a1.94 1.94 0 00.02-.25zm-6.96.255H9.935v-6.48h4.132v6.48zM2.97 20.767c0 .1.009.188.02.255h2.283v-1.02a.018.018 0 00-.002-.007V6.246c0-.098-.01-.185-.02-.255H2.99c-.011.07-.022.157-.022.255v14.52h.002zM15.08 8.758c.056 0 .106-.039.114-.058l-.002-1.474a.155.155 0 00-.11-.05h-1.89a.41.41 0 01-.41-.41V4.874c0-.056-.038-.106-.055-.115l-1.482.003-.006.017a.212.212 0 00-.025.093v1.896a.408.408 0 01-.409.409H8.918c-.059 0-.1.036-.106.05l.003 1.496.01.005c.016.008.05.026.093.026h1.888c.224 0 .41.185.41.409v1.896c0 .059.036.101.05.107l1.492-.003.005-.01c.01-.016.03-.05.03-.094l-.006-1.896a.409.409 0 01.408-.412h1.886v.008zm.924-1.551c0-.451-.431-.852-.924-.852h-1.482V4.873c0-.495-.398-.93-.849-.93h-1.504c-.462 0-.849.426-.849.93v1.485H8.918c-.498 0-.921.39-.921.851v1.513c0 .462.423.852.921.852h1.48v1.487c0 .501.389.924.848.924h1.51c.46 0 .848-.423.848-.924l-.002-1.485h1.479c.493 0 .924-.397.924-.851V7.207z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHospitalLight;
