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

const IconSubtitlesFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.072 3.5H5.928C3.76 3.5 2 5.326 2 7.564v5.915c0 2.115 1.573 3.86 3.571 4.045v2.607c0 .151.087.284.22.34a.351.351 0 0 0 .389-.08l2.752-2.848h9.14c2.168 0 3.928-1.826 3.928-4.064V7.564c.005-2.238-1.76-4.064-3.928-4.064m.713 10.906H5.571a.54.54 0 0 1-.535-.554c0-.307.238-.553.535-.553h13.22c.296 0 .534.246.534.553a.546.546 0 0 1-.54.554M5.571 11.818a.54.54 0 0 1-.535-.554c0-.307.238-.553.535-.553h13.22c.296 0 .534.246.534.553a.546.546 0 0 1-.54.554z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.072 3.5H5.928C3.76 3.5 2 5.326 2 7.564v5.915c0 2.115 1.573 3.86 3.571 4.045v2.607c0 .151.087.284.22.34a.351.351 0 0 0 .389-.08l2.752-2.848h9.14c2.168 0 3.928-1.826 3.928-4.064V7.564c.005-2.238-1.76-4.064-3.928-4.064m.713 10.906H5.571a.54.54 0 0 1-.535-.554c0-.307.238-.553.535-.553h13.22c.296 0 .534.246.534.553a.546.546 0 0 1-.54.554M5.571 11.818a.54.54 0 0 1-.535-.554c0-.307.238-.553.535-.553h13.22c.296 0 .534.246.534.553a.546.546 0 0 1-.54.554z"
                />
            </svg>
        );
    }
};

export default IconSubtitlesFilled;
