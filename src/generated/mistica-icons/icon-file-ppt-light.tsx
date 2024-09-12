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

const IconFilePptLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.913 11.457H4.618v3.77h.86v-1.3h.605c.496 0 .838-.115 1.06-.364q.28-.313.28-.916.001-.603-.303-.882c-.244-.227-.616-.308-1.207-.308m.49 1.68c-.11.104-.227.143-.502.143v.003h-.425V12.08h.403c.266 0 .426.04.53.132q.144.138.142.445 0 .332-.148.48M8.033 11.457h1.294c.591 0 .964.08 1.207.308.205.187.303.479.303.882q.001.603-.28.916c-.222.25-.563.364-1.059.364h-.605v1.3h-.86zm1.784 1.68q.148-.147.149-.479c0-.204-.045-.353-.143-.445-.104-.093-.263-.132-.53-.132H8.89v1.202h.426v-.003c.274 0 .392-.04.501-.143M12.282 12.078h-1.168v-.621h3.236l-.068.621h-1.14v3.149h-.86z"
            />
            <path
                fill={fillColor}
                d="M21.806 7.908q.033.077.034.162v12.563c0 .653-.563 1.204-1.23 1.204H8.173c-.655 0-1.23-.562-1.23-1.204l.037-3.036H4.422a2.27 2.27 0 0 1-2.266-2.27v-4.179A2.27 2.27 0 0 1 4.422 8.88h2.521V3.356c0-.63.586-1.205 1.23-1.205h7.572c.182 0 .352.07.484.196l5.409 5.236a.7.7 0 0 1 .168.325M20.61 21.01c.207 0 .403-.185.403-.378V8.751h-2.565c-.98 0-1.827-.317-2.443-.916-.622-.603-.952-1.429-.952-2.384V2.978H8.17c-.182 0-.406.207-.406.378v5.52h6.706a2.27 2.27 0 0 1 2.266 2.27v4.179a2.27 2.27 0 0 1-2.266 2.269H7.803l-.036 3.042c0 .182.204.372.406.372H20.61zM2.98 15.325c0 .795.644 1.442 1.44 1.442h10.053c.792 0 1.44-.647 1.44-1.442v-4.18c0-.795-.645-1.442-1.44-1.442H4.42c-.793 0-1.44.647-1.44 1.443zM15.879 3.16V5.45c0 .728.24 1.347.7 1.79.462.445 1.11.683 1.869.683h2.35z"
            />
        </svg>
    );
};

export default IconFilePptLight;
