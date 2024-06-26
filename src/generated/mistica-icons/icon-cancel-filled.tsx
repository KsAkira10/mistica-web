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

const IconCancelFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12C2 6.484 6.484 2 12 2s10 4.484 10 10-4.484 10-10 10S2 17.516 2 12m14.664 4.672a.534.534 0 0 0 0-.76L12.768 12l3.912-3.912a.534.534 0 0 0 0-.76.534.534 0 0 0-.76 0l-3.912 3.912-3.912-3.912a.534.534 0 0 0-.76 0 .534.534 0 0 0 0 .76L11.232 12 7.32 15.912a.534.534 0 0 0 .38.912.54.54 0 0 0 .38-.152l3.912-3.912 3.912 3.912a.54.54 0 0 0 .38.152.54.54 0 0 0 .38-.152"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12C2 6.484 6.484 2 12 2s10 4.484 10 10-4.484 10-10 10S2 17.516 2 12m14.664 4.672a.534.534 0 0 0 0-.76L12.768 12l3.912-3.912a.534.534 0 0 0 0-.76.534.534 0 0 0-.76 0l-3.912 3.912-3.912-3.912a.534.534 0 0 0-.76 0 .534.534 0 0 0 0 .76L11.232 12 7.32 15.912a.534.534 0 0 0 .38.912.54.54 0 0 0 .38-.152l3.912-3.912 3.912 3.912a.54.54 0 0 0 .38.152.54.54 0 0 0 .38-.152"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M1 12.003C1 4.51 5.048 1 11.997 1 18.947 1 23 4.51 23 12.003S18.946 23 11.997 23C5.047 23 1 19.497 1 12.003m16.362 5.366a.69.69 0 0 0 0-.974L12.964 12l4.398-4.395a.688.688 0 1 0-.973-.974l-4.395 4.399L7.61 6.647a.684.684 0 0 0-.97 0 .684.684 0 0 0 0 .97L11.023 12l-4.382 4.383a.688.688 0 0 0 .97.973l4.383-4.383 4.395 4.396a.69.69 0 0 0 .973 0"
                />
            </svg>
        );
    }
};

export default IconCancelFilled;
