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

const IconTvContentLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 17.662V4H2v13.662h7.966v1.169H7.557c-.308 0-.555.26-.555.584 0 .325.247.585.555.585h8.89c.309 0 .555-.26.555-.585s-.246-.584-.554-.584h-2.41v-1.17zm-18.52-1.56V5.564h17.04v10.538zm7.59 2.734v-1.17h1.855v1.17z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.632 16.878a.366.366 0 0 0-.363-.374H2.726V5.249h18.185v7.13a.37.37 0 0 0 .363.375.37.37 0 0 0 .363-.375V4.5H2v12.753h8v1.498H7.456a.37.37 0 0 0-.363.374.37.37 0 0 0 .363.375h8.727a.37.37 0 0 0 .363-.375.37.37 0 0 0-.363-.374h-2.546v-1.498h7.633a.37.37 0 0 0 .363-.375M22 14.626c0 .413-.326.75-.726.75a.74.74 0 0 1-.726-.75c0-.412.326-.749.726-.749s.726.336.726.75m-11.278 2.627h2.183v1.498h-2.183z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.32 17.307c-1.043 0-1.842-.275-2.383-.815-.518-.522-.782-1.28-.782-2.25V8.156c0-.97.264-1.722.782-2.236.536-.532 1.337-.8 2.38-.8l13.366-.009c1.043 0 1.845.269 2.38.801.518.516.782 1.269.782 2.236v6.087c0 .97-.264 1.728-.782 2.25-.538.54-1.34.814-2.383.814zM18.686 5.653 5.32 5.661c-1.752 0-2.604.815-2.604 2.494v6.088c0 .825.21 1.453.625 1.871.429.432 1.093.65 1.979.65l13.366-.009c.883 0 1.55-.217 1.979-.649.415-.416.625-1.046.625-1.872V8.147c-.003-1.679-.852-2.494-2.604-2.494m-9.422 13.24h5.47c.153 0 .28-.122.28-.272a.277.277 0 0 0-.28-.271h-5.47a.277.277 0 0 0-.28.271c0 .15.126.272.28.272"
                />
            </svg>
        );
    }
};

export default IconTvContentLight;
