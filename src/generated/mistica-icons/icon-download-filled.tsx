/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDownloadFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.99 21.824a.949.949 0 01-.726-.336l-8.84-9.143c-.012-.01-.02-.022-.032-.033a1.01 1.01 0 01-.128-1.079.958.958 0 01.87-.56h3.934V4.077c0-1.05.854-1.905 1.904-1.905h6.031c1.053 0 1.905.851 1.905 1.905l-.003 6.596h3.96c.376 0 .718.219.875.56.17.353.12.776-.13 1.079-.008.011-.019.022-.03.033l-8.863 9.143a.959.959 0 01-.728.336z"
            />
        </svg>
    );
};

export default IconDownloadFilled;
