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

const IconTopUpRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.848 2h6.313c1.93 0 3.508 1.608 3.512 3.571V18.43c0 1.963-1.579 3.571-3.508 3.571H8.848C6.92 22 5.34 20.392 5.34 18.429V5.57C5.34 3.608 6.92 2 8.848 2m6.317 1.428H8.848c-1.057 0-1.897.788-2.074 1.783h10.462c-.177-1-1.018-1.783-2.07-1.783M6.774 18.785c.177 1 1.017 1.787 2.074 1.787h2.455v-10.43L9.69 11.786a.673.673 0 0 1-.982 0 .7.7 0 0 1 0-1l3.296-3.427 3.3 3.431a.7.7 0 0 1 0 1 .7.7 0 0 1-.491.216.7.7 0 0 1-.492-.216l-1.614-1.644v7.21h4.56V6.644H6.743v10.71h2.805c.385 0 .704.32.704.716a.71.71 0 0 1-.704.716zm5.932 1.787h2.455c1.053 0 1.894-.788 2.07-1.783h-4.525z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.848 2h6.313c1.93 0 3.508 1.608 3.512 3.571V18.43c0 1.963-1.579 3.571-3.508 3.571H8.848C6.92 22 5.34 20.392 5.34 18.429V5.57C5.34 3.608 6.92 2 8.848 2m6.317 1.428H8.848c-1.057 0-1.897.788-2.074 1.783h10.462c-.177-1-1.018-1.783-2.07-1.783M6.774 18.785c.177 1 1.017 1.787 2.074 1.787h2.455v-10.43L9.69 11.786a.673.673 0 0 1-.982 0 .7.7 0 0 1 0-1l3.296-3.427 3.3 3.431a.7.7 0 0 1 0 1 .7.7 0 0 1-.491.216.7.7 0 0 1-.492-.216l-1.614-1.644v7.21h4.56V6.644H6.743v10.71h2.805c.385 0 .704.32.704.716a.71.71 0 0 1-.704.716zm5.932 1.787h2.455c1.053 0 1.894-.788 2.07-1.783h-4.525z"
                />
            </svg>
        );
    }
};

export default IconTopUpRegular;
