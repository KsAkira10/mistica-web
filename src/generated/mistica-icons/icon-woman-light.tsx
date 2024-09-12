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

const IconWomanLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m17.245 16.47-1.747-7.12a3.65 3.65 0 0 0-1.635-2.36c.58-.525.948-1.283.948-2.134C14.81 3.28 13.553 2 12.004 2c-1.55 0-2.807 1.28-2.807 2.856 0 .85.368 1.61.947 2.135a3.6 3.6 0 0 0-1.63 2.335l-1.756 7.14v.013a.4.4 0 0 0-.009.073.4.4 0 0 0-.009.073v.014l.002.025.002.025a.4.4 0 0 0 .027.142.4.4 0 0 0 .023.069.4.4 0 0 0 .031.063l.007.014q.01.024.025.046l.04.055q.02.027.045.055l.014.013q.016.015.031.032l.027.023.027.023q.018.014.04.025l.018.012q.022.015.045.025l.014.006q.016.008.036.014l.08.032h.014q.034.009.067.01.042.008.077.009h1.77V22h5.613v-4.643h1.581q.04-.001.081-.01.048.009.094.01a.6.6 0 0 0 .171-.023.716.716 0 0 0 .503-.864M12.004 3.43c.772 0 1.401.64 1.401 1.426 0 .787-.629 1.426-1.41 1.426a1.42 1.42 0 0 1-1.397-1.426c.004-.786.633-1.425 1.406-1.425m1.401 17.14h-2.807v-4.644h-2.26l1.541-6.28c.22-1.05 1.074-1.755 2.12-1.755s1.9.704 2.125 1.778l1.536 6.252h-2.255z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.982 17.104a.2.2 0 0 0 .013-.073l.003-.016.002-.016q0-.015-.006-.029l-.003-.008v-.014q.004-.012 0-.022l-1.604-7.497a3.55 3.55 0 0 0-1.98-2.474 2.67 2.67 0 0 0 1.271-2.276A2.68 2.68 0 0 0 12 2a2.68 2.68 0 0 0-2.678 2.679c0 .96.512 1.801 1.275 2.276a3.53 3.53 0 0 0-1.98 2.474L7.01 16.93a.1.1 0 0 0 0 .024v.013l-.004.018Q7 16.994 7 17.003q0 .012.003.02l.002.012.013.069q.008.033.023.06.016.027.037.054c.013.019.027.032.045.05a.4.4 0 0 0 .12.065q.012.006.031.013.016.003.027.001h.01q.01 0 .018.004.008.003.018.004h2.144v4.288a.357.357 0 0 0 .713 0v-4.996H7.79l1.512-7.068c.275-1.28 1.404-2.212 2.683-2.217H12c1.28.005 2.404.937 2.678 2.217l1.513 7.068h-2.413v2.5a.357.357 0 0 0 .713 0V17.36h2.139c.023 0 .05-.005.073-.01l.016-.006.016-.007.064-.027q.027-.016.055-.037.026-.022.046-.05.021-.027.036-.055a.09.09 0 0 0 .046-.064M10.039 4.679c0-1.084.882-1.966 1.966-1.966 1.083 0 1.965.882 1.965 1.966A1.97 1.97 0 0 1 12 6.645a1.967 1.967 0 0 1-1.96-1.966M13.435 21.287a.714.714 0 0 1 1.426 0 .714.714 0 0 1-1.426 0"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.663 4.484c0 1.476.851 2.322 2.336 2.322 1.487 0 2.342-.846 2.342-2.322 0-.75-.213-1.336-.636-1.742-.406-.387-.98-.586-1.706-.586s-1.297.196-1.703.588c-.42.407-.633.992-.633 1.74m.829 0c0-.518.129-.905.38-1.148.245-.239.626-.356 1.127-.356.504 0 .885.117 1.131.356.255.243.384.633.384 1.148 0 1.025-.481 1.501-1.515 1.501-1.028 0-1.507-.479-1.507-1.501m5.958 10.059a.5.5 0 0 1-.297.258.52.52 0 0 1-.658-.311l-.827-2.449a.415.415 0 0 0-.52-.263.41.41 0 0 0-.267.515l.373 1.152.765 2.812h-.494a.414.414 0 0 0-.414.41l-.02 3.831a.52.52 0 0 1-.518.524.52.52 0 0 1-.518-.524l.017-3.832a.417.417 0 0 0-.415-.412h-1.314a.414.414 0 0 0-.409.415l.02 3.829a.518.518 0 1 1-1.036 0l-.02-3.832a.416.416 0 0 0-.415-.409h-.49l.754-2.795.375-1.166a.416.416 0 0 0-.252-.49.413.413 0 0 0-.535.235l-.824 2.446a.53.53 0 0 1-.271.297.5.5 0 0 1-.395.016.517.517 0 0 1-.32-.655l1.586-4.49q.02-.05.045-.101a1.91 1.91 0 0 1 1.756-1.157h2.18c.806 0 1.529.507 1.803 1.266l1.583 4.48a.53.53 0 0 1-.028.4m.74.364c.162-.325.187-.69.07-1.037l-1.592-4.473a1 1 0 0 0-.07-.174 2.73 2.73 0 0 0-2.515-1.652h-2.18a2.73 2.73 0 0 0-2.506 1.633 1.3 1.3 0 0 0-.076.182L6.736 13.87c-.118.338-.093.714.07 1.033.154.314.425.555.759.667.235.084.487.1.73.047l-.251.936a.413.413 0 0 0 .398.518h.621l.017 3.42c0 .743.602 1.348 1.345 1.348.742 0 1.344-.605 1.344-1.35l-.017-3.418h.48l-.017 3.42a1.35 1.35 0 0 0 1.347 1.348c.742 0 1.347-.605 1.347-1.345l.017-3.42h.622q.058.001.112-.014a.41.41 0 0 0 .288-.504l-.252-.936c.241.056.493.04.726-.045a1.32 1.32 0 0 0 .767-.67"
                />
            </svg>
        );
    }
};

export default IconWomanLight;
