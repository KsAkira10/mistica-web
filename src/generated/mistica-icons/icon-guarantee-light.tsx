'use client';
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

const IconGuaranteeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.204 4.193a4.09 4.09 0 0 1 3.463 4.053 4.09 4.09 0 0 1-1.43 3.107v4.579a.713.713 0 0 1-.708.713.7.7 0 0 1-.5-.21l-.558-.562v2.558c0 1.97-1.588 3.569-3.544 3.569H8.545C6.589 22 5 20.4 5 18.431V5.57C5 3.599 6.589 2 8.545 2h6.386c1.439 0 2.719.859 3.272 2.193m-3.277-.767H8.545a2.14 2.14 0 0 0-2.097 1.786h8.397a4.04 4.04 0 0 1 1.765-.95 2.1 2.1 0 0 0-1.683-.836m0 7.927a4.08 4.08 0 0 1-1.412-3.107c0-.57.113-1.115.322-1.608H6.421v10.715h10.63v-1.85l-.917.922a.7.7 0 0 1-.772.156.71.71 0 0 1-.435-.658zm-6.382 9.208h6.386a2.13 2.13 0 0 0 2.092-1.787H6.448a2.135 2.135 0 0 0 2.097 1.787m10.28-6.366v-2.042a3.978 3.978 0 0 1-2.478 0v2.042l.74-.744a.706.706 0 0 1 1.003 0zm-3.898-5.949a2.67 2.67 0 0 0 2.66 2.678 2.67 2.67 0 0 0 2.659-2.678 2.67 2.67 0 0 0-2.66-2.677 2.67 2.67 0 0 0-2.66 2.677m2.66-1.786c-.977 0-1.775.8-1.775 1.786a1.78 1.78 0 0 0 1.774 1.787c.98 0 1.775-.804 1.775-1.787s-.799-1.786-1.775-1.786m-.709 1.786c0 .393.318.713.708.713s.708-.32.708-.713a.71.71 0 0 0-.708-.713c-.39 0-.708.32-.708.713"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.26 15.936V11.64A4.16 4.16 0 0 0 21 8.257c0-2.15-1.607-3.91-3.655-4.094C16.913 2.883 15.715 2 14.389 2h-6.26C6.403 2 5 3.44 5 5.215v13.57C5 20.559 6.402 22 8.13 22h6.259c1.727 0 3.13-1.44 3.13-3.215V16.64a.353.353 0 0 0-.348-.357.353.353 0 0 0-.347.357v2.145c0 1.381-1.09 2.502-2.435 2.502h-6.26c-1.344 0-2.435-1.121-2.435-2.502v-.357H13c.191 0 .347-.16.347-.357a.353.353 0 0 0-.347-.356H5.694V6.28h7.791A4.2 4.2 0 0 0 13 8.247c0 1.41.69 2.649 1.74 3.39v4.294a.36.36 0 0 0 .214.33c.13.054.28.022.379-.078l1.665-1.711 1.67 1.715a.34.34 0 0 0 .378.078.36.36 0 0 0 .213-.33m-3.482 2.14a.705.705 0 0 0-.694-.713.705.705 0 0 0-.695.713c0 .393.312.713.695.713s.694-.32.694-.713M14.389 2.713c.953 0 1.812.581 2.208 1.45a3.95 3.95 0 0 0-2.627 1.409H5.695v-.357c0-1.381 1.091-2.502 2.436-2.502zm2.845 11.004a.335.335 0 0 0-.49 0l-1.318 1.354v-3.037c.481.206 1.01.325 1.567.325.553 0 1.08-.113 1.559-.32v3.032zm-3.54-5.465c0-1.875 1.483-3.394 3.304-3.394S20.3 6.381 20.3 8.252c0 1.87-1.482 3.393-3.303 3.393s-3.304-1.522-3.304-3.393m3.304 1.967c1.06 0 1.914-.883 1.914-1.967 0-1.089-.855-1.967-1.914-1.967-1.06 0-1.915.883-1.915 1.967 0 1.088.855 1.967 1.915 1.967m-1.216-1.967c0-.686.548-1.248 1.216-1.248s1.215.557 1.215 1.248c0 .686-.547 1.249-1.215 1.249s-1.216-.558-1.216-1.249"
                />
            </svg>
        );
    }
};

export default IconGuaranteeLight;
