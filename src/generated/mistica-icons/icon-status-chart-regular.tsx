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

const IconStatusChartRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.776 7.141a.685.685 0 11-.003-1.37.685.685 0 01.003 1.37M7.975 10.973a.685.685 0 11.047-1.37.685.685 0 01-.047 1.37m11.8-6.45a1.94 1.94 0 00-1.94 1.935c0 .468.173.89.45 1.224l-2.389 4a1.87 1.87 0 00-.448-.056 1.93 1.93 0 00-1.423.63L9.9 10.45c.006-.054.017-.104.017-.16a1.94 1.94 0 00-3.88 0c0 .479.188.927.496 1.274l-2.207 3.891a1.922 1.922 0 00-.359-.036 1.94 1.94 0 00-1.94 1.935 1.943 1.943 0 003.884 0c0-.493-.19-.935-.495-1.277l2.21-3.896c.117.022.232.044.353.044.563 0 1.067-.243 1.423-.63l4.126 1.807c-.003.053-.017.104-.017.16a1.94 1.94 0 003.879.002v-.002c0-.457-.165-.872-.431-1.205l2.398-4.014c.137.03.274.05.423.05 1.07 0 1.935-.865 1.938-1.935a1.943 1.943 0 00-1.941-1.936"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStatusChartRegular;
