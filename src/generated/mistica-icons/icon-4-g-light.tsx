/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const Icon4GLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12 22C6.488 22 2 17.517 2 12 2 6.484 6.488 2 12 2s10 4.488 10 10a9.98 9.98 0 01-1.54 5.33.36.36 0 01-.494.109.36.36 0 01-.11-.494 9.248 9.248 0 001.431-4.95C21.282 6.881 17.119 2.718 12 2.718 6.881 2.718 2.718 6.88 2.718 12S6.88 21.282 12 21.282a9.247 9.247 0 004.95-1.43.36.36 0 01.493.11.36.36 0 01-.11.493A9.97 9.97 0 0112 22z"
                fill={fillColor}
            />
            <path
                d="M19.495 18.783a.713.713 0 11-1.426 0 .713.713 0 011.426 0zm-5.082-3.57A3.215 3.215 0 0111.2 12a3.215 3.215 0 015.462-2.294.354.354 0 01.004.502.355.355 0 01-.502.005 2.5 2.5 0 10-1.75 4.287 2.502 2.502 0 002.472-2.143h-1.901a.357.357 0 010-.713h2.285c.196 0 .356.16.356.356a3.211 3.211 0 01-3.213 3.213zm-5.269-.356c0 .196.16.356.356.356.197 0 .356-.16.352-.361v-1.07h.713a.357.357 0 000-.713h-.713V9.145a.357.357 0 00-.357-.357H9.14a.35.35 0 00-.283.142l-3.213 4.287a.358.358 0 00.288.571h3.213v1.07zm0-1.787h-2.5l2.5-3.332v3.332z"
                fill={fillColor}
            />
        </svg>
    );
};

export default Icon4GLight;
