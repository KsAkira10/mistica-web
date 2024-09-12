'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEthernetLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4 2.84c-.64 0-1.16.52-1.16 1.16v16c0 .64.52 1.16 1.16 1.16h16c.64 0 1.16-.52 1.16-1.16V4c0-.64-.52-1.16-1.16-1.16zM2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm8.42 3v3a.42.42 0 0 1-.84 0V6.84H7a.16.16 0 0 0-.16.16v8c0 .088.072.16.16.16h3a.84.84 0 0 1 .84.84v1c0 .088.072.16.16.16h2a.16.16 0 0 0 .16-.16v-1a.84.84 0 0 1 .84-.84h3a.16.16 0 0 0 .16-.16V7a.16.16 0 0 0-.16-.16h-2.58V10a.42.42 0 1 1-.84 0V6.84h-1.16V10a.42.42 0 1 1-.84 0V6.84h-1.16zM6 15V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7a1 1 0 0 1-1-1"
            />
        </svg>
    );
};

export default IconEthernetLight;
