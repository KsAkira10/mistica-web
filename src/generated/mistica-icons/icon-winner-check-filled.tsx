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

const IconWinnerCheckFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m5.591 15.362-1.623 2.942c-.111.189-.077.416.039.604.15.189.376.266.565.189l3.058-.942.942 3.434a.63.63 0 0 0 .454.416h.077a.49.49 0 0 0 .454-.3l1.962-3.546c-2.343-.077-4.42-1.135-5.928-2.797m12.754 0a8.5 8.5 0 0 1-6.039 2.793l2.077 3.546c.112.188.3.265.455.265h.077c.227-.039.415-.188.415-.415l.942-3.435 3.13.942c.228.077.416 0 .566-.188a.52.52 0 0 0 .039-.604zM12.007 2C7.857 2 4.46 5.396 4.46 9.546S7.857 17.1 12.007 17.1s7.545-3.396 7.545-7.545c0-4.15-3.357-7.556-7.545-7.556m3.811 5.097-5.546 5.623-2.68-2.681a.546.546 0 0 1 0-.793.546.546 0 0 1 .791 0l1.89 1.89 4.753-4.832a.546.546 0 0 1 .792 0 .546.546 0 0 1 0 .793"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m5.591 15.362-1.623 2.942c-.111.189-.077.416.039.604.15.189.376.266.565.189l3.058-.942.942 3.434a.63.63 0 0 0 .454.416h.077a.49.49 0 0 0 .454-.3l1.962-3.546c-2.343-.077-4.42-1.135-5.928-2.797m12.754 0a8.5 8.5 0 0 1-6.039 2.793l2.077 3.546c.112.188.3.265.455.265h.077c.227-.039.415-.188.415-.415l.942-3.435 3.13.942c.228.077.416 0 .566-.188a.52.52 0 0 0 .039-.604zM12.007 2C7.857 2 4.46 5.396 4.46 9.546S7.857 17.1 12.007 17.1s7.545-3.396 7.545-7.545c0-4.15-3.357-7.556-7.545-7.556m3.811 5.097-5.546 5.623-2.68-2.681a.546.546 0 0 1 0-.793.546.546 0 0 1 .791 0l1.89 1.89 4.753-4.832a.546.546 0 0 1 .792 0 .546.546 0 0 1 0 .793"
                />
            </svg>
        );
    }
};

export default IconWinnerCheckFilled;
