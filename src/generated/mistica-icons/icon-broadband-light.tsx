'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBroadbandLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.49 10.929a.28.28 0 0 1-.28-.28c0-.076.03-.149.083-.202.886-.857 1.334-2.17 1.334-3.902 0-1.737-.451-3.05-1.342-3.91a.28.28 0 0 1-.005-.398.28.28 0 0 1 .397-.006c1.003.967 1.513 2.418 1.513 4.314 0 1.888-.504 3.336-1.501 4.303a.3.3 0 0 1-.2.08M9.96 9.251a.28.28 0 0 0 .474.202c.677-.656 1.02-1.633 1.02-2.905 0-1.275-.345-2.255-1.026-2.91a.28.28 0 1 0-.387.403c.566.546.855 1.395.855 2.507s-.289 1.955-.852 2.501a.29.29 0 0 0-.084.202M4.243 18.01c0-.454.263-.664.67-.664.406 0 .672.213.669.664 0 .219-.059.381-.168.49-.118.12-.289.177-.501.177s-.384-.059-.502-.177c-.106-.109-.168-.271-.168-.49M6.68 18.01c0-.454.263-.664.67-.664.406 0 .672.213.669.664 0 .219-.059.381-.168.49-.118.12-.289.177-.501.177s-.384-.059-.502-.177c-.106-.109-.168-.271-.168-.49"
            />
            <path
                fill={fillColor}
                d="M7.075 14.181H5.167c-.988 0-1.753.272-2.266.804-.493.513-.745 1.255-.745 2.207v1.639c0 .952.252 1.695.745 2.207.513.532 1.278.804 2.266.804h13.656c.989 0 1.753-.269 2.266-.804.493-.512.745-1.255.745-2.207v-1.639c0-.952-.25-1.694-.745-2.207-.513-.535-1.277-.804-2.266-.804H7.635V6.548a.28.28 0 0 0-.28-.28.28.28 0 0 0-.28.28zm-1.908.56h13.656c.832 0 1.46.213 1.863.633.389.404.588 1.017.588 1.818v1.639c0 .801-.199 1.412-.588 1.818-.404.42-1.031.633-1.863.633H5.167c-.831 0-1.459-.213-1.862-.633-.39-.404-.589-1.017-.589-1.818v-1.639c0-.8.2-1.412.589-1.818.403-.42 1.03-.633 1.862-.633"
            />
        </svg>
    );
};

export default IconBroadbandLight;
