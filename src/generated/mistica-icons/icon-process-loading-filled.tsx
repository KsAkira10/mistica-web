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

const IconProcessLoadingFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.2 12.65h-3.023a.604.604 0 110-1.21h3.022a.604.604 0 110 1.21zm-1.712 4.9a.602.602 0 01-.852.002l-.003-.003-2.137-2.14a.605.605 0 01.854-.854l2.138 2.137a.604.604 0 010 .857zM12.65 7.831a.604.604 0 11-1.21 0V4.807a.604.604 0 111.21 0v3.025zM12.566 19.2a.604.604 0 11-1.21 0v-3.025a.604.604 0 111.21 0V19.2zM9.45 15.35l-2.14 2.14a.605.605 0 01-.854-.854L8.594 14.5a.605.605 0 01.855.022.6.6 0 010 .83zm-5.247-3.389c0-.333.272-.605.605-.605h3.025a.604.604 0 110 1.21H4.807a.606.606 0 01-.605-.605zm10.356-3.305l2.137-2.137a.605.605 0 01.854.854L15.41 9.51a.605.605 0 01-.854 0 .608.608 0 01.003-.854zM12 2.16c-6.437 0-9.84 3.403-9.84 9.846 0 6.437 3.403 9.84 9.84 9.84 6.44 0 9.846-3.403 9.846-9.84 0-6.443-3.403-9.846-9.846-9.846z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconProcessLoadingFilled;
