/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconControlsFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.963 13.995V2.528c0-.28-.24-.528-.52-.528a.537.537 0 00-.522.528v11.467a2.281 2.281 0 00-1.733 2.211 2.28 2.28 0 001.733 2.211v3.051c0 .28.241.528.521.528a.537.537 0 00.521-.528v-3.05a2.281 2.281 0 001.733-2.212 2.28 2.28 0 00-1.733-2.21zm6.925-4.806a2.253 2.253 0 00-1.733-2.211v-4.45A.538.538 0 0017.633 2a.537.537 0 00-.52.528v4.454a2.281 2.281 0 00-1.734 2.211 2.28 2.28 0 001.733 2.211v10.068c0 .28.241.528.521.528a.537.537 0 00.522-.528V11.4a2.253 2.253 0 001.733-2.21zm-10.38 0a2.253 2.253 0 00-1.733-2.211v-4.45c0-.28-.24-.528-.52-.528a.537.537 0 00-.522.528v4.454A2.281 2.281 0 005 9.193a2.28 2.28 0 001.733 2.211v10.068c0 .28.24.528.521.528a.537.537 0 00.521-.528V11.4a2.253 2.253 0 001.733-2.21z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2.627 6.374a.597.597 0 01-.602-.591c0-.325.27-.588.602-.588h1.05a2.89 2.89 0 01.396-.984 2.996 2.996 0 011.88-1.3 3.022 3.022 0 012.265.382 2.912 2.912 0 011.328 1.84c.006.02.003.042.006.062h11.504c.33 0 .602.266.602.59a.597.597 0 01-.602.592H9.555c-.07.35-.205.68-.398.98a2.967 2.967 0 01-1.88 1.3 3.022 3.022 0 01-2.266-.381 2.938 2.938 0 01-1.328-1.84c-.005-.02-.005-.04-.008-.062H2.627zm18.407 5.132c.333 0 .602.263.602.59a.595.595 0 01-.602.589h-1.082c-.277 1.342-1.493 2.356-2.944 2.356-1.45 0-2.663-1.014-2.944-2.356H2.602A.597.597 0 012 12.094c0-.325.269-.591.602-.591h11.46c.28-1.342 1.493-2.356 2.944-2.356 1.45 0 2.666 1.014 2.944 2.356h1.084v.003zm-.003 6.297c.333 0 .602.263.602.59a.597.597 0 01-.602.592h-8.782c-.28 1.341-1.493 2.355-2.944 2.355-1.45 0-2.664-1.014-2.944-2.355H2.602A.597.597 0 012 18.394c0-.325.269-.589.602-.589h3.76c.28-1.341 1.492-2.355 2.943-2.355s2.664 1.014 2.944 2.355l8.782-.002z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconControlsFilled;
