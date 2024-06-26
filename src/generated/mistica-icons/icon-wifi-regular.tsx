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

const IconWifiRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.286 12.356a.7.7 0 0 1-.5-.215C18.392 9.748 15.288 8.428 12 8.428s-6.392 1.323-8.786 3.713a.69.69 0 0 1-1 0 .69.69 0 0 1 0-1C4.856 8.463 8.321 7 12 7s7.144 1.465 9.786 4.142c.285.285.285.75 0 1a.7.7 0 0 1-.5.214"
                />
                <path
                    fill={fillColor}
                    d="M5.213 14.855a.7.7 0 0 1-.5-.214.69.69 0 0 1 0-1 10.175 10.175 0 0 1 14.57 0c.286.286.286.751 0 1-.285.285-.75.285-1 0A8.7 8.7 0 0 0 12 11.999c-2.39 0-4.607.928-6.284 2.642-.108.143-.323.214-.503.214"
                />
                <path
                    fill={fillColor}
                    d="M7.213 17.174c.143.109.32.18.5.18s.394-.071.534-.18c.928-1 2.285-1.57 3.75-1.57 1.428 0 2.82.57 3.785 1.57.248.286.714.286 1 0 .285-.248.285-.714 0-1-1.214-1.285-2.963-1.999-4.785-1.999-1.894 0-3.607.714-4.821 2a.725.725 0 0 0 .037 1"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.287 12.173a.68.68 0 0 1-.5-.229c-2.392-2.533-5.5-3.931-8.789-3.931s-6.389 1.402-8.785 3.931c-.284.301-.716.301-1 0a.765.765 0 0 1 0-1.059C4.857 8.051 8.322 6.5 12.002 6.5s7.145 1.55 9.785 4.385c.284.301.284.797 0 1.06a.68.68 0 0 1-.5.228"
                />
                <path
                    fill={fillColor}
                    d="M5.213 14.821a.68.68 0 0 1-.5-.229.765.765 0 0 1 0-1.059c1.928-2.08 4.537-3.254 7.289-3.254s5.356 1.17 7.285 3.254c.284.301.284.797 0 1.06-.284.3-.752.3-1 0-1.68-1.814-3.893-2.801-6.285-2.801s-4.608.983-6.285 2.8c-.108.153-.324.23-.504.23"
                />
                <path
                    fill={fillColor}
                    d="M7.214 17.274a.82.82 0 0 0 .5.191c.18 0 .396-.072.532-.19.928-1.06 2.288-1.666 3.752-1.666 1.428 0 2.82.606 3.784 1.665.248.301.716.301 1 0 .285-.262.285-.758 0-1.059-1.212-1.36-2.96-2.118-4.784-2.118-1.892 0-3.608.758-4.82 2.118a.804.804 0 0 0 .036 1.06"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.287 12.173a.68.68 0 0 1-.5-.229c-2.392-2.533-5.5-3.931-8.789-3.931s-6.389 1.402-8.785 3.931c-.284.301-.716.301-1 0a.765.765 0 0 1 0-1.059C4.857 8.051 8.322 6.5 12.002 6.5s7.145 1.55 9.785 4.385c.284.301.284.797 0 1.06a.68.68 0 0 1-.5.228"
                />
                <path
                    fill={fillColor}
                    d="M5.213 14.821a.68.68 0 0 1-.5-.229.765.765 0 0 1 0-1.059c1.928-2.08 4.537-3.254 7.289-3.254s5.356 1.17 7.285 3.254c.284.301.284.797 0 1.06-.284.3-.752.3-1 0-1.68-1.814-3.893-2.801-6.285-2.801s-4.608.983-6.285 2.8c-.108.153-.324.23-.504.23"
                />
                <path
                    fill={fillColor}
                    d="M7.214 17.274a.82.82 0 0 0 .5.191c.18 0 .396-.072.532-.19.928-1.06 2.288-1.666 3.752-1.666 1.428 0 2.82.606 3.784 1.665.248.301.716.301 1 0 .285-.262.285-.758 0-1.059-1.212-1.36-2.96-2.118-4.784-2.118-1.892 0-3.608.758-4.82 2.118a.804.804 0 0 0 .036 1.06"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.725 8.802a.561.561 0 0 1-.395-.955l.017-.02a13.8 13.8 0 0 1 4.348-2.924 13.6 13.6 0 0 1 5.347-1.081c1.84 0 3.63.358 5.317 1.067a13.6 13.6 0 0 1 4.305 2.871.56.56 0 0 1 .005.793.56.56 0 0 1-.792.006 12.56 12.56 0 0 0-8.835-3.616c-1.706 0-3.356.333-4.91.99A12.6 12.6 0 0 0 3.137 8.62l-.017.017a.56.56 0 0 1-.395.165"
                />
                <path
                    fill={fillColor}
                    d="M4.804 11.704a.56.56 0 0 0 .79-.005l.011-.012a9.1 9.1 0 0 1 2.863-1.93 9.05 9.05 0 0 1 3.571-.725c1.224 0 2.415.238 3.535.711a9 9 0 0 1 2.835 1.888.561.561 0 0 0 .784-.8 10.19 10.19 0 0 0-7.154-2.919c-1.392 0-2.742.274-4.011.815a10.3 10.3 0 0 0-3.21 2.165l-.02.02a.56.56 0 0 0 .006.792M7.272 14.758a.56.56 0 0 0 .792-.003 5.58 5.58 0 0 1 3.97-1.645c.756 0 1.493.149 2.184.443a5.6 5.6 0 0 1 1.72 1.14.561.561 0 0 0 .782-.804 6.724 6.724 0 0 0-4.686-1.896c-.928 0-1.83.185-2.675.552a6.7 6.7 0 0 0-2.087 1.42.56.56 0 0 0 0 .793M11.997 20.186c-.67 0-1.201-.185-1.582-.552-.395-.38-.597-.93-.597-1.627 0-.698.202-1.247.597-1.628.38-.367.913-.552 1.582-.552.67 0 1.202.185 1.583.552.395.381.596.93.596 1.628s-.201 1.246-.596 1.627c-.378.367-.91.552-1.583.552m0-3.238c-.75 0-1.059.308-1.059 1.059s.308 1.059 1.06 1.059c.75 0 1.058-.308 1.058-1.06q0-.575-.255-.82-.244-.239-.804-.238"
                />
            </svg>
        );
    }
};

export default IconWifiRegular;
