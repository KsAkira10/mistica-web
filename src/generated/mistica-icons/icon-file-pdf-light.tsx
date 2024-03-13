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

const IconFilePdfLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6 11.425H4.728v3.703h.84v-1.277h.597c.488 0 .824-.115 1.04-.359q.276-.306.277-.899c0-.395-.095-.68-.297-.865-.238-.222-.605-.303-1.185-.303m.482 1.653c-.11.1-.222.14-.493.14v.003H5.57v-1.182h.395c.26 0 .418.036.521.129.098.092.14.24.14.44q.001.323-.145.47M8.084 11.425h1.143c.703 0 1.17.11 1.479.417.297.292.45.754.45 1.42 0 .673-.145 1.138-.45 1.452-.277.283-.703.417-1.364.417H8.084zm1.997 2.76c.146-.216.196-.466.196-.922 0-.533-.08-.782-.26-.975-.168-.18-.418-.244-.83-.244h-.26v2.47h.359c.378 0 .65-.114.795-.33M11.801 11.425h2.443l-.065.61h-1.532v.9h1.213v.633h-1.213v1.56h-.846z"
            />
            <path
                fill={fillColor}
                d="M21.804 7.91q.034.077.034.162v12.563c0 .653-.564 1.205-1.23 1.205H8.17c-.656 0-1.233-.563-1.233-1.205l.037-3.036H4.417a2.27 2.27 0 0 1-2.266-2.27v-4.178a2.27 2.27 0 0 1 2.266-2.27h2.521v-5.52c0-.63.586-1.205 1.233-1.205h7.571c.182 0 .353.07.485.196l5.409 5.236a.7.7 0 0 1 .168.322m-1.196 13.106c.207 0 .403-.185.403-.378V8.758h-2.566c-.98 0-1.826-.316-2.442-.915-.622-.603-.953-1.43-.953-2.384v-2.47H8.168c-.182 0-.406.206-.406.377v5.521h6.706a2.27 2.27 0 0 1 2.266 2.27v4.179a2.27 2.27 0 0 1-2.266 2.268H7.8l-.036 3.042c0 .18.207.373.406.373h12.437zM2.978 15.33c0 .795.644 1.443 1.44 1.443H14.47c.792 0 1.44-.648 1.44-1.443v-4.18c0-.795-.645-1.442-1.44-1.442H4.417c-.792 0-1.44.647-1.44 1.443zm17.815-7.403.003.002v-.002zm0 0-4.916-4.762v2.288c0 .728.24 1.348.7 1.79.462.445 1.106.684 1.868.684z"
            />
        </svg>
    );
};

export default IconFilePdfLight;
