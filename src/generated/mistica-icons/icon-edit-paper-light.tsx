/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconEditPaperLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.837 4.895a2.845 2.845 0 00-.799-1.944 2.84 2.84 0 00-1.817-.798 2.706 2.706 0 00-2.015.798l-.543.496H6.321c-2.568-.023-4.165 1.482-4.165 3.89v10.628a3.682 3.682 0 001.076 2.79 4.285 4.285 0 003.103 1.076h9.26a4.31 4.31 0 003.116-1.076 3.684 3.684 0 001.078-2.79V7.94l1.238-1.157a2.68 2.68 0 00.81-1.888zm-3.219 13.067a2.618 2.618 0 01-.717 1.956 3.24 3.24 0 01-2.316.75H6.32a3.227 3.227 0 01-2.316-.75 2.622 2.622 0 01-.695-1.956V7.338c0-1.712 1.076-2.757 3.023-2.757h9.053l-4.513 3.984a1.343 1.343 0 00-.347.52L9.46 12.269c-.154.431-.042.91.289 1.226.221.233.527.362.846.359.126.017.255.017.38 0l3.197-1.053c.154-.053.294-.135.417-.244 0 0 2.21-1.944 4.017-3.563l.011 8.97zm-7.025-8.53c1.726-1.492 6.123-5.358 6.437-5.657a1.49 1.49 0 011.076-.463h.07c.84.042 1.498.734 1.504 1.575a1.516 1.516 0 01-.462 1.075c-.348.325-5.58 4.956-6.404 5.684l-3.196 1.053c0-.003-.103-.062-.103-.062l1.078-3.204z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEditPaperLight;
