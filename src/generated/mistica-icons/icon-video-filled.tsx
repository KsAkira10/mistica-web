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

const IconVideoFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path fill={fillColor} d="m16.644 12-7.322 4.246V7.754z" />
                <path
                    fill={fillColor}
                    d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2m5.983 10.462L9.057 17.64a.5.5 0 0 1-.27.073.543.543 0 0 1-.535-.54V6.823c0-.192.1-.37.27-.466a.53.53 0 0 1 .535 0l8.926 5.178a.537.537 0 0 1 0 .928"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path fill={fillColor} d="m16.644 12-7.322 4.246V7.754z" />
                <path
                    fill={fillColor}
                    d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2m5.983 10.462L9.057 17.64a.5.5 0 0 1-.27.073.543.543 0 0 1-.535-.54V6.823c0-.192.1-.37.27-.466a.53.53 0 0 1 .535 0l8.926 5.178a.537.537 0 0 1 0 .928"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.828 6.682s.286-3.698-3.639-3.698l-12.428.003s-.073-.005-.196-.005c-.754 0-3.41.243-3.41 3.678 0 4.002.003 10.66.003 10.66s-.246 3.684 3.617 3.684h12.417s.12.017.314.017c.882 0 3.325-.308 3.325-3.72 0-4.162-.003-10.619-.003-10.619M3.399 6.399c.073-1.294.639-1.68.838-1.807.333-.215.706-.297.991-.33v2.137zm15.359 13.356v-2.101h1.832c-.037.74-.286 1.977-1.832 2.1M3.394 17.67h1.834v2.047q-.824-.113-1.266-.58c-.431-.462-.54-1.112-.568-1.467M20.598 6.385h-1.837v-2.11c.56.08.991.275 1.283.592.45.487.537 1.182.554 1.518m0 10.02h-1.84v-2.087h1.84zm-1.84-6.681V7.637h1.84v2.087zm1.84 3.339h-1.84v-2.087h1.84zM3.385 16.419v-2.087h1.84v2.087zm1.843-6.687H3.385v-2.08h1.843zm-1.843 1.253h1.84v2.092h-1.84zm6.356 3.599V9.42l4.39 2.583zm-.308-6.787 6.238 3.664c.19.112.305.319.305.543a.63.63 0 0 1-.308.543l-6.235 3.664a.61.61 0 0 1-.616 0 .62.62 0 0 1-.308-.54V8.34a.63.63 0 0 1 .308-.544.61.61 0 0 1 .616 0"
                />
            </svg>
        );
    }
};

export default IconVideoFilled;
