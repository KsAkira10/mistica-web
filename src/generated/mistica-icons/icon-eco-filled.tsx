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

const IconEcoFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.787 2.054c.142-.072.284-.072.39 0 .25.14 5.827 3.752 5.823 10.293 0 4.793-3.034 6.793-4.764 7.509V7.343c0-.68-.565-1.253-1.236-1.253s-1.236.572-1.236 1.253v12.513C9.034 19.136 6 17.136 6 12.347c0-6.455 5.432-10.058 5.776-10.286z"
                />
                <path
                    fill={fillColor}
                    d="M11.475 21.464c0 .284.248.536.529.536.28 0 .525-.252.53-.536V7.343a.55.55 0 0 0-.53-.537c-.28 0-.53.253-.53.537z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.787 2.054c.142-.072.284-.072.39 0 .25.14 5.827 3.752 5.823 10.293 0 4.793-3.034 6.793-4.764 7.509V7.343c0-.68-.565-1.253-1.236-1.253s-1.236.572-1.236 1.253v12.513C9.034 19.136 6 17.136 6 12.347c0-6.455 5.432-10.058 5.776-10.286z"
                />
                <path
                    fill={fillColor}
                    d="M11.475 21.464c0 .284.248.536.529.536.28 0 .525-.252.53-.536V7.343a.55.55 0 0 0-.53-.537c-.28 0-.53.253-.53.537z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.694 11.395c-.744.567-1.752.86-3.002.86-2.913 0-4.518-1.59-4.518-4.479V4.888c0-.905.737-1.638 1.641-1.638h2.902c1.418 0 2.524.378 3.292 1.123.79.77 1.193 1.907 1.193 3.38 0 1.15-.25 2.09-.731 2.813.913 1.867 1.328 4.13 1.534 6.008.384-1.332.847-2.532 1.378-3.53-.386-.686-.584-1.549-.584-2.57 0-1.474.4-2.611 1.193-3.381.767-.745 1.874-1.124 3.291-1.124h2.905c.905 0 1.638.734 1.641 1.64v2.887c0 2.888-1.605 4.479-4.518 4.479-1.37 0-2.423-.33-3.185-1.011a.3.3 0 0 0 .059-.11q.012-.034.028-.067c1.078-2.145 2.426-3.378 4.006-3.666a.538.538 0 1 0-.194-1.062c-1.862.339-3.422 1.68-4.64 3.984l.741.92c-.802 1.655-1.417 3.756-1.828 6.254a.54.54 0 0 1-1.068.117l-.009-.048c-.052-.324-.08-.802-.115-1.406l-.002-.037-.005-.093c-.107-1.878-.28-4.923-1.405-7.355m-.265-.493q.1.186.196.376.027.06.069.11l.777-.822-.093-.176C9.48 8.72 8.221 7.569 6.642 6.964a.54.54 0 0 0-.387 1.008c1.33.507 2.398 1.493 3.174 2.93"
                />
            </svg>
        );
    }
};

export default IconEcoFilled;
