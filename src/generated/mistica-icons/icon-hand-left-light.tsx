/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconHandLeftLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.732 17.393a2.41 2.41 0 00-.118.774c0 1.257.79 2.036 2.065 2.036h7c.969 0 1.745-.272 2.3-.81.557-.54.865-1.378.865-2.36V9.244c0-.782-.745-1.126-1.062-1.272-.298-.137-1.265-.613-2.396-1.17l-.08-.04-.424-.208a404.652 404.652 0 00-5.223-2.537c-.854-.4-1.742-.24-2.263.41a1.789 1.789 0 00-.398 1.13c.003.44.154.866.432 1.208.29.364.694.67 1.271 1.008l-7.428.003c-1.348.087-2.118.863-2.118 2.13 0 1.316.83 2.133 2.16 2.136h2.904c-.058.208-.09.437-.09.684 0 1.003.505 1.703 1.354 1.944a2.506 2.506 0 00-.118.776c0 1.005.51 1.708 1.367 1.947zm10.67 1.418c-.398.386-.98.58-1.729.58l-6.991-.003c-.824 0-1.241-.412-1.241-1.224a1.62 1.62 0 01.075-.518.807.807 0 00-.056-.64.821.821 0 00-.504-.4c-.51-.143-.767-.535-.767-1.165a1.641 1.641 0 01.075-.52.819.819 0 00-.555-1.04c-.504-.143-.758-.535-.758-1.163 0-.17.02-.327.058-.465a.803.803 0 00.031-.218.818.818 0 00-.82-.812H4.316c-.876 0-1.338-.457-1.338-1.32 0-.53.137-1.238 1.347-1.316H11.7c.37 0 .695-.247.793-.6a.811.811 0 00-.373-.916c-.526-.308-.84-.551-1.047-.812a1.124 1.124 0 01-.255-.703c0-.23.075-.448.218-.625.278-.347.765-.414 1.266-.179 1.449.678 3.77 1.82 5.636 2.74 1.118.551 2.177 1.07 2.496 1.218.42.193.586.345.586.535v7.787c0 .762-.222 1.392-.62 1.779z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHandLeftLight;
