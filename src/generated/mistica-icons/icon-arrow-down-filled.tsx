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

const IconArrowDownFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.7 2v7.788h3.71a2.1 2.1 0 0 1 1.941 1.356c.32.784.178 1.644-.423 2.252L11.99 22l-8.93-8.608c-.601-.608-.744-1.464-.423-2.252.352-.824 1.095-1.356 1.942-1.356h3.71V2z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.7 2v7.788h3.71a2.1 2.1 0 0 1 1.941 1.356c.32.784.178 1.644-.423 2.252L11.99 22l-8.93-8.608c-.601-.608-.744-1.464-.423-2.252.352-.824 1.095-1.356 1.942-1.356h3.71V2z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.16 12.028q0-.228.084-.44c.176-.434.602-.7 1.106-.694L7 10.89q.031-.015.056-.04l.02-6.882c-.009-.616.145-1.07.467-1.383.323-.314.78-.463 1.393-.443h6.042c.42-.008 1.025.03 1.445.437.42.406.482 1.008.487 1.426l-.002 6.72a.5.5 0 0 0 .053.156l3.563-.005h.005c.858.005 1.149.414 1.247.658.168.418.014.9-.42 1.322l-8.712 8.659c-.084.086-.33.336-.689.333a.82.82 0 0 1-.594-.275l-8.708-8.479c-.32-.305-.493-.692-.493-1.067"
                />
            </svg>
        );
    }
};

export default IconArrowDownFilled;
