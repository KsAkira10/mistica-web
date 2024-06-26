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

const IconCheckRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m8.435 19.546-6.172-6.509a.93.93 0 0 1 .048-1.34.93.93 0 0 1 1.341.047l4.834 4.977 11.53-11.435a.93.93 0 0 1 1.34 0 .93.93 0 0 1 0 1.341z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m8.552 19.5-6.284-6.713a.965.965 0 0 1 .048-1.381.937.937 0 0 1 1.364.049l4.92 5.132L20.345 4.795a.937.937 0 0 1 1.364 0 .965.965 0 0 1 0 1.381z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m8.552 19.5-6.284-6.713a.965.965 0 0 1 .048-1.381.937.937 0 0 1 1.364.049l4.92 5.132L20.345 4.795a.937.937 0 0 1 1.364 0 .965.965 0 0 1 0 1.381z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.016 20a1 1 0 0 1-.77-.353l-5.033-6.065a.916.916 0 0 1 .155-1.322 1.01 1.01 0 0 1 1.379.149L8.99 17.52 19.233 4.377a1.01 1.01 0 0 1 1.373-.19.915.915 0 0 1 .198 1.317L9.807 19.621a.99.99 0 0 1-.77.379z"
                />
            </svg>
        );
    }
};

export default IconCheckRegular;
