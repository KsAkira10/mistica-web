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

const IconCheckedFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.078 3.71C18.21 1.913 15.492 1 11.997 1c-3.495 0-6.213.912-8.079 2.714C1.981 5.582 1 8.371 1 12.004c0 3.631.981 6.417 2.918 8.285C5.784 22.088 8.502 23 11.997 23c3.495 0 6.213-.912 8.081-2.71C22.016 18.42 23 15.634 23 12.002c0-3.632-.981-6.424-2.922-8.292zm-2.761 4.272l-6.458 8.637a.572.572 0 01-.451.232h-.01a.575.575 0 01-.451-.216l-2.953-3.714a.577.577 0 01.9-.717l2.488 3.127 6.01-8.041a.576.576 0 01.805-.116.58.58 0 01.12.808z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCheckedFilled;
