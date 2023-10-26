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

const IconAlertLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.35 9.566a.425.425 0 0 1 .85 0v4.65a.425.425 0 0 1-.85 0v-4.65ZM11.775 16.731a.425.425 0 1 0 0-.85.425.425 0 0 0 0 .85Z"
                />
                <path
                    fill={fillColor}
                    d="M13.463 4.14c-.646-1.134-2.28-1.134-2.927 0L2.533 18.195a1.684 1.684 0 0 0 1.463 2.517h16.007a1.684 1.684 0 0 0 1.463-2.517L13.463 4.14Zm7.264 14.475a.834.834 0 0 1-.724 1.246H3.996a.834.834 0 0 1-.724-1.247l8.003-14.053a.834.834 0 0 1 1.45 0l8.002 14.053Z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.011 4.1 3.02 20.267h18.625c.214 0 .356.146.356.367s-.142.367-.356.367H2.374a.432.432 0 0 1-.32-.183.334.334 0 0 1 0-.367l9.638-17.267a.372.372 0 0 1 .32-.183c.141 0 .246.075.32.183l7.133 12.789c.073.184.037.405-.141.513-.179.075-.393.037-.498-.146L12.01 4.1Zm.357 4.408c0-.221-.142-.367-.357-.367-.214 0-.356.146-.356.367v7.902c0 .22.142.366.356.366.215 0 .357-.145.357-.366V8.508Zm7.92 10.512c.392 0 .712-.33.712-.734a.724.724 0 0 0-.713-.734.724.724 0 0 0-.712.734c0 .405.324.734.712.734Zm-8.277-.038c-.283 0-.534-.258-.534-.55 0-.334.251-.55.534-.55.284 0 .535.258.535.55 0 .292-.251.55-.535.55Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.025 17.517a.314.314 0 0 1-.314-.313V8.03a.314.314 0 0 1 .628 0v9.174a.312.312 0 0 1-.314.313ZM12.003 19.986c-.216 0-.339-.125-.339-.338 0-.213.126-.339.34-.339.212 0 .338.126.338.339 0 .213-.122.338-.339.338Z"
                />
                <path
                    fill={fillColor}
                    d="M22.496 23H1.507a.499.499 0 0 1-.44-.226.499.499 0 0 1-.005-.492l10.53-21C11.68 1.103 11.831 1 12 1c.17 0 .32.103.41.282l10.528 21a.499.499 0 0 1-.006.492c-.085.145-.245.226-.436.226Zm-20.82-.602h20.648L12.004 1.805 1.675 22.398Z"
                />
            </svg>
        );
    }
};

export default IconAlertLight;
