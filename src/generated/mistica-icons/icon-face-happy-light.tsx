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

const IconFaceHappyLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                />
                <path
                    fill={fillColor}
                    d="M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3m0 .85c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
                />
                <path
                    fill={fillColor}
                    d="M12 15.5c2.28 0 3.077-1.354 3.15-1.629a.5.5 0 1 1 .967.258C15.923 14.854 14.72 16.5 12 16.5s-3.923-1.646-4.117-2.371a.5.5 0 0 1 .967-.258c.073.275.87 1.629 3.15 1.629"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25m4.057 11.65a.624.624 0 1 0-.968-.79c-.728.897-1.9 1.43-3.128 1.43s-2.397-.533-3.125-1.426a.624.624 0 1 0-.968.79c.978 1.196 2.471 1.882 4.093 1.882 1.625.007 3.118-.682 4.096-1.886m-7.45-6.65a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.597 9.932a.716.716 0 1 0 0-1.432.716.716 0 0 0 0 1.432M15.284 9.932a.716.716 0 1 0 0-1.432.716.716 0 0 0 0 1.432M8.813 13.193a.35.35 0 0 0-.626.314c.214.426.539.79.893 1.105.613.544 1.568 1.088 2.92 1.088s2.307-.544 2.92-1.088c.354-.315.68-.68.893-1.105a.35.35 0 0 0-.592-.368 3.9 3.9 0 0 1-.766.95c-.512.455-1.307.911-2.455.911s-1.943-.456-2.455-.912c-.287-.254-.555-.552-.732-.895"
                />
                <path
                    fill={fillColor}
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-.7 0a9.3 9.3 0 1 0-18.6 0 9.3 9.3 0 0 0 18.6 0"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.838 11.997c0-6.706-3.628-9.846-9.846-9.846-6.219 0-9.84 3.14-9.84 9.846s3.621 9.84 9.84 9.84 9.845-3.134 9.845-9.84m-9.846 9.02c-5.986 0-9.02-3.034-9.02-9.02 0-5.989 3.034-9.025 9.02-9.025 5.988 0 9.025 3.036 9.025 9.025 0 5.986-3.037 9.02-9.025 9.02m5.31-7.115a.411.411 0 0 1 .611.549c-.09.098-2.207 2.406-5.854 2.448q-.076.004-.151.003c-.726 0-3.799-.14-5.832-2.415a.412.412 0 0 1 .613-.546c2.017 2.258 5.314 2.143 5.347 2.137 3.23-.035 5.18-2.085 5.264-2.173zM9.008 10.44c-.327 0-.599-.101-.787-.292-.185-.187-.277-.448-.277-.775 0-.667.398-1.068 1.064-1.068.667 0 1.065.4 1.065 1.068q0 .49-.277.775c-.188.19-.46.292-.788.292m5.185-.292c.188.19.46.292.787.292.328 0 .6-.101.787-.292q.278-.285.278-.775c0-.667-.398-1.068-1.065-1.068s-1.064.4-1.064 1.068q0 .492.277.775"
                />
            </svg>
        );
    }
};

export default IconFaceHappyLight;
