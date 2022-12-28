/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPriceDropLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.123 10.626c.413.285.893.452 1.392.488v.341c0 .154.126.28.28.28a.28.28 0 00.28-.28v-.357c.918-.119 1.471-.679 1.471-1.523 0-.998-.783-1.332-1.47-1.435V6.543c.215.04.425.118.644.237l.003.003a.433.433 0 00.204.059.332.332 0 00.334-.334c0-.126-.073-.238-.202-.32a2.385 2.385 0 00-.983-.322v-.355a.28.28 0 00-.28-.28.28.28 0 00-.28.28v.346c-.882.08-1.44.65-1.44 1.494 0 .55.252 1.235 1.44 1.413v1.68a2.313 2.313 0 01-.987-.392.436.436 0 00-.227-.073.342.342 0 00-.347.339c0 .129.056.23.168.308zm2.737-1.02c0 .434-.293.733-.784.823V8.846c.685.146.784.464.784.76zM7.762 7.312c0-.44.279-.725.753-.788v1.534c-.404-.086-.753-.269-.753-.746z"
            />
            <path
                fill={fillColor}
                d="M12.221 21.617a.562.562 0 00.793 0l6.711-6.703c.194-.193.149-.375.118-.445-.03-.07-.126-.232-.4-.232h-2.718V3.316c0-.702-.403-1.106-1.109-1.106H9.608c-.695 0-1.093.404-1.093 1.107v.54c-1.346.045-2.403.427-3.142 1.14-.818.79-1.233 1.97-1.233 3.51 0 1.54.415 2.723 1.235 3.513.737.71 1.793 1.095 3.14 1.14v1.075H5.798c-.274 0-.37.163-.4.233-.031.07-.076.252.117.445l6.706 6.704zm-3.387-9.016a.277.277 0 00-.077 0c-1.315-.007-2.321-.34-2.995-.99C5.059 10.935 4.7 9.887 4.7 8.506c0-1.38.356-2.425 1.062-3.106.667-.643 1.663-.976 2.956-.988a.278.278 0 00.154 0c1.293.015 2.287.345 2.957.988.703.678 1.062 1.725 1.062 3.106 0 1.381-.356 2.426-1.062 3.107-.674.649-1.68.982-2.995.989zm.242.56c1.347-.045 2.403-.43 3.137-1.143.82-.787 1.235-1.972 1.235-3.51 0-1.538-.417-2.72-1.235-3.51-.736-.71-1.794-1.094-3.137-1.14V3.32c0-.398.145-.547.532-.547h6.008c.39 0 .546.157.546.544v10.918c0 .309.253.56.56.56h2.32l-6.423 6.424-6.423-6.423h2.32c.307 0 .56-.252.56-.56v-1.075z"
            />
        </svg>
    );
};

export default IconPriceDropLight;
