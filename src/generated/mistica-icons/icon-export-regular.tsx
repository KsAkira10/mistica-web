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

const IconExportRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.305 16.53l-5.72-5.73A.844.844 0 016.78 9.608l4.28 4.286V2.844a.845.845 0 011.689 0v11.05l4.207-4.213a.845.845 0 011.216 1.17c-.006.009-.014.015-.023.023l-5.647 5.655a.853.853 0 01-1.196 0zm9.538-.617c.465 0 .843.378.843.843v4.087a.844.844 0 01-.843.843h-18A.844.844 0 012 20.843v-4.087a.845.845 0 011.69 0V20h16.313v-3.244a.838.838 0 01.84-.843z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExportRegular;
