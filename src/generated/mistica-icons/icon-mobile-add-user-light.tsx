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

const IconMobileAddUserLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.5 7.712c0-1.951-1.445-3.555-3.282-3.733C17.641 2.768 16.456 2 15.134 2H8.941C7.04 2 5.5 3.6 5.5 5.569V18.43C5.5 20.401 7.042 22 8.94 22h6.194c1.899 0 3.44-1.6 3.44-3.569V11.39c1.666-.334 2.926-1.855 2.926-3.678M8.94 3.43h6.194c.617 0 1.177.284 1.56.75a3.64 3.64 0 0 0-1.502 1.041q-.016 0-.031-.004l-.031-.005H6.905C7.073 4.202 7.92 3.43 8.941 3.43M6.906 18.78H17.17c-.168 1.014-1.014 1.786-2.036 1.786H8.941c-1.022 0-1.868-.772-2.036-1.786m-.03-1.43V6.641h7.55a3.9 3.9 0 0 0-.154 1.07c0 1.823 1.26 3.344 2.93 3.678v5.958zm13.594-9.637c0 1.476-1.158 2.677-2.581 2.677s-2.582-1.201-2.582-2.677 1.159-2.678 2.582-2.678 2.581 1.202 2.581 2.678m-.348 0a.523.523 0 0 1-.515.534h-1.203v1.248c0 .297-.229.534-.515.534a.523.523 0 0 1-.516-.534V8.25H16.17a.523.523 0 0 1-.516-.535c0-.297.23-.534.516-.534h1.202V5.934c0-.297.23-.534.516-.534s.515.237.515.534v1.248h1.203a.52.52 0 0 1 .515.53m-5.506 4.016c0 .759-.309 1.444-.798 1.933 1.132.462 1.833 1.375 1.824 2.527 0 .297-.23.535-.515.535a.523.523 0 0 1-.516-.535c0-1.051-1.061-1.787-2.581-1.787-1.498 0-2.582.754-2.582 1.787 0 .297-.229.535-.515.535a.523.523 0 0 1-.516-.535c0-1.133.718-2.056 1.842-2.522a2.71 2.71 0 0 1-.806-1.938c0-1.476 1.158-2.677 2.581-2.677s2.582 1.201 2.582 2.677m-2.578-1.608c-.854 0-1.55.722-1.55 1.608s.696 1.608 1.55 1.608c.85 0 1.551-.721 1.551-1.608 0-.886-.696-1.608-1.55-1.608"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.5 7.714c0 1.97-1.593 3.57-3.554 3.57S14.387 9.68 14.387 7.71c0-.508.11-.988.3-1.427H6.215v11.429h7.464a.356.356 0 0 1 0 .713H6.21v.357c0 1.38 1.115 2.5 2.49 2.5h6.397c1.375 0 2.49-1.12 2.49-2.5V12.71c0-.197.159-.357.354-.357.196 0 .355.16.355.357v6.075A3.21 3.21 0 0 1 15.097 22H8.7C6.933 22 5.5 20.56 5.5 18.786V5.214A3.21 3.21 0 0 1 8.7 2h6.402c1.392 0 2.575.9 3.012 2.153A3.56 3.56 0 0 1 21.5 7.714m-15.286-2.5v.356h8.892a3.56 3.56 0 0 1 2.262-1.376 2.49 2.49 0 0 0-2.266-1.48H8.704a2.495 2.495 0 0 0-2.49 2.5m11.732-.357a2.85 2.85 0 0 0-2.844 2.857 2.85 2.85 0 0 0 2.844 2.858c1.57 0 2.844-1.28 2.844-2.858a2.85 2.85 0 0 0-2.844-2.857m-2.134 2.857c0 .197.159.357.355.357h1.42v1.426c0 .197.159.357.354.357.196 0 .355-.16.355-.357V8.071h1.42a.356.356 0 0 0 0-.713h-1.42V5.93a.356.356 0 0 0-.355-.356.356.356 0 0 0-.354.356v1.427h-1.42a.356.356 0 0 0-.355.356m-7.823 8.75c0 .197.16.357.355.357.196 0 .355-.16.355-.357 0-1.138 1.197-1.966 2.844-1.966 1.675 0 2.844.81 2.844 1.966 0 .197.16.357.355.357.196 0 .355-.16.355-.357 0-1.166-.8-2.07-2.066-2.464a2.499 2.499 0 0 0-1.488-4.498 2.495 2.495 0 0 0-2.489 2.5c0 .823.396 1.55 1.01 2.007-1.256.393-2.075 1.308-2.075 2.455m3.559-6.254c.983 0 1.774.805 1.774 1.788s-.796 1.787-1.779 1.787a1.78 1.78 0 0 1-1.775-1.787c0-.983.797-1.788 1.78-1.788"
                />
            </svg>
        );
    }
};

export default IconMobileAddUserLight;
