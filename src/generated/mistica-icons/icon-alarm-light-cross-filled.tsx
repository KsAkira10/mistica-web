/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAlarmLightCrossFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.43 4.231c0 .336.272.608.605.608a.608.608 0 00.605-.608V2.758a.607.607 0 00-.605-.608.607.607 0 00-.605.608V4.23zm7.115 13.196c.74 0 1.384.547 1.384 1.171v2.07c0 .625-.647 1.171-1.384 1.171H5.525c-.75 0-1.384-.535-1.384-1.17v-2.07c0-.634.634-1.169 1.384-1.169h.152v-5.728c0-4.118 2.257-6.387 6.355-6.387 4.101 0 6.359 2.27 6.359 6.387v5.725h.154zm.173 3.14v-1.874a.324.324 0 00-.173-.053H5.525a.345.345 0 00-.173.048v1.888c.053.03.112.044.173.044h13.02a.32.32 0 00.173-.053zm-5.84-8.078h1.476v-.695h-1.476a.525.525 0 01-.524-.526V9.786h-.691v1.482a.524.524 0 01-.524.526H9.662v.695h1.477c.288 0 .524.238.524.526v1.482h.691v-1.482c0-.288.236-.526.524-.526zm1.695-1.748h-1.174V9.565c0-.451-.35-.832-.764-.832H11.38c-.415 0-.768.38-.768.832v1.179h-1.17c-.449 0-.83.353-.83.767v1.264c0 .414.378.767.826.767h1.174v1.177c0 .45.353.832.768.832h1.254c.415 0 .768-.381.768-.832v-1.18h1.17c.449 0 .83-.353.83-.77v-1.263c0-.412-.378-.765-.83-.765zm-9.748-1.18a.609.609 0 01-.605.609H2.755a.609.609 0 010-1.216h1.468c.333 0 .605.272.602.608zm17.011.029a.607.607 0 00-.605-.608h-1.468a.607.607 0 00-.605.608c0 .336.272.608.605.608h1.468a.607.607 0 00.605-.608zM5.666 5.957L4.628 4.915a.607.607 0 01.851-.863l.003.003L6.52 5.097a.61.61 0 01-.429 1.039.62.62 0 01-.426-.18zm10.92-.558a.607.607 0 00.603.614c.16 0 .314-.065.429-.18l1.036-1.042a.609.609 0 000-.857l-.003-.002a.602.602 0 00-.851.002l-1.037 1.042a.598.598 0 00-.176.423z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmLightCrossFilled;
