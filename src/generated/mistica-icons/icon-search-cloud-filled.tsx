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

const IconSearchCloudFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.801 17.815a3.468 3.468 0 01-3.462-3.462 3.467 3.467 0 013.462-3.465 3.463 3.463 0 010 6.927zm4.62-1.6c2.428 0 5.265-1.372 5.265-5.24 0-3.521-2.33-4.975-4.655-5.19C15.787 2.187 11.745 2 10.92 2c-1.061 0-6.274.289-6.464 5.908C3.387 8.336 2 9.384 2 11.91c0 2.468 1.426 4.09 3.874 4.34l1.658-.004a4.635 4.635 0 004.241 2.788c1.022 0 1.97-.342 2.737-.908.005.006.008.017.014.022l3.336 3.365c.232.235.61.238.846.005l.005-.005a.609.609 0 000-.858l-3.33-3.364c.26-.325.479-.686.644-1.073l.395-.002z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchCloudFilled;
