'use client';
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

const IconPenFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m20.14 8.805.323-.34c1.406-1.477 1.406-3.881 0-5.358a3.493 3.493 0 0 0-5.102 0l-.324.34zm-15.597 5.66 9.762-10.25 5.101 5.355-9.762 10.25zm-2.05 6.627 1.455-5.718 4.832 5.07-5.445 1.532a.67.67 0 0 1-.663-.188.75.75 0 0 1-.18-.696"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.348 3.404c.08.078.173.17.249.249 1.339 1.392 2.011 3.625-.12 5.728L9.234 20.558l-.01.007-.01.007q-.003.002-.005.007l-.005.007q-.031.028-.067.046l-.034.02-.007.006q-.007.006-.016.009a.6.6 0 0 1-.308.095l-.017-.003-.016-.002-5.866 1.075a.612.612 0 0 1-.535-.157.6.6 0 0 1-.176-.524l.94-6.095a.3.3 0 0 1 .017-.052q.007-.014.012-.032l.022-.067a.6.6 0 0 1 .123-.182l11.311-11.19c2.154-2.132 4.39-1.465 5.76-.13M13.905 5.91l-9.336 9.24 1.686 1.667 9.336-9.238zM7.112 17.667l1.664 1.644 9.314-9.26-1.639-1.622zm-3.37 1.221 1.373 1.342 2.398-.468-3.384-3.347z"
                />
            </svg>
        );
    }
};

export default IconPenFilled;
