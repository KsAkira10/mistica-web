/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCloudUploadFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.057 3.385c.82 0 4.91.193 6.087 3.924 1.414.112 4.697.85 4.697 5.213 0 4.992-4.31 5.247-5.174 5.247l-1.58.008v2.081c0 .415-.364.754-.798.754H9.7c-.438 0-.8-.34-.8-.762v-2.04l-2.515.018c-2.05 0-4.23-1.143-4.23-4.331 0-2.613 1.449-3.63 2.502-4.02.107-5.795 5.34-6.092 6.4-6.092zm5.193 11.658a.338.338 0 00.302-.201.359.359 0 00-.067-.367l-4.204-4.46a.366.366 0 00-.238-.1.314.314 0 00-.233.1L7.508 14.56a.316.316 0 00-.065.364.312.312 0 00.294.204l1.869.009a.118.118 0 01.123.117v2.529l-.008.01v1.963l4.543.008V15.17c.006-.075.056-.126.132-.126h1.854z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCloudUploadFilled;
