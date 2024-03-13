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

const IconFileMusicRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.387 8.152a.6.6 0 0 0-.047-.238.84.84 0 0 0-.213-.384l-5.213-5.126a.85.85 0 0 0-.605-.249h-7.3c-.725 0-1.386.658-1.386 1.384v16.919c0 .736.647 1.383 1.386 1.383h11.992c.75 0 1.386-.633 1.386-1.384zm-1.193 12.306c0 .072-.095.168-.19.168H6.011c-.093 0-.19-.11-.19-.169V3.54c.005-.06.117-.168.19-.168h6.434v2.218c0 .995.339 1.852.978 2.482.633.622 1.493.952 2.493.952h2.277zM13.639 3.823l4.05 3.984h-1.772c-.684 0-1.258-.213-1.664-.611-.4-.395-.614-.95-.614-1.608zm1.19 8.65-3.742-1.03v-.611l3.743 1.03zm0 5.255c0 .544-.26.824-.772.835v.003h-.104q-.77-.015-.77-.843c0-.205 0-.827.756-.835h.112c.515.011.779.297.779.84m-5.54-1.174v-.002h-.115q-.769-.015-.77-.843c0-.202 0-.827.756-.832h.11q.779.023.781.843c0 .543-.26.823-.762.834m6.577-4.943a.73.73 0 0 0-.63-.729L10.9 9.684l-.135-.02c-.397 0-.72.331-.72.735v3.59a2.1 2.1 0 0 0-.756-.167h-.143c-.823.008-1.784.507-1.784 1.888s.966 1.885 1.79 1.896h.143c.795-.017 1.709-.493 1.776-1.745l.014-3.33 3.742 1.033V16a2.1 2.1 0 0 0-.756-.168l-.143-.003c-.82.006-1.785.507-1.785 1.888s.967 1.885 1.79 1.896h.143c.827-.014 1.79-.518 1.79-1.888z"
            />
        </svg>
    );
};

export default IconFileMusicRegular;
