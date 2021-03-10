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

const IconAcademicFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.72 15.44a2.9 2.9 0 00.891-.163l5.992-2.672v2.753c0 .81-.566 1.457-1.294 1.62-1.294.243-3.076.727-4.373 1.78-.325.244-.728.407-1.134.407-.406 0-.81-.163-1.135-.406-1.294-1.054-3.075-1.538-4.372-1.782A1.654 1.654 0 015 15.358v-2.672l5.829 2.59c.244.082.568.163.89.163zm9.393 1.131c.406.325.647.972.647 1.375 0 .244-.081.485-.244.566-.162.163-.484.244-.728.244H20.3c-.325 0-.647 0-.89-.244a.736.736 0 01-.244-.566c0-.406.244-1.053.647-1.375v-5.423l-7.61 3.4c-.163.082-.407.163-.566.163-.244 0-.407-.081-.566-.162l-7.93-3.563c-.566-.244-.891-.729-.891-1.376 0-.566.325-1.134.89-1.375l7.934-3.563a1.57 1.57 0 011.215 0l7.933 3.563c.818.375.81 1.308.81 1.781l.08 6.555z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAcademicFilled;
