/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowLeftFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.14 15.677v3.682c0 .841-.428 1.612-1.287 1.965-.286.106-.573.176-.823.176-.536 0-1.072-.21-1.464-.562L2 11.994l8.57-8.907c.61-.6 1.5-.739 2.287-.423.823.349 1.287 1.124 1.287 1.964v3.683H22v7.366h-7.86z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.961 2.161c.152 0 .3.028.44.084.434.177.7.602.695 1.107l.003 3.65a.21.21 0 00.039.056l6.882.02c.616-.01 1.07.145 1.384.467.314.322.46.776.442 1.392v6.042c.009.42-.03 1.025-.436 1.445-.407.42-1.009.482-1.426.488l-6.72-.003a.454.454 0 00-.157.053l.006 3.563v.003c-.006.857-.415 1.149-.659 1.247-.417.168-.899.014-1.322-.42l-8.658-8.712c-.087-.084-.336-.33-.333-.69a.82.82 0 01.274-.593l8.48-8.706c.302-.32.691-.493 1.066-.493z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowLeftFilled;
