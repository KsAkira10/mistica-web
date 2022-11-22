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

const IconConnectionsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.367 12.708c-.196 0-.38.016-.568.04l-1.588-2.753a4.624 4.624 0 001.44-3.353A4.645 4.645 0 0012.01 2a4.631 4.631 0 00-4.649 4.63c0 1.32.56 2.513 1.44 3.353l-1.588 2.753a4.417 4.417 0 00-.568-.04A4.665 4.665 0 002 17.358 4.64 4.64 0 006.64 22c2.317 0 4.238-1.709 4.586-3.93h1.548c.348 2.221 2.269 3.93 4.585 3.93A4.644 4.644 0 0022 17.358c0-2.56-2.072-4.65-4.633-4.65zm-6.981-3.297v-.12c0-.608.68-1.044 1.62-1.044.94 0 1.644.444 1.644 1.044v.104a3.14 3.14 0 01-1.644.452 3.258 3.258 0 01-1.62-.436zm1.62-4.03c.496 0 .892.397.892.893a.888.888 0 01-.892.892.883.883 0 01-.892-.892c0-.496.396-.893.892-.893zm0-1.968a3.22 3.22 0 013.217 3.217c0 .72-.244 1.392-.649 1.929-.188-.445-.552-.809-1.036-1.053.276-.34.436-.76.436-1.232a1.972 1.972 0 00-1.968-1.969 1.972 1.972 0 00-1.968 1.969c0 .468.16.9.436 1.232-.484.252-.844.616-1.029 1.069a3.216 3.216 0 01-.664-1.945 3.237 3.237 0 013.225-3.217zm-.004 7.867c.728 0 1.408-.172 2.024-.468l1.353 2.349a4.658 4.658 0 00-2.609 3.485h-1.548a4.658 4.658 0 00-2.609-3.486l1.365-2.348a4.59 4.59 0 002.024.468zm-6.981 8.847v-.12c0-.608.68-1.044 1.62-1.044.94 0 1.644.444 1.644 1.044v.104a3.14 3.14 0 01-1.644.452 3.111 3.111 0 01-1.62-.436zm1.62-4.017c.496 0 .892.396.892.892a.888.888 0 01-.892.892.896.896 0 01-.892-.892c0-.496.396-.892.892-.892zm2.568 3.177c-.188-.444-.552-.808-1.036-1.052.276-.34.436-.76.436-1.233a1.972 1.972 0 00-1.968-1.969 1.972 1.972 0 00-1.968 1.969c0 .468.16.9.436 1.233-.484.252-.845.616-1.029 1.068a3.216 3.216 0 01-.664-1.945 3.22 3.22 0 016.442 0 3.22 3.22 0 01-.649 1.929zm6.53.72c0-.608.68-1.044 1.62-1.044.94 0 1.644.444 1.644 1.044v.104a3.14 3.14 0 01-1.644.452 3.122 3.122 0 01-1.62-.436v-.12zm.728-3.005c0-.496.396-.892.892-.892s.892.396.892.892a.888.888 0 01-.892.892.904.904 0 01-.892-.892zm2.432 1.233c.276-.34.436-.76.436-1.233a1.972 1.972 0 00-1.968-1.969 1.972 1.972 0 00-1.968 1.969c0 .468.16.9.436 1.233-.484.252-.844.616-1.028 1.068a3.216 3.216 0 01-.665-1.945 3.217 3.217 0 116.433 0 3.166 3.166 0 01-.64 1.929c-.188-.444-.551-.808-1.036-1.052z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.611 12.94a3.78 3.78 0 012.423-.894 3.815 3.815 0 013.813 3.815 3.817 3.817 0 01-3.816 3.812 3.787 3.787 0 01-2.865-1.325l-1.804.83c.017.111.034.223.034.341a2.306 2.306 0 11-2.306-2.305 2.292 2.292 0 011.742.81l1.662-.765a3.743 3.743 0 01-.275-1.398c0-.717.21-1.384.558-1.955l-1.597-1.404a3.694 3.694 0 01-4.247-.03l-1.47 1.437c.154.344.246.728.246 1.131a2.777 2.777 0 01-2.776 2.776 2.78 2.78 0 01-2.776-2.776 2.778 2.778 0 012.776-2.77c.639 0 1.255.224 1.745.63l1.359-1.328a3.694 3.694 0 01-.68-2.131 3.66 3.66 0 01.358-1.566L6.048 6.446c-.33.185-.706.3-1.112.3a2.309 2.309 0 01-2.305-2.305 2.308 2.308 0 014.616-.003c0 .403-.115.776-.297 1.106l1.49 1.278a3.704 3.704 0 012.636-1.098 3.718 3.718 0 013.39 2.204l2.341-.692-.003-.033a.204.204 0 01-.002-.028 2.46 2.46 0 014.921 0 2.46 2.46 0 01-2.46 2.459 2.454 2.454 0 01-2.091-1.182l-2.401.709c.002.039.008.078.013.117.007.052.015.105.015.16 0 .779-.25 1.535-.709 2.165l1.521 1.336zM3.903 4.44a1.04 1.04 0 001.036 1.037 1.04 1.04 0 001.04-1.036 1.038 1.038 0 00-2.076 0zm4.725 4.998a2.451 2.451 0 004.902 0 2.451 2.451 0 00-4.902 0zm9.406 8.963a2.55 2.55 0 002.546-2.543 2.547 2.547 0 00-2.546-2.543c-1.4 0-2.543 1.14-2.543 2.543a2.545 2.545 0 002.543 2.543zM3.432 15.037a1.505 1.505 0 103.011 0 1.507 1.507 0 00-3.011 0zm7.658 5.516a1.038 1.038 0 10-1.036-1.036c0 .57.465 1.036 1.036 1.036zm8.174-14.569a1.19 1.19 0 100 2.381 1.191 1.191 0 000-2.38z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconConnectionsRegular;
