/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFunnelFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.45 2.185A.354.354 0 0020.146 2H3.852a.348.348 0 00-.304.185.395.395 0 00-.004.37l6.864 12.876v4.9c0 .92.716 1.669 1.596 1.669.88 0 1.596-.749 1.596-1.668v-4.905l6.855-12.872a.383.383 0 00-.005-.37z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFunnelFilled;
