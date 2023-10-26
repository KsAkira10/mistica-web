/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconShoppingBagLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.401 7.385h3.172v-1.95a3.425 3.425 0 1 1 6.85 0v1.95h3.172a1.3 1.3 0 0 1 1.297 1.214l.729 10.933a2.3 2.3 0 0 1-2.295 2.453H5.67a2.3 2.3 0 0 1-2.295-2.453L4.105 8.6A1.3 1.3 0 0 1 5.4 7.385Zm9.172 3.05v-2.2h-5.15v2.2a.425.425 0 1 1-.85 0v-2.2H5.4a.45.45 0 0 0-.449.42L4.223 19.59a1.45 1.45 0 0 0 1.447 1.546h12.656a1.45 1.45 0 0 0 1.447-1.546l-.73-10.934a.45.45 0 0 0-.448-.42h-3.172v2.2a.425.425 0 1 1-.85 0Zm-5.15-3.05h5.15v-1.95a2.575 2.575 0 0 0-5.15 0v1.95Z"
            />
        </svg>
    );
};

export default IconShoppingBagLight;
