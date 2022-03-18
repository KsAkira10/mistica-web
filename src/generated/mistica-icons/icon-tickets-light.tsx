/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTicketsLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.007 22.888a.342.342 0 00.512-.005.387.387 0 000-.537l-2.27-2.382a1.865 1.865 0 00-.229-2.24 1.66 1.66 0 00-2.135-.24l-2.014-2.108L14.742 2.924l2.014 2.113a1.865 1.865 0 00.228 2.24 1.654 1.654 0 002.135.24l2.01 2.113-9.052 9.5a.387.387 0 000 .536.354.354 0 00.516 0l9.299-9.777a.387.387 0 000-.537l-2.498-2.62a.345.345 0 00-.512 0c-.381.4-1.01.4-1.39 0a1.074 1.074 0 010-1.46.39.39 0 000-.537l-2.499-2.622a.345.345 0 00-.511 0L2.108 15.112a.387.387 0 000 .537l2.498 2.621a.34.34 0 00.256.112.354.354 0 00.256-.112.956.956 0 011.39 0c.382.4.382 1.06 0 1.46a.387.387 0 000 .537l2.499 2.62zm1.088-1.855c0-.42.326-.762.726-.762.405 0 .726.342.726.762s-.326.761-.726.761c-.4 0-.726-.341-.726-.761zm.637-4.588l1.522-1.675 2.149.503a.35.35 0 00.367-.141.405.405 0 00.033-.41l-1.066-2.085 1.14-1.928a.393.393 0 00-.01-.415.352.352 0 00-.367-.156l-2.19.44-1.424-1.753a.348.348 0 00-.381-.117.38.38 0 00-.256.322l-.256 2.29-2.056.907a.384.384 0 00-.224.347.381.381 0 00.214.351l1.968.938.219 2.357a.377.377 0 00.242.322.33.33 0 00.12.02.326.326 0 00.256-.117zm-.046-4.818a.376.376 0 01-.219.307l-1.488.66 1.41.668a.39.39 0 01.209.313l.162 1.747 1.112-1.225a.352.352 0 01.344-.108l1.577.371-.79-1.547a.384.384 0 01.009-.38l.814-1.377-1.586.317a.361.361 0 01-.345-.127l-1.023-1.26-.186 1.64z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.842 4.055a1.904 1.904 0 00-1.905-1.899H17.7c-.504 0-.924.364-.997.869a.909.909 0 01-.894.767.906.906 0 01-.89-.767 1.003 1.003 0 00-.998-.869h-2.235a1.902 1.902 0 00-1.88 1.65c-.12.037-.24.073-.35.135l-1.736.972a.933.933 0 00-.42 1.162.756.756 0 11-1.305.731.947.947 0 00-1.213-.25l-1.74.973a1.735 1.735 0 00-.664 2.364l6.245 11.064c.226.404.599.695 1.047.821a1.73 1.73 0 001.322-.16l1.754-.983a.91.91 0 00.372-.434h.821c.482 0 .896-.342.989-.815a.9.9 0 011.765 0c.092.473.507.815.988.815h2.255a1.9 1.9 0 001.905-1.896V4.055zm-.832 0v14.25a1.065 1.065 0 01-1.073 1.067h-2.255a.185.185 0 01-.176-.148 1.733 1.733 0 00-3.395 0 .18.18 0 01-.174.148h-2.255a1.072 1.072 0 01-1.072-1.07V4.052c0-.588.481-1.07 1.072-1.07h2.238c.09.003.166.07.174.16a1.74 1.74 0 001.714 1.476 1.738 1.738 0 001.715-1.476.174.174 0 01.173-.157h2.238c.594 0 1.076.48 1.076 1.07zm-9.185 16.149l-1.24.694a.91.91 0 01-.695.079.917.917 0 01-.55-.429L3.104 9.484a.897.897 0 01-.082-.69.89.89 0 01.429-.548l1.737-.972a.114.114 0 01.148.034 1.601 1.601 0 002.036.414 1.59 1.59 0 00.703-1.95c-.025-.05-.002-.112.048-.14l1.653-.927v2.776l-4.659 2.61c0 .004-.002.004-.002.004a.412.412 0 00-.154.563l4.367 7.745c.072.129.212.21.36.21a.23.23 0 00.083-.02l.036-.011a1.9 1.9 0 001.876 1.622h.143zM5.887 10.61l3.89 6.896V8.431l-3.89 2.179zm6.826 5.165h6.311V6.63h-6.31v9.145zm7.14-9.557a.414.414 0 00-.414-.415v-.002h-7.143a.415.415 0 00-.415.414v9.975c0 .23.185.414.415.414h7.143a.415.415 0 00.414-.414V6.218z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTicketsLight;
