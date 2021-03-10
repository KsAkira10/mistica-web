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

const IconLightningFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.121 11.45a.6.6 0 00-.434-.428l-4.504-1.11 2.722-6.904a.625.625 0 00-.23-.745.582.582 0 00-.753.092l-8.916 9.569a.628.628 0 00-.143.597.6.6 0 00.432.422l4.112 1.017-2.698 7.05a.622.622 0 00.23.737.58.58 0 00.748-.08l9.286-9.617a.627.627 0 00.148-.6z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLightningFilled;
