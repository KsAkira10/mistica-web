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

const IconClipLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.223 21.03c.617.645 1.428.97 2.24.97.81 0 1.622-.325 2.24-.97 1.234-1.29 1.234-3.39 0-4.68L8.301 5.484a1.708 1.708 0 00-2.487 0 1.9 1.9 0 000 2.599l9.409 9.821a.339.339 0 00.495 0 .372.372 0 000-.518L6.315 7.56a1.14 1.14 0 010-1.558 1.042 1.042 0 011.491 0l10.396 10.87c.96 1.004.96 2.637 0 3.64a2.392 2.392 0 01-3.483 0L4.319 9.646a4.106 4.106 0 01-1.136-2.863c0-1.082.405-2.1 1.136-2.862a3.76 3.76 0 012.74-1.187 3.77 3.77 0 012.739 1.187l9.368 9.788a.339.339 0 00.496 0 .372.372 0 000-.518l-9.368-9.788C9.429 2.499 8.279 2 7.058 2c-1.22 0-2.37.5-3.235 1.403a4.861 4.861 0 00-1.343 3.38 4.86 4.86 0 001.343 3.38l10.4 10.867zm6.602-5.381c.387 0 .703-.33.703-.735 0-.405-.316-.734-.703-.734-.388 0-.703.33-.703.734 0 .405.315.735.703.735z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.001 21.837c-2.907 0-4.512-1.456-4.512-4.106V5.434c0-2.117 1.283-3.283 3.613-3.283 2.328 0 3.61 1.166 3.61 3.286v10.65c0 1.557-.98 2.454-2.694 2.454s-2.695-.894-2.695-2.454v-8.98c0-.227.202-.41.451-.41.25 0 .449.185.449.41v8.98c0 1.115.571 1.633 1.792 1.633 1.224 0 1.793-.518 1.793-1.633V5.437c0-1.658-.888-2.465-2.711-2.465-1.824 0-2.712.807-2.712 2.465v12.297c0 2.18 1.216 3.286 3.61 3.286 2.396 0 3.611-1.107 3.611-3.286L15.596 7.1c0-.227.2-.41.447-.41h.003c.25 0 .451.183.451.41l.014 10.636c.003 2.644-1.602 4.1-4.51 4.1z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconClipLight;
