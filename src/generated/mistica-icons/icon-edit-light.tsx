/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconEditLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.104 6.621c.555.558.885 1.353.882 2.135-.003.778-.31 1.495-.89 2.07-.132.129-.78.714-1.71 1.543l.003.01v5.457c0 1.202-.335 2.168-.997 2.874-.703.75-1.706 1.132-2.977 1.132H6.272c-1.275 0-2.275-.381-2.978-1.132-.658-.706-.994-1.672-.994-2.874V6.215c0-2.504 1.521-4.059 3.972-4.059h9.14c2.289 0 3.77 1.384 3.944 3.62a3.04 3.04 0 011.748.845zM18.569 17.84c0 .986-.26 1.764-.773 2.314-.544.58-1.345.873-2.381.873H6.272c-1.036 0-1.838-.294-2.378-.873-.513-.55-.773-1.328-.773-2.314V6.218c0-2.059 1.148-3.238 3.151-3.238h9.143c1.846 0 2.963 1.022 3.123 2.798a2.927 2.927 0 00-1.63.846c-.264.263-4.123 3.69-7.622 6.782a1.18 1.18 0 00-.333.5l-1.286 3.838a1.157 1.157 0 001.098 1.53c.123 0 .246-.02.364-.059l3.838-1.269c.148-.05.288-.129.403-.232l.174-.154c1.689-1.496 3.56-3.157 5.022-4.46v4.74h.003zm-5.566-.897l-.174.154a.331.331 0 01-.117.068l-3.838 1.269a.342.342 0 01-.428-.432l1.285-3.834a.337.337 0 01.098-.149c2.505-2.21 7.325-6.482 7.659-6.818.52-.52 1.084-.641 1.493-.641a2.22 2.22 0 011.546.641c.403.403.644.983.641 1.552-.002.555-.227 1.07-.65 1.487-.15.152-1.325 1.219-7.515 6.703z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEditLight;
