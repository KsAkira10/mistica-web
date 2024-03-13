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

const IconAlertRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.35 9.766v4.25a.625.625 0 1 0 1.25 0v-4.25a.625.625 0 1 0-1.25 0M11.975 17.131a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
                />
                <path
                    fill={fillColor}
                    d="M13.463 4.14c-.646-1.134-2.28-1.134-2.927 0L2.533 18.195a1.684 1.684 0 0 0 1.463 2.517h16.007a1.684 1.684 0 0 0 1.463-2.517zm6.917 14.672a.434.434 0 0 1-.377.65H3.996a.434.434 0 0 1-.377-.65L11.623 4.76a.434.434 0 0 1 .754 0z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.608 3.367C12.466 3.146 12.251 3 12 3a.69.69 0 0 0-.608.367L2.106 19.899a.69.69 0 0 0 0 .734c.142.221.357.367.608.367h18.572a.69.69 0 0 0 .608-.367.69.69 0 0 0 0-.734zM12 5.2l6.25 11.133 1.788 3.198H3.963zm0 3.49a.725.725 0 0 0-.713.734v5.696c0 .404.32.733.713.733s.713-.329.713-.733V9.43c0-.405-.32-.739-.713-.739m-.713 9.003c0-.405.32-.734.713-.734s.713.329.713.733c0 .405-.32.734-.713.734a.725.725 0 0 1-.713-.733"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22.182 23H1.817a.81.81 0 0 1-.702-.372.82.82 0 0 1-.025-.794L11.2 1.456c.144-.287.401-.456.69-.456s.545.169.689.453l10.325 20.378q0 .002.003.003a.8.8 0 0 1-.022.794.82.82 0 0 1-.702.372M11.4 16.946a.614.614 0 0 0 1.228 0V8.339a.614.614 0 0 0-1.228 0zm-.007 2.363c0 .394.23.619.62.619.393 0 .621-.225.621-.62 0-.393-.225-.618-.62-.618s-.62.225-.62.619M21.5 21.775l-9.604-18.96-9.404 18.96z"
                />
            </svg>
        );
    }
};

export default IconAlertRegular;
