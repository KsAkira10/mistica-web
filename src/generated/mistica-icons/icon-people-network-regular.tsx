/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPeopleNetworkRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.799 12.748c.188-.024.372-.04.568-.04 2.56 0 4.633 2.09 4.633 4.65A4.645 4.645 0 0117.36 22c-2.317 0-4.238-1.709-4.586-3.93h-1.548C10.878 20.291 8.957 22 6.64 22A4.64 4.64 0 012 17.358c0-2.569 2.08-4.65 4.645-4.662.196 0 .38.016.568.04l1.588-2.753a4.633 4.633 0 01-1.44-3.353A4.631 4.631 0 0112.01 2c2.56 0 4.64 2.08 4.64 4.642a4.62 4.62 0 01-1.44 3.353l1.589 2.753zm-6.413-3.457v.12a3.258 3.258 0 001.62.436c.6 0 1.168-.16 1.644-.452v-.104c0-.6-.704-1.044-1.644-1.044s-1.62.436-1.62 1.044zm2.512-3.017a.888.888 0 00-.892-.893.888.888 0 00-.892.893c0 .496.396.9.892.892a.888.888 0 00.892-.892zm2.325.356a3.22 3.22 0 00-3.217-3.217A3.237 3.237 0 008.781 6.63c0 .728.252 1.4.664 1.945.185-.453.545-.817 1.029-1.069a1.92 1.92 0 01-.436-1.232c0-1.085.884-1.969 1.968-1.969s1.968.884 1.968 1.969c0 .472-.16.892-.436 1.232.484.244.848.608 1.037 1.053a3.206 3.206 0 00.648-1.93zm-1.197 4.182a4.645 4.645 0 01-2.024.468 4.59 4.59 0 01-2.024-.468L8.613 13.16a4.658 4.658 0 012.609 3.485h1.548a4.658 4.658 0 012.609-3.486l-1.353-2.348zm-9.005 9.195v.12a3.11 3.11 0 001.62.436c.6 0 1.168-.16 1.644-.452v-.104c0-.6-.704-1.044-1.644-1.044s-1.62.436-1.62 1.044zm2.512-3.005a.888.888 0 00-.892-.892.888.888 0 00-.892.892c0 .484.396.892.892.892a.888.888 0 00.892-.892zm.64 1.233c.484.244.848.608 1.036 1.052a3.225 3.225 0 00.649-1.929 3.22 3.22 0 00-6.441 0c0 .728.251 1.4.663 1.945.184-.452.545-.816 1.029-1.069a1.92 1.92 0 01-.436-1.232c0-1.084.884-1.969 1.968-1.969s1.968.885 1.968 1.969c0 .472-.16.892-.436 1.233zm9.186 2.328c.6 0 1.168-.16 1.644-.452v-.104c0-.6-.704-1.044-1.644-1.044s-1.62.436-1.62 1.044v.12a3.122 3.122 0 001.62.436zm0-4.453a.888.888 0 00-.892.892c0 .484.404.888.892.892a.888.888 0 00.892-.892.888.888 0 00-.892-.892zm1.976.892c0 .472-.16.892-.436 1.233.485.244.848.608 1.037 1.052a3.166 3.166 0 00.64-1.929 3.217 3.217 0 10-6.434 0c0 .728.253 1.4.665 1.945.184-.452.544-.816 1.028-1.069a1.92 1.92 0 01-.436-1.232c0-1.084.884-1.969 1.968-1.969s1.968.885 1.968 1.969z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.995 6.58c-.697 0-1.24-.181-1.616-.545-.392-.379-.588-.936-.588-1.664 0-.726.196-1.289.588-1.664.373-.367.919-.552 1.616-.552.698 0 1.244.185 1.622.55.392.377.591.94.591 1.666 0 .725-.199 1.285-.59 1.664-.379.364-.925.546-1.623.546zm-.75-2.977c-.171.165-.208.51-.208.768 0 .21.026.588.208.762.176.17.546.196.75.196.205 0 .577-.026.757-.2.17-.164.207-.503.207-.758 0-.258-.037-.6-.21-.768-.171-.165-.504-.199-.757-.199-.201.003-.568.028-.747.2zm-1.902 6.14h5.313c-.03-.21-.103-.434-.269-.605-.266-.28-.714-.336-1.044-.336H10.65c-.33 0-.776.056-1.042.333a1.08 1.08 0 00-.266.608zm-1.02 1.252a.25.25 0 01-.25-.252v-.736c0-.704.22-1.306.634-1.737.45-.474 1.123-.72 1.941-.72h2.692c.82 0 1.49.25 1.944.72.417.431.638 1.033.638 1.737v.736a.252.252 0 01-.249.252h-7.35zM5.12 15.22c0 .258.036.597.207.762.176.171.546.196.75.196.205 0 .578-.025.757-.198.17-.166.207-.505.207-.76 0-.257-.036-.599-.21-.767-.17-.165-.504-.199-.753-.199-.205 0-.572.025-.751.199-.171.165-.207.51-.207.767zm.958 2.208c-.698 0-1.241-.185-1.617-.546-.392-.376-.588-.936-.588-1.664 0-.726.196-1.289.588-1.667.378-.364.922-.55 1.62-.55.697 0 1.243.186 1.621.55.392.38.591.941.591 1.667 0 .725-.199 1.285-.594 1.664-.378.364-.924.546-1.621.546zm2.658 3.162a1.095 1.095 0 00-.27-.608c-.268-.28-.716-.336-1.044-.336H4.73c-.327 0-.773.059-1.039.336-.165.171-.238.398-.269.608h5.314zm-1.311-2.193c.818 0 1.49.25 1.944.72.417.434.636 1.036.636 1.74v.733a.25.25 0 01-.25.252H2.407a.253.253 0 01-.252-.252v-.736c0-.704.219-1.306.63-1.737.451-.47 1.124-.723 1.941-.723l2.698.003zm9.535-3.185c0 .21.025.588.207.762.177.17.546.196.75.196.205 0 .578-.025.757-.199.171-.165.208-.504.208-.759 0-.258-.037-.6-.21-.768-.171-.165-.505-.198-.754-.198-.207.002-.574.028-.75.199-.172.168-.208.51-.208.767zm-.664 1.664c-.392-.378-.588-.936-.588-1.664 0-.728.196-1.289.588-1.664.375-.367.922-.552 1.62-.552.697 0 1.243.185 1.621.55.392.377.591.94.591 1.666s-.199 1.286-.594 1.664c-.375.364-.921.546-1.619.546-.697 0-1.24-.185-1.619-.546zm4.28 3.709a1.095 1.095 0 00-.269-.608c-.269-.28-.717-.336-1.045-.336h-2.694c-.328 0-.773.058-1.04.336-.165.17-.237.398-.266.608h5.314zm.63-1.474c.418.434.636 1.037.636 1.737v.737a.252.252 0 01-.249.252h-7.35a.25.25 0 01-.25-.252v-.737c0-.703.219-1.303.63-1.737.452-.47 1.124-.72 1.942-.72h2.695c.823 0 1.493.25 1.946.72zm-7.411-2.409a.626.626 0 10.65-1.067l-1.845-1.13v-2.14a.625.625 0 00-1.249 0v2.14l-1.843 1.129a.627.627 0 00-.205.863c.18.291.563.384.858.204l1.818-1.112 1.815 1.112z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPeopleNetworkRegular;
