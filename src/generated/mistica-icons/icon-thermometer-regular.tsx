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

const IconThermometerRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.873 4.941A2.934 2.934 0 0 1 11.8 2a2.934 2.934 0 0 1 2.927 2.941v8.21c0 .108.056.242.193.36a4.82 4.82 0 0 1 1.68 3.666C16.6 19.84 14.451 22 11.8 22S7 19.84 7 17.177c0-1.468.652-2.782 1.68-3.666.137-.118.193-.252.193-.36zM11.8 3.176c-.97 0-1.756.79-1.756 1.765v8.21c0 .522-.265.963-.603 1.254a3.65 3.65 0 0 0-1.27 2.772 3.64 3.64 0 0 0 3.629 3.646 3.64 3.64 0 0 0 3.63-3.646 3.65 3.65 0 0 0-1.271-2.772c-.338-.29-.603-.732-.603-1.253v-8.21A1.76 1.76 0 0 0 11.8 3.175m0 13.647a.35.35 0 0 0-.351.354.352.352 0 1 0 .702 0 .35.35 0 0 0-.351-.354m-1.522.354c0-.845.681-1.53 1.522-1.53.84 0 1.522.685 1.522 1.53 0 .844-.681 1.529-1.522 1.529-.84 0-1.522-.685-1.522-1.53"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.909 4.963V15.15A4.1 4.1 0 0 1 16 17.925C16 20.185 14.218 22 12 22s-4-1.816-4-4.075c0-1.036.4-2.036 1.091-2.776V4.963C9.091 3.336 10.402 2 12 2s2.909 1.336 2.909 2.963M9.452 17.925c0 1.447 1.13 2.595 2.548 2.595 1.417 0 2.544-1.148 2.548-2.595 0-.74-.326-1.44-.837-1.924a.67.67 0 0 1-.255-.556V4.963c0-.82-.651-1.483-1.456-1.483s-1.456.668-1.456 1.483v10.482c0 .22-.11.408-.255.556a2.69 2.69 0 0 0-.837 1.924"
                />
                <path
                    fill={fillColor}
                    d="M12.546 4.963v11.222a1.835 1.835 0 0 1 1.272 1.744c0 1.036-.801 1.851-1.818 1.851s-1.818-.815-1.818-1.851a1.83 1.83 0 0 1 1.272-1.74V4.963c0-.296.255-.555.546-.555.29 0 .546.26.546.555M11.274 17.93c0 .404.326.74.726.74a.736.736 0 0 0 .726-.74.74.74 0 0 0-.726-.74.74.74 0 0 0-.726.74"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.909 4.963V15.15A4.1 4.1 0 0 1 16 17.925C16 20.185 14.218 22 12 22s-4-1.816-4-4.075c0-1.036.4-2.036 1.091-2.776V4.963C9.091 3.336 10.402 2 12 2s2.909 1.336 2.909 2.963M9.452 17.925c0 1.447 1.13 2.595 2.548 2.595 1.417 0 2.544-1.148 2.548-2.595 0-.74-.326-1.44-.837-1.924a.67.67 0 0 1-.255-.556V4.963c0-.82-.651-1.483-1.456-1.483s-1.456.668-1.456 1.483v10.482c0 .22-.11.408-.255.556a2.69 2.69 0 0 0-.837 1.924"
                />
                <path
                    fill={fillColor}
                    d="M12.546 4.963v11.222a1.835 1.835 0 0 1 1.272 1.744c0 1.036-.801 1.851-1.818 1.851s-1.818-.815-1.818-1.851a1.83 1.83 0 0 1 1.272-1.74V4.963c0-.296.255-.555.546-.555.29 0 .546.26.546.555M11.274 17.93c0 .404.326.74.726.74a.736.736 0 0 0 .726-.74.74.74 0 0 0-.726-.74.74.74 0 0 0-.726.74"
                />
            </svg>
        );
    }
};

export default IconThermometerRegular;
