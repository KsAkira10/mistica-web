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

const IconDocumentsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.828 10c.098.092.16.219.179.353a.4.4 0 0 1 .017.098v10.325c0 .566-.499 1.061-1.082 1.061H9.743c-.571 0-1.072-.5-1.072-1.061v-2.913H4.038c-.55 0-1.06-.493-1.06-1.037V3.188c0-.55.502-1.037 1.06-1.037h9.804c.574 0 1.058.476 1.058 1.037v2.339h1.05c.032 0 .057 0 .082.008a.6.6 0 0 1 .361.17zM8.67 17.042V6.585c0-.551.507-1.061 1.072-1.061h4.337V3.188c0-.11-.124-.216-.239-.216H4.036c-.115 0-.238.126-.238.216v13.641c0 .081.131.213.238.213zm11.269 3.972c.131 0 .263-.12.263-.238v-9.69h-2.031c-.83 0-1.535-.263-2.059-.772-.524-.504-.804-1.202-.804-2.009V6.347H9.743c-.112 0-.252.149-.252.238v14.19c0 .099.12.239.252.239zm-3.81-14.42.003.003v1.708c0 .577.196 1.07.557 1.423.359.353.874.535 1.482.535h1.756l-3.795-3.666v-.003z"
            />
        </svg>
    );
};

export default IconDocumentsLight;
