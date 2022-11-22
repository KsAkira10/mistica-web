/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLandlineFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.482 19.396a.682.682 0 01-.984-.028l-1.796-1.956a1.688 1.688 0 00-1.216-.51c-.463 0-.9.188-1.23.523l-3.47 3.629A3.075 3.075 0 019.568 22a3.076 3.076 0 01-2.214-.946 3.254 3.254 0 01-.918-2.283c0-.473.102-.928.285-1.346a3.435 3.435 0 01-1.862-.974l-1.065-1.088c-.606-.62-.65-1.598-.093-2.177l1.595-1.663c.556-.579 1.5-.546 2.111.074l1.114 1.139c.753.767 2.379.197 3.871-1.355.766-.8 1.3-1.654 1.51-2.407.13-.473.196-1.135-.245-1.585L12.544 6.25c-.606-.62-.65-1.594-.094-2.172l1.595-1.663c.276-.285.65-.432 1.056-.413a1.59 1.59 0 011.056.486l1.064 1.089c2.063 2.108.971 6.22-2.66 10.004-1.777 1.85-3.639 3.11-5.38 3.642a6.706 6.706 0 01-.745.18l-.107.11a1.8 1.8 0 00-.499 1.258c0 .478.183.928.508 1.268a1.705 1.705 0 002.46 0l3.47-3.629a3.064 3.064 0 014.432-.004l1.809 1.97a.735.735 0 01-.027 1.02z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLandlineFilled;
