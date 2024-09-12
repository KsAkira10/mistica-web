'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRobotLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m21.302 9.103-1.489-1.588h-1.628a1.8 1.8 0 0 0-.278-.38l-2.831-2.942C14.932 2.953 13.89 2 12.644 2c-.89 0-1.672.468-2.093 1.24l-4.799 8.392a2.97 2.97 0 0 0-1.554 2.607v3.993c-.973.159-1.698.997-1.698 2.043V22h9.158v-1.725c0-1.041-.72-1.88-1.698-2.043v-3.9l3.778-6.702 1.859 1.888c.039.04.086.088.139.128v2.352l1.628 1.24c.29.22.734.154.95-.137a.694.694 0 0 0-.134-.966l-1.085-.83v-1.31a1.66 1.66 0 0 0 1.216-1.103h.916l1.124 1.173a.7.7 0 0 0 .956 0 .69.69 0 0 0-.005-.962M4.537 19.583h5.089c.386 0 .677.295.677.688v.344H3.86v-.344c0-.393.291-.689.678-.689M8.61 18.2H5.557V14.24c0-.843.7-1.553 1.529-1.553s1.524.71 1.524 1.553zm-1.095-6.86 4.234-7.444c.178-.309.539-.516.895-.516.59 0 1.085.503 1.085 1.103a.94.94 0 0 1-.16.52l-4.152 7.528a2.88 2.88 0 0 0-1.902-1.192m9.436-3.235q.105.105.105.239c0 .145-.144.308-.34.308a.32.32 0 0 1-.234-.105l-2.088-2.123.36-.613z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.395 9.246 19.954 7.71h-1.76a1.5 1.5 0 0 0-.316-.499l-3.026-3.14C14.78 2.928 13.83 2 12.672 2c-.774 0-1.477.393-1.864 1.106l-5.034 8.787A2.72 2.72 0 0 0 4.26 14.32v4.466c-.986 0-1.761.787-1.761 1.788V22h8.794v-1.426c0-1.001-.774-1.788-1.76-1.788V14.32c0-1.463-1.198-2.679-2.639-2.679h-.14l4.684-8.215c.247-.43.738-.713 1.229-.713.81 0 1.477.677 1.477 1.5 0 .251-.072.498-.212.713L11.3 9.712a.364.364 0 0 0 .14.498c.175.105.387.037.49-.141l1.793-3.178 2.251 2.286c.086.087.149.151.248.188v2.454L17.77 13q.096.074.211.073a.36.36 0 0 0 .284-.142.357.357 0 0 0-.072-.498l-1.265-.965V9.611c.666 0 1.23-.498 1.337-1.179h1.374l1.265 1.321a.37.37 0 0 0 .248.105.4.4 0 0 0 .247-.105.364.364 0 0 0-.004-.507M9.538 19.499c.6 0 1.054.467 1.054 1.07v.713H3.207v-.713c0-.608.46-1.07 1.054-1.07zm-.702-5.179v4.466H4.963V14.32c0-1.074.883-1.966 1.936-1.966 1.054 0 1.937.892 1.937 1.966m8.056-5.43a.7.7 0 0 1-.491-.216l-2.36-2.39.563-.965c.072-.105.104-.215.14-.357l2.639 2.752a.7.7 0 0 1 .211.499c0 .356-.315.676-.702.676m-6.295 3.464c.387 0 .702-.32.702-.713a.71.71 0 0 0-.702-.713.71.71 0 0 0-.703.713c0 .393.315.713.703.713"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.045 12.979h-4.35v.703h6.485c.462 0 .84.37.84.823v6.513a.83.83 0 0 1-.84.823H3.815a.834.834 0 0 1-.84-.823v-6.513c0-.454.375-.823.84-.823H10.3v-.703H5.96a.834.834 0 0 1-.84-.824V11.04H3.815a.834.834 0 0 1-.84-.823V7.043c0-.454.375-.824.84-.824h1.306V4.32a.83.83 0 0 1 .84-.823h5.616V3.12a.56.56 0 0 1-.162-.395c0-.316.263-.571.582-.571a.58.58 0 0 1 .586.571.55.55 0 0 1-.165.395v.376h5.63c.462 0 .84.367.84.823v1.91h1.294c.463 0 .84.368.84.824v3.174a.834.834 0 0 1-.84.823h-1.294v1.104a.84.84 0 0 1-.843.824m-12.084-.824h12.084V4.32H5.961zm-.84-1.938V7.043H3.815v3.174zm7.734 3.462v-.69H11.14v.69zm7.325.823H3.815v6.513h2.429l-.004-.016-.004-.02v-4.174a.83.83 0 0 1 .84-.824h9.84c.462 0 .84.367.84.824v4.174q0 .015-.005.026l-.003.01h2.432zM7.076 20.98h9.84v-4.174h-9.84zM20.18 10.228V7.054h-1.295v3.174zM10.174 7.354a.68.68 0 0 0-.686-.675.68.68 0 0 0-.687.675.68.68 0 0 0 .687.672.68.68 0 0 0 .686-.672m.84 0c0 .826-.683 1.496-1.526 1.496-.844 0-1.527-.673-1.527-1.496 0-.826.683-1.496 1.527-1.496.843-.003 1.526.67 1.526 1.496m3.504-1.518c.844 0 1.527.672 1.527 1.498 0 .827-.683 1.496-1.527 1.496s-1.526-.672-1.526-1.496c0-.823.683-1.498 1.526-1.498m-.338 4.308a.416.416 0 0 0-.42-.412h-3.513a.416.416 0 0 0-.42.412c0 .227.187.412.42.412h3.512c.233 0 .42-.185.42-.412m.338-2.137a.68.68 0 0 0 .687-.673.68.68 0 0 0-.687-.675.68.68 0 0 0-.686.675c0 .37.308.673.686.673"
                />
            </svg>
        );
    }
};

export default IconRobotLight;
