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

const IconEscalatorRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.928 6.494h3.214c1.55 0 2.863 1.316 2.858 2.873a2.87 2.87 0 0 1-.841 2.017c-.494.508-1.23.804-2.017.804H17.3l-8.047 8.408a1.8 1.8 0 0 1-1.18.404H4.858C3.308 21 2 19.707 2 18.179c0-.748.302-1.463.846-2.018a2.84 2.84 0 0 1 2.012-.855h1.664l.114-.118V9.245c0-.692.32-1.298.828-1.698a2.8 2.8 0 0 1-.65-1.792C6.815 4.237 8.018 3 9.495 3s2.68 1.237 2.68 2.755c0 .687-.243 1.312-.65 1.797.513.4.833 1.006.833 1.693v.108l2.172-2.215c.42-.433.877-.644 1.399-.644m-5.18-.739c0-.705-.559-1.283-1.25-1.283-.69 0-1.247.578-1.247 1.283 0 .706.557 1.284 1.243 1.284.69 0 1.253-.578 1.253-1.284M8.071 9.25v4.486l2.858-2.92V9.249c0-.46-.466-.733-.915-.733H8.965c-.43 0-.892.258-.892.733m11.075 1.472c.393 0 .777-.146 1.001-.376.27-.278.425-.635.425-.978 0-.748-.667-1.401-1.426-1.401h-3.215c-.087 0-.196.014-.393.216l-8.422 8.6h-2.26c-.36 0-.754.165-1 .423-.275.278-.426.63-.426.978 0 .734.654 1.355 1.427 1.355h3.21c.132 0 .196-.02.283-.08l8.354-8.737z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.928 6.494h3.214c1.55 0 2.863 1.316 2.858 2.873a2.87 2.87 0 0 1-.841 2.017c-.494.508-1.23.804-2.017.804H17.3l-8.047 8.408a1.8 1.8 0 0 1-1.18.404H4.858C3.308 21 2 19.707 2 18.179c0-.748.302-1.463.846-2.018a2.84 2.84 0 0 1 2.012-.855h1.664l.114-.118V9.245c0-.692.32-1.298.828-1.698a2.8 2.8 0 0 1-.65-1.792C6.815 4.237 8.018 3 9.495 3s2.68 1.237 2.68 2.755c0 .687-.243 1.312-.65 1.797.513.4.833 1.006.833 1.693v.108l2.172-2.215c.42-.433.877-.644 1.399-.644m-5.18-.739c0-.705-.559-1.283-1.25-1.283-.69 0-1.247.578-1.247 1.283 0 .706.557 1.284 1.243 1.284.69 0 1.253-.578 1.253-1.284M8.071 9.25v4.486l2.858-2.92V9.249c0-.46-.466-.733-.915-.733H8.965c-.43 0-.892.258-.892.733m11.075 1.472c.393 0 .777-.146 1.001-.376.27-.278.425-.635.425-.978 0-.748-.667-1.401-1.426-1.401h-3.215c-.087 0-.196.014-.393.216l-8.422 8.6h-2.26c-.36 0-.754.165-1 .423-.275.278-.426.63-.426.978 0 .734.654 1.355 1.427 1.355h3.21c.132 0 .196-.02.283-.08l8.354-8.737z"
                />
            </svg>
        );
    }
};

export default IconEscalatorRegular;
