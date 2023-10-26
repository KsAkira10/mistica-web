/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDiamondFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.118 2.155h-5.38L7.37 7.298l3.748-5.143Zm7.143 0H12.87l3.75 5.143 1.642-5.143Zm.76.697-1.595 5.003h4.415l-2.82-5.003ZM17.126 8.8h4.613l-8.38 11.852 3.767-11.852Zm-.975 0H7.847l4.15 13.042L16.153 8.8Zm-8.017-.944 3.863-5.305 3.854 5.305H8.135Zm-5.98 0 2.823-5.01 1.594 5.01H2.155Zm4.714.944H2.26l8.378 11.855L6.869 8.799Z"
            />
        </svg>
    );
};

export default IconDiamondFilled;
