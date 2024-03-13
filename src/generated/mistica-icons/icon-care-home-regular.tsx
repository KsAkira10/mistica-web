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

const IconCareHomeRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <g clipPath="url(#a)">
                <path
                    fill={fillColor}
                    d="M16.498 13.887c.12.11.262.164.415.164h1.996c.753 0 1.375-.578 1.375-1.276V8.182h.174c.568 0 1.07-.317 1.277-.797.207-.469.098-.981-.273-1.352L15.909.578c-.524-.513-1.484-.513-2.007 0L8.349 6.033c-.37.37-.48.883-.273 1.352.208.48.71.797 1.277.797h.098v4.593c0 .709.61 1.276 1.374 1.276h2.062a.6.6 0 0 0 .426-.164c.12-.109.185-.25.185-.414v-2.411h2.815v2.41a.66.66 0 0 0 .185.415m-5.847-6.294a.6.6 0 0 0-.59-.578l-.72-.011c-.097 0-.152-.044-.174-.088-.01-.01-.01-.032.022-.065l5.553-5.455c.076-.065.24-.065.305 0L20.6 6.851c.033.044.033.054.022.076-.022.044-.076.088-.175.088h-.774a.603.603 0 0 0-.6.589v5.16c0 .054-.077.109-.175.109h-1.374v-2.411a.66.66 0 0 0-.186-.415.59.59 0 0 0-.414-.163H12.92a.603.603 0 0 0-.6.589v2.41h-1.495c-.098 0-.174-.065-.174-.108zM3.353 22.985h1.745c.495 0 .931-.271 1.167-.672l3.393 1.403c.262.11.535.164.808.164a2 2 0 0 0 .796-.164l8.694-3.545c.48-.207.851-.578 1.048-1.058a1.9 1.9 0 0 0-.011-1.484 1.92 1.92 0 0 0-.971-.993 1.96 1.96 0 0 0-1.386-.076l-5.314 1.682q.024-.135.024-.275a1.64 1.64 0 0 0-1.604-1.625l-1.113-.077a4.6 4.6 0 0 1-1.614-.36l-.917-.381a6 6 0 0 0-1.674-.422 1.36 1.36 0 0 0-1.326-1.084H3.353A1.36 1.36 0 0 0 2 15.371v6.262c0 .742.61 1.352 1.353 1.352m6.742-.338L6.45 21.14v-4.874q.617.09 1.2.327l.916.381a6 6 0 0 0 1.997.448l1.123.076h.033c.262 0 .47.207.47.47a.466.466 0 0 1-.5.47l-2.84.042a.57.57 0 0 0-.403.174.59.59 0 0 0-.163.415c.01.317.261.567.589.567l3.589-.054c.305 0 .6-.055.894-.142l5.618-1.778a.757.757 0 0 1 .95.425.74.74 0 0 1 .01.59.76.76 0 0 1-.414.425l-8.694 3.545a.94.94 0 0 1-.732 0m-6.939-7.276c0-.11.088-.196.197-.196h1.745c.11 0 .197.087.197.196v6.262c0 .109-.088.196-.197.196H3.353a.196.196 0 0 1-.197-.196z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill={fillColor} d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default IconCareHomeRegular;
