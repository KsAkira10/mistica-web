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

const IconData10GbFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.301 15.224h-1.147V13.97h1.147c.358 0 .645.286.645.645 0 .358-.287.609-.645.609m.358 1.075h-1.505v1.254h1.505a.64.64 0 0 0 .646-.645c0-.358-.287-.609-.646-.609m3.835-8.6v14.298H4.514V4.114C4.514 2.932 5.374 2 6.45 2h7.275c.538 0 1.147.25 1.541.645L18.956 6.3q.538.539.538 1.398M11.287 9.31c0 1.756.753 2.867 1.971 2.867 1.183 0 1.972-1.111 1.972-2.867s-.753-2.867-1.972-2.867-1.97 1.075-1.97 2.867m-2.83-1.756c.107.286.43.394.68.286l.143-.071v3.87c0 .287.251.538.538.538s.538-.251.538-.538V6.981c0-.179-.072-.358-.251-.43-.144-.107-.323-.107-.502-.071l-.896.358c-.215.108-.358.43-.25.717m3.906 8.207a.55.55 0 0 0-.538-.538H9.854a.55.55 0 0 0-.538.537c0 .287.251.538.538.538h1.362a1.785 1.785 0 0 1-1.72 1.254 1.774 1.774 0 0 1-1.792-1.792c0-1.003.788-1.791 1.792-1.791.43 0 .788.143 1.11.394.216.179.574.143.753-.072a.556.556 0 0 0-.072-.752c-.501-.395-1.146-.645-1.791-.645a2.875 2.875 0 0 0-2.867 2.867 2.875 2.875 0 0 0 2.867 2.866 2.875 2.875 0 0 0 2.867-2.867m5.017 1.182c0-.537-.251-1.04-.681-1.362q.322-.43.322-.967a1.72 1.72 0 0 0-1.72-1.72h-1.72a.55.55 0 0 0-.538.537v4.659c0 .287.251.537.538.537h2.079c.967 0 1.72-.752 1.72-1.684m-4.122-5.841c.61 0 .896-.896.896-1.792 0-.43-.071-1.792-.896-1.792-.824 0-.895 1.254-.895 1.792 0 .286.035 1.792.895 1.792"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.301 15.224h-1.147V13.97h1.147c.358 0 .645.286.645.645 0 .358-.287.609-.645.609m.358 1.075h-1.505v1.254h1.505a.64.64 0 0 0 .646-.645c0-.358-.287-.609-.646-.609m3.835-8.6v14.298H4.514V4.114C4.514 2.932 5.374 2 6.45 2h7.275c.538 0 1.147.25 1.541.645L18.956 6.3q.538.539.538 1.398M11.287 9.31c0 1.756.753 2.867 1.971 2.867 1.183 0 1.972-1.111 1.972-2.867s-.753-2.867-1.972-2.867-1.97 1.075-1.97 2.867m-2.83-1.756c.107.286.43.394.68.286l.143-.071v3.87c0 .287.251.538.538.538s.538-.251.538-.538V6.981c0-.179-.072-.358-.251-.43-.144-.107-.323-.107-.502-.071l-.896.358c-.215.108-.358.43-.25.717m3.906 8.207a.55.55 0 0 0-.538-.538H9.854a.55.55 0 0 0-.538.537c0 .287.251.538.538.538h1.362a1.785 1.785 0 0 1-1.72 1.254 1.774 1.774 0 0 1-1.792-1.792c0-1.003.788-1.791 1.792-1.791.43 0 .788.143 1.11.394.216.179.574.143.753-.072a.556.556 0 0 0-.072-.752c-.501-.395-1.146-.645-1.791-.645a2.875 2.875 0 0 0-2.867 2.867 2.875 2.875 0 0 0 2.867 2.866 2.875 2.875 0 0 0 2.867-2.867m5.017 1.182c0-.537-.251-1.04-.681-1.362q.322-.43.322-.967a1.72 1.72 0 0 0-1.72-1.72h-1.72a.55.55 0 0 0-.538.537v4.659c0 .287.251.537.538.537h2.079c.967 0 1.72-.752 1.72-1.684m-4.122-5.841c.61 0 .896-.896.896-1.792 0-.43-.071-1.792-.896-1.792-.824 0-.895 1.254-.895 1.792 0 .286.035 1.792.895 1.792"
                />
            </svg>
        );
    }
};

export default IconData10GbFilled;
