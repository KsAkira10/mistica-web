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

const IconPlaneFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.403 3.112a2 2 0 0 0-2.883 0L14.657 7.07l-7.85-2.156a1.83 1.83 0 0 0-1.787.49L3.45 7.012l7.14 4.226-3.688 3.778-2.067-.568a1.83 1.83 0 0 0-1.787.49L2 16.012l4.911 2.904a1.825 1.825 0 0 0 2.238-.301l4.257-4.488 4.19 7.373 1.57-1.608c.464-.476.649-1.18.478-1.83l-2.105-8.044 3.864-3.958a2.12 2.12 0 0 0 0-2.948"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.403 3.112a2 2 0 0 0-2.883 0L14.657 7.07l-7.85-2.156a1.83 1.83 0 0 0-1.787.49L3.45 7.012l7.14 4.226-3.688 3.778-2.067-.568a1.83 1.83 0 0 0-1.787.49L2 16.012l4.911 2.904a1.825 1.825 0 0 0 2.238-.301l4.257-4.488 4.19 7.373 1.57-1.608c.464-.476.649-1.18.478-1.83l-2.105-8.044 3.864-3.958a2.12 2.12 0 0 0 0-2.948"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.839 4.852c.03-.608-.216-1.224-.718-1.779-1.028-1.146-2.325-1.213-3.47-.185-.28.252-2.86 3.031-3.569 3.793L5.292 5.39a.43.43 0 0 0-.406.187L3.984 7.01a.4.4 0 0 0-.045.336.41.41 0 0 0 .222.258l6.347 2.932c-.874.95-1.53 1.586-2.118 2.157-.79.768-1.423 1.381-2.232 2.412l-2.855-.207a.4.4 0 0 0-.372.184l-.709 1.073a.41.41 0 0 0 .118.569l2.812 1.849 1.832 3.075c.11.182.34.25.53.16l1.249-.602a.41.41 0 0 0 .23-.4l-.239-3.102c1.068-.834 1.687-1.456 2.46-2.235a49 49 0 0 1 2.173-2.092l3.017 6.353a.41.41 0 0 0 .547.193h.002l1.443-.706a.41.41 0 0 0 .224-.431L17.228 9.93c.703-.644 3.468-3.165 3.708-3.383.558-.505.872-1.09.902-1.695"
                />
            </svg>
        );
    }
};

export default IconPlaneFilled;
