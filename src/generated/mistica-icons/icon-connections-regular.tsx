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

const IconConnectionsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.367 12.708c-.196 0-.38.016-.568.04l-1.588-2.753a4.62 4.62 0 0 0 1.44-3.353A4.645 4.645 0 0 0 12.01 2a4.63 4.63 0 0 0-4.649 4.63c0 1.32.56 2.513 1.44 3.353l-1.588 2.753a4 4 0 0 0-.568-.04A4.665 4.665 0 0 0 2 17.358 4.64 4.64 0 0 0 6.64 22c2.317 0 4.238-1.709 4.586-3.93h1.548c.348 2.221 2.269 3.93 4.585 3.93C19.92 22 22 19.92 22 17.358c0-2.56-2.072-4.65-4.633-4.65m-6.981-3.297v-.12c0-.608.68-1.044 1.62-1.044s1.644.444 1.644 1.044v.104a3.14 3.14 0 0 1-1.644.452 3.26 3.26 0 0 1-1.62-.436m1.62-4.03c.496 0 .892.397.892.893a.89.89 0 0 1-.892.892.883.883 0 0 1-.892-.892c0-.496.396-.893.892-.893m0-1.968a3.22 3.22 0 0 1 3.217 3.217c0 .72-.244 1.392-.649 1.929-.187-.445-.552-.809-1.036-1.053.276-.34.436-.76.436-1.232a1.97 1.97 0 0 0-1.968-1.969 1.97 1.97 0 0 0-1.968 1.969c0 .468.16.9.436 1.232-.484.252-.844.616-1.029 1.069a3.2 3.2 0 0 1-.664-1.945 3.237 3.237 0 0 1 3.225-3.217m-.004 7.867c.728 0 1.408-.172 2.024-.468l1.353 2.349a4.66 4.66 0 0 0-2.609 3.485h-1.548a4.66 4.66 0 0 0-2.609-3.485l1.365-2.35a4.6 4.6 0 0 0 2.024.469m-6.981 8.847v-.12c0-.608.68-1.044 1.62-1.044s1.644.444 1.644 1.044v.104a3.14 3.14 0 0 1-1.644.452 3.1 3.1 0 0 1-1.62-.436m1.62-4.017c.496 0 .892.396.892.892a.89.89 0 0 1-.892.892.896.896 0 0 1-.892-.892c0-.496.396-.892.892-.892m2.568 3.177c-.188-.444-.552-.808-1.036-1.052.276-.34.436-.76.436-1.233a1.97 1.97 0 0 0-1.968-1.969 1.97 1.97 0 0 0-1.968 1.969c0 .468.16.9.436 1.233-.484.252-.845.616-1.029 1.068a3.2 3.2 0 0 1-.664-1.945 3.22 3.22 0 0 1 6.442 0c0 .72-.244 1.385-.649 1.929m6.53.72c0-.608.68-1.044 1.62-1.044s1.644.444 1.644 1.044v.104a3.14 3.14 0 0 1-1.644.452 3.1 3.1 0 0 1-1.62-.436zm.728-3.005c0-.496.396-.892.892-.892s.892.396.892.892a.89.89 0 0 1-.892.892.904.904 0 0 1-.892-.892m2.432 1.233c.276-.34.436-.76.436-1.233a1.97 1.97 0 0 0-1.968-1.969 1.97 1.97 0 0 0-1.968 1.969c0 .468.16.9.436 1.233-.484.252-.844.616-1.028 1.068a3.2 3.2 0 0 1-.665-1.945 3.217 3.217 0 1 1 6.433 0 3.17 3.17 0 0 1-.64 1.929c-.187-.444-.551-.808-1.036-1.052"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.367 12.708c-.196 0-.38.016-.568.04l-1.588-2.753a4.62 4.62 0 0 0 1.44-3.353A4.645 4.645 0 0 0 12.01 2a4.63 4.63 0 0 0-4.649 4.63c0 1.32.56 2.513 1.44 3.353l-1.588 2.753a4 4 0 0 0-.568-.04A4.665 4.665 0 0 0 2 17.358 4.64 4.64 0 0 0 6.64 22c2.317 0 4.238-1.709 4.586-3.93h1.548c.348 2.221 2.269 3.93 4.585 3.93C19.92 22 22 19.92 22 17.358c0-2.56-2.072-4.65-4.633-4.65m-6.981-3.297v-.12c0-.608.68-1.044 1.62-1.044s1.644.444 1.644 1.044v.104a3.14 3.14 0 0 1-1.644.452 3.26 3.26 0 0 1-1.62-.436m1.62-4.03c.496 0 .892.397.892.893a.89.89 0 0 1-.892.892.883.883 0 0 1-.892-.892c0-.496.396-.893.892-.893m0-1.968a3.22 3.22 0 0 1 3.217 3.217c0 .72-.244 1.392-.649 1.929-.187-.445-.552-.809-1.036-1.053.276-.34.436-.76.436-1.232a1.97 1.97 0 0 0-1.968-1.969 1.97 1.97 0 0 0-1.968 1.969c0 .468.16.9.436 1.232-.484.252-.844.616-1.029 1.069a3.2 3.2 0 0 1-.664-1.945 3.237 3.237 0 0 1 3.225-3.217m-.004 7.867c.728 0 1.408-.172 2.024-.468l1.353 2.349a4.66 4.66 0 0 0-2.609 3.485h-1.548a4.66 4.66 0 0 0-2.609-3.485l1.365-2.35a4.6 4.6 0 0 0 2.024.469m-6.981 8.847v-.12c0-.608.68-1.044 1.62-1.044s1.644.444 1.644 1.044v.104a3.14 3.14 0 0 1-1.644.452 3.1 3.1 0 0 1-1.62-.436m1.62-4.017c.496 0 .892.396.892.892a.89.89 0 0 1-.892.892.896.896 0 0 1-.892-.892c0-.496.396-.892.892-.892m2.568 3.177c-.188-.444-.552-.808-1.036-1.052.276-.34.436-.76.436-1.233a1.97 1.97 0 0 0-1.968-1.969 1.97 1.97 0 0 0-1.968 1.969c0 .468.16.9.436 1.233-.484.252-.845.616-1.029 1.068a3.2 3.2 0 0 1-.664-1.945 3.22 3.22 0 0 1 6.442 0c0 .72-.244 1.385-.649 1.929m6.53.72c0-.608.68-1.044 1.62-1.044s1.644.444 1.644 1.044v.104a3.14 3.14 0 0 1-1.644.452 3.1 3.1 0 0 1-1.62-.436zm.728-3.005c0-.496.396-.892.892-.892s.892.396.892.892a.89.89 0 0 1-.892.892.904.904 0 0 1-.892-.892m2.432 1.233c.276-.34.436-.76.436-1.233a1.97 1.97 0 0 0-1.968-1.969 1.97 1.97 0 0 0-1.968 1.969c0 .468.16.9.436 1.233-.484.252-.844.616-1.028 1.068a3.2 3.2 0 0 1-.665-1.945 3.217 3.217 0 1 1 6.433 0 3.17 3.17 0 0 1-.64 1.929c-.187-.444-.551-.808-1.036-1.052"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.611 12.94a3.78 3.78 0 0 1 2.423-.894 3.815 3.815 0 0 1 3.813 3.815 3.817 3.817 0 0 1-3.816 3.812 3.79 3.79 0 0 1-2.865-1.325l-1.804.83c.017.111.034.223.034.341a2.306 2.306 0 1 1-2.306-2.305 2.3 2.3 0 0 1 1.742.81l1.662-.765a3.7 3.7 0 0 1-.275-1.398c0-.717.21-1.384.558-1.955l-1.597-1.404a3.69 3.69 0 0 1-4.247-.03l-1.47 1.437c.154.344.246.728.246 1.131a2.777 2.777 0 0 1-2.776 2.776 2.78 2.78 0 0 1-2.776-2.776 2.78 2.78 0 0 1 2.776-2.77c.639 0 1.255.224 1.745.63l1.359-1.328a3.7 3.7 0 0 1-.68-2.131 3.7 3.7 0 0 1 .358-1.566L6.048 6.446c-.33.185-.706.3-1.112.3a2.31 2.31 0 0 1-2.305-2.305 2.308 2.308 0 0 1 4.616-.003c0 .403-.115.776-.297 1.106l1.49 1.278a3.7 3.7 0 0 1 2.636-1.098 3.72 3.72 0 0 1 3.39 2.204l2.341-.692-.003-.033-.002-.028a2.46 2.46 0 0 1 4.921 0 2.46 2.46 0 0 1-2.46 2.459 2.45 2.45 0 0 1-2.091-1.182l-2.401.709q.004.058.013.117c.007.052.015.105.015.16 0 .779-.25 1.535-.709 2.165zM3.903 4.44a1.04 1.04 0 0 0 1.036 1.037 1.04 1.04 0 0 0 1.04-1.036 1.038 1.038 0 0 0-2.076 0m4.725 4.998a2.451 2.451 0 0 0 4.902 0 2.451 2.451 0 0 0-4.902 0m9.406 8.963a2.55 2.55 0 0 0 2.546-2.543 2.547 2.547 0 0 0-2.546-2.543c-1.4 0-2.543 1.14-2.543 2.543a2.545 2.545 0 0 0 2.543 2.543M3.432 15.037a1.505 1.505 0 1 0 3.011 0 1.507 1.507 0 0 0-3.011 0m7.658 5.516a1.038 1.038 0 1 0-1.036-1.036c0 .57.465 1.036 1.036 1.036m8.174-14.569a1.19 1.19 0 1 0 0 2.381 1.191 1.191 0 0 0 0-2.38"
                />
            </svg>
        );
    }
};

export default IconConnectionsRegular;
