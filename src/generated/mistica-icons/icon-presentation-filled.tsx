'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPresentationFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.74 6.152c.18.16.277.378.286.602l-.009.689c0 .395-.294.714-.759.865l.007.037c.007.04.015.086.015.129l-.008 8.384c0 .644-.594 1.176-1.33 1.176l-6.379-.008v1.403c.415.168.737.546.737 1.157 0 .849-.63 1.244-1.255 1.258h-.098c-.616-.009-1.25-.401-1.25-1.267 0-.619.323-.988.74-1.157v-1.394H5.098c-.52.02-.834-.177-1.016-.342a1.1 1.1 0 0 1-.362-.82V8.476q.001-.057.01-.114l.004-.038a1.3 1.3 0 0 1-.482-.263.83.83 0 0 1-.277-.61v-.69c0-.56.594-.966 1.406-.966H7.02l3.725-1.992a1.5 1.5 0 0 1-.053-.386c0-.857.63-1.25 1.255-1.258v.008h.098c.616.006 1.25.407 1.25 1.258q0 .197-.045.35l3.479 2.025h2.834c.505-.02.92.11 1.177.35m-9.067-2.734c0 .16.022.32.294.32.353-.01.353-.189.353-.312 0-.118 0-.314-.3-.32l-.062-.002c-.263.008-.285.151-.285.314m-.13 1.199L9.346 5.793l5.193.008L12.493 4.6a1.3 1.3 0 0 1-.45.081h-.085c-.134 0-.277-.022-.414-.064m8.354 2.297a1.2 1.2 0 0 0-.317-.023L4.384 6.883a.8.8 0 0 0-.28.045v.364c.062.014.165.028.308.022h.518q.036 0 .067-.004l.054-.004 13.848.008a.3.3 0 0 1 .092.002l.051.004h.566a.8.8 0 0 0 .28-.042zM12.32 20.589c0-.118 0-.314-.3-.32h-.059c-.263 0-.286.152-.286.311-.002.126-.002.314.292.32.353-.009.353-.188.353-.311m-3.832-5.656 1.165-1.767 2.527.946a.45.45 0 0 0 .473-.123l1.826-2.224.045.289c.03.196.21.341.406.341l.034-.004.034-.004a.413.413 0 0 0 .347-.46l-.18-1.162a.41.41 0 0 0-.414-.333h-1.333a.407.407 0 0 0-.415.392c0 .224.188.398.415.398h.442l-1.664 2.03L9.64 12.3a.41.41 0 0 0-.496.154l-1.196 1.818v-3.79a.4.4 0 0 0-.412-.398h-.002a.4.4 0 0 0-.415.387v4.86c0 .218.18.4.415.4h7.89a.41.41 0 0 0 .415-.4.404.404 0 0 0-.412-.398z"
            />
        </svg>
    );
};

export default IconPresentationFilled;
