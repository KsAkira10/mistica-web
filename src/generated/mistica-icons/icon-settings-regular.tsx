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

const IconSettingsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 17.716c-3 0-5.448-2.568-5.448-5.716S9 6.284 12 6.284 17.447 8.852 17.447 12 15 17.716 12 17.716m0-10c-2.253 0-4.083 1.92-4.083 4.284s1.83 4.284 4.083 4.284c2.252 0 4.082-1.92 4.082-4.284S14.252 7.716 12 7.716"
                />
                <path
                    fill={fillColor}
                    d="M13.357 22H10.63c-.377 0-.678-.316-.678-.712V20.3a7.9 7.9 0 0 1-2.108-.916l-.664.696a.665.665 0 0 1-.964 0l-1.929-2.016a.73.73 0 0 1 0-1.008l.664-.696a8.7 8.7 0 0 1-.873-2.212h-.93c-.378-.008-.679-.332-.679-.728v-2.86c0-.388.301-.712.679-.712h.941a8.7 8.7 0 0 1 .873-2.212l-.667-.688a.73.73 0 0 1 0-1.008l1.929-2.02a.66.66 0 0 1 .48-.212c.18 0 .354.072.48.212l.664.696A8.2 8.2 0 0 1 9.956 3.7v-.988c0-.396.31-.712.687-.712h2.725c.377 0 .678.316.678.712V3.7c.74.204 1.453.504 2.108.916l.66-.696a.66.66 0 0 1 .48-.212c.18 0 .355.072.48.212l1.922 2.024a.75.75 0 0 1 0 1.012l-.664.696c.393.688.679 1.432.873 2.212h.934c.378 0 .679.316.679.712v2.86c0 .396-.302.712-.679.712h-.934a8.7 8.7 0 0 1-.873 2.212l.664.696a.75.75 0 0 1 0 1.012l-1.918 2.012a.665.665 0 0 1-.964 0l-.663-.696a7.8 7.8 0 0 1-2.108.916v.988a.7.7 0 0 1-.686.712m-2.036-1.424h1.353v-.844c0-.348.233-.64.557-.704a6.6 6.6 0 0 0 2.615-1.14.66.66 0 0 1 .865.08l.572.6.964-1.012-.572-.6a.736.736 0 0 1-.076-.908 7.3 7.3 0 0 0 1.087-2.744.69.69 0 0 1 .67-.584h.805v-1.424h-.805a.69.69 0 0 1-.67-.584 7.3 7.3 0 0 0-1.087-2.744.74.74 0 0 1 .076-.908l.572-.6-.964-1.012-.572.6a.653.653 0 0 1-.865.08 6.6 6.6 0 0 0-2.615-1.14.704.704 0 0 1-.557-.704v-.86h-1.357v.852c0 .348-.232.64-.556.704-.95.188-1.83.568-2.615 1.14a.66.66 0 0 1-.865-.08l-.572-.6-.972 1.004.572.6a.736.736 0 0 1 .076.908 7.1 7.1 0 0 0-1.079 2.752.69.69 0 0 1-.67.584h-.809v1.424h.812c.332 0 .61.244.67.584a7.3 7.3 0 0 0 1.087 2.744.74.74 0 0 1-.076.908l-.572.6.965 1.012.571-.6a.653.653 0 0 1 .866-.08 6.6 6.6 0 0 0 2.614 1.14.704.704 0 0 1 .557.704z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 17.716c-3 0-5.448-2.568-5.448-5.716S9 6.284 12 6.284 17.447 8.852 17.447 12 15 17.716 12 17.716m0-10c-2.253 0-4.083 1.92-4.083 4.284s1.83 4.284 4.083 4.284c2.252 0 4.082-1.92 4.082-4.284S14.252 7.716 12 7.716"
                />
                <path
                    fill={fillColor}
                    d="M13.357 22H10.63c-.377 0-.678-.316-.678-.712V20.3a7.9 7.9 0 0 1-2.108-.916l-.664.696a.665.665 0 0 1-.964 0l-1.929-2.016a.73.73 0 0 1 0-1.008l.664-.696a8.7 8.7 0 0 1-.873-2.212h-.93c-.378-.008-.679-.332-.679-.728v-2.86c0-.388.301-.712.679-.712h.941a8.7 8.7 0 0 1 .873-2.212l-.667-.688a.73.73 0 0 1 0-1.008l1.929-2.02a.66.66 0 0 1 .48-.212c.18 0 .354.072.48.212l.664.696A8.2 8.2 0 0 1 9.956 3.7v-.988c0-.396.31-.712.687-.712h2.725c.377 0 .678.316.678.712V3.7c.74.204 1.453.504 2.108.916l.66-.696a.66.66 0 0 1 .48-.212c.18 0 .355.072.48.212l1.922 2.024a.75.75 0 0 1 0 1.012l-.664.696c.393.688.679 1.432.873 2.212h.934c.378 0 .679.316.679.712v2.86c0 .396-.302.712-.679.712h-.934a8.7 8.7 0 0 1-.873 2.212l.664.696a.75.75 0 0 1 0 1.012l-1.918 2.012a.665.665 0 0 1-.964 0l-.663-.696a7.8 7.8 0 0 1-2.108.916v.988a.7.7 0 0 1-.686.712m-2.036-1.424h1.353v-.844c0-.348.233-.64.557-.704a6.6 6.6 0 0 0 2.615-1.14.66.66 0 0 1 .865.08l.572.6.964-1.012-.572-.6a.736.736 0 0 1-.076-.908 7.3 7.3 0 0 0 1.087-2.744.69.69 0 0 1 .67-.584h.805v-1.424h-.805a.69.69 0 0 1-.67-.584 7.3 7.3 0 0 0-1.087-2.744.74.74 0 0 1 .076-.908l.572-.6-.964-1.012-.572.6a.653.653 0 0 1-.865.08 6.6 6.6 0 0 0-2.615-1.14.704.704 0 0 1-.557-.704v-.86h-1.357v.852c0 .348-.232.64-.556.704-.95.188-1.83.568-2.615 1.14a.66.66 0 0 1-.865-.08l-.572-.6-.972 1.004.572.6a.736.736 0 0 1 .076.908 7.1 7.1 0 0 0-1.079 2.752.69.69 0 0 1-.67.584h-.809v1.424h.812c.332 0 .61.244.67.584a7.3 7.3 0 0 0 1.087 2.744.74.74 0 0 1-.076.908l-.572.6.965 1.012.571-.6a.653.653 0 0 1 .866-.08 6.6 6.6 0 0 0 2.614 1.14.704.704 0 0 1 .557.704z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 15.85c-2.485 0-3.851-1.367-3.851-3.852s1.366-3.851 3.851-3.851 3.852 1.367 3.852 3.851-1.37 3.852-3.852 3.852m0-6.583c-1.863 0-2.731.868-2.731 2.731s.868 2.731 2.731 2.731 2.731-.868 2.731-2.73c0-1.864-.868-2.732-2.73-2.732"
                />
                <path
                    fill={fillColor}
                    d="M12.749 21.83h-1.504c-.541 0-.98-.44-.98-.98v-1.855a7.4 7.4 0 0 1-2.11-.652l-1.37 1.37a1 1 0 0 1-1.406 0l-1.098-1.101a.997.997 0 0 1 0-1.406l1.367-1.367c-.317-.56-.543-1.466-.65-2.113H3.144c-.54 0-.98-.44-.98-.98v-1.504c0-.54.44-.98.98-.98h1.854c.107-.65.333-1.552.65-2.113L4.28 6.783a.997.997 0 0 1 0-1.407l1.098-1.098a.997.997 0 0 1 1.406 0l1.37 1.37a7.4 7.4 0 0 1 2.11-.653V3.144c0-.54.439-.98.98-.98h1.504c.54 0 .98.44.98.98v1.854a7.3 7.3 0 0 1 2.11.653l1.37-1.37a1 1 0 0 1 1.405 0l1.098 1.098a.997.997 0 0 1 0 1.406l-1.367 1.37c.309.62.527 1.328.653 2.11h1.854c.541 0 .98.44.98.98v1.504c0 .54-.439.98-.98.98h-1.854a7.4 7.4 0 0 1-.653 2.11l1.37 1.37a1 1 0 0 1 0 1.405l-1.098 1.098a1 1 0 0 1-1.406 0l-1.373-1.37a7.3 7.3 0 0 1-2.109.653v1.855c0 .543-.437.98-.98.98m-1.364-1.12h1.224v-1.824c0-.493.375-.91.893-.989h.003c.706-.109 1.3-.291 1.871-.574.418-.207.885-.143 1.194.165l1.344 1.345.922-.922-1.345-1.344c-.308-.308-.372-.79-.162-1.2.271-.537.462-1.164.571-1.867.079-.519.496-.894.989-.894h1.823v-1.224H18.89c-.493 0-.91-.375-.989-.894-.11-.703-.3-1.33-.571-1.865-.21-.41-.146-.89.162-1.199l1.345-1.345-.922-.921-1.336 1.339-.008.008c-.309.308-.776.373-1.194.165a6.3 6.3 0 0 0-1.87-.574h-.004c-.518-.078-.893-.496-.893-.989V3.284h-1.224v1.823c0 .493-.376.91-.894.99-.703.108-1.33.299-1.865.57a1.02 1.02 0 0 1-1.2-.162L6.083 5.161l-.921.921 1.344 1.345c.367.367.347.902.14 1.238-.204.333-.437 1.103-.549 1.829-.078.507-.504.89-.989.89H3.284v1.225h1.823c.485 0 .91.384.99.89.111.726.344 1.496.548 1.83.207.339.227.87-.14 1.238L5.161 17.91l.921.922 1.345-1.345c.308-.308.79-.372 1.199-.162.537.272 1.165.462 1.868.571.518.079.893.496.893.99z"
                />
            </svg>
        );
    }
};

export default IconSettingsRegular;
