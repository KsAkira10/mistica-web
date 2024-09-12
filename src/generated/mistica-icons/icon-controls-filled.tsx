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

const IconControlsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.523 13.995V2.528c0-.28-.24-.528-.52-.528a.537.537 0 0 0-.522.528v11.467a2.28 2.28 0 0 0-1.733 2.211 2.28 2.28 0 0 0 1.733 2.211v3.051c0 .28.24.528.521.528a.537.537 0 0 0 .521-.528v-3.05a2.28 2.28 0 0 0 1.733-2.212c0-1.055-.73-1.967-1.733-2.21m6.925-4.806a2.25 2.25 0 0 0-1.733-2.211v-4.45c0-.28-.241-.528-.522-.528a.537.537 0 0 0-.52.528v4.454a2.28 2.28 0 0 0-1.734 2.211 2.28 2.28 0 0 0 1.733 2.211v10.068c0 .28.241.528.521.528a.537.537 0 0 0 .521-.528V11.4a2.25 2.25 0 0 0 1.734-2.21m-10.38 0a2.25 2.25 0 0 0-1.733-2.211v-4.45c0-.28-.24-.528-.52-.528a.537.537 0 0 0-.522.528v4.454A2.28 2.28 0 0 0 4.56 9.193a2.28 2.28 0 0 0 1.733 2.211v10.068c0 .28.24.528.521.528a.537.537 0 0 0 .521-.528V11.4a2.25 2.25 0 0 0 1.733-2.21"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.523 13.995V2.528c0-.28-.24-.528-.52-.528a.537.537 0 0 0-.522.528v11.467a2.28 2.28 0 0 0-1.733 2.211 2.28 2.28 0 0 0 1.733 2.211v3.051c0 .28.24.528.521.528a.537.537 0 0 0 .521-.528v-3.05a2.28 2.28 0 0 0 1.733-2.212c0-1.055-.73-1.967-1.733-2.21m6.924-4.806a2.25 2.25 0 0 0-1.733-2.211v-4.45c0-.28-.24-.528-.52-.528a.537.537 0 0 0-.522.528v4.454a2.28 2.28 0 0 0-1.733 2.211 2.28 2.28 0 0 0 1.733 2.211v10.068c0 .28.241.528.521.528a.537.537 0 0 0 .521-.528V11.4a2.25 2.25 0 0 0 1.733-2.21m-10.379 0a2.25 2.25 0 0 0-1.733-2.211v-4.45c0-.28-.24-.528-.521-.528a.537.537 0 0 0-.521.528v4.454A2.28 2.28 0 0 0 4.56 9.193a2.28 2.28 0 0 0 1.733 2.211v10.068c0 .28.24.528.521.528a.537.537 0 0 0 .521-.528V11.4a2.25 2.25 0 0 0 1.733-2.21"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.797 6.284a.597.597 0 0 1-.602-.591c0-.325.269-.588.602-.588h1.05q.104-.519.396-.984a3 3 0 0 1 1.88-1.3 3.02 3.02 0 0 1 2.265.382 2.91 2.91 0 0 1 1.328 1.84q.004.019.004.037 0 .012.002.025h11.504c.33 0 .602.266.602.59a.597.597 0 0 1-.602.592H9.725c-.07.35-.205.68-.398.98a2.97 2.97 0 0 1-1.88 1.3 3.02 3.02 0 0 1-2.266-.381 2.94 2.94 0 0 1-1.328-1.84.2.2 0 0 1-.006-.042l-.002-.02zm18.406 5.132c.334 0 .603.263.603.59a.595.595 0 0 1-.603.589h-1.08c-.278 1.342-1.494 2.356-2.945 2.356s-2.664-1.014-2.944-2.356H2.772a.597.597 0 0 1-.602-.591c0-.325.269-.591.602-.591h11.46c.28-1.342 1.493-2.356 2.944-2.356s2.666 1.014 2.944 2.356h1.083zm.6 6.887a.595.595 0 0 0-.602-.59l-8.782.002c-.28-1.341-1.493-2.355-2.944-2.355s-2.664 1.014-2.944 2.355H2.772a.595.595 0 0 0-.602.588c.003.331.274.594.602.592h3.76c.28 1.341 1.492 2.355 2.943 2.355s2.664-1.014 2.944-2.355h8.782a.597.597 0 0 0 .602-.591"
                />
            </svg>
        );
    }
};

export default IconControlsFilled;
