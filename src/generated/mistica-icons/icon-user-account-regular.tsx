/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconUserAccountRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M6.636 8.33a5.342 5.342 0 005.336 5.337 5.342 5.342 0 005.336-5.336 5.342 5.342 0 00-5.336-5.337 5.342 5.342 0 00-5.336 5.337zm1.354 0a3.987 3.987 0 013.982-3.98 3.986 3.986 0 013.982 3.98 3.986 3.986 0 01-3.982 3.982A3.987 3.987 0 017.99 8.331zM1.976 21.384h1.355l-.001-2.14.002-.079-.001-.028a.632.632 0 01.039-.182.915.915 0 01.325-.467l.049-.042c.879-.808 3.072-1.498 5.646-1.783l2.573 2.93 2.711-2.931c2.53.28 4.632.955 5.534 1.784l.049.042a.94.94 0 01.364.65v2.237h1.355v-2.22c0-.199-.034-.403-.096-.587a2.246 2.246 0 00-.778-1.14c-1.19-1.076-3.604-1.86-6.631-2.15l-.334-.031-2.148 2.323-2.041-2.324-.344.033c-3.068.293-5.588 1.097-6.754 2.15a2.24 2.24 0 00-.773 1.12 1.94 1.94 0 00-.101.606v2.229z"
                    fill={fillColor}
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.482 8.604a6.628 6.628 0 01-2.987 5.55C19.33 15.204 22 17.948 22 21.247a.748.748 0 01-.74.754.748.748 0 01-.74-.754c0-3.328-3.821-6.038-8.52-6.038s-8.52 2.71-8.52 6.038a.748.748 0 01-.74.754.748.748 0 01-.74-.754c0-3.3 2.67-6.043 6.505-7.091a6.628 6.628 0 01-2.987-5.551C5.518 4.96 8.425 2 12 2s6.482 2.961 6.482 6.604zM12 3.507c-2.76 0-5.002 2.285-5.002 5.097 0 2.807 2.242 5.092 5.002 5.092s5.002-2.28 5.002-5.092S14.76 3.507 12 3.507z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 2.25c3.342 0 5.25 1.839 5.25 5.25s-1.908 5.25-5.25 5.25c-3.26 0-5.155-1.748-5.247-4.997L6.749 7.5l.004-.253c.092-3.25 1.987-4.997 5.246-4.997zm0 1.5c-2.527 0-3.75 1.18-3.75 3.75 0 2.57 1.223 3.75 3.75 3.75 2.525 0 3.75-1.18 3.75-3.75 0-2.57-1.225-3.75-3.75-3.75zm4.188 10.505h-8.42a4.517 4.517 0 00-4.518 4.518v2.223c0 .414.335.75.75.75h16a.75.75 0 00.741-.648l.007-.11-.041-2.229c0-2.481-2.023-4.504-4.519-4.504zm-8.42 1.498h8.42a3.02 3.02 0 013.016 2.843l.032 1.651H4.748v-1.474a3.02 3.02 0 013.02-3.02z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconUserAccountRegular;
