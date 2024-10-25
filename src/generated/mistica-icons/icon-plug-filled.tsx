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

const IconPlugFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 9.695c0-2.54-1.997-4.615-4.443-4.615s-4.442 2.075-4.442 4.615v7.695c0 1.654-1.481 3.076-3.146 3.076-1.63 0-2.962-1.384-2.962-3.076v-1.925c2.03-.387 3.51-2.232 3.51-4.423V5.845H8.852V2.77c0-.424-.332-.769-.74-.769-.409 0-.74.345-.74.77v3.075H5.145V2.77c0-.424-.332-.769-.74-.769-.409 0-.741.345-.741.77v3.075H2v5.193c0 2.19 1.48 4.04 3.518 4.423v1.925c0 2.54 1.997 4.614 4.443 4.614 2.517 0 4.63-2.116 4.63-4.614V9.695c0-1.692 1.333-3.076 2.962-3.076s2.962 1.384 2.962 3.076v7.308c0 .424.332.77.74.77.409 0 .741-.346.741-.77V9.695z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 9.695c0-2.54-1.997-4.615-4.443-4.615s-4.442 2.075-4.442 4.615v7.695c0 1.654-1.481 3.076-3.146 3.076-1.63 0-2.962-1.384-2.962-3.076v-1.925c2.03-.387 3.51-2.232 3.51-4.423V5.845H8.852V2.77c0-.424-.332-.769-.74-.769-.409 0-.74.345-.74.77v3.075H5.145V2.77c0-.424-.332-.769-.74-.769-.409 0-.741.345-.741.77v3.075H2v5.193c0 2.19 1.48 4.04 3.518 4.423v1.925c0 2.54 1.997 4.614 4.443 4.614 2.517 0 4.63-2.116 4.63-4.614V9.695c0-1.692 1.333-3.076 2.962-3.076s2.962 1.384 2.962 3.076v7.308c0 .424.332.77.74.77.409 0 .741-.346.741-.77V9.695z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.534 7.624h.63c.546 0 .989.428.989.955v.07c0 2.725-1.227 4.16-2.336 4.896v1.252c0 .633-.197 1.126-.586 1.465-.333.297-.793.451-1.358.48v4.15c0 .524-.44.947-.98.947h-1.788c-.54 0-.98-.423-.98-.947v-4.15c-.56-.032-1.017-.186-1.345-.48-.39-.33-.6-.837-.6-1.462v-1.247c-1.109-.736-2.336-2.173-2.336-4.935 0-.571.446-1 .992-1h.476V3.752c0-.885.745-1.602 1.659-1.602.913 0 1.658.72 1.658 1.602v3.866l2.588.003V3.752c0-.885.745-1.602 1.658-1.602.916 0 1.659.72 1.659 1.602zm-7.56-4.247a.39.39 0 0 0-.393.378v3.866h.784V3.755a.387.387 0 0 0-.392-.378m3.638 17.241v-3.661h-1.219v3.661zm1.871-16.863v3.869h.784V3.755a.387.387 0 0 0-.392-.378.39.39 0 0 0-.392.378"
                />
            </svg>
        );
    }
};

export default IconPlugFilled;
