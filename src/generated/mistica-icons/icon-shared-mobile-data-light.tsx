/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconSharedMobileDataLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <g fill={fillColor}>
                <path d="M6.443 13.779c.302 0 .496.154.496.481a.483.483 0 01-.125.355c-.086.086-.214.127-.371.127s-.285-.041-.371-.127c-.08-.08-.126-.195-.126-.355-.003-.327.194-.481.497-.481zm11.12 2.674c.302 0 .496.154.496.481a.483.483 0 01-.125.355c-.086.085-.214.127-.371.127s-.286-.042-.371-.127c-.08-.08-.126-.195-.126-.355-.003-.33.194-.481.497-.481zm-5.142-4.919a.36.36 0 01-.36-.368l-.011-.693-2.677-.011h-.025a.516.516 0 01-.377-.165.495.495 0 01-.128-.377l.002-1.079a.49.49 0 01.149-.354.522.522 0 01.416-.149l2.68-.003-.009-.69a.362.362 0 01.109-.278.35.35 0 01.245-.1.44.44 0 01.246.083l2.385 1.725a.4.4 0 01.174.325.399.399 0 01-.174.324l-2.405 1.725a.398.398 0 01-.24.085zM9.416 9.911l2.737.011a.467.467 0 01.468.449l.005.423 1.94-1.391-1.905-1.381.005.41a.426.426 0 01-.134.319.488.488 0 01-.33.134l-2.783.003-.003 1.023zm2.146 5.818a.417.417 0 01-.245-.082L8.91 13.922a.399.399 0 01-.174-.325.4.4 0 01.174-.324l2.386-1.725a.417.417 0 01.245-.082.35.35 0 01.245.099c.052.05.112.137.109.277l-.009.69 2.68.004a.516.516 0 01.565.503l.003 1.078a.495.495 0 01-.129.377.517.517 0 01-.402.165l-2.677.011-.011.693a.35.35 0 01-.354.366zm-2.146-2.132l1.94 1.392.006-.423a.466.466 0 01.465-.449l2.737-.01-.003-1.021-2.782-.003a.473.473 0 01-.331-.132.441.441 0 01-.134-.32l.005-.409-1.903 1.375z" />
                <path d="M8.788 16.312H4.092c-1.407 0-2.092-.66-2.092-2.016v-8.28C2 4.66 2.685 4 4.092 4h4.7c1.389 0 2.09.68 2.09 2.016v2.597a.281.281 0 01-.284.275.281.281 0 01-.286-.275V6.016c0-1.028-.454-1.466-1.52-1.466h-4.7c-.551 0-.933.113-1.17.341-.237.229-.351.597-.351 1.125v8.277c0 1.057.428 1.467 1.52 1.467h4.7c.945 0 1.378-.303 1.493-1.04a.283.283 0 01.325-.231.276.276 0 01.24.313c-.16 1.018-.834 1.51-2.06 1.51z" />
                <path d="M10.598 12.673a.281.281 0 01-.286-.275V10.19c0-.151.129-.275.286-.275.156 0 .285.124.285.275v2.21a.28.28 0 01-.285.274zM19.911 19h-4.7c-1.406 0-2.091-.66-2.091-2.016v-2.597c0-.151.128-.275.285-.275.157 0 .286.124.286.275v2.597c0 1.056.428 1.466 1.52 1.466h4.7c1.096 0 1.521-.413 1.521-1.466v-8.28c0-1.029-.454-1.466-1.52-1.466h-4.7c-1.173 0-1.413.528-1.493 1.045a.283.283 0 01-.325.231.276.276 0 01-.24-.314c.08-.508.297-.896.645-1.147.343-.244.802-.365 1.41-.365h4.7c1.389 0 2.091.679 2.091 2.016v8.277C22.003 18.34 21.318 19 19.911 19z" />
                <path d="M13.405 13.083a.281.281 0 01-.285-.275v-2.234c0-.15.128-.275.285-.275.157 0 .286.124.286.275v2.234a.28.28 0 01-.286.275z" />
            </g>
        </svg>
    );
};

export default IconSharedMobileDataLight;
