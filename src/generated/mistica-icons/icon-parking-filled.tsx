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

const IconParkingFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.74 10.785a1.494 1.494 0 01-.655.4c-.218.065-.658.137-1.504.137H11.15V6.348h1.305c.672 0 1.219.05 1.622.148.311.076.555.196.709.34.425.416.512 1.246.512 1.87 0 .986-.19 1.706-.557 2.079m3.846-6.925c-.65-.622-1.504-1.07-2.54-1.333-.964-.244-2.197-.367-3.667-.367H6.312a.82.82 0 00-.812.83v18.027c0 .457.364.83.812.83h4.028a.822.822 0 00.813-.83v-5.392h2.028c1.255 0 2.341-.157 3.23-.468.94-.328 1.728-.849 2.33-1.549 1.011-1.151 1.524-2.81 1.524-4.927-.003-2.146-.566-3.77-1.678-4.82"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconParkingFilled;
