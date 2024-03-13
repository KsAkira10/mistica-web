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

const IconMobileUsageRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22.3 8.429c0-2.099-1.585-3.827-3.619-4.074A3.58 3.58 0 0 0 15.319 2H8.878A3.576 3.576 0 0 0 5.3 5.571V18.43A3.576 3.576 0 0 0 8.878 22h6.44c1.975 0 3.578-1.6 3.578-3.571V12.47c1.929-.343 3.404-2.021 3.404-4.042m-1.077 0c0 .645-.201 1.24-.545 1.733l-1.736-1.733 1.736-1.733c.344.49.545 1.088.545 1.733m-3.577-2.986V8.43c0 .137.05.274.155.38l2.117 2.112a3.043 3.043 0 0 1-4.778-2.492c0-1.49 1.086-2.73 2.506-2.986m1.072 0c.44.078.847.252 1.2.494l-1.2 1.198zm-3.4-2.016c.775 0 1.444.416 1.82 1.033a4.1 4.1 0 0 0-1.513.754H6.762a2.15 2.15 0 0 1 2.117-1.787zm0 17.146h-6.44a2.15 2.15 0 0 1-2.117-1.787h10.674a2.15 2.15 0 0 1-2.116 1.787M6.73 6.641h7.751a4.1 4.1 0 0 0-.417 1.788 4.11 4.11 0 0 0 3.4 4.042v4.888H6.728z"
            />
        </svg>
    );
};

export default IconMobileUsageRegular;
