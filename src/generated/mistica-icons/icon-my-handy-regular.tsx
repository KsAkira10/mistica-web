'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMyHandyRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.25 10.38q0-.094.049-.143.047-.056.146-.056h.39l.02.524q.045-.086.101-.159.159-.204.378-.31.219-.111.475-.111a.95.95 0 0 1 .536.149q.225.143.34.403.02.04.037.084a1.3 1.3 0 0 1 .134-.214q.158-.205.377-.31.22-.112.475-.112a.95.95 0 0 1 .536.149q.225.143.341.403.122.254.122.582v1.922h-.463q-.097 0-.146-.05a.22.22 0 0 1-.049-.149v-1.636q0-.204-.054-.36a.47.47 0 0 0-.183-.247.55.55 0 0 0-.329-.093.65.65 0 0 0-.377.105.67.67 0 0 0-.226.304 1.4 1.4 0 0 0-.073.477v1.649h-.657v-1.835q0-.204-.055-.36a.47.47 0 0 0-.183-.247.55.55 0 0 0-.329-.093.65.65 0 0 0-.377.105.67.67 0 0 0-.225.304q-.08.198-.08.477v1.649H8.25zM13.464 14.625q-.074 0-.152-.006a.7.7 0 0 1-.14-.025q-.104-.018-.146-.068-.043-.044-.043-.124v-.329l.201.025q.11.012.195.012a.85.85 0 0 0 .36-.068.6.6 0 0 0 .267-.223q.115-.16.232-.459l.09-.223-1.186-2.715q-.05-.105-.013-.173.044-.069.159-.068h.45l.895 2.2.828-2.2h.664l-1.279 3.18a4 4 0 0 1-.365.718 1.26 1.26 0 0 1-.426.41q-.244.135-.59.136"
            />
            <path
                fill={fillColor}
                d="M15.216 2H8.784A3.58 3.58 0 0 0 5.212 5.57v12.856A3.58 3.58 0 0 0 8.784 22h6.428a3.58 3.58 0 0 0 3.572-3.572V5.571c0-1.968-1.6-3.572-3.568-3.572M6.644 17.36V6.642H17.36V17.36zM6.672 5.21a2.15 2.15 0 0 1 2.112-1.784h6.428c1.06 0 1.94.772 2.112 1.784zm8.544 15.36H8.784c-1.06 0-1.94-.772-2.112-1.784h10.652a2.14 2.14 0 0 1-2.108 1.784"
            />
        </svg>
    );
};

export default IconMyHandyRegular;
