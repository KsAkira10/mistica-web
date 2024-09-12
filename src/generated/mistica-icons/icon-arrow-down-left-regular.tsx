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

const IconArrowDownLeftRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.334 22H2V8.603c0-.868.492-1.612 1.288-1.936a2.2 2.2 0 0 1 2.371.476l2.768 2.768 7.71-7.704a.72.72 0 0 1 1.013 0 .72.72 0 0 1 0 1.012L8.93 11.432c-.504.503-.892.12-1.524-.513l-2.76-2.76a.73.73 0 0 0-.807-.172.64.64 0 0 0-.404.616v11.969h11.91c.396 0 .56-.292.608-.42a.79.79 0 0 0-.16-.86l-3.716-3.716 8.703-8.729a.72.72 0 0 1 1.012 0 .72.72 0 0 1 0 1.012l-7.71 7.713 2.71 2.712c.633.632.817 1.58.477 2.42-.34.792-1.076 1.296-1.936 1.296"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.334 22H2V8.603c0-.868.492-1.612 1.288-1.936a2.2 2.2 0 0 1 2.371.476l2.768 2.768 7.71-7.704a.72.72 0 0 1 1.013 0 .72.72 0 0 1 0 1.012L8.93 11.432c-.504.503-.892.12-1.524-.513l-2.76-2.76a.73.73 0 0 0-.807-.172.64.64 0 0 0-.404.616v11.969h11.91c.396 0 .56-.292.608-.42a.79.79 0 0 0-.16-.86l-3.716-3.716 8.703-8.729a.72.72 0 0 1 1.012 0 .72.72 0 0 1 0 1.012l-7.71 7.713 2.71 2.712c.633.632.817 1.58.477 2.42-.34.792-1.076 1.296-1.936 1.296"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3.764 20.203a.9.9 0 0 0 .641.258q.037 0 .079-.003H16.57c.476 0 .865-.246 1.042-.66.19-.446.098-1.01-.219-1.34l-2.588-2.585 5.12-4.815.015-.014c.218-.219.448-.488.52-.824q.118-.556-.36-1.078l-.018-.017-5.05-5.025c-.737-.737-1.577-.745-2.305-.017l-.006.005-4.79 4.905-2.378-2.378-.017-.014c-.358-.328-.95-.42-1.406-.216-.39.174-.616.53-.613.956l-.006 12.145a.89.89 0 0 0 .252.717m12.807-.82H4.588L4.59 7.36c.065-.014.171 0 .213.031l2.448 2.448a.973.973 0 0 0 1.376-.017l.005-.005 4.858-4.972c.103-.107.254-.227.38-.227.101.003.244.09.401.246l5.04 5.017c.06.07.083.112.092.129-.012.028-.054.104-.222.275l-5.187 4.876-.011.011a1 1 0 0 0-.295.676.95.95 0 0 0 .275.7l2.653 2.653c.025.039.03.14.008.176a.2.2 0 0 1-.053.006"
                />
            </svg>
        );
    }
};

export default IconArrowDownLeftRegular;
