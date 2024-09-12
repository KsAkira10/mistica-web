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

const IconShopRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.477 6.53h-2.654v-.567c0-2.19-1.712-3.963-3.82-3.963S8.186 3.776 8.186 5.963v.567H5.53L4 19.661v.076C4 21.094 4.727 22 5.815 22h12.37C19.277 22 20 21.094 20 19.737zm-8.839-.567c0-1.357 1.054-2.454 2.366-2.454 1.311 0 2.365 1.093 2.365 2.454v.567H9.64zM5.82 20.491c-.327 0-.361-.49-.361-.714L6.842 8.043h10.366l1.346 11.734c-.004.223-.042.714-.37.714z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.477 6.53h-2.654v-.567c0-2.19-1.712-3.963-3.82-3.963S8.186 3.776 8.186 5.963v.567H5.53L4 19.661v.076C4 21.094 4.727 22 5.815 22h12.37C19.277 22 20 21.094 20 19.737zm-8.839-.567c0-1.357 1.054-2.454 2.366-2.454 1.311 0 2.365 1.093 2.365 2.454v.567H9.64zM5.82 20.491c-.327 0-.361-.49-.361-.714L6.842 8.043h10.366l1.346 11.734c-.004.223-.042.714-.37.714z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m4.998 2.225-.113.008a.75.75 0 0 0-.582.46l-2.257 5.57C.837 9.727 1.454 11.338 3.14 12.11l.103.044v7.811l.006.146a1.78 1.78 0 0 0 1.773 1.634h4.244v.032l4.825-.032h4.9l.147-.006a1.78 1.78 0 0 0 1.634-1.774v-7.806l.078-.034c1.645-.764 2.293-2.304 1.156-3.79l-.039-.048-2.275-5.594a.75.75 0 0 0-.695-.467zm14.274 10.327v7.412l-.007.065a.28.28 0 0 1-.273.215h-4.23v-4.273c0-.958-.777-1.735-1.735-1.735h-2.026c-.96 0-1.735.805-1.735 1.762v4.246H5.022l-.064-.007a.28.28 0 0 1-.215-.273v-7.447c.847.063 1.703-.102 2.423-.506l.135-.082.055.037c1.17.747 3.209.81 4.557.015l.122-.079.1.06.177.095.186.091c1.247.58 2.64.616 4.031-.18l.093-.055.05.039c.703.5 1.646.694 2.6.6M5.503 3.724h12.989l2.128 5.23q.046.111.123.203c.587.692.349 1.246-.637 1.656-1.01.42-2.187.317-2.725-.22l-.088-.1a.75.75 0 0 0-1.044-.135c-1.16.88-2.247.881-3.25.365a2.6 2.6 0 0 1-.496-.318.75.75 0 0 0-1.038.04c-.796.826-2.867.742-3.437.161l-.065-.079a.75.75 0 0 0-1.13-.117c-.733.691-2.044.804-3.07.335-.841-.385-1.06-.882-.596-1.481l.142-.174a.8.8 0 0 0 .082-.15zm5.263 12.274c0-.141.117-.262.235-.262h2.026l.063.008c.099.028.172.119.172.227v4.273h-2.496z"
                />
            </svg>
        );
    }
};

export default IconShopRegular;
