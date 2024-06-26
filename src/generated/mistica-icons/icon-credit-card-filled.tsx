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

const IconCreditCardFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.992 8.97V6.938c0-1.073-.8-1.938-1.788-1.938H3.788C2.8 5 2 5.865 2 6.938V8.97zM2 10.102v6.96C2 18.135 2.8 19 3.788 19h16.424C21.2 19 22 18.135 22 17.062v-6.96zm2.5 3.406c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h5.002c.3 0 .536.259.536.568-.008.319-.244.569-.545.569zm9.642 0h-2.504c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h2.5c.3 0 .537.259.537.568 0 .319-.245.569-.533.569m2.137 0c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h3.212c.3 0 .537.259.537.568-.004.319-.236.569-.537.569z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.992 8.97V6.938c0-1.073-.8-1.938-1.788-1.938H3.788C2.8 5 2 5.865 2 6.938V8.97zM2 10.102v6.96C2 18.135 2.8 19 3.788 19h16.424C21.2 19 22 18.135 22 17.062v-6.96zm2.5 3.406c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h5.002c.3 0 .536.259.536.568-.008.319-.244.569-.545.569zm9.642 0h-2.504c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h2.5c.3 0 .537.259.537.568 0 .319-.245.569-.533.569m2.137 0c-.3 0-.536-.259-.536-.569 0-.318.244-.568.536-.568h3.212c.3 0 .537.259.537.568-.004.319-.236.569-.537.569z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.83 8.98q.009.022.01.048v3.764a.2.2 0 0 1-.01.049l-.008.035v4.642c0 .804-.666 1.46-1.484 1.46H3.648c-.82 0-1.487-.656-1.487-1.46v-4.675q-.001-.01-.005-.02-.005-.013-.006-.028V9.028q0-.015.006-.028l.005-.02V6.493c0-.807.667-1.46 1.488-1.46h16.689c.818 0 1.484.653 1.484 1.46v2.45zM3.65 6.265c-.13 0-.233.1-.233.227V8.41H20.57V6.493a.23.23 0 0 0-.232-.227zm16.689 11.479c.126 0 .23-.101.232-.227V13.41H3.416v4.107c0 .126.104.227.233.227z"
                />
            </svg>
        );
    }
};

export default IconCreditCardFilled;
