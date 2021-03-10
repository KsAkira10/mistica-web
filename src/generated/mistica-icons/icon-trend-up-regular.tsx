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

const IconTrendUpRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.846 5.6v3.576c0 .328-.28.6-.622.6a.612.612 0 01-.622-.6V7.353l-5.47 7.54a.62.62 0 01-.754.208L7.18 12.039l-3.86 6.602a.613.613 0 01-.537.303.701.701 0 01-.308-.073.592.592 0 01-.244-.801c.005-.008.008-.017.014-.022l4.132-7.065a.625.625 0 01.787-.255l7.246 3.079 5.524-7.603H17.58a.612.612 0 01-.622-.599v-.003c0-.336.275-.602.622-.602h3.644a.61.61 0 01.622.6"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTrendUpRegular;
