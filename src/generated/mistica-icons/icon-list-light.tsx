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

const IconListLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M5.541 7.336a.57.57 0 01-.58-.56.581.581 0 01.58-.56h15.725c.32 0 .58.249.58.56 0 .308-.26.56-.58.56H5.541zm-2.431.38a.944.944 0 01-.95-.938c0-.518.426-.938.95-.938.523 0 .95.42.95.938a.946.946 0 01-.95.939zm18.156 3.712c.32 0 .58.25.58.56a.57.57 0 01-.58.56H5.541a.57.57 0 01-.58-.56c0-.31.26-.56.58-.56h15.725zM3.11 12.927a.944.944 0 01-.95-.939c0-.518.426-.938.95-.938.523 0 .95.42.95.938a.944.944 0 01-.95.939zm18.156 3.714c.155 0 .3.059.41.163.109.103.17.246.17.395 0 .308-.26.56-.58.56H5.541a.581.581 0 01-.58-.56c0-.309.26-.56.58-.56h15.725v.002zM3.11 18.14a.944.944 0 01-.95-.939c0-.518.426-.938.95-.938.523 0 .95.42.95.938a.944.944 0 01-.95.939z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconListLight;
