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

const IconTkRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.99 3.357c-5.728 0-8.633 2.908-8.633 8.639 0 5.728 2.905 8.633 8.633 8.633 5.731 0 8.639-2.905 8.639-8.633 0-5.731-2.908-8.639-8.639-8.639zm0 18.48c-6.437 0-9.84-3.404-9.84-9.841 0-6.443 3.403-9.846 9.84-9.846 6.443 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84zm-.308-14.609a.404.404 0 01.392.49L12 8.064a.401.401 0 01-.392.314h-2.38v7.98a.403.403 0 01-.403.404h-.38a.402.402 0 01-.404-.404v-7.98H5.609a.403.403 0 01-.403-.403V7.63c0-.221.18-.403.403-.403h6.073v.002zm7.04 8.92a.404.404 0 01-.345.61h-.434a.402.402 0 01-.345-.196l-2.585-4.325-1.031 1.286v2.831c0 .222-.18.404-.403.404h-.381a.402.402 0 01-.404-.404V7.63c0-.221.18-.403.404-.403h.38c.225 0 .404.179.404.403v4.064l3.429-4.316a.405.405 0 01.316-.151h.445c.154 0 .295.086.365.227a.405.405 0 01-.048.425l-2.698 3.404 2.93 4.865z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTkRegular;
