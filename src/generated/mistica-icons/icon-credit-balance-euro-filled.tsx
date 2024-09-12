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

const IconCreditBalanceEuroFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.308 13.652c3.075 0 5.57-2.61 5.57-5.826S15.384 2 12.309 2c-3.074 0-5.57 2.61-5.57 5.826s2.496 5.826 5.57 5.826m7.108 1.09c.727 0 1.369.486 1.596 1.213a1.83 1.83 0 0 1-.789 2.083l-6.078 3.668a2 2 0 0 1-1.565.224l-3.837-.997H6.546a2.05 2.05 0 0 1-1.55.727h-1.39c-.384 0-.696-.326-.696-.727v-5.826c0-.401.312-.728.695-.728H7.96c.383 0 .735.094 1.043.28l.713.447h5.031c.758 0 1.395.508 1.636 1.212l2.192-1.337c.25-.154.544-.238.842-.238m-5.967 5.701 6.074-3.668c.13-.08.205-.238.16-.363a.29.29 0 0 0-.271-.215.25.25 0 0 0-.138.037l-3.445 2.102a1.68 1.68 0 0 1-1.087.41h-3.828c-.384 0-.695-.326-.695-.726 0-.401.311-.728.695-.728h3.828a.356.356 0 0 0 .347-.363c0-.2-.156-.364-.347-.364H9.327l-1.034-.648a.66.66 0 0 0-.338-.079h-.87v3.64h1.828l4.006 1.04c.183.046.37.023.53-.075M9.924 7.276c.245-1.347 1.377-2.368 2.737-2.368.45 0 .882.112 1.287.331a.56.56 0 0 1 .223.737.513.513 0 0 1-.704.233 1.7 1.7 0 0 0-.802-.205c-.775 0-1.43.54-1.653 1.272h1.653c.29 0 .521.242.521.545a.53.53 0 0 1-.521.546h-1.653c.222.736.873 1.272 1.653 1.272.28 0 .553-.07.802-.205a.51.51 0 0 1 .704.233.555.555 0 0 1-.223.737c-.4.219-.833.33-1.287.33-1.36 0-2.492-1.02-2.737-2.367h-.4a.53.53 0 0 1-.522-.546c0-.303.232-.545.521-.545z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.308 13.652c3.075 0 5.57-2.61 5.57-5.826S15.384 2 12.309 2c-3.074 0-5.57 2.61-5.57 5.826s2.496 5.826 5.57 5.826m7.108 1.09c.727 0 1.369.486 1.596 1.213a1.83 1.83 0 0 1-.789 2.083l-6.078 3.668a2 2 0 0 1-1.565.224l-3.837-.997H6.546a2.05 2.05 0 0 1-1.55.727h-1.39c-.384 0-.696-.326-.696-.727v-5.826c0-.401.312-.728.695-.728H7.96c.383 0 .735.094 1.043.28l.713.447h5.031c.758 0 1.395.508 1.636 1.212l2.192-1.337c.25-.154.544-.238.842-.238m-5.967 5.701 6.074-3.668c.13-.08.205-.238.16-.363a.29.29 0 0 0-.271-.215.25.25 0 0 0-.138.037l-3.445 2.102a1.68 1.68 0 0 1-1.087.41h-3.828c-.384 0-.695-.326-.695-.726 0-.401.311-.728.695-.728h3.828a.356.356 0 0 0 .347-.363c0-.2-.156-.364-.347-.364H9.327l-1.034-.648a.66.66 0 0 0-.338-.079h-.87v3.64h1.828l4.006 1.04c.183.046.37.023.53-.075M9.924 7.276c.245-1.347 1.377-2.368 2.737-2.368.45 0 .882.112 1.287.331a.56.56 0 0 1 .223.737.513.513 0 0 1-.704.233 1.7 1.7 0 0 0-.802-.205c-.775 0-1.43.54-1.653 1.272h1.653c.29 0 .521.242.521.545a.53.53 0 0 1-.521.546h-1.653c.222.736.873 1.272 1.653 1.272.28 0 .553-.07.802-.205a.51.51 0 0 1 .704.233.555.555 0 0 1-.223.737c-.4.219-.833.33-1.287.33-1.36 0-2.492-1.02-2.737-2.367h-.4a.53.53 0 0 1-.522-.546c0-.303.232-.545.521-.545z"
                />
            </svg>
        );
    }
};

export default IconCreditBalanceEuroFilled;
