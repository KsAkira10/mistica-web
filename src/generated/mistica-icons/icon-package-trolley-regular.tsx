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

const IconPackageTrolleyRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.106 17.871c.08.172.284.247.456.166l6.74-3.143a.34.34 0 0 0 .167-.456l-2.897-6.214-7.364 3.434zm-4.887-.474a1.574 1.574 0 1 1 0 3.147 1.574 1.574 0 0 1 0-3.148M5.75 3c.267 0 .51.155.622.396L9.64 10.41 18.235 6.4l3.478 7.457c.4.86.03 1.879-.83 2.28l-6.74 3.143c-.86.4-1.88.03-2.281-.83l-3.478-7.457.011-.005-3.082-6.617H2.686a.686.686 0 0 1 0-1.372z"
            />
        </svg>
    );
};

export default IconPackageTrolleyRegular;
