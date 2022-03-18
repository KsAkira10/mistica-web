/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTrendDownRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.842 14.778l-.429 3.482a.787.787 0 01-.787.686h-3.49a.787.787 0 01-.793-.778.79.79 0 01.793-.779h1.882l-4.986-6.95-6.793 2.928a.818.818 0 01-1.016-.334L2.262 6.168a.777.777 0 01.294-1.062l.008-.005a.8.8 0 011.079.294l3.61 6.255 6.732-2.894a.8.8 0 01.969.263l5.117 7.146.19-1.574a.803.803 0 01.889-.686c.428.047.74.437.692.865v.008z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTrendDownRegular;
