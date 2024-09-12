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

const IconPersonLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.472 6.58A3.39 3.39 0 0 1 16.5 9.676v6.61h-1.438v4.997a.717.717 0 0 1-.719.713.717.717 0 0 1-.719-.713v-6.427h1.438v-5.18c0-1.065-.908-1.965-1.981-1.965h-2.162c-1.073 0-1.981.9-1.981 1.965v5.18h1.438v6.432a.717.717 0 0 1-.72.713.717.717 0 0 1-.718-.713v-5.001H7.5V9.68c0-1.486.968-2.747 2.309-3.205a2.85 2.85 0 0 1-.507-1.618C9.302 3.28 10.592 2 12.182 2s2.88 1.28 2.88 2.857c0 .65-.221 1.244-.59 1.724m-.857-1.727a1.44 1.44 0 0 0-2.88 0c0 .781.64 1.421 1.433 1.426.802 0 1.447-.64 1.447-1.426"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.819 6.754a2.7 2.7 0 0 0 .961-2.075C14.78 3.202 13.61 2 12.171 2c-1.438 0-2.608 1.202-2.608 2.679 0 .8.347 1.518.894 2.011C9.064 6.933 8 8.18 8 9.68v6.25h1.389v5.713c0 .197.156.357.347.357.192 0 .348-.16.348-.357v-6.427h-1.39V9.68c0-1.257 1.038-2.322 2.262-2.322h2.088c1.224 0 2.262 1.065 2.262 2.322v5.536h-1.39v3.927c0 .196.156.356.348.356s.347-.16.347-.356v-3.214H16V9.68c-.005-1.394-.926-2.574-2.181-2.926M10.257 4.68c0-1.084.86-1.966 1.914-1.966 1.056 0 1.915.882 1.915 1.966 0 1.083-.86 1.966-1.92 1.966-1.054-.005-1.909-.883-1.909-1.966M14.26 22c.383 0 .695-.32.695-.713a.705.705 0 0 0-.695-.713.705.705 0 0 0-.694.713c0 .393.312.713.694.713"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.35 4.479c0 1.473.872 2.32 2.387 2.32 1.518 0 2.39-.847 2.39-2.32 0-.75-.22-1.336-.65-1.74-.415-.389-1-.588-1.74-.588-.742 0-1.328.2-1.74.588-.428.404-.647.99-.647 1.74m.844 0c0-.521.128-.908.389-1.151q.379-.355 1.157-.356.774 0 1.154.359c.26.243.392.63.392 1.148 0 1.025-.493 1.501-1.549 1.501-1.053 0-1.543-.479-1.543-1.501m5.887 10.507a.53.53 0 0 1-.4-.05.5.5 0 0 1-.24-.278l-.539-2.893c-.039-.21-.224-.345-.45-.336a.416.416 0 0 0-.384.409v8.655a.53.53 0 0 1-.53.527.53.53 0 0 1-.532-.527v-5.16a.42.42 0 0 0-.423-.409h-1.188a.414.414 0 0 0-.42.41v5.156a.53.53 0 0 1-1.062 0v-8.655a.414.414 0 0 0-.383-.41c-.23-.01-.415.127-.454.337l-.532 2.865a.5.5 0 0 1-.247.309.52.52 0 0 1-.406.05h-.006a.523.523 0 0 1-.372-.636l1.21-4.336a.3.3 0 0 0 .034-.092l.004-.015.007-.022c.182-.865.977-1.493 1.888-1.493h2.664c.913 0 1.708.628 1.888 1.493l.016.056q.018.06.042.115l1.196 4.289q.004.003.003.008a.526.526 0 0 1-.384.633m.241.787a1.34 1.34 0 0 0 .956-1.641l-1.185-4.264a1 1 0 0 0-.056-.17c-.27-1.233-1.404-2.127-2.706-2.127h-2.664c-1.303 0-2.44.894-2.709 2.132a1 1 0 0 0-.047.14l-1.2 4.294-.002.009a1.34 1.34 0 0 0 .97 1.63 1.39 1.39 0 0 0 1.403-.41v5.127c0 .742.616 1.347 1.372 1.347s1.373-.605 1.373-1.347v-4.75h.336v4.747a1.36 1.36 0 0 0 1.372 1.348c.757 0 1.373-.605 1.373-1.348v-5.123a1.4 1.4 0 0 0 1.414.406"
                />
            </svg>
        );
    }
};

export default IconPersonLight;
