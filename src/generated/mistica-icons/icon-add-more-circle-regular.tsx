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

const IconAddMoreCircleRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.654 11.321h5.254a.679.679 0 0 1 0 1.357h-5.254v5.254a.679.679 0 1 1-1.357 0v-5.254H6.044a.678.678 0 1 1 0-1.357h5.253V6.068a.679.679 0 0 1 1.357 0z"
                />
                <path
                    fill={fillColor}
                    d="M1.976 12c0 5.327 4.673 10 10 10s10-4.673 10-10-4.673-10-10-10-10 4.673-10 10m1.358 0c0-4.604 4.038-8.643 8.642-8.643S20.618 7.396 20.618 12s-4.038 8.642-8.642 8.642S3.334 16.604 3.334 12"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.283 5.94a.72.72 0 0 1 .715-.716.72.72 0 0 1 .716.715v5.346l5.34.006a.72.72 0 0 1 .716.715c0 .198-.08.38-.207.507a.73.73 0 0 1-.506.206H12.71v5.346a.7.7 0 0 1-.713.713.72.72 0 0 1-.715-.716v-5.346H5.937a.72.72 0 0 1-.716-.715.72.72 0 0 1 .716-.716h5.346z"
                />
                <path
                    fill={fillColor}
                    d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2m0 18.576c-4.728 0-8.576-3.848-8.576-8.576S7.272 3.424 12 3.424 20.576 7.272 20.576 12 16.728 20.576 12 20.576"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.283 5.94a.72.72 0 0 1 .715-.716.72.72 0 0 1 .716.715v5.346l5.34.006a.72.72 0 0 1 .716.715c0 .198-.08.38-.207.507a.73.73 0 0 1-.506.206H12.71v5.346a.7.7 0 0 1-.713.713.72.72 0 0 1-.715-.716v-5.346H5.937a.72.72 0 0 1-.716-.715.72.72 0 0 1 .716-.716h5.346z"
                />
                <path
                    fill={fillColor}
                    d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2m0 18.576c-4.728 0-8.576-3.848-8.576-8.576S7.272 3.424 12 3.424 20.576 7.272 20.576 12 16.728 20.576 12 20.576"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M23 12.028C23 1.914 14.617 1.063 12.457 1.01c-.247-.006-.538-.009-.82-.009h-.22C9.208 1.019 1 1.776 1 11.966c0 10.201 8.286 11 10.496 11.03q.178.005.357.004c.228 0 .454-.003.651-.006C14.601 22.953 23 22.167 23 12.028M12.476 21.62q-.48.01-.958.004c-2.749-.038-9.14-1.058-9.14-9.657 0-8.587 6.329-9.567 9.052-9.592h.207q.394 0 .789.01c2.764.065 9.196 1.14 9.196 9.644 0 8.505-6.395 9.541-9.146 9.591M17.48 11.28a.689.689 0 0 1 0 1.377h-4.799v4.808a.689.689 0 0 1-1.377 0v-4.81h-4.79a.689.689 0 0 1 0-1.378h4.79V6.534a.689.689 0 0 1 1.377 0v4.746z"
                />
            </svg>
        );
    }
};

export default IconAddMoreCircleRegular;
