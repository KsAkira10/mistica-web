'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconGuaranteeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
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
                    d="M18.204 4.193a4.09 4.09 0 0 1 3.463 4.053 4.09 4.09 0 0 1-1.43 3.107v4.579a.713.713 0 0 1-.708.713.7.7 0 0 1-.5-.21l-.558-.562v2.558c0 1.97-1.588 3.569-3.544 3.569H8.545C6.589 22 5 20.4 5 18.431V5.57C5 3.599 6.589 2 8.545 2h6.386c1.439 0 2.719.859 3.272 2.193m-3.277-.767H8.545a2.14 2.14 0 0 0-2.097 1.786h8.397a4.04 4.04 0 0 1 1.765-.95 2.1 2.1 0 0 0-1.683-.836m0 7.927a4.08 4.08 0 0 1-1.412-3.107c0-.57.113-1.115.322-1.608H6.421v10.715h10.63v-1.85l-.917.922a.7.7 0 0 1-.772.156.71.71 0 0 1-.435-.658zm-6.382 9.208h6.386a2.13 2.13 0 0 0 2.092-1.787H6.448a2.135 2.135 0 0 0 2.097 1.787m10.28-6.366v-2.042a3.978 3.978 0 0 1-2.478 0v2.042l.74-.744a.706.706 0 0 1 1.003 0zm-3.898-5.949a2.67 2.67 0 0 0 2.66 2.678 2.67 2.67 0 0 0 2.659-2.678 2.67 2.67 0 0 0-2.66-2.677 2.67 2.67 0 0 0-2.66 2.677m2.66-1.786c-.977 0-1.775.8-1.775 1.786a1.78 1.78 0 0 0 1.774 1.787c.98 0 1.775-.804 1.775-1.787s-.799-1.786-1.775-1.786m-.709 1.786c0 .393.318.713.708.713s.708-.32.708-.713a.71.71 0 0 0-.708-.713c-.39 0-.708.32-.708.713"
                />
            </svg>
        );
    }
};

export default IconGuaranteeRegular;
