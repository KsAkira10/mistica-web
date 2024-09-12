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

const IconPlaneRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.546 6.17a2.3 2.3 0 0 1 1.273 1.285c.493 1.23-.075 2.638-1.252 3.17l-10.099 4.476-5.301-1.325.001-.006a.67.67 0 0 1-.481-.44.68.68 0 0 1 .43-.86l.585-.194-3.726-2.484L6.632 7.93l3.798 1.9 8.307-3.627a2.3 2.3 0 0 1 1.809-.033m-10.198 7.5 9.659-4.284c.514-.232.771-.872.562-1.395a.97.97 0 0 0-.535-.561.94.94 0 0 0-.744.016l-8.904 3.882L6.57 9.42l-1.688.675 2.731 1.821-.002.002a.676.676 0 0 1 .063 1.083zM19.336 18.872H5.921v-1.36h13.415z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m13.379 14.529 3.973 6.971 1.843-1.877c.54-.55.75-1.36.554-2.111l-1.942-7.393 3.513-3.586c.44-.445.68-1.039.68-1.67 0-.633-.244-1.226-.68-1.672a2.284 2.284 0 0 0-3.274 0l-3.513 3.586L7.29 4.795a2.12 2.12 0 0 0-2.069.565L3.38 7.242l6.782 3.993-2.997 3.06-1.75-.48a2.12 2.12 0 0 0-2.068.566L2 15.755l5.099 3.006c.834.494 1.9.35 2.589-.354zm4.278 4.539-3.987-6.995-5.024 5.28a.665.665 0 0 1-.816.11l-3.443-2.03a.68.68 0 0 1 .648-.172l2.565.704 4.944-5.041-6.782-3.998.492-.503a.67.67 0 0 1 .652-.177l8.058 2.202 4.114-4.199a.834.834 0 0 1 1.2 0 .877.877 0 0 1 0 1.226l-4.113 4.199 2.158 8.226a.69.69 0 0 1-.174.665z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m13.379 14.529 3.973 6.971 1.843-1.877c.54-.55.75-1.36.554-2.111l-1.942-7.393 3.513-3.586c.44-.445.68-1.039.68-1.67 0-.633-.244-1.226-.68-1.672a2.284 2.284 0 0 0-3.274 0l-3.513 3.586L7.29 4.795a2.12 2.12 0 0 0-2.069.565L3.38 7.242l6.782 3.993-2.997 3.06-1.75-.48a2.12 2.12 0 0 0-2.068.566L2 15.755l5.099 3.006c.834.494 1.9.35 2.589-.354zm4.278 4.539-3.987-6.995-5.024 5.28a.665.665 0 0 1-.816.11l-3.443-2.03a.68.68 0 0 1 .648-.172l2.565.704 4.944-5.041-6.782-3.998.492-.503a.67.67 0 0 1 .652-.177l8.058 2.202 4.114-4.199a.834.834 0 0 1 1.2 0 .877.877 0 0 1 0 1.226l-4.113 4.199 2.158 8.226a.69.69 0 0 1-.174.665z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.402 2.914c1.194-1.078 2.602-1.002 3.68.194 1.076 1.198 1 2.61-.19 3.697-.206.186-2.269 2.068-3.263 2.976l-.291.265 1.347 8.566a.6.6 0 0 1-.33.636l-1.412.689a.6.6 0 0 1-.81-.283l-2.837-5.98a50 50 0 0 0-1.877 1.812l-.048.047-.01.011c-.738.743-1.334 1.343-2.334 2.132l.227 2.93a.6.6 0 0 1-.34.591l-1.22.588a.606.606 0 0 1-.779-.235l-1.77-2.975-2.718-1.787a.6.6 0 0 1-.173-.835l.689-1.053a.61.61 0 0 1 .546-.271l2.692.193c.767-.962 1.375-1.555 2.127-2.287l.01-.01a46 46 0 0 0 1.88-1.902l-5.964-2.76a.6.6 0 0 1-.258-.868l.886-1.403a.6.6 0 0 1 .596-.274l8.507 1.249c.852-.919 3.166-3.409 3.437-3.653m-1.117 6.451L20.083 5.9c.7-.633.734-1.283.1-1.986-.63-.7-1.28-.734-1.98-.103-.207.187-2.302 2.434-3.574 3.806a.61.61 0 0 1-.53.188L5.67 6.567l-.309.49 6.095 2.818a.6.6 0 0 1 .193.95c-1.067 1.185-1.82 1.916-2.486 2.562l-.003.003c-.788.765-1.41 1.37-2.225 2.426a.62.62 0 0 1-.52.233l-2.659-.194-.165.253 2.33 1.532q.115.076.188.196l1.558 2.619.352-.17L7.8 17.44a.61.61 0 0 1 .235-.527c1.096-.84 1.704-1.45 2.472-2.225l.036-.036c.638-.644 1.366-1.378 2.548-2.425a.6.6 0 0 1 .519-.14c.187.04.344.162.425.333l2.925 6.16.465-.227-1.33-8.448a.61.61 0 0 1 .19-.54"
                />
            </svg>
        );
    }
};

export default IconPlaneRegular;
