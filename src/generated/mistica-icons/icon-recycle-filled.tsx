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

const IconRecycleFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m14.304 4.765.678 1.205-1.089-.3a.676.676 0 0 0-.833.496.703.703 0 0 0 .48.86l2.655.736.027.008.027.008.636.176.891-3.453a.706.706 0 0 0-.48-.86.68.68 0 0 0-.833.496l-.295 1.144-.69-1.224C14.75 2.768 13.448 2 11.995 2s-2.756.768-3.484 2.06L7.096 6.595a.72.72 0 0 0 .248.96c.326.192.74.08.93-.256l1.41-2.533c.485-.852 1.346-1.364 2.31-1.364.965 0 1.826.512 2.31 1.364m-3.922 13.81H6.5c-.972 0-1.836-.517-2.317-1.377a2.74 2.74 0 0 1 .008-2.701l1.45-2.573.294 1.136c.081.313.356.52.655.52a.7.7 0 0 0 .174-.023.703.703 0 0 0 .48-.86l-.89-3.454-3.345.924a.703.703 0 0 0-.48.86.676.676 0 0 0 .833.497l1.096-.304-1.445 2.565a4.2 4.2 0 0 0-.008 4.113c.725 1.305 2.03 2.081 3.495 2.081h3.883a.69.69 0 0 0 .679-.7c0-.384-.303-.704-.679-.704m8.394-8.664 2.194 3.882a4.15 4.15 0 0 1 .015 4.097c-.725 1.3-2.03 2.081-3.495 2.081h-1.888l.806.832a.714.714 0 0 1 0 .993.666.666 0 0 1-.96 0l-2.446-2.525 2.445-2.525a.66.66 0 0 1 .961 0 .714.714 0 0 1 0 .992l-.806.833h1.887c.973 0 1.837-.513 2.318-1.377a2.73 2.73 0 0 0-.008-2.697l-2.197-3.878a.713.713 0 0 1 .244-.96.667.667 0 0 1 .93.252"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m14.304 4.765.678 1.205-1.089-.3a.676.676 0 0 0-.833.496.703.703 0 0 0 .48.86l2.655.736.027.008.027.008.636.176.891-3.453a.706.706 0 0 0-.48-.86.68.68 0 0 0-.833.496l-.295 1.144-.69-1.224C14.75 2.768 13.448 2 11.995 2s-2.756.768-3.484 2.06L7.096 6.595a.72.72 0 0 0 .248.96c.326.192.74.08.93-.256l1.41-2.533c.485-.852 1.346-1.364 2.31-1.364.965 0 1.826.512 2.31 1.364m-3.922 13.81H6.5c-.972 0-1.836-.517-2.317-1.377a2.74 2.74 0 0 1 .008-2.701l1.45-2.573.294 1.136c.081.313.356.52.655.52a.7.7 0 0 0 .174-.023.703.703 0 0 0 .48-.86l-.89-3.454-3.345.924a.703.703 0 0 0-.48.86.676.676 0 0 0 .833.497l1.096-.304-1.445 2.565a4.2 4.2 0 0 0-.008 4.113c.725 1.305 2.03 2.081 3.495 2.081h3.883a.69.69 0 0 0 .679-.7c0-.384-.303-.704-.679-.704m8.394-8.664 2.194 3.882a4.15 4.15 0 0 1 .015 4.097c-.725 1.3-2.03 2.081-3.495 2.081h-1.888l.806.832a.714.714 0 0 1 0 .993.666.666 0 0 1-.96 0l-2.446-2.525 2.445-2.525a.66.66 0 0 1 .961 0 .714.714 0 0 1 0 .992l-.806.833h1.887c.973 0 1.837-.513 2.318-1.377a2.73 2.73 0 0 0-.008-2.697l-2.197-3.878a.713.713 0 0 1 .244-.96.667.667 0 0 1 .93.252"
                />
            </svg>
        );
    }
};

export default IconRecycleFilled;
