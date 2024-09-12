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

const IconCancellationLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22.372 8.429a4.47 4.47 0 0 0-3.75-4.4V2H9.04L3.622 7.418V22h15v-9.171a4.47 4.47 0 0 0 3.75-4.4m-13.75-3.99V7h-2.56zM5.051 20.571V8.43h5v-5h7.143v.6a4.457 4.457 0 0 0 0 8.8v7.742zm12.857-8.75a3.393 3.393 0 1 1 0-6.785 3.393 3.393 0 0 1 0 6.785"
                />
                <path
                    fill={fillColor}
                    d="M19.597 6.74a.54.54 0 0 0-.757 0l-.932.931-.932-.932a.535.535 0 1 0-.757.757l.932.933-.932.932a.54.54 0 0 0 0 .757.55.55 0 0 0 .583.116.5.5 0 0 0 .174-.116l.932-.932.932.932a.534.534 0 0 0 .913-.379.54.54 0 0 0-.156-.378l-.932-.932.932-.933a.54.54 0 0 0 0-.757m-4.546 9.903H7.194a.714.714 0 1 0 0 1.428h7.857a.714.714 0 0 0 0-1.428m0-3.572H7.194a.714.714 0 1 0 0 1.429h7.857a.714.714 0 1 0 0-1.428"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.35 3.804V2H8.56l-.106.104L3.35 7.21V22h14.643a.357.357 0 1 0 0-.714H4.064V7.714h5v-5h8.572v1.09a4.643 4.643 0 1 0 .714 0M4.568 7 8.35 3.218V7zm13.425 5.357a3.929 3.929 0 1 1 0-7.858 3.929 3.929 0 0 1 0 7.858"
                />
                <path
                    fill={fillColor}
                    d="M19.675 6.746a.357.357 0 0 0-.507 0l-1.175 1.179-1.175-1.179a.358.358 0 1 0-.507.508l1.178 1.175-1.178 1.175a.356.356 0 0 0 0 .507.36.36 0 0 0 .507 0l1.175-1.179 1.175 1.179a.357.357 0 0 0 .613-.254.36.36 0 0 0-.106-.253l-1.178-1.175 1.178-1.175a.36.36 0 0 0 .078-.391.4.4 0 0 0-.078-.117M17.993 20.214a.714.714 0 1 0 0-1.428.714.714 0 0 0 0 1.428M18.35 17.357v-3.214a.357.357 0 1 0-.714 0v3.214a.357.357 0 1 0 .714 0M14.78 17H6.922a.357.357 0 1 0 0 .714h7.857a.357.357 0 1 0 0-.714m0-3.571H6.922a.357.357 0 1 0 0 .714h7.857a.357.357 0 0 0 0-.714"
                />
            </svg>
        );
    }
};

export default IconCancellationLight;
