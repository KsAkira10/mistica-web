/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTrophyLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.79 3.07h1.427c.983 0 1.788.8 1.783 1.787v3.214a3.576 3.576 0 01-3.456 3.566 7.125 7.125 0 01-1.157 2.29.356.356 0 01-.498.073.352.352 0 01-.073-.498c.535-.727 1.193-1.888 1.257-3.305V2.713H5.931v7.205c0 3.314 2.725 6.011 6.071 6.011.499 0 1.006-.068 1.518-.201a.357.357 0 01.178.69c-.448.115-.9.188-1.344.21v1.44h1.788c.128 0 .247.07.31.183l1.788 3.214c.06.114.06.247-.005.357a.353.353 0 01-.306.178H8.071a.36.36 0 01-.311-.535l1.787-3.214a.35.35 0 01.311-.182h1.788v-1.445c-3.113-.165-5.678-2.405-6.29-5.349A3.57 3.57 0 012 7.715V4.856A1.79 1.79 0 013.787 3.07h1.431v-.713c0-.197.16-.357.357-.357h12.86c.196 0 .356.16.356.357v.713zm-3.464 18.212l-1.39-2.5h-3.867l-1.39 2.5h6.647zM5.246 10.558a7.299 7.299 0 01-.032-.636V3.787H3.787c-.59 0-1.07.48-1.07 1.07V7.71a2.869 2.869 0 002.529 2.848zm13.463.356a2.862 2.862 0 002.578-2.843h-.005V4.853c0-.59-.48-1.07-1.07-1.07h-1.426v6.432a6.07 6.07 0 01-.078.7zm-3.136 3.584a.714.714 0 010 1.427.714.714 0 010-1.427z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.983 2.563v.381c1.874.036 3.854 1.118 3.86 4.056 0 2.966-2.036 4.056-3.938 4.084h-.11c-.086 0-.17 0-.243-.003a3.932 3.932 0 01-.7-.081.286.286 0 01-.051-.023.502.502 0 00-.028-.013c-.829 1.428-2.196 2.285-4.358 2.417v3.924c2.417.152 3.756 1.589 3.756 4.118v.003a.414.414 0 01-.417.412H8.238a.414.414 0 01-.417-.415c0-2.527 1.336-3.964 3.756-4.118v-3.907c-2.35-.056-3.807-.888-4.68-2.359-.342.04-.653.045-.765.045H6.09C4.185 11.056 2.15 9.966 2.15 7c0-2.76 1.748-3.871 3.513-4.028v-.409c0-.23.188-.415.417-.412h11.49a.411.411 0 01.414.412zm-5.961 10.01l.006.001c3.717-.075 5.064-2.221 5.12-8.092.003-.09.003-.967.003-1.504H6.501V4.29c.026 6.118 1.418 8.289 5.322 8.289.02 0 .038 0 .057-.002l.061-.001.02-.005c.01-.003.02-.006.03-.006.01 0 .019.003.027.005l.004.001zm5.866-2.315c.935-.014 3.115-.362 3.115-3.258 0-2.83-2.062-3.207-3.02-3.232v.717c-.022 2.28-.23 4.23-.849 5.725.143.025.286.04.432.045.092.003.213.005.322.003zM8.667 21.01h6.655c-.131-1.955-1.224-2.907-3.328-2.907-2.106 0-3.196.952-3.327 2.907zM6.1 10.258l.056-.002c.068-.001.193-.003.342-.012-.625-1.521-.824-3.535-.835-5.95V3.79C4.627 3.9 2.986 4.473 2.986 7c0 2.896 2.176 3.244 3.115 3.258z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTrophyLight;
