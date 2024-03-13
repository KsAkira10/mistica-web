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

const IconFusionRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.526 12.283-1.155-1.155a1.4 1.4 0 0 0-.569-.343 7.85 7.85 0 0 0-2.875-4.956 5.104 5.104 0 0 0-4.844-3.825h-.018q-.018-.002-.036-.004-.014-.002-.029-.004-.011-.001-.06.004a5.095 5.095 0 0 0-4.867 3.826 7.86 7.86 0 0 0-2.96 5.814h-.526a1.6 1.6 0 0 0-1.588 1.609v6.085a1.6 1.6 0 0 0 1.588 1.61H6.74a1.6 1.6 0 0 0 1.587-1.61v-.347a7.8 7.8 0 0 0 2.557.823c.068.179.171.343.31.483l1.156 1.154c.35.35.994.547 1.78.547q.08 0 .165-.003c1.813-.06 3.736-1.058 5.149-2.675 2.51-2.857 3.11-6.003 2.08-7.033M9.372 7.631c.05 1.327.29 2.267.608 2.932a4.02 4.02 0 0 1-1.96-2.932zm3.165 3.208V7.63h1.019c-.079 1.849-.562 2.793-1.02 3.208m0-4.28V3.35c.422.369.94 1.223 1.019 3.208zm-1.073-3.197V6.56h-1.02c.083-1.963.602-2.821 1.02-3.197m0 4.27v3.196c-.418-.375-.937-1.234-1.02-3.197zm3.164 0h1.352a4.04 4.04 0 0 1-1.945 2.924c.31-.668.543-1.609.593-2.925m1.352-1.073h-1.352c-.05-1.32-.286-2.256-.593-2.925a4.04 4.04 0 0 1 1.945 2.925m-6-2.936c-.315.665-.558 1.606-.608 2.932H8.021a4.02 4.02 0 0 1 1.96-2.932M6.923 7.438a5.09 5.09 0 0 0 5.013 4.745q.049.005.06.004l.047-.004h.036a5.1 5.1 0 0 0 4.991-4.737 6.76 6.76 0 0 1 1.656 3.454 1.3 1.3 0 0 0-.318.228l-.905.905a1.37 1.37 0 0 0-.404.976c0 .368.143.715.404.976l.805.805c.371.372-.1 1.444-1.052 2.395-.95.952-2.027 1.423-2.395 1.052l-.805-.805c-.522-.522-1.434-.522-1.956 0l-.904.905c-.118.114-.204.25-.272.397a6.8 6.8 0 0 1-2.596-.99v-4.488a1.6 1.6 0 0 0-1.587-1.61H5.185a6.78 6.78 0 0 1 1.738-4.208m-3.85 7.076h4.186v3.551H3.072zm.514-1.794H6.74c.282 0 .514.239.514.536v.186H3.072v-.186c0-.297.232-.537.515-.537m3.157 7.158H3.587a.527.527 0 0 1-.515-.537v-.2H7.26v.2a.53.53 0 0 1-.515.537m11.896-1.259c-1.81 2.067-3.808 2.288-4.376 2.306-.662.025-1.044-.125-1.152-.228l-1.155-1.155a.309.309 0 0 1 0-.436l.905-.905a.31.31 0 0 1 .436 0l.805.804c.986.99 2.678.183 3.911-1.05 1.238-1.238 2.038-2.926 1.052-3.913l-.805-.804a.31.31 0 0 1 0-.436l.905-.905a.32.32 0 0 1 .186-.086l.032-.007c.082 0 .16.032.218.09l1.155 1.154c.35.336.357 2.743-2.117 5.571"
            />
        </svg>
    );
};

export default IconFusionRegular;
