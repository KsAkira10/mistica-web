/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconExportLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.838 2.201a.748.748 0 00-.185.126L5.755 8.222a.583.583 0 00.824.823l4.897-4.91v12.08a.581.581 0 001.16 0V4.134l4.805 4.807a.583.583 0 00.824-.824l-5.792-5.79a.9.9 0 00-.196-.127.546.546 0 00-.44 0zm10.007 14.86a.58.58 0 00-.58-.58.577.577 0 00-.577.58v3.624H3.315V17.06a.581.581 0 00-1.16 0v4.205c0 .32.26.58.58.58h18.53c.32 0 .58-.26.58-.58V17.06z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExportLight;
