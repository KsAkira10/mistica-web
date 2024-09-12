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

const IconHospitalLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.838 6.24c0-.251-.043-1.075-.589-1.075h-2.526V3.353c0-.63-.544-1.202-1.143-1.202H6.415c-.6 0-1.143.572-1.143 1.202v1.812H2.739c-.546 0-.588.824-.588 1.076v14.524c0 .325.056 1.075.588 1.075h18.51c.533 0 .588-.75.588-1.075zm-3.933-2.884V21.02h-3.026v-6.888a.41.41 0 0 0-.408-.41H9.524a.41.41 0 0 0-.41.41v6.888H6.088V3.356c0-.182.19-.381.325-.381h11.165c.137 0 .328.196.328.38m3.117 17.406c0 .098-.01.183-.018.25l-.001.005H18.72V6.238q.001-.149.02-.255H21q.021.106.022.255zm-6.96.255H9.93v-6.48h4.132zm-11.096-.255h-.002V6.24c0-.098.01-.185.022-.255h2.26q.019.107.02.255v13.745l.001.004.002.007v1.02H2.986a1.6 1.6 0 0 1-.02-.255m12.11-12.009v-.008H13.19a.409.409 0 0 0-.409.412l.006 1.896c0 .043-.02.078-.029.094l-.004.01-1.493.003c-.014-.006-.05-.048-.05-.107V9.157a.41.41 0 0 0-.41-.41H8.913a.2.2 0 0 1-.093-.025l-.01-.005-.003-1.496c.005-.014.047-.05.106-.05h1.888a.41.41 0 0 0 .41-.41V4.867c0-.039.015-.073.024-.093q.007-.014.006-.017l1.482-.003c.016.009.056.06.056.115v1.894a.41.41 0 0 0 .409.409h1.89c.05 0 .093.03.11.05l.002 1.474c-.008.02-.058.058-.114.058M16 7.202c0-.451-.431-.852-.924-.852h-1.482V4.868c0-.495-.398-.93-.849-.93h-1.504c-.462 0-.849.426-.849.93v1.485H8.913c-.498 0-.921.39-.921.851v1.513c0 .462.423.852.921.852h1.48v1.487c0 .501.388.924.848.924h1.51c.46 0 .848-.423.848-.924l-.002-1.485h1.479c.493 0 .924-.397.924-.851z"
            />
        </svg>
    );
};

export default IconHospitalLight;
