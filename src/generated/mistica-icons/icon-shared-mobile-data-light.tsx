/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSharedMobileDataLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.06 17.434c0-.327-.195-.481-.497-.481-.303 0-.5.151-.497.481 0 .16.046.275.126.355.085.085.214.126.37.126.158 0 .286-.04.372-.126a.483.483 0 00.125-.355zM6.94 14.76c0-.327-.195-.481-.497-.481-.303 0-.5.154-.497.481 0 .16.046.275.126.355.085.085.214.127.37.127.158 0 .286-.042.372-.127a.483.483 0 00.125-.355z"
                fill={fillColor}
            />
            <path
                d="M8.788 16.813H4.092c-1.407 0-2.092-.66-2.092-2.017v-8.28C2 5.16 2.685 4.5 4.092 4.5h4.7c1.389 0 2.09.68 2.09 2.016v2.32h1.208l-.009-.691a.362.362 0 01.109-.278.35.35 0 01.245-.1c.086 0 .168.031.245.083l.584.422c.113-.303.292-.544.535-.719.343-.244.802-.365 1.41-.365h4.7c1.389 0 2.091.679 2.091 2.016v8.277c.003 1.359-.682 2.019-2.089 2.019h-4.7c-1.406 0-2.091-.66-2.091-2.016v-2.319l-1.193.005-.011.693a.35.35 0 01-.354.366.417.417 0 01-.245-.082l-.578-.414c-.27.726-.911 1.08-1.95 1.08zm4.509-7.83a.278.278 0 01-.061-.045l-.575-.416.005.41a.425.425 0 01-.134.318.488.488 0 01-.33.135l-1.577.002a.294.294 0 01-.055 0l-1.151.001-.003 1.023 1.148.005a.304.304 0 01.07 0l1.519.006a.467.467 0 01.468.449l.005.423.578-.414a.29.29 0 01.067-.048l1.296-.93-1.27-.92zm-.177 2.637l-.46.329a.398.398 0 01-.24.085.36.36 0 01-.359-.368l-.011-.694-1.167-.004v1.38l.414-.3a.417.417 0 01.245-.082.35.35 0 01.245.099c.052.05.112.137.109.277l-.009.69 1.233.002V11.62zm.57 1.415h.877a.516.516 0 01.416.15.49.49 0 01.149.354l.002 1.078a.495.495 0 01-.128.377.517.517 0 01-.402.165l-.913.004v2.32c0 1.057.428 1.467 1.52 1.467h4.7c1.096 0 1.521-.413 1.521-1.466v-8.28c0-1.029-.453-1.466-1.52-1.466h-4.7c-1.052 0-1.354.425-1.462.885l1.316.952a.4.4 0 01.174.325.399.399 0 01-.174.324l-1.375.986v1.825zm-3.378-.275v-1.795l-.939-.004h-.025a.515.515 0 01-.377-.165.495.495 0 01-.128-.376l.002-1.079a.49.49 0 01.149-.355.522.522 0 01.416-.148l.902-.001v-2.32c0-1.03-.454-1.467-1.52-1.467h-4.7c-.551 0-.933.113-1.17.341-.237.229-.351.597-.351 1.125v8.277c0 1.057.428 1.467 1.52 1.467h4.7c.872 0 1.308-.258 1.46-.877l-1.34-.961a.399.399 0 01-.174-.325c0-.126.063-.245.174-.324l1.401-1.013zm.383 2.254a.28.28 0 01.08.058l.582.417.005-.423a.466.466 0 01.465-.449l2.737-.01-.003-1.021-2.782-.003a.473.473 0 01-.331-.132.441.441 0 01-.134-.32l.005-.409-1.903 1.375 1.278.917z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSharedMobileDataLight;
