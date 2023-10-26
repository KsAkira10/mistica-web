/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDisabledFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m20.676 18.47-1.108-4.072c-.251-.929-1.212-1.659-2.193-1.659H14.61l-1.7-6.123a.755.755 0 0 0-.176-.298A2.407 2.407 0 0 0 11.271 2a2.41 2.41 0 0 0-2.406 2.408c0 .763.36 1.44.914 1.886-.748.36-1.283 1.133-1.283 2.005V12c0 1.204 1.018 2.223 2.22 2.223h4.727a5.372 5.372 0 0 1-5.285 6.294 5.372 5.372 0 0 1-5.366-5.37c0-1.9.971-3.62 2.6-4.602a.737.737 0 0 0 .251-1.014.736.736 0 0 0-1.013-.251 6.799 6.799 0 0 0-3.32 5.872C3.31 18.929 6.379 22 10.153 22c3.775 0 6.844-3.071 6.844-6.848 0-.313-.024-.621-.062-.925h.43c.318 0 .688.275.768.564l1.108 4.072a.738.738 0 0 0 .91.516.746.746 0 0 0 .525-.91Z"
            />
        </svg>
    );
};

export default IconDisabledFilled;
