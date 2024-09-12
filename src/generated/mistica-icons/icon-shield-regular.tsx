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

const IconShieldRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.738 21.782a.6.6 0 0 0 .515.003c.745-.355 7.294-3.577 7.905-7.129.455-2.68.449-8.795.448-9.322v-.028a.63.63 0 0 0-.227-.462.63.63 0 0 0-.501-.137c-1.625.255-2.476-.311-3.552-1.034-1.059-.711-2.26-1.515-4.325-1.518h-.008c-2.065 0-3.266.804-4.328 1.515l-.014.01c-1.069.718-1.914 1.286-3.51 1.03a.61.61 0 0 0-.52.109.62.62 0 0 0-.236.484v.028c0 .524-.006 6.642.457 9.323.61 3.551 7.15 6.773 7.896 7.128m-6.703-7.341c-.367-2.123-.429-6.715-.437-8.451 1.661.1 2.711-.605 3.718-1.28l.024-.017c1.006-.675 1.958-1.314 3.656-1.314H12c1.7.003 2.65.639 3.656 1.314 1.011.678 2.064 1.378 3.736 1.294-.008 1.737-.067 6.328-.428 8.454-.41 2.372-4.944 5.09-6.97 6.1-2.024-1.008-6.551-3.725-6.96-6.1"
            />
        </svg>
    );
};

export default IconShieldRegular;
