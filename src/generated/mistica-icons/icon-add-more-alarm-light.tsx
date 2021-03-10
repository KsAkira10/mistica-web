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

const IconAddMoreAlarmLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M5.627 18.057h14.829c-1.69-2.092-1.518-5.185-1.51-5.333V8.87c0-1.947-.549-3.44-1.624-4.44-1.72-1.602-4.23-1.446-4.255-1.446h-.026c-.008 0-.016.009-.033 0-.157-.008-3.748-.204-5.233 2.782h.14c1.084.025 5.3.45 5.3 5.54 0 5.104-4.216 5.5-5.274 5.513-.098.009-.213.009-.337.009h-.17a7.814 7.814 0 01-1.017-.107 6.05 6.05 0 01-.79 1.336zm8.972 2.381c.434-.493.515-1.174.515-1.557h-4.157c0 .378.073 1.067.516 1.557.344.387.868.583 1.557.583.7 0 1.227-.196 1.569-.583zM2.977 11.273c0 4.21 3.126 4.711 4.47 4.737h.157c.115 0 .222 0 .32-.009 1.344-.025 4.47-.524 4.47-4.694 0-4.163-3.143-4.687-4.495-4.72-.124-.009-.264-.009-.401-.009H7.4c-1.33.017-4.423.493-4.423 4.695zm18.717 6.877a.42.42 0 01.123.459.404.404 0 01-.383.272h-5.496c0 .51-.107 1.412-.723 2.103-.51.566-1.238.86-2.182.86-.936 0-1.672-.294-2.182-.86-.608-.689-.714-1.6-.714-2.1H4.64a.41.41 0 01-.255-.729c.493-.409.902-.96 1.213-1.624-1.563-.499-3.443-1.813-3.443-5.258 0-4.499 3.182-5.342 4.709-5.482 1.549-3.75 5.815-3.636 6.168-3.627.255-.017 2.922-.132 4.849 1.664 1.246 1.165 1.888 2.857 1.888 5.039v3.88c-.012.06-.2 3.663 1.924 5.403zm-10.843-6.877c0 .23-.18.409-.409.409H8.095v2.356a.41.41 0 01-.818 0v-2.356H4.929a.41.41 0 01-.409-.41c0-.223.188-.408.41-.408h2.347V8.539a.41.41 0 01.409-.409c.221 0 .409.188.409.409v2.322h2.347a.41.41 0 01.409.412z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreAlarmLight;
