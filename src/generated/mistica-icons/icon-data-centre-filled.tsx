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

const IconDataCentreFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.522 2h9.72c1.147 0 2.085.964 2.085 2.144v12.851H18.94V6.64c0-1.787-1.387-3.213-3.124-3.213H8.522zm7.294 2.5c1.142 0 2.08.964 2.08 2.144v12.851h-1.387V9.14c0-1.787-1.387-3.213-3.124-3.213H6.09V4.5zM3.66 12v4.287h11.805V12zm4.689 2.143H6.611c-.209 0-.382-.105-.453-.283a.7.7 0 0 1-.071-.251c0-.073.035-.178.07-.252.072-.178.245-.283.454-.283H8.35c.276-.005.52.247.52.535a.543.543 0 0 1-.52.534M13.385 7H3.66v3.926h11.805V9.139c0-1.175-.938-2.139-2.08-2.139M6.61 9.143c-.209 0-.382-.105-.453-.283a.7.7 0 0 1-.071-.251.7.7 0 0 1 .07-.252c.072-.178.245-.283.454-.283H8.35c.276 0 .52.251.52.535a.543.543 0 0 1-.52.534zm-2.95 8.218V22h11.804v-4.639zm4.688 1.065c.276 0 .52.251.52.535a.543.543 0 0 1-.52.535H6.611a.543.543 0 0 1-.52-.535c0-.073.036-.178.071-.252.067-.173.24-.283.45-.283z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.522 2h9.72c1.147 0 2.085.964 2.085 2.144v12.851H18.94V6.64c0-1.787-1.387-3.213-3.124-3.213H8.522zm7.294 2.5c1.142 0 2.08.964 2.08 2.144v12.851h-1.387V9.14c0-1.787-1.387-3.213-3.125-3.213H6.091V4.5zM3.66 12v4.287h11.805V12zm4.689 2.143H6.61c-.209 0-.382-.105-.453-.283a.7.7 0 0 1-.071-.251c0-.073.035-.178.07-.252.072-.178.245-.283.454-.283H8.35c.275-.005.52.247.52.535a.543.543 0 0 1-.52.534M13.384 7H3.66v3.926h11.805V9.139c0-1.175-.938-2.139-2.08-2.139M6.611 9.143c-.209 0-.382-.105-.453-.283a.7.7 0 0 1-.071-.251.7.7 0 0 1 .07-.252c.072-.178.245-.283.454-.283H8.35c.275 0 .52.251.52.535a.543.543 0 0 1-.52.534zM3.66 17.361V22h11.804v-4.639zm4.689 1.065c.275 0 .52.251.52.535a.543.543 0 0 1-.52.535H6.61a.543.543 0 0 1-.52-.535c0-.073.036-.178.071-.252.067-.173.24-.283.45-.283z"
                />
            </svg>
        );
    }
};

export default IconDataCentreFilled;
