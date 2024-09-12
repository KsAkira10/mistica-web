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

const IconInternetFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 11.46C2.256 6.579 5.975 2.61 10.72 2c-2.38 1-4.132 4.767-4.26 9.46zm20 0h-4.46C17.416 6.768 15.664 3 13.28 2c4.745.613 8.464 4.578 8.72 9.46m-9.456 1.08v8.575c2.095-.544 3.793-4.205 3.92-8.576zm4.996 0c-.124 4.693-1.876 8.46-4.26 9.46 4.745-.609 8.464-4.578 8.72-9.46zm-4.996-1.084v-8.57c2.095.543 3.793 4.204 3.92 8.57zm-1.084 9.659v-8.576H7.54c.128 4.371 1.825 8.032 3.92 8.576M2 12.539c.256 4.883 3.975 8.848 8.72 9.461-2.384-1-4.132-4.767-4.26-9.46zm9.46-1.078H7.535c.133-4.371 1.83-8.032 3.925-8.576z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 11.46C2.256 6.579 5.975 2.61 10.72 2c-2.38 1-4.132 4.767-4.26 9.46zm20 0h-4.46C17.416 6.768 15.664 3 13.28 2c4.745.613 8.464 4.578 8.72 9.46m-9.456 1.08v8.575c2.095-.544 3.793-4.205 3.92-8.576zm4.996 0c-.124 4.693-1.876 8.46-4.26 9.46 4.745-.609 8.464-4.578 8.72-9.46zm-4.996-1.084v-8.57c2.095.543 3.793 4.204 3.92 8.57zm-1.084 9.659v-8.576H7.54c.128 4.371 1.825 8.032 3.92 8.576M2 12.539c.256 4.883 3.975 8.848 8.72 9.461-2.384-1-4.132-4.767-4.26-9.46zm9.46-1.078H7.535c.133-4.371 1.83-8.032 3.925-8.576z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.195 2.98c-.535-.41-1.1-.67-1.686-.782h-.003v-.056c2.888.087 5.154.899 6.737 2.426.977.946 1.686 2.15 2.117 3.607h-4.215c-.27-1.114-.656-2.14-1.152-3.028-.512-.924-1.117-1.652-1.798-2.168M7.691 5.147c-.496.888-.882 1.914-1.151 3.028h-3.9c.432-1.456 1.138-2.663 2.118-3.607 1.563-1.507 3.793-2.323 6.633-2.423v.02c-.66.086-1.3.358-1.902.814-.678.516-1.283 1.247-1.798 2.168M21.517 15.243q.349-1.47.348-3.244 0-1.454-.236-2.706h-4.257a17.1 17.1 0 0 1-.096 5.95z"
                />
                <path
                    fill={fillColor}
                    d="M7.694 8.175c.238-.91.566-1.748.972-2.476.762-1.367 1.714-2.199 2.722-2.392v4.868zM15.811 16.444q-.305.963-.792 1.852c-.709 1.269-1.58 2.075-2.51 2.342v-4.194zM11.388 20.685v-4.243H7.876c.202.64.468 1.263.793 1.851.759 1.367 1.711 2.202 2.72 2.392M6.313 9.293a17 17 0 0 0-.213 2.703c-.003 1.09.1 2.177.31 3.247H2.488q-.349-1.47-.348-3.244c.003-.972.081-1.871.235-2.706zM11.388 9.296H7.45q-.23 1.34-.23 2.703c-.002 1.09.11 2.18.337 3.246h3.831zM12.509 3.357c.93.264 1.801 1.073 2.51 2.342.406.728.734 1.566.972 2.476h-3.482zM16.234 9.296H12.51v5.947h3.619a15.4 15.4 0 0 0 .336-3.247 15.6 15.6 0 0 0-.23-2.7M9.486 21.016c.603.456 1.241.73 1.902.815v.017c-2.837-.101-5.067-.913-6.63-2.42-.837-.805-1.473-1.805-1.91-2.986h3.854c.255.876.586 1.686.986 2.406.516.921 1.12 1.652 1.798 2.168M16.98 16.442a11.6 11.6 0 0 1-.987 2.406c-.512.921-1.12 1.652-1.798 2.168-.538.406-1.1.67-1.686.781v.056c2.888-.084 5.151-.899 6.734-2.423.835-.806 1.476-1.804 1.913-2.986H16.98z"
                />
            </svg>
        );
    }
};

export default IconInternetFilled;
