/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileMusicLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.392 8.075a.392.392 0 00-.033-.162.646.646 0 00-.174-.325L13.824 2.35a.686.686 0 00-.476-.194H5.846c-.638 0-1.221.574-1.221 1.205v17.277c0 .641.571 1.204 1.221 1.204h12.325c.664 0 1.221-.551 1.221-1.204V8.075zm-1.22 12.941c.206 0 .4-.185.4-.378V8.758h-2.544c-.972 0-1.81-.316-2.423-.915-.616-.603-.94-1.426-.94-2.384V2.985h-6.82c-.182 0-.4.205-.4.379v17.274c0 .188.201.378.4.378H18.17zm.187-13.087l-4.877-4.764v2.291c0 .728.238 1.347.692 1.79.457.445 1.098.683 1.852.683h2.333zm-4.241 10.897c.42-.009.916-.185.916-.978 0-.795-.501-.972-.922-.983h-.117c-.41.003-.902.176-.902.978 0 .8.496.977.913.983h.112zm.916-6.303L10.941 11.4v-.75l4.093 1.12v.753zm-5.826 4.252c.417-.005.916-.182.916-.974 0-.796-.502-.973-.922-.984l-.12-.002c-.41.002-.9.179-.9.977 0 .804.496.98.914.986l.112-.003zm6.644-5.173a.623.623 0 00-.55-.62l-4.461-1.224-.107-.014a.622.622 0 00-.619.625v3.86a1.93 1.93 0 00-.896-.244l-.149-.002c-.79.008-1.711.481-1.711 1.803 0 1.32.927 1.802 1.725 1.813h.135c.762-.011 1.636-.465 1.706-1.656l.014-3.689 4.092 1.12v2.905a1.93 1.93 0 00-.905-.243h-.143c-.79.008-1.71.482-1.71 1.804 0 1.319.926 1.8 1.719 1.812h.14c.793-.014 1.72-.496 1.72-1.804v-6.246z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMusicLight;
