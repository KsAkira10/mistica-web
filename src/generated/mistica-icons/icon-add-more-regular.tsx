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

const IconAddMoreRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.354 11.318H12.68V5.644a.682.682 0 00-1.36 0v5.676H5.644a.682.682 0 000 1.36h5.676v5.676a.682.682 0 001.36 0V12.68h5.676a.682.682 0 00-.002-1.362"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreRegular;
