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

const IconDisableRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M1 12.003C1 4.51 5.048 1 11.997 1 18.947 1 23 4.51 23 12.003S18.946 23 11.997 23C5.047 23 1 19.497 1 12.003m10.997-9.629c-6.474 0-9.623 3.15-9.623 9.63 0 2.914.645 5.149 1.938 6.733L18.733 4.311c-1.584-1.293-3.818-1.938-6.736-1.938m0 19.252c6.477 0 9.629-3.15 9.629-9.62 0-2.905-.639-5.137-1.922-6.717L5.285 19.707c1.581 1.28 3.81 1.919 6.712 1.919"
            />
        </svg>
    );
};

export default IconDisableRegular;
