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

const IconMultideviceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.888 2H14.96c-1.162 0-2.112.964-2.112 2.144h9.147C22 2.964 21.05 2 19.888 2M5.076 4.5h6.72v2.144H3v-.037C3 5.427 3.914 4.5 5.076 4.5m9.885 12.857h2.112v1.425H3V7.713h8.795v6.43c0 1.787 1.405 3.214 3.166 3.214M3 19.893C3 21.036 3.914 22 5.076 22h9.957c1.126 0 2.04-.928 2.04-2.107v-.037zm11.961-3.606c-1.162 0-2.112-.964-2.112-2.143H22c0 1.179-.95 2.143-2.112 2.143zm7.034-11.07H12.85v7.857h9.147z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.888 2H14.96c-1.162 0-2.112.964-2.112 2.144h9.147C22 2.964 21.05 2 19.888 2M5.076 4.5h6.72v2.144H3v-.037C3 5.427 3.914 4.5 5.076 4.5m9.885 12.857h2.112v1.425H3V7.713h8.795v6.43c0 1.787 1.405 3.214 3.166 3.214M3 19.893C3 21.036 3.914 22 5.076 22h9.957c1.126 0 2.04-.928 2.04-2.107v-.037zm11.961-3.606c-1.162 0-2.112-.964-2.112-2.143H22c0 1.179-.95 2.143-2.112 2.143zm7.034-11.07H12.85v7.857h9.147z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.528 16.569c0-.457.294-.75.748-.75s.748.293.748.75c0 .28-.11.448-.2.54-.092.096-.263.208-.548.208s-.457-.112-.55-.207c-.092-.093-.198-.26-.198-.541"
                />
                <path
                    fill={fillColor}
                    d="M18.83 8.437h.916c1.37 0 2.096.726 2.096 2.096v6.487c0 1.37-.726 2.095-2.096 2.095h-2.938c-1.37 0-2.095-.725-2.095-2.095v-.1H5.447c-1.101 0-1.942-.326-2.505-.97-.523-.6-.787-1.468-.787-2.583V8.43c0-1.115.264-1.983.787-2.58.563-.641 1.407-.97 2.505-.97h10.092c1.1 0 1.941.326 2.504.97.521.6.787 1.468.787 2.583zm1.684 9.359c.137-.137.207-.398.207-.773v-6.49c0-.748-.227-.975-.975-.975h-2.94c-.73 0-.976.246-.976.975v6.49c0 .378.07.639.208.773q.207.205.77.204h2.936q.564-.002.77-.204"
                />
                <path
                    fill={fillColor}
                    d="M12.814 18.003H7.897a.56.56 0 0 0-.56.56c0 .309.251.56.56.56h4.916c.308 0 .56-.252.56-.56a.56.56 0 0 0-.56-.56"
                />
            </svg>
        );
    }
};

export default IconMultideviceFilled;
