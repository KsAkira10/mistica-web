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

const IconTokensLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22 10.196a2.254 2.254 0 0 0-2.07-2.246l-.021-.001-.063-.005h-.009a6.868 6.868 0 0 1-5.723-4.013 2.256 2.256 0 0 0-4.194-.009v.003l-.009.023-.003.006c-.09.193-.182.37-.292.562a6.87 6.87 0 0 1-5.421 3.428H4.19q-.091.003-.176.012l-.011.001h-.004a2.254 2.254 0 0 0-1.231 3.936l.004.004a6.85 6.85 0 0 1 1.938 3.15 6.96 6.96 0 0 1 .079 3.504q-.039.12-.064.246l-.006.03a2.258 2.258 0 0 0 3.402 2.332l.01-.006.005-.004.116-.077.005-.003q.236-.154.488-.29c1-.537 2.118-.818 3.254-.818h.03a6.93 6.93 0 0 1 3.758 1.13l.004.003.004.002.013.01.027.017.004.003a2.25 2.25 0 0 0 2.212.14 2.26 2.26 0 0 0 1.223-2.528q-.001-.01-.005-.019l-.026-.1a6.941 6.941 0 0 1 2.016-6.753l.043-.041.017-.019a2.25 2.25 0 0 0 .681-1.61m-2.902-1.774q.348.06.701.088h.009l.07.005h.001a1.687 1.687 0 0 1-.134 3.368q-.043 0-.087-.002l-.035-.002h-.01a10.8 10.8 0 0 1-3.22-.733 10.9 10.9 0 0 1-4-2.763c.674-.805 1.233-1.7 1.662-2.659l.001-.004q.027-.056.05-.113l.004-.009q.064-.162.105-.334a7.43 7.43 0 0 0 4.883 3.158m-4.505 7.33c-1.7-.397-3.47-.398-5.171-.005a11.5 11.5 0 0 0-1.289-4.191 11.5 11.5 0 0 0 3.883-2.744 11.5 11.5 0 0 0 3.87 2.738 11.5 11.5 0 0 0-1.293 4.201M10.108 4.799a7 7 0 0 0 .333-.652l.005-.014a1.69 1.69 0 0 1 3.08-.13l.003.009q.02.048.04.094l.024.05c.152.398.148.837-.011 1.232l-.044.099-.002.005v.002a10.8 10.8 0 0 1-1.734 2.707 10.9 10.9 0 0 1-3.952 2.858 11.3 11.3 0 0 0-2.02-2.476 2.3 2.3 0 0 0-.349-.279 7.4 7.4 0 0 0 2.458-1.13 7.5 7.5 0 0 0 2.169-2.375M3.667 12a8 8 0 0 0-.507-.518l-.003-.003-.073-.067a1.687 1.687 0 0 1 1.136-2.9h.033a1.68 1.68 0 0 1 1.193.493.3.3 0 0 0 .037.032 10.8 10.8 0 0 1 2 2.52 10.9 10.9 0 0 1 1.382 4.334c-1.07.306-2.089.768-3.023 1.371l-.008.005q-.134.087-.285.19l-.017.012-.008.008a7.468 7.468 0 0 0-1.857-5.477m8.33 7.394a7.45 7.45 0 0 0-4.054 1.202l-.003.002-.004.002-.117.079a1.69 1.69 0 0 1-2.542-1.752l.001-.007q.03-.11.056-.214c.101-.31.29-.583.544-.787a9 9 0 0 1 .257-.17l.007-.005c.954-.616 2-1.078 3.098-1.367a10.9 10.9 0 0 1 5.306-.051 11.4 11.4 0 0 0 .3 3.297v.006q.04.165.086.337l.006.02.005.014a7.5 7.5 0 0 0-2.914-.605zm6.765-4.51a7.54 7.54 0 0 0-.07 3.874q.013.052.029.105a1.692 1.692 0 0 1-2.565 1.794l-.002-.002-.035-.023-.01-.007-.003-.002a1.7 1.7 0 0 1-.626-.818q-.044-.16-.081-.314l-.002-.007a10.87 10.87 0 0 1 1.02-7.721c1.012.377 2.074.606 3.152.681h.002l.057.004a2.3 2.3 0 0 0 .348-.01 7.5 7.5 0 0 0-1.214 2.446"
            />
        </svg>
    );
};

export default IconTokensLight;
