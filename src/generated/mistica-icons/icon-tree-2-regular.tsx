/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTree2Regular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.077 2.155c.823 0 4.862.188 6.109 3.776 2.328.216 4.655 1.667 4.655 5.18 0 3.882-2.837 5.26-5.266 5.26l-4.039.025v4.837a.608.608 0 0 1-.605.608.607.607 0 0 1-.605-.608V16.4h-4.83c-2.097 0-4.341-1.146-4.341-4.356 0-2.518 1.384-3.563 2.454-3.994.193-5.605 5.406-5.894 6.468-5.894Zm1.459 13.025 4.04-.025c.952 0 4.058-.291 4.055-4.042 0-3.504-2.74-3.958-3.919-3.992a.607.607 0 0 1-.565-.45c-.838-3.138-4.373-3.297-5.073-3.297-1.236 0-5.264.358-5.264 5l.006.098a.607.607 0 0 1-.44.596c-1.336.381-2.014 1.384-2.014 2.975 0 2.832 2.194 3.137 3.135 3.137h4.826v-.297l-2.398-2.425a.61.61 0 0 1 .003-.86l.006-.006a.602.602 0 0 1 .851.008l1.538 1.558V9.584a.605.605 0 1 1 1.21 0v1.033l1.194-1.627.002-.003a.603.603 0 0 1 .843-.123c.27.201.328.58.13.851l-2.144 2.922a.038.038 0 0 1-.01.01.038.038 0 0 0-.012.01v2.523Z"
            />
        </svg>
    );
};

export default IconTree2Regular;
