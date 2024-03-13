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

const IconDiamondLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.838 8.347-.003.01a.1.1 0 0 1-.012.035.4.4 0 0 1-.056.162l-.004.015q0 .006-.004.013l-9.428 13.087a.2.2 0 0 1-.041.036q-.014.01-.027.02c-.017.017-.03.03-.05.045a.4.4 0 0 1-.221.07.4.4 0 0 1-.219-.07l-.05-.045-.028-.023q-.02-.014-.037-.033L2.23 8.582q-.006-.007-.007-.016l-.005-.012a.4.4 0 0 1-.056-.162l-.004-.016-.004-.02-.003-.012a.4.4 0 0 1 .05-.185q0-.008.003-.017l3.317-5.778.01-.009.01-.008a.37.37 0 0 1 .165-.143l.018-.011q.014-.011.032-.017a.3.3 0 0 1 .06-.007l.03-.002.016-.005q.008-.005.02-.006h12.224q.01 0 .02.006l.014.005.03.002q.03-.001.06.007.017.006.032.017.009.006.018.01a.4.4 0 0 1 .165.144l.008.005q.008.004.012.012l3.317 5.781.002.009q0 .005.003.008a.36.36 0 0 1 .05.185M7.901 7.453l3.317-4.476H6.45zm8.9.482h3.91l-2.5-4.35zm-.267.82L13.202 19.05l7.414-10.294zm-5.75 10.295L7.45 8.756H3.37zm6.753-16.073h-4.77l3.322 4.476zM8.574 7.935l.002-.003h6.839l-3.42-4.61-3.419 4.61h-.002zm3.42 12.154 3.67-11.333h-7.34zM5.78 3.582l-2.502 4.35h3.91z"
            />
        </svg>
    );
};

export default IconDiamondLight;
