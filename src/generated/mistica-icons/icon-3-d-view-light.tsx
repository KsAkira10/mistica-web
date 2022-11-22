/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const Icon3DViewLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M22 16.29a.708.708 0 01-.702.715.708.708 0 01-.701-.714c0-.394.314-.714.701-.714.388 0 .702.32.702.714z"
                fill={fillColor}
            />
            <path
                d="M17.79 18.789c-.211 0-.351-.143-.351-.357s.14-.357.35-.357h3.158v3.211c0 .214-.14.357-.35.357-.211 0-.351-.143-.351-.357V19.36C18.49 21.002 15.368 22 11.825 22 6.315 22 2 19.43 2 16.112c0-1.463.842-2.783 2.456-3.889V6.478c0-.143.07-.25.176-.321l7.017-4.103a.314.314 0 01.351 0l7.017 4.103a.376.376 0 01.176.321v8.207c0 .143-.07.25-.176.321L12 19.11c-.07.035-.105.035-.175.035-.07 0-.106 0-.176-.035l-7.017-4.104a.376.376 0 01-.176-.32v-1.57c-.877.677-1.754 1.676-1.754 2.996 0 2.855 4.105 5.174 9.123 5.174 3.333 0 6.35-.963 7.965-2.497h-2zm-6.316-7.993L5.158 7.085v7.386l6.316 3.711v-7.386zm.701 7.386l6.316-3.675V7.085l-6.316 3.71v7.387zm5.93-11.704l-6.28-3.675-6.281 3.675 6.28 3.675 6.281-3.675z"
                fill={fillColor}
            />
        </svg>
    );
};

export default Icon3DViewLight;
