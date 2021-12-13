/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDisableLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.997 22.083c-3.121 0-5.519-.748-7.194-2.22l15.06-15.06c1.472 1.678 2.22 4.073 2.22 7.2 0 6.69-3.393 10.08-10.086 10.08m0-20.166c3.14 0 5.544.755 7.218 2.238l-15.06 15.06C2.672 17.541 1.917 15.137 1.917 12c0-6.69 3.39-10.083 10.08-10.083m0-.917C5.047 1 1 4.51 1 12.003 1 19.497 5.048 23 11.997 23 18.947 23 23 19.497 23 12.003S18.946 1 11.997 1"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDisableLight;
