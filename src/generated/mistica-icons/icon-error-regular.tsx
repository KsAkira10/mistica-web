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

const IconErrorRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 8.247c0-.263-.106-.513-.3-.714l-5.07-4.891a1.57 1.57 0 0 0-1.173-.482h-7.02c-.412 0-.792.163-1.084.451A1.5 1.5 0 0 0 6.74 3.69l.009 4.94-4.482 8.79a.972.972 0 0 0 .852 1.426h.016l3.625.017v1.376c-.025.459.104.854.387 1.15.274.292.677.46 1.131.46l12.132-.017c.784 0 1.431-.644 1.431-1.43zm-1.213.765v11.39c0 .12-.098.223-.23.223l-12.123.017c-.114 0-.204-.03-.252-.081-.056-.065-.064-.177-.056-.289v-1.4l6.922.022h.025c.163 0 .325-.04.462-.12a.965.965 0 0 0 .415-1.297L9.95 5.799a.97.97 0 0 0-.454-.443.966.966 0 0 0-1.303.443l-.235.46-.008-2.57c0-.086.042-.167.098-.223a.3.3 0 0 1 .226-.096h6.423l.026 2.205v.002c0 .095-.003 1.539.963 2.533.583.588 1.367.885 2.33.893zM7.331 17.656l-3.817-.008 5.557-10.9 5.468 10.939zM20.08 7.807 18.026 7.8c-.639-.009-1.117-.177-1.465-.524-.622-.636-.622-1.667-.622-1.689l-.025-1.796zm-10.986 7.14a.606.606 0 0 1-.607-.602V9.97c0-.334.271-.602.607-.602.337 0 .608.271.608.602v4.375a.61.61 0 0 1-.608.602m.639.944a.63.63 0 0 0-.633-.63.63.63 0 1 0 0 1.26c.35 0 .633-.282.633-.63"
            />
        </svg>
    );
};

export default IconErrorRegular;
