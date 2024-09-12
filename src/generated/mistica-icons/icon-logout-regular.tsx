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

const IconLogoutRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m16.687 4.855.563.385c2.575 1.765 4.113 4.598 4.113 7.578 0 4.891-4.29 9.182-9.181 9.182S3 17.71 3 12.818c0-2.977 1.535-5.807 4.106-7.572l.562-.386.771 1.124-.562.386c-2.168 1.487-3.514 3.958-3.514 6.448 0 4.166 3.653 7.82 7.819 7.82 4.165 0 7.818-3.654 7.818-7.82 0-2.492-1.349-4.965-3.52-6.453l-.563-.385zM12.863 2v10.818a.682.682 0 0 1-1.363 0V2z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.506 2H9.213C7.293 2 5.72 3.608 5.72 5.571v5.715H3.727l.908-.928a.704.704 0 0 0 0-1 .67.67 0 0 0-.978 0L1 12.003l2.657 2.64c.14.143.317.215.49.215a.69.69 0 0 0 .488-.215.704.704 0 0 0 0-1l-.908-.928h9.157a.71.71 0 0 0 .7-.716.713.713 0 0 0-.7-.716H7.12V6.643h10.483v10.714H7.12v-3.035a.71.71 0 0 0-.7-.716c-.384 0-.7.324-.7.716v4.107C5.72 20.392 7.291 22 9.212 22h6.293C17.427 22 19 20.392 19 18.429V5.57C19 3.608 17.427 2 15.506 2M9.213 3.428h6.293c1.048 0 1.886.784 2.062 1.783H7.15c.176-.995 1.018-1.783 2.062-1.783m0 17.144c-1.048 0-1.886-.784-2.062-1.783h10.417c-.172.995-1.014 1.783-2.062 1.783z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.506 2H9.213C7.293 2 5.72 3.608 5.72 5.571v5.715H3.727l.908-.928a.704.704 0 0 0 0-1 .67.67 0 0 0-.978 0L1 12.003l2.657 2.64c.14.143.317.215.49.215a.69.69 0 0 0 .488-.215.704.704 0 0 0 0-1l-.908-.928h9.157a.71.71 0 0 0 .7-.716.713.713 0 0 0-.7-.716H7.12V6.643h10.483v10.714H7.12v-3.035a.71.71 0 0 0-.7-.716c-.384 0-.7.324-.7.716v4.107C5.72 20.392 7.291 22 9.212 22h6.293C17.427 22 19 20.392 19 18.429V5.57C19 3.608 17.427 2 15.506 2M9.213 3.428h6.293c1.048 0 1.886.784 2.062 1.783H7.15c.176-.995 1.018-1.783 2.062-1.783m0 17.144c-1.048 0-1.886-.784-2.062-1.783h10.417c-.172.995-1.014 1.783-2.062 1.783z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.578 21.75h-8.16a3.674 3.674 0 0 1-3.67-3.67.75.75 0 0 1 1.5 0c0 1.196.974 2.17 2.17 2.17h8.16c1.196 0 2.17-.974 2.17-2.17V5.92c0-1.196-.974-2.17-2.17-2.17h-8.16c-1.196 0-2.17.974-2.17 2.17a.75.75 0 0 1-1.5 0 3.674 3.674 0 0 1 3.67-3.67h8.16a3.674 3.674 0 0 1 3.67 3.67v12.16a3.674 3.674 0 0 1-3.67 3.67"
                />
                <path
                    fill={fillColor}
                    d="m5.299 11.25 1.72-1.721a.75.75 0 1 0-1.06-1.061l-2.984 2.984a.75.75 0 0 0 .003 1.064l3.013 2.983a.74.74 0 0 0 .527.217.749.749 0 0 0 .527-1.283L5.346 12.75h7.152a.75.75 0 0 0 0-1.5z"
                />
            </svg>
        );
    }
};

export default IconLogoutRegular;
