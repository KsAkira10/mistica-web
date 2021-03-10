/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconRewindLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.988 2.15c3.14 0 5.574.812 7.238 2.417 1.725 1.664 2.602 4.163 2.602 7.423.003 6.435-3.4 9.838-9.84 9.838-6.435 0-9.838-3.4-9.838-9.838 0-6.437 3.4-9.84 9.838-9.84zm0 .56c-6.155 0-9.278 3.123-9.278 9.28 0 6.154 3.12 9.278 9.278 9.278 6.16 0 9.28-3.12 9.28-9.278.002-6.16-3.12-9.28-9.28-9.28zm-.737 5.423c.087.05.143.143.143.244l-.002 3.177a.275.275 0 01.1-.104l5.507-3.308a.277.277 0 01.283-.003c.086.05.143.143.143.243v6.586a.278.278 0 01-.28.28.288.288 0 01-.143-.04l-5.507-3.276a.284.284 0 01-.103-.107l.002 3.137a.28.28 0 01-.143.244.251.251 0 01-.135.04.288.288 0 01-.142-.04l-5.51-3.28a.28.28 0 01-.003-.482l5.507-3.308a.277.277 0 01.283-.003zm5.613.745l-4.68 2.813 4.68 2.787v-5.6zm-6.03-.005l-4.681 2.812 4.68 2.787v-5.6z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRewindLight;
