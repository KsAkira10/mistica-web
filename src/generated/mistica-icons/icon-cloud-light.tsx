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

const IconCloudLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 5c2.463 0 4.534 1.76 4.963 4.094 2.784 0 5.037 2.224 5.037 4.953S19.751 19 17 19H7c-2.751 0-5-2.224-5-4.953s2.249-4.953 5-4.953h.073A5.03 5.03 0 0 1 12 5m-8.57 9.042c0 1.94 1.605 3.52 3.57 3.52h10c1.96 0 3.565-1.58 3.565-3.52s-1.604-3.52-3.57-3.52a5.5 5.5 0 0 1-.178.828c-.068.285-.356.5-.676.5-.073 0-.142 0-.215-.036-.357-.11-.571-.5-.498-.97a2.7 2.7 0 0 0 .141-.932v-.18c-.068-1.87-1.64-3.34-3.569-3.34-1.746 0-3.213 1.255-3.533 2.872a5.3 5.3 0 0 1 1.284.611c.32.216.43.685.215 1.006-.215.322-.68.432-1 .216A3.7 3.7 0 0 0 7 10.523c-1.96 0-3.57 1.58-3.57 3.52"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.752 9.036h.357c2.715 0 4.896 2.251 4.891 5.03 0 2.813-2.176 5.064-4.891 5.064h-5.107c-.215 0-.356-.148-.356-.374s.141-.374.356-.374h5.102c2.322 0 4.215-1.877 4.215-4.277s-1.893-4.31-4.178-4.31h-.32c0 .374-.074.787-.179 1.161-.073.154-.215.264-.356.264h-.105c-.179-.038-.325-.264-.252-.451.105-.375.178-.787.178-1.2V9.42c-.105-2.323-1.892-4.162-4.105-4.162-2.107 0-3.895 1.728-4.073 3.864.535.15 1.07.375 1.536.71.178.111.21.337.105.524s-.32.22-.498.11c-.677-.446-1.426-.71-2.25-.71-2.285 0-4.104 1.949-4.104 4.31 0 2.362 1.82 4.31 4.105 4.31h.891c.215 0 .357.15.357.375a.366.366 0 0 1-.357.375h-.891C4.144 19.126 2 16.836 2 14.062s2.144-5.064 4.823-5.026h.393C7.467 6.487 9.538 4.5 12.002 4.5s4.535 1.987 4.75 4.536m-7.607 9.715c0-.413.32-.749.713-.749s.713.336.713.75c0 .412-.32.748-.713.748s-.713-.336-.713-.749"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.033 18.881h10.728a5.077 5.077 0 0 0 5.076-5.07 5.08 5.08 0 0 0-5.286-5.067l-.033.003-.006-.011a6.11 6.11 0 0 0-5.569-3.611c-3.319 0-5.734 2.555-5.75 6.078a.6.6 0 0 1-.138.05c-.778.22-1.498.701-2.03 1.36-.569.703-.869 1.529-.869 2.392a3.88 3.88 0 0 0 3.877 3.876M7.207 7.257c.944-1.014 2.269-1.572 3.736-1.572a5.56 5.56 0 0 1 5.062 3.286q0 .005.003.008.136.337.448.328l.06-.003.06-.003h.022q.085-.005.166-.005a4.516 4.516 0 0 1 4.51 4.513 4.52 4.52 0 0 1-4.513 4.512H6.033a3.32 3.32 0 0 1-3.317-3.316c0-.732.255-1.437.743-2.04a3.5 3.5 0 0 1 1.748-1.173c.134-.037.543-.154.543-.552 0-1.558.513-2.97 1.457-3.983"
                />
            </svg>
        );
    }
};

export default IconCloudLight;
