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

const IconBillInvoicePoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.302 2H6.718C5.553 2 4.6 2.96 4.6 4.144V22h14.815V4.144C19.419 2.964 18.467 2 17.302 2m.704 18.574H6.013V4.144a.71.71 0 0 1 .705-.713h10.584a.71.71 0 0 1 .704.713zm-2.113-2.68a.53.53 0 0 0 .528-.534.53.53 0 0 0-.528-.535H8.13a.53.53 0 0 0-.528.535.53.53 0 0 0 .528.535zm.528-4.104a.53.53 0 0 1-.528.535H8.13a.53.53 0 0 1-.528-.535.53.53 0 0 1 .528-.535h7.762a.53.53 0 0 1 .528.535m-.528-3.397a.53.53 0 0 0 .528-.535.54.54 0 0 0-.528-.54h-1.775a1 1 0 0 0 .014-.177v-.892h.88a.53.53 0 0 0 .529-.535.53.53 0 0 0-.529-.535h-.88v-.891c0-.293.235-.535.528-.535.145 0 .285.06.384.17a.53.53 0 0 0 .75.022.545.545 0 0 0 .022-.759 1.57 1.57 0 0 0-1.156-.507c-.876 0-1.59.722-1.59 1.609v.896a.53.53 0 0 0-.528.535.53.53 0 0 0 .529.535v.891c0 .1-.077.178-.176.178a.53.53 0 0 0-.529.535.53.53 0 0 0 .529.535z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.07 21.643a.35.35 0 0 1-.343.357H4.6V3.787C4.6 2.805 5.372 2 6.324 2h11.027c.948 0 1.724.8 1.724 1.787V17.36a.35.35 0 0 1-.344.357.35.35 0 0 1-.344-.357V3.787c0-.59-.463-1.07-1.032-1.07H6.33c-.57 0-1.032.48-1.032 1.07v17.5h13.438c.186 0 .336.16.336.356m-.343-2.857c-.38 0-.688.32-.688.713 0 .394.308.714.688.714s.688-.32.688-.714a.696.696 0 0 0-.688-.713M8.045 17.003h7.581c.19 0 .344.16.344.357a.35.35 0 0 1-.344.357H8.045a.35.35 0 0 1-.344-.357.35.35 0 0 1 .344-.357m7.581-3.574H8.045a.35.35 0 0 0-.344.356.35.35 0 0 0 .344.357h7.581a.35.35 0 0 0 .344-.357.35.35 0 0 0-.344-.356m-1.954-4.284h1.954c.19 0 .34.16.34.357a.35.35 0 0 1-.344.356h-2.929a.35.35 0 0 1-.344-.356.35.35 0 0 1 .344-.357.345.345 0 0 0 .344-.356v-1.07h-.172a.35.35 0 0 1-.344-.357.35.35 0 0 1 .344-.356h.172v-1.07c0-.786.618-1.426 1.376-1.426.38 0 .746.16 1.006.448a.364.364 0 0 1-.013.503.33.33 0 0 1-.486-.014.67.67 0 0 0-.502-.224c-.38 0-.688.32-.688.713v1.07h1.032c.19 0 .344.16.344.356a.35.35 0 0 1-.344.357H13.73v1.07c0 .123-.018.246-.058.356"
                />
            </svg>
        );
    }
};

export default IconBillInvoicePoundLight;
