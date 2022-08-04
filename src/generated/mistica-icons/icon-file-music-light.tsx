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
                d="M19.387 8.07a.392.392 0 00-.033-.162.646.646 0 00-.174-.325l-5.36-5.238a.686.686 0 00-.476-.194H5.84c-.638 0-1.221.574-1.221 1.205v17.277c0 .642.571 1.204 1.221 1.204h12.325c.664 0 1.221-.551 1.221-1.204V8.07zm-1.22 12.941H5.84c-.199 0-.4-.19-.4-.378V3.359c0-.174.218-.379.4-.379h6.818v2.474c0 .958.325 1.781.941 2.384.614.599 1.451.915 2.423.915h2.544v11.88c0 .193-.194.378-.4.378zm.187-13.087H16.02c-.754 0-1.395-.238-1.852-.683-.454-.443-.692-1.062-.692-1.79V3.16l4.877 4.764zm-4.241 10.897h-.112c-.417-.006-.913-.182-.913-.984 0-.8.493-.974.902-.977h.117c.42.011.922.188.922.983 0 .793-.496.97-.916.978zm.916-6.303l-4.092-1.123v-.75l4.092 1.12v.753zM9.203 16.77l-.112.003c-.418-.006-.914-.182-.914-.986 0-.798.49-.975.9-.978l.12.003c.42.011.922.188.922.984 0 .792-.499.969-.916.974zm6.644-5.173a.623.623 0 00-.55-.62l-4.461-1.224-.107-.014a.622.622 0 00-.619.625v3.86a1.93 1.93 0 00-.896-.244l-.149-.002c-.79.008-1.711.481-1.711 1.803 0 1.32.927 1.802 1.725 1.813h.135c.762-.011 1.636-.465 1.706-1.656l.014-3.689 4.092 1.12v2.905a1.93 1.93 0 00-.905-.243h-.143c-.79.008-1.71.482-1.71 1.804 0 1.319.926 1.8 1.719 1.812h.14c.793-.014 1.72-.496 1.72-1.804v-6.246z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMusicLight;
