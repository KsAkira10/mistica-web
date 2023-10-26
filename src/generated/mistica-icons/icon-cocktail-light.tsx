/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCocktailLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.995 2c.188 0 .364.116.437.293a.484.484 0 0 1-.103.518l-4.627 4.646a.468.468 0 0 1-.667 0 .47.47 0 0 1 0-.67L19.85 2.95H4.132l8.198 8.238c.091.085.14.207.14.335v9.525h1.892a.475.475 0 0 1 0 .951H9.626a.475.475 0 0 1 0-.951h1.892v-9.33l-8.86-8.908a.482.482 0 0 1-.103-.518A.47.47 0 0 1 2.992 2h18.003Z"
                />
                <path
                    fill={fillColor}
                    d="M14.362 10.091a.949.949 0 0 0 .946-.95.949.949 0 0 0-.946-.952.949.949 0 0 0-.946.951c0 .526.423.951.946.951Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.601 6.3c0-2.673 1.46-4.144 4.112-4.144 2.655 0 4.118 1.474 4.118 4.14 0 2.667-1.462 4.138-4.115 4.138-.515 0-.98-.07-1.41-.18l-3.85 4.465c-.057.065-.127.107-.197.149v4.38l4.171 1.763a.414.414 0 1 1-.16.796l-8.495.016a.414.414 0 0 1-.17-.79l3.834-1.776v-4.373a.715.715 0 0 1-.199-.14L4.968 8.107a.833.833 0 0 1-.16-.894.815.815 0 0 1 .751-.501l1.521-.009-1.6-1.607a.443.443 0 0 0-.319-.135H2.573a.413.413 0 0 1 0-.826h2.583c.339 0 .664.137.902.378l2.114 2.126c.01.011.017.024.024.036l.016.026 5.406-.026a6.884 6.884 0 0 0-.007-.12c-.005-.083-.01-.166-.01-.255Zm4.112 3.31c2.219 0 3.297-1.081 3.297-3.314 0-2.23-1.078-3.313-3.294-3.313s-3.291 1.084-3.291 3.313c0 .126.008.245.016.365v.008l3.166-.014h.008a.82.82 0 0 1 .818.826c0 .221-.087.42-.227.569L16.912 9.55c.25.04.515.059.801.059Zm-5.88 4.569 3.95-4.583.011-.017H7.49l4.345 4.6Zm.023 5.798-2.199 1.017s4.583-.006 4.585-.009l-2.386-1.008Zm5.753-12.496s-12.047.056-12.047.053l1.21 1.283a.415.415 0 0 1 .213-.067h9.53l1.094-1.269Z"
                />
            </svg>
        );
    }
};

export default IconCocktailLight;
