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

const IconGasStationLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.838 19.173-.009-10.546-.004-.026-.002-.005.003-.028c0-1.118-.423-1.768-.933-2.149l-.008-.013a.1.1 0 0 0-.014-.017L16.745 2.27a.41.41 0 0 0-.58.58l3.042 3.036-.157-.003h-.047c-.54.006-2.54.19-2.54 2.67 0 2.482 2.022 2.675 2.56 2.683h.246c.297-.005 1.112-.075 1.742-.613l.006 8.549c0 1.633-1.227 1.832-1.756 1.843h-.194c-.53-.008-1.756-.204-1.756-1.857v-3.952a2.6 2.6 0 0 0-2.6-2.594h-.697V3.372c0-.63-.588-1.202-1.232-1.202H3.383c-.645 0-1.233.572-1.233 1.202v17.266c0 .639.577 1.202 1.233 1.202h9.398c.655 0 1.23-.563 1.23-1.202v-7.202h.697c.98-.002 1.776.79 1.778 1.77v3.953c0 1.947 1.325 2.661 2.558 2.678h.087l.142-.003c1.183-.02 2.563-.731 2.563-2.661m-8.647 1.462c0 .19-.208.381-.41.384l-9.397-.003c-.202 0-.41-.19-.41-.38V3.371c0-.177.222-.381.41-.381h9.398c.187 0 .409.207.409.38zm6.064-10.218-.219-.003c-.798-.011-1.748-.342-1.748-1.863 0-1.513.939-1.837 1.726-1.846h.04l.187.003c.804.02 1.765.359 1.765 1.86s-.953 1.832-1.751 1.849m-8.521-1.53a.3.3 0 0 1-.025.116c-.01.024-.015.04-.006.044H5.625a.24.24 0 0 1-.062-.16V5.733c0-.043.015-.084.026-.114.009-.025.015-.042.008-.045l5.058-.009c.029.017.079.093.079.168zm.823-3.154c0-.524-.4-.98-.857-.98L5.597 4.75c-.457 0-.858.46-.858.98v3.157c0 .532.393.98.858.98H10.7c.465 0 .857-.45.857-.98z"
            />
        </svg>
    );
};

export default IconGasStationLight;
