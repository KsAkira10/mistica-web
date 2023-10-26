/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHospitalFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.846 6.357c0-.787-.288-1.254-.776-1.254L18.796 5.1V3.528c0-.72-.628-1.378-1.32-1.378H6.541c-.692 0-1.32.658-1.32 1.378v1.575h-2.28c-.487 0-.778.467-.778 1.254v14.227c0 .788.29 1.255.778 1.255h18.13c.484 0 .775-.47.775-1.255V6.357Zm-8.017 14.278h-3.647V14.69h3.647v5.944ZM6.417 3.53c0-.067.085-.162.12-.174h10.925c.045.012.132.107.132.174v17.104h-2.566v-6.546a.6.6 0 0 0-.6-.603H9.584a.6.6 0 0 0-.6.603v6.546H6.417V3.53ZM8.381 8.79c0 .291.277.535.602.535h1.751v1.756c0 .322.25.605.532.605h1.48c.288 0 .531-.277.531-.605l-.005-1.756h1.75c.32 0 .608-.255.608-.535V7.304c0-.28-.291-.535-.607-.535h-1.751V5.02c0-.32-.255-.611-.532-.611h-1.474c-.283 0-.532.286-.532.61v1.757h-1.75c-.323 0-.603.25-.603.532V8.79Z"
            />
        </svg>
    );
};

export default IconHospitalFilled;
