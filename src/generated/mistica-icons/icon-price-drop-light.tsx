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

const IconPriceDropLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.123 10.626c.413.285.893.452 1.392.488v.341c0 .154.126.28.28.28a.28.28 0 0 0 .28-.28v-.357c.918-.119 1.471-.679 1.471-1.523 0-.998-.783-1.332-1.47-1.435V6.543c.215.04.425.118.644.237l.003.003a.43.43 0 0 0 .204.059.33.33 0 0 0 .333-.334c0-.126-.072-.238-.201-.32a2.4 2.4 0 0 0-.983-.322v-.355a.28.28 0 0 0-.28-.28.28.28 0 0 0-.28.28v.346c-.882.08-1.44.65-1.44 1.494 0 .55.252 1.235 1.44 1.413v1.68a2.3 2.3 0 0 1-.987-.392.44.44 0 0 0-.227-.073.34.34 0 0 0-.347.339q0 .192.168.308m2.737-1.02c0 .434-.293.733-.784.823V8.846c.685.146.784.464.784.76M7.762 7.312c0-.44.279-.725.753-.788v1.534c-.404-.086-.753-.269-.753-.746"
            />
            <path
                fill={fillColor}
                d="M12.221 21.618a.56.56 0 0 0 .793 0l6.711-6.704c.194-.193.149-.375.118-.445-.03-.07-.126-.232-.4-.232h-2.718V3.316c0-.702-.403-1.106-1.109-1.106H9.608c-.695 0-1.093.404-1.093 1.107v.54c-1.346.045-2.403.427-3.143 1.14-.817.79-1.232 1.97-1.232 3.51s.415 2.723 1.235 3.513c.737.71 1.793 1.095 3.14 1.14v1.076H5.798c-.274 0-.37.162-.4.232s-.076.252.117.445zM8.834 12.6a.3.3 0 0 0-.077 0c-1.315-.007-2.321-.34-2.995-.99C5.059 10.935 4.7 9.887 4.7 8.506S5.056 6.08 5.762 5.4c.667-.643 1.663-.976 2.956-.988a.3.3 0 0 0 .154 0c1.293.015 2.287.345 2.957.988.703.678 1.062 1.725 1.062 3.106s-.356 2.426-1.062 3.107c-.674.649-1.68.982-2.995.989m.242.56c1.347-.045 2.403-.43 3.137-1.143.82-.787 1.235-1.972 1.235-3.51s-.417-2.72-1.235-3.51c-.736-.71-1.794-1.094-3.137-1.14V3.32c0-.398.145-.547.532-.547h6.008c.39 0 .546.157.546.544v10.919c0 .308.253.56.56.56h2.32l-6.423 6.423-6.423-6.423h2.32c.307 0 .56-.252.56-.56z"
            />
        </svg>
    );
};

export default IconPriceDropLight;
