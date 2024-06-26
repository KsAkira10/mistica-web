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

const IconKeyboardLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 16.646V7.358c0-1.021-.8-1.858-1.787-1.858H3.787C2.804 5.5 2 6.332 2 7.359v9.283c0 1.021.8 1.858 1.787 1.858h16.426c.983 0 1.787-.832 1.787-1.854M6.109 8.105c.297 0 .535.247.535.556a.544.544 0 0 1-.54.556H4.678a.543.543 0 0 1-.534-.556c0-.31.237-.556.534-.556zM7.713 15.9h8.574c.293 0 .53-.247.53-.556a.543.543 0 0 0-.535-.556H7.713a.543.543 0 0 0-.535.556c0 .309.238.556.535.556m5.535-7.24a.543.543 0 0 0-.535-.555h-1.426a.543.543 0 0 0-.535.556c0 .309.238.556.535.556h1.426a.543.543 0 0 0 .535-.556m-3.835-.555c.297 0 .535.247.535.556a.546.546 0 0 1-.535.556H7.987a.543.543 0 0 1-.535-.556c0-.31.238-.556.535-.556zm7.14.556a.543.543 0 0 0-.536-.556h-1.426a.543.543 0 0 0-.534.556c0 .309.237.556.534.556h1.426a.543.543 0 0 0 .535-.556m2.769-.556c.297 0 .535.247.535.556a.546.546 0 0 1-.535.556h-1.426a.543.543 0 0 1-.535-.556c0-.31.238-.556.535-.556zM6.644 10.89a.543.543 0 0 0-.535-.556h-1.43a.543.543 0 0 0-.535.556c0 .31.237.556.534.556h1.426c.302 0 .54-.252.54-.556m6.069-.556c.297 0 .535.247.535.556a.547.547 0 0 1-.535.556h-1.426a.543.543 0 0 1-.535-.556c0-.309.238-.556.535-.556zm-2.765.556a.543.543 0 0 0-.535-.556H7.987a.543.543 0 0 0-.535.556c0 .31.238.556.535.556h1.426a.55.55 0 0 0 .535-.556m6.07-.556c.296 0 .534.247.534.556a.547.547 0 0 1-.535.556h-1.426a.543.543 0 0 1-.534-.556c0-.309.237-.556.534-.556zm3.839.556a.544.544 0 0 0-.535-.556h-1.426a.543.543 0 0 0-.535.556c0 .31.238.556.535.556h1.426a.55.55 0 0 0 .535-.556M6.109 12.558c.297 0 .535.248.535.557s-.238.56-.54.556H4.678a.543.543 0 0 1-.534-.556c0-.31.237-.556.534-.556zm7.139.557a.543.543 0 0 0-.535-.556h-1.426a.543.543 0 0 0-.535.556c0 .309.238.556.535.556h1.426c.297.005.535-.247.535-.556m-3.835-.556c.297 0 .535.247.535.556s-.242.56-.535.556H7.987a.543.543 0 0 1-.535-.556c0-.31.238-.556.535-.556zm7.14.556a.544.544 0 0 0-.536-.556h-1.426a.543.543 0 0 0-.534.556c0 .309.237.556.534.556h1.426c.297.005.535-.247.535-.556m2.769-.556c.297 0 .535.247.535.556s-.243.56-.535.556h-1.426a.543.543 0 0 1-.535-.556c0-.31.238-.556.535-.556zm1.248-5.2v9.283c0 .204-.16.37-.357.37H3.787a.364.364 0 0 1-.356-.37V7.359c0-.205.16-.371.356-.371h16.426c.197 0 .357.166.357.37"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 17.017V6.613c0-.614-.48-1.113-1.07-1.113H3.07C2.48 5.5 2 6 2 6.613v10.404c0 .613.48 1.112 1.07 1.112h13.216a.364.364 0 0 0 .356-.37c0-.205-.16-.372-.356-.372H3.07a.364.364 0 0 1-.357-.37V6.613c0-.205.16-.371.357-.371h17.856c.196 0 .356.166.356.37v10.405c0 .204-.16.37-.356.37h-.357a.364.364 0 0 0-.356.371c0 .205.16.371.356.371h.357c.59 0 1.074-.5 1.074-1.113M5.57 7.73c.197 0 .357.166.357.37 0 .205-.16.372-.361.372H4.139a.364.364 0 0 1-.356-.371c0-.205.16-.37.356-.37zm.357 2.601c0-.204-.16-.37-.357-.37H4.14a.364.364 0 0 0-.357.37c0 .205.16.37.356.37h1.427a.365.365 0 0 0 .36-.37m-.357 1.854c.197 0 .357.167.357.371 0 .205-.16.371-.361.371H4.139a.364.364 0 0 1-.356-.37c0-.205.16-.372.356-.372zm2.14 3.343h8.576a.36.36 0 0 0 .352-.37c0-.205-.16-.372-.357-.372H7.71a.364.364 0 0 0-.357.371c0 .205.16.371.357.371m1.787-2.972c0-.204-.16-.37-.356-.37H7.714a.364.364 0 0 0-.356.37c0 .205.16.371.356.371h1.427a.364.364 0 0 0 .356-.37M9.141 9.96c.196 0 .356.167.356.371 0 .205-.16.37-.356.37H7.714a.364.364 0 0 1-.356-.37c0-.204.16-.37.356-.37zm.356-1.86c0-.204-.16-.37-.356-.37H7.714a.364.364 0 0 0-.356.37c0 .205.16.372.356.372h1.427a.364.364 0 0 0 .356-.371m3.214 4.085c.196 0 .356.167.356.371 0 .205-.16.371-.356.371h-1.426a.364.364 0 0 1-.357-.37c0-.205.16-.372.357-.372zm.356-1.854c0-.204-.16-.37-.356-.37h-1.426a.364.364 0 0 0-.357.37c0 .205.16.37.357.37h1.426a.364.364 0 0 0 .356-.37m-.356-2.6c.196 0 .356.165.356.37 0 .204-.16.37-.356.37h-1.426a.364.364 0 0 1-.357-.37c0-.205.16-.37.357-.37zm3.931 4.825c0-.204-.16-.37-.356-.37h-1.427a.364.364 0 0 0-.356.37c0 .205.16.371.356.371h1.427a.364.364 0 0 0 .356-.37m-.356-2.596c.196 0 .356.167.356.371 0 .205-.16.37-.356.37h-1.427a.364.364 0 0 1-.356-.37c0-.204.16-.37.356-.37zm.356-1.86c0-.204-.16-.37-.356-.37h-1.427a.364.364 0 0 0-.356.37c0 .205.16.372.356.372h1.427a.364.364 0 0 0 .356-.371m3.214 4.085c.197 0 .357.167.357.371 0 .205-.16.371-.357.371H18.43a.364.364 0 0 1-.357-.37c0-.205.16-.372.357-.372zm.357-1.854c0-.204-.16-.37-.357-.37H18.43a.364.364 0 0 0-.357.37c0 .205.16.37.357.37h1.426a.364.364 0 0 0 .357-.37m-.357-2.6c.197 0 .357.165.357.37 0 .204-.16.37-.357.37H18.43a.364.364 0 0 1-.357-.37c0-.205.16-.37.357-.37zm-1.43 9.285c.392 0 .712.333.712.742a.726.726 0 0 1-.713.742c-.393 0-.713-.333-.713-.742s.32-.741.713-.741"
                />
            </svg>
        );
    }
};

export default IconKeyboardLight;
