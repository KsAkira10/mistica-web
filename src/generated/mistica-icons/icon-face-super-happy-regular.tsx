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

const IconFaceSuperHappyRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.001 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.482 2 12.001 2m0 1.334c-4.783 0-8.666 3.882-8.666 8.666S7.218 20.666 12 20.666s8.666-3.882 8.666-8.666-3.883-8.666-8.666-8.666m4.006 5.204a1.335 1.335 0 1 1-.001 2.67 1.335 1.335 0 0 1 0-2.67m-8.011 0a1.336 1.336 0 1 1-.003 2.672 1.336 1.336 0 0 1 .003-2.672m9.565 4.572s-.14 5.399-5.6 5.428c-5.476.029-5.52-5.44-5.52-5.44a.666.666 0 0 1 .667-.673h9.787a.668.668 0 0 1 .666.685m-1.425.651H7.85c.21 1.17 1.019 3.46 4.103 3.443 3.082-.017 3.944-2.275 4.183-3.443"
                />
            </svg>
        );
    } else if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.001 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.482 2 12.001 2m0 1.334c-4.783 0-8.666 3.882-8.666 8.666S7.218 20.666 12 20.666s8.666-3.882 8.666-8.666-3.883-8.666-8.666-8.666m4.006 5.204a1.335 1.335 0 1 1-.001 2.67 1.335 1.335 0 0 1 0-2.67m-8.011 0a1.336 1.336 0 1 1-.003 2.672 1.336 1.336 0 0 1 .003-2.672m9.565 4.572s-.14 5.399-5.6 5.428c-5.476.029-5.52-5.44-5.52-5.44a.666.666 0 0 1 .667-.673h9.787a.668.668 0 0 1 .666.685m-1.425.651H7.85c.21 1.17 1.019 3.46 4.103 3.443 3.082-.017 3.944-2.275 4.183-3.443"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25m-3.393 5a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
                />
                <path
                    fill={fillColor}
                    d="M17.56 13.111a.67.67 0 0 0-.667-.686H7.107a.67.67 0 0 0-.666.674s.043 5.468 5.519 5.439c5.46-.03 5.6-5.427 5.6-5.427m-5.607 4.227c-1.159.006-1.951-.276-2.507-.64-.563-.37-.955-.874-1.23-1.414a5.5 5.5 0 0 1-.521-1.659h8.598l-.018.1c-.083.429-.24.984-.528 1.526-.285.539-.69 1.046-1.265 1.422-.569.372-1.371.659-2.529.665"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22 12.003C22 18.815 18.314 22 11.997 22S2 18.815 2 12.003C2 5.19 5.68 2 11.997 2S22 5.19 22 12.003M11.997 20.75c5.888 0 8.753-2.862 8.753-8.747 0-5.888-2.862-8.753-8.753-8.753-5.885 0-8.747 2.862-8.747 8.753 0 5.885 2.862 8.747 8.747 8.747m2.163-10.552c-.207-.213-.31-.503-.31-.859 0-.734.455-1.19 1.184-1.19.731 0 1.184.456 1.184 1.19 0 .359-.106.65-.313.86-.208.213-.51.327-.871.327-.362 0-.663-.114-.874-.328m4.287 2.131s-.085 2.933-2.316 4.705c-.949.754-2.285 1.308-4.18 1.318-1.898.009-3.228-.54-4.164-1.295-2.2-1.771-2.231-4.739-2.231-4.739a.57.57 0 0 1 .571-.576h11.749a.57.57 0 0 1 .571.587m-1.21.556H6.752c.12.805.506 2.28 1.75 3.282.773.622 1.877 1.05 3.443 1.042 1.57-.008 2.687-.445 3.474-1.07 1.258-1 1.677-2.452 1.816-3.254m-8.27-2.359c-.362 0-.664-.114-.874-.328-.208-.21-.31-.5-.31-.859 0-.734.455-1.19 1.183-1.19.732 0 1.184.456 1.184 1.19 0 .359-.105.65-.31.86-.21.213-.512.327-.874.327"
                />
            </svg>
        );
    }
};

export default IconFaceSuperHappyRegular;
