/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconNeuralNetworkHumanRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.17 9.03C5.432 4.5 8.22 2 13.014 2c5.003 0 7.871 2.83 7.874 7.762 0 3.714-1.566 5.616-3.12 6.585l-.011 4.112a1.236 1.236 0 01-1.247 1.227H9.458c-.69 0-1.247-.552-1.247-1.23V19.35c-1.039-.162-1.826-.543-2.35-1.137a2.45 2.45 0 01-.627-1.748l-.02-1.288-1.44-.376a1.237 1.237 0 01-.882-.851 1.216 1.216 0 01.291-1.182 9.401 9.401 0 001.446-1.953 4.243 4.243 0 00.54-1.784zm14.47.732c0 .947-.123 1.776-.339 2.51h-4.073a1.65 1.65 0 00-.51-.664l1.19-3.233c.718-.185 1.25-.82 1.25-1.582 0-.905-.745-1.642-1.664-1.642a1.66 1.66 0 00-1.507.955H12.54V3.244l.12-.005c.119-.005.238-.01.362-.01 4.18 0 6.619 2.085 6.619 6.533zm-3.13 10.695l.011-4.835a4.969 4.969 0 002.292-2.118H15.23a1.67 1.67 0 01-1.54 1.025 1.654 1.654 0 01-1.665-1.641c0-.849.656-1.538 1.49-1.625l1.13-3.067a1.66 1.66 0 01-.715-.86h-1.75L10.587 8.97c.09.202.14.423.14.656 0 .904-.748 1.641-1.664 1.641a1.654 1.654 0 01-1.664-1.641c0-.905.745-1.639 1.664-1.639.216 0 .428.042.63.123l1.597-1.636v-3.1c-2.93.498-4.678 2.355-4.874 5.73-.048.807-.3 1.589-.69 2.3a10.53 10.53 0 01-1.635 2.21l2.356.614.033 2.277s-.249 1.706 2.975 1.706v2.247h7.056zm-7.448-10.42a.412.412 0 00.414-.41.403.403 0 00-.08-.232l-.02-.012a.22.22 0 01-.034-.022.156.156 0 01-.027-.035.11.11 0 00-.018-.026.418.418 0 00-.235-.082.413.413 0 00-.417.41c.002.226.19.408.417.408zm6.428-2.835a.412.412 0 01-.414-.41c0-.226.188-.408.415-.408.23 0 .417.185.417.409a.413.413 0 01-.418.409zm-1.389 5.686a.415.415 0 00-.83 0 .414.414 0 00.416.409.412.412 0 00.414-.409z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNeuralNetworkHumanRegular;
