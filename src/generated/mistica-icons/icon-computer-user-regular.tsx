'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconComputerUserRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.962 11.475c-1.443 0-2.58-.392-3.39-1.17-.843-.81-1.266-1.981-1.266-3.488 0-1.502.423-2.678 1.266-3.488.81-.784 1.947-1.179 3.39-1.179 1.442 0 2.59.392 3.4 1.18.849.809 1.275 1.988 1.275 3.487 0 1.507-.426 2.678-1.275 3.487-.81.779-1.95 1.171-3.4 1.171M6.508 6.817c0 1.168.305 2.05.896 2.622.577.552 1.434.834 2.558.834q1.699-.002 2.566-.834c.602-.577.907-1.46.907-2.622 0-1.165-.305-2.045-.907-2.622-.578-.56-1.443-.84-2.566-.84-1.112 0-1.978.28-2.558.84-.59.577-.896 1.46-.896 2.622m4.12 13.244c-.641 0-1.131-.16-1.49-.482H3.222a1.065 1.065 0 0 1-1.067-1.06v-1.352c0-1.451.457-2.695 1.33-3.6.947-.994 2.334-1.515 4-1.515h1.813c.336-.224.776-.344 1.33-.344l8.874-.009c.698 0 1.227.185 1.577.552q.52.531.521 1.532v4.177c0 .666-.168 1.179-.512 1.537-.362.37-.9.564-1.586.564zm-.907-2.101c0 .336.064.585.185.706.16.168.52.193.72.193H19.5c.198 0 .551-.025.72-.193.111-.12.176-.376.176-.706v-4.177c0-.33-.065-.577-.177-.689-.12-.12-.378-.193-.72-.193l-8.873.008c-.353 0-.608.065-.72.185-.118.12-.185.37-.185.698zm-1.171.417a4 4 0 0 1-.034-.417v-4.168c0-.194.026-.37.05-.538H7.484c-1.33 0-2.42.395-3.135 1.137-.65.68-.994 1.644-.994 2.773l.003 1.213zm12.689 3.462a.601.601 0 1 0 0-1.204H8.919a.601.601 0 1 0 0 1.204z"
            />
        </svg>
    );
};

export default IconComputerUserRegular;
