/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCloudFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.628 18.966H6.208a4.06 4.06 0 0 1-4.053-4.054c0-.904.314-1.77.907-2.504a4.241 4.241 0 0 1 2.045-1.395c.053-1.627.628-3.109 1.633-4.19C7.813 5.666 9.32 5.03 10.978 5.03a6.224 6.224 0 0 1 5.594 3.51h.059a5.22 5.22 0 0 1 5.216 5.216c0 2.876-2.345 5.21-5.219 5.21Z"
            />
        </svg>
    );
};

export default IconCloudFilled;
