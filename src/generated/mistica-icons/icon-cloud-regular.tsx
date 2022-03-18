/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCloudRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.203 19.056h10.42c2.874 0 5.219-2.334 5.219-5.21a5.22 5.22 0 00-5.216-5.216h-.059a6.224 6.224 0 00-5.594-3.51c-1.658 0-3.165.636-4.238 1.793-1.005 1.08-1.58 2.563-1.633 4.19a4.242 4.242 0 00-2.045 1.395 3.951 3.951 0 00-.907 2.504 4.06 4.06 0 004.053 4.054zM9.043 6.62a4.841 4.841 0 011.928-.383 5.098 5.098 0 014.647 3.008l.002.008c.185.468.56.507.712.502l.062-.003.061-.003a4.1 4.1 0 014.263 4.09 4.1 4.1 0 01-4.095 4.095H6.203a2.937 2.937 0 01-2.933-2.933c0-.815.359-1.431.656-1.8.409-.505.96-.875 1.552-1.043.61-.17.74-.535.74-.812 0-1.44.473-2.742 1.335-3.672.418-.451.925-.81 1.49-1.054z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCloudRegular;
