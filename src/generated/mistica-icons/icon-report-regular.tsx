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

const IconReportRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22.004 4.09q0-.758-.54-1.298c-.721-.721-1.874-.721-2.56 0l-3.207 3.244V2.287h-8.29L2 7.694V21.75h13.697V11.154L21.5 5.351a1.74 1.74 0 0 0 .504-1.262m-1.297-.505a.71.71 0 0 1 .216.504c0 .18-.072.36-.18.505L19.698 3.55c.288-.252.757-.252 1.009.036m-7.497 6.452 5.73-5.731 1.046 1.045-5.731 5.731zm-.54.973.612.613-.973.36zM7.225 4.558v2.956H4.271zM3.442 20.31V8.595h4.866V3.729h5.947v3.749l-2.199 2.198c-.072.072-.072.108-.108.18l-1.081 2.884c-.072.216-.036.432.108.577a.54.54 0 0 0 .396.144c.073 0 .145 0 .18-.036l2.704-1.01v7.894zm9.551-3.244c0 .289-.252.54-.54.54H5.244a.554.554 0 0 1-.54-.54c0-.288.252-.54.54-.54h7.209c.288 0 .54.252.54.54m-8.29-3.604c0-.289.253-.54.541-.54H9.57c.289 0 .541.252.541.54s-.252.54-.54.54H5.243a.554.554 0 0 1-.54-.54"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M22.004 4.09q0-.758-.54-1.298c-.721-.721-1.874-.721-2.56 0l-3.207 3.244V2.287h-8.29L2 7.694V21.75h13.697V11.154L21.5 5.351a1.74 1.74 0 0 0 .504-1.262m-1.297-.505a.71.71 0 0 1 .216.504c0 .18-.072.36-.18.505L19.698 3.55c.288-.253.757-.253 1.009.036m-7.497 6.452 5.73-5.731 1.046 1.045-5.731 5.731zm-.54.973.612.613-.973.36zM7.225 4.558v2.956H4.271zM3.442 20.309V8.595h4.866V3.729h5.947v3.749l-2.199 2.198c-.072.072-.072.108-.108.18l-1.081 2.884c-.072.216-.036.432.108.577a.54.54 0 0 0 .396.144c.073 0 .145 0 .18-.036l2.704-1.01v7.894zm9.551-3.244c0 .289-.252.54-.54.54H5.244a.554.554 0 0 1-.54-.54c0-.288.252-.54.54-.54h7.209c.288 0 .54.252.54.54m-8.29-3.604c0-.289.253-.54.541-.54H9.57c.289 0 .541.252.541.54s-.252.54-.54.54H5.243a.554.554 0 0 1-.54-.54"
                />
            </svg>
        );
    }
};

export default IconReportRegular;
