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

const IconNoSmokingFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.728 12.495h2.242c.348 0 .628.28.628.628v2.87c0 .349-.28.629-.628.629h-2.242zm2.877-1.887V8.814a3.24 3.24 0 0 0-1.417-2.695c.43-.438.7-1.04.7-1.7A2.423 2.423 0 0 0 18.466 2a.626.626 0 0 0-.628.628c0 .348.28.628.628.628a1.165 1.165 0 0 1 .003 2.329.632.632 0 0 0 0 1.263c1.02 0 1.88.9 1.88 1.966v1.794c0 .348.28.628.628.628.349 0 .628-.28.628-.628m-2.69.09c0-1.314-1.11-2.422-2.423-2.422h-1.614c-.643 0-1.166-.485-1.166-1.077 0-.62.545-1.166 1.166-1.166.348 0 .628-.28.628-.628a.626.626 0 0 0-.628-.628c-1.313 0-2.422 1.109-2.422 2.422 0 1.285 1.087 2.332 2.422 2.332h1.614c.621 0 1.166.546 1.166 1.166 0 .349.28.628.628.628s.628-.28.628-.627m-9.143 1.797H3.03a.626.626 0 0 0-.628.628v2.87c0 .349.28.629.628.629h10.868zm11.112 9.322a.63.63 0 0 0 .445.183.627.627 0 0 0 .445-1.07l-4.306-4.305.004-4.126h-4.13L3.116 2.269a.63.63 0 0 0-.886 0 .63.63 0 0 0 0 .886z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.728 12.495h2.242c.348 0 .628.28.628.628v2.87c0 .349-.28.629-.628.629h-2.242zm2.877-1.887V8.814a3.24 3.24 0 0 0-1.417-2.695c.43-.438.7-1.04.7-1.7A2.423 2.423 0 0 0 18.466 2a.626.626 0 0 0-.628.628c0 .348.28.628.628.628a1.165 1.165 0 0 1 .003 2.329.632.632 0 0 0 0 1.263c1.02 0 1.88.9 1.88 1.966v1.794c0 .348.28.628.628.628s.628-.28.628-.628m-2.69.09c0-1.314-1.11-2.422-2.423-2.422h-1.614c-.643 0-1.167-.485-1.167-1.077 0-.62.546-1.166 1.167-1.166.348 0 .627-.28.627-.628a.626.626 0 0 0-.627-.628c-1.314 0-2.422 1.109-2.422 2.422 0 1.285 1.087 2.332 2.422 2.332h1.614c.621 0 1.166.546 1.166 1.166 0 .349.28.628.628.628s.628-.28.628-.627m-9.143 1.797H3.03a.626.626 0 0 0-.628.628v2.87c0 .349.28.629.628.629h10.868zm11.112 9.322a.63.63 0 0 0 .445.183.627.627 0 0 0 .445-1.07l-4.306-4.305.004-4.126h-4.13L3.116 2.269a.63.63 0 0 0-.886 0 .63.63 0 0 0 0 .886z"
                />
            </svg>
        );
    }
};

export default IconNoSmokingFilled;
