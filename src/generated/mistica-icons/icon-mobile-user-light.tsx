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

const IconMobileUserLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.839 2h6.316c1.936 0 3.508 1.605 3.508 3.576v12.853c0 1.97-1.572 3.571-3.508 3.571H8.839c-1.937 0-3.509-1.6-3.509-3.571V5.57C5.33 3.601 6.902 2 8.84 2M6.732 6.646v10.718h10.53V6.646zM8.839 3.43c-1.043 0-1.905.773-2.076 1.788H17.23c-.17-1.015-1.033-1.788-2.075-1.788zm0 17.147h6.316c1.042 0 1.905-.773 2.075-1.788H6.763c.17 1.015 1.033 1.788 2.076 1.788m4.977-8.427c.499-.49.813-1.175.813-1.934 0-1.477-1.181-2.68-2.632-2.68s-2.633 1.203-2.633 2.68c0 .759.315 1.445.813 1.934-1.15.462-1.868 1.376-1.868 2.533v1.07c0 .297.233.535.525.535a.53.53 0 0 0 .526-.535v-1.07c0-1.052 1.082-1.788 2.632-1.788s2.633.736 2.633 1.788v1.07a.528.528 0 1 0 1.056 0v-1.07c0-1.157-.715-2.071-1.865-2.533m-1.82-3.544c.872 0 1.582.723 1.582 1.61s-.71 1.61-1.581 1.61c-.872 0-1.582-.723-1.582-1.61s.71-1.61 1.582-1.61"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.25 5.922q-.001.005-.002.005l-.002.004v12.855c0 1.774-1.4 3.214-3.124 3.214H8.874C7.15 22 5.75 20.56 5.75 18.786V5.214C5.75 3.44 7.15 2 8.874 2h6.252c1.724 0 3.124 1.44 3.124 3.214zm-3.128-3.209H8.874c-1.342 0-2.43 1.12-2.43 2.5v.353h11.108v-.352c0-1.38-1.088-2.5-2.43-2.5m0 18.57c1.342 0 2.43-1.12 2.43-2.501V6.279H6.443v11.433h7.292c.191 0 .347.16.347.357a.35.35 0 0 1-.347.356H6.443v.357c0 1.38 1.089 2.5 2.43 2.5zm.697-2.501c.382 0 .694-.32.694-.713a.704.704 0 0 0-.694-.714.704.704 0 0 0-.693.713c0 .394.311.714.693.714m-.35-3.392v-1.07c0-1.166-.783-2.07-2.018-2.464a2.52 2.52 0 0 0 .977-1.998c0-1.38-1.088-2.5-2.43-2.5s-2.43 1.12-2.43 2.5c0 .819.386 1.54.977 1.998-1.236.393-2.018 1.298-2.018 2.464v1.07c0 .196.156.356.347.356s.346-.16.346-.356v-1.07c0-1.157 1.143-1.966 2.778-1.966s2.777.81 2.777 1.966v1.07c0 .196.156.356.347.356s.346-.16.346-.356m-3.471-7.324c.96 0 1.737.8 1.737 1.788 0 .987-.777 1.787-1.737 1.787s-1.738-.8-1.738-1.787c0-.983.778-1.788 1.738-1.788"
                />
            </svg>
        );
    }
};

export default IconMobileUserLight;
