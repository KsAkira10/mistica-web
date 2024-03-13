'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconExportRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.497 8.729a.842.842 0 0 0 1.436.59l4.278-4.282v11.05a.845.845 0 0 0 1.689 0V5.037l4.21 4.213.008.008.014.014a.845.845 0 0 0 1.171-1.216l-5.65-5.655a.847.847 0 0 0-1.193 0L5.743 8.129a.86.86 0 0 0-.246.6M21.84 16.91a.844.844 0 0 0-.843-.844.84.84 0 0 0-.84.844v3.243H3.844v-3.243a.845.845 0 0 0-1.69 0v4.086c0 .465.379.844.844.844h18a.844.844 0 0 0 .843-.844z"
            />
        </svg>
    );
};

export default IconExportRegular;
