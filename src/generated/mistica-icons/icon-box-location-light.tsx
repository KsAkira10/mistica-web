'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBoxLocationLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.944 14.24c0 1.047.842 1.874 1.828 1.874S8.6 15.251 8.6 14.24c0-1.01-.842-1.874-1.828-1.874s-1.828.823-1.828 1.874m2.6 0a.79.79 0 0 1-.776.795.79.79 0 0 1-.776-.795.79.79 0 0 1 .776-.795.79.79 0 0 1 .776.795"
                />
                <path
                    fill={fillColor}
                    d="M14.163 2.08 21.2 6.05c.28.144.355.471.32.615v8.331c0 .256-.14.472-.351.616l-7.045 4.331c-.136.108-.42.144-.666.036l-2.11-1.083a.734.734 0 0 1-.315-.975.7.7 0 0 1 .951-.323l1.092.575v-6.709L7.443 8V10.2c2.042.324 3.59 2.022 3.59 4.076 0 .971-.74 2.705-2.25 5.127-.806 1.298-1.547 2.345-1.582 2.381a.51.51 0 0 1-.425.216.5.5 0 0 1-.425-.216c-.421-.543-3.871-5.446-3.871-7.54 0-2.058 1.548-3.756 3.625-4.08v-3.5c0-.256.036-.435.351-.615l7.04-3.968a.73.73 0 0 1 .667 0m-2.467 6.786 2.117 1.298 5.59-3.464-1.934-1.083zm2.117-5.343L8.183 6.7 10.293 8l5.738-3.213zm-5.91 15.264c1.333-2.13 2.109-3.792 2.109-4.547 0-1.698-1.439-3.06-3.236-3.06s-3.24 1.37-3.24 3.064c0 1.187 1.829 4.256 3.24 6.278l.254-.386c.254-.384.561-.848.873-1.349m6.611-.763 5.63-3.496V7.927l-5.63 3.46z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.628 15.509a1.71 1.71 0 0 1-1.704-1.715c0-.932.742-1.715 1.704-1.715s1.705.747 1.705 1.715c0 .967-.743 1.714-1.705 1.714m0-.716a.994.994 0 0 0 .993-1c0-.535-.425-.999-.993-.999a.97.97 0 0 0-.993 1c0 .571.425.999.993.999"
                />
                <path
                    fill={fillColor}
                    d="m14.078 18.143 6.56-3.958c.178-.072.393-.036.385.184.111.18.072.396-.103.5l-7.097 4.281s-.103.036-.174.036c-.042 0-.083-.012-.116-.023q-.036-.012-.06-.013l-2.482-1.427c-.18-.108-.247-.324-.143-.5.107-.18.321-.247.496-.144l1.951 1.108V10.8L6.91 6.947v2.957a4.14 4.14 0 0 1 3.794 4.138c0 .999-.742 2.782-2.232 5.28-.815 1.427-1.598 2.534-1.598 2.534-.067.072-.174.144-.282.144a.33.33 0 0 1-.282-.144l-.006-.01c-.221-.326-3.824-5.655-3.824-7.804a4.144 4.144 0 0 1 3.794-4.138V6.3c0-.104 0-.216.175-.32l7.096-3.925a.32.32 0 0 1 .354 0l7.096 3.925c.14.104.175.176.175.32v3.925c0 .212-.14.356-.354.356-.21 0-.353-.14-.353-.356V6.943l-6.385 3.853zm-6.179.827c1.423-2.318 2.166-4.069 2.166-4.924 0-1.931-1.526-3.462-3.44-3.462-1.916 0-3.442 1.57-3.442 3.462 0 1.463 2.269 5.172 3.437 6.959A38 38 0 0 0 7.9 18.97M7.34 6.3l2.837 1.71 6.524-3.6-2.98-1.644zm3.544 2.138 2.837 1.715L20.101 6.3l-2.694-1.463z"
                />
                <path
                    fill={fillColor}
                    d="M20.816 13.082c.393 0 .712-.32.712-.715a.713.713 0 0 0-.712-.716.713.713 0 0 0-.71.716c0 .395.318.715.71.715"
                />
            </svg>
        );
    }
};

export default IconBoxLocationLight;
