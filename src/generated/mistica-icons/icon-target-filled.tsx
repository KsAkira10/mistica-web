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

const IconTargetFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.84 5.507-2.57 2.57a.55.55 0 0 1-.39.16h-2.338l-6.444 6.449a.55.55 0 0 1-.39.16.55.55 0 0 1-.39-.94l6.444-6.445v-2.34a.55.55 0 0 1 .16-.39l2.569-2.569a.54.54 0 0 1 .601-.117.55.55 0 0 1 .338.507v2.02h2.02c.22 0 .423.136.507.338a.54.54 0 0 1-.117.597m-4.425 8.784a7.68 7.68 0 0 0-1.32-4.307l-2.414 2.414c.273.573.433 1.217.433 1.893a4.41 4.41 0 0 1-4.406 4.407 4.41 4.41 0 0 1-4.406-4.407 4.41 4.41 0 0 1 4.406-4.406c.676 0 1.32.155 1.893.432l2.414-2.414a7.66 7.66 0 0 0-4.307-1.32C5.457 6.583 2 10.04 2 14.29S5.457 22 9.708 22c4.25 0 7.707-3.457 7.707-7.709M8.67 15.33a1.466 1.466 0 0 0 2.076.005l2.09-2.095a3.304 3.304 0 0 1-3.128 4.355 3.304 3.304 0 0 1-3.302-3.303 3.304 3.304 0 0 1 4.354-3.128l-2.09 2.09a1.47 1.47 0 0 0 0 2.076m10.21-9.658a.547.547 0 0 1-.549-.55v-1.24l-1.465 1.466v1.79h1.79L20.12 5.67z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.84 5.507-2.57 2.57a.55.55 0 0 1-.39.16h-2.338l-6.444 6.449a.55.55 0 0 1-.39.16.55.55 0 0 1-.39-.94l6.444-6.445v-2.34a.55.55 0 0 1 .16-.39l2.569-2.569a.54.54 0 0 1 .601-.117.55.55 0 0 1 .338.507v2.02h2.02c.22 0 .423.136.507.338a.54.54 0 0 1-.117.597m-4.425 8.784a7.68 7.68 0 0 0-1.32-4.307l-2.414 2.414c.273.573.433 1.217.433 1.893a4.41 4.41 0 0 1-4.406 4.407 4.41 4.41 0 0 1-4.406-4.407 4.41 4.41 0 0 1 4.406-4.406c.676 0 1.32.155 1.893.432l2.414-2.414a7.66 7.66 0 0 0-4.307-1.32C5.457 6.583 2 10.04 2 14.29S5.457 22 9.708 22c4.25 0 7.707-3.457 7.707-7.709M8.67 15.33a1.466 1.466 0 0 0 2.076.005l2.09-2.095a3.304 3.304 0 0 1-3.128 4.355 3.304 3.304 0 0 1-3.302-3.303 3.304 3.304 0 0 1 4.354-3.128l-2.09 2.09a1.47 1.47 0 0 0 0 2.076m10.21-9.658a.547.547 0 0 1-.549-.55v-1.24l-1.465 1.466v1.79h1.79L20.12 5.67z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.846 11.999c0-.336-.263-.6-.6-.6v-.002H19.71c-.297-6.222-5.384-7.126-7.104-7.247v-1.4a.598.598 0 1 0-1.199 0v1.375c-1.453.048-6.957.656-7.238 7.272H2.762a.598.598 0 1 0 0 1.199h1.415c.378 6.37 5.714 7.056 7.232 7.12v1.521c0 .336.264.6.6.6.327 0 .6-.264.6-.6v-1.535c1.68-.104 6.75-.944 7.094-7.104h1.544c.336 0 .6-.271.6-.599m-4.398.003c0 .327.272.6.6.6v.002h.454c-.32 4.983-4.207 5.798-5.897 5.902v-.465a.598.598 0 1 0-1.199 0v.479c-1.599-.073-5.686-.767-6.03-5.919h.585c.336 0 .6-.272.6-.6 0-.335-.264-.599-.6-.599h-.594c.258-5.375 4.48-6.025 6.04-6.064v.616c0 .336.263.6.599.6.328 0 .6-.264.6-.6v-.6c1.722.13 5.632.992 5.904 6.048h-.462c-.328 0-.6.264-.6.6m-3.386-2.193c0 .703-.193 1.24-.569 1.599q-.551.52-1.56.521c-.672 0-1.193-.177-1.552-.521-.375-.361-.568-.896-.568-1.6 0-.694.193-1.232.568-1.59q.544-.528 1.552-.527 1.009 0 1.56.526c.378.359.569.897.569 1.592m1.647 6.117v-.711c0-.67-.216-1.247-.619-1.664-.431-.454-1.078-.687-1.863-.687h-2.59c-.782 0-1.432.233-1.864.687-.4.417-.607.991-.607 1.664v.711c0 .126.112.238.24.238h7.054c.137 0 .249-.109.249-.238"
                />
            </svg>
        );
    }
};

export default IconTargetFilled;
