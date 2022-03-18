/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCloudUploadLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.058 3.35c.82 0 4.908.196 6.084 3.953 1.415.109 4.695.851 4.698 5.244 0 5.025-4.311 5.28-5.174 5.28l-2.098.008-.008 2.087a.638.638 0 01-.633.656h-3.875a.645.645 0 01-.633-.656V17.87l-3.042.017c-2.04 0-4.227-1.152-4.227-4.362 0-2.63 1.454-3.653 2.507-4.053.11-5.824 5.34-6.121 6.401-6.121zm5.608 13.625l-2.098.009.008-1.583h1.67a.626.626 0 00.583-.4.671.671 0 00-.124-.707l-4.201-4.487a.632.632 0 00-.46-.196.61.61 0 00-.451.196l-4.3 4.574a.652.652 0 00-.132.706.633.633 0 00.583.41h1.678v1.523l-3.042.017c-1.02 0-3.404-.342-3.404-3.51 0-1.782.748-2.905 2.213-3.33a.426.426 0 00.297-.41l-.008-.12c0-5.076 4.277-5.468 5.586-5.468.74 0 4.482.18 5.37 3.619.05.188.204.314.386.314 1.266.042 4.202.546 4.202 4.412-.005 4.11-3.336 4.431-4.356 4.431zm-2.922.392l-.008 2.36H10.24v-4.43a.646.646 0 00-.633-.655H8.184l3.857-4.104 3.76 4.011h-1.415a.65.65 0 00-.633.656l-.009 2.162z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCloudUploadLight;
