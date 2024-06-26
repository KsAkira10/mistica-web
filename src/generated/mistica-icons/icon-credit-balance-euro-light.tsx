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

const IconCreditBalanceEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.879 7.828c0 3.216-2.496 5.827-5.57 5.827s-5.571-2.61-5.571-5.827S9.234 2 12.308 2s5.57 2.61 5.57 5.828m3.133 8.13c-.227-.727-.87-1.212-1.596-1.212-.298 0-.592.084-.842.238l-2.192 1.338c-.241-.704-.878-1.212-1.636-1.212H9.715l-.713-.448a2 2 0 0 0-1.043-.28H3.605c-.383 0-.695.327-.695.728s.312.727.695.727h2.09v3.64c0 .402-.312.728-.695.728H3.605c-.383 0-.695.326-.695.727s.312.728.695.728h1.39c.615 0 1.173-.285 1.551-.728h2.197l3.837.998a2 2 0 0 0 1.565-.224l6.078-3.669a1.82 1.82 0 0 0 .789-2.079m-1.489.82-6.074 3.67a.68.68 0 0 1-.53.074l-4.006-1.04H7.086v-3.64h.869c.138 0 .254.027.338.079l1.034.648h5.415c.191 0 .347.163.347.363s-.156.364-.347.364h-3.828c-.384 0-.695.326-.695.727s.311.727.695.727h3.828a1.68 1.68 0 0 0 1.087-.41l3.445-2.102a.25.25 0 0 1 .138-.038c.094 0 .223.056.272.215.044.126-.031.284-.16.364M12.308 3.456c-2.303 0-4.18 1.962-4.18 4.372s1.877 4.373 4.18 4.373 4.18-1.962 4.18-4.373c0-2.41-1.876-4.372-4.18-4.372M9.002 7.827c0 .303.232.546.521.546h.401c.245 1.347 1.377 2.368 2.737 2.368.454 0 .886-.112 1.287-.33a.555.555 0 0 0 .223-.737.51.51 0 0 0-.704-.233c-.25.135-.521.205-.802.205-.78 0-1.43-.536-1.653-1.273h1.653c.29 0 .521-.243.521-.546a.53.53 0 0 0-.521-.545h-1.653c.222-.732.877-1.273 1.653-1.273.28 0 .553.07.802.205.254.14.57.033.704-.233a.56.56 0 0 0-.223-.736 2.7 2.7 0 0 0-1.287-.331c-1.36 0-2.492 1.02-2.737 2.368h-.4a.53.53 0 0 0-.522.545"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.492 2c-3.13 0-5.68 2.665-5.68 5.938s2.55 5.939 5.68 5.939c.813 0 1.608-.181 2.358-.542a.38.38 0 0 0 .177-.494.35.35 0 0 0-.472-.185 4.75 4.75 0 0 1-2.063.475c-2.74 0-4.97-2.328-4.97-5.193s2.23-5.197 4.97-5.197 4.97 2.333 4.97 5.197a5.3 5.3 0 0 1-.277 1.7.374.374 0 0 0 .219.471.35.35 0 0 0 .45-.228 6 6 0 0 0 .317-1.943C18.171 4.665 15.623 2 12.492 2m8.537 14.342c-.186-.589-.704-.983-1.29-.983-.241 0-.477.066-.682.19l-2.662 1.624c-.018-.802-.645-1.444-1.418-1.444H9.752l-.808-.508a1.7 1.7 0 0 0-.886-.238H3.264a.363.363 0 0 0-.354.37c0 .205.159.372.354.372h2.84v4.08c0 .613-.477 1.112-1.063 1.112H3.264a.363.363 0 0 0-.354.37c0 .205.159.371.354.371h1.777c.577 0 1.086-.295 1.413-.741h2.449l3.957 1.026a1.736 1.736 0 0 0 1.327-.19l6.192-3.739a1.46 1.46 0 0 0 .65-1.672m-1.004 1.036-6.193 3.738a1.02 1.02 0 0 1-.804.114L9.03 20.19l-2.254-.01c.023-.118.037-.247.037-.375v-4.08h1.24q.309.002.527.133l.972.608h5.425c.391 0 .709.332.709.74 0 .41-.318.742-.709.742h-3.902a.363.363 0 0 0-.355.37c0 .205.16.37.354.37h3.903c.35 0 .668-.137.913-.355l3.526-2.152a.6.6 0 0 1 .318-.09.66.66 0 0 1 .618.47.72.72 0 0 1-.327.817m-3.63-6.47c.39 0 .709.332.709.74 0 .409-.319.742-.71.742s-.708-.333-.708-.742c0-.408.318-.74.709-.74m-3.548-3.9H11.21c.35-.557.954-.927 1.636-.946.313 0 .617.08.9.233a.346.346 0 0 0 .476-.157.38.38 0 0 0-.15-.499 2.56 2.56 0 0 0-1.231-.314c-1.09 0-2.026.69-2.44 1.673h-.754a.363.363 0 0 0-.354.37c0 .204.159.37.354.37h.559a2.5 2.5 0 0 0 0 .742h-.56a.363.363 0 0 0-.353.37c0 .205.159.37.354.37h.754c.414.984 1.35 1.673 2.44 1.673.431 0 .845-.104 1.231-.313a.38.38 0 0 0 .15-.5.345.345 0 0 0-.477-.156 1.8 1.8 0 0 1-.9.233c-.686 0-1.285-.37-1.635-.927h1.636a.363.363 0 0 0 .354-.37.363.363 0 0 0-.354-.37h-1.918a2.4 2.4 0 0 1-.032-.371q0-.192.032-.37h1.918a.363.363 0 0 0 .354-.371.363.363 0 0 0-.354-.37"
                />
            </svg>
        );
    }
};

export default IconCreditBalanceEuroLight;
