/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconUndoFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.087 3c-4.723 0-8.585 3.717-8.905 8.37l-.968-.976a.683.683 0 00-1 0 .7.7 0 000 1.007l2.648 2.67 2.647-2.67a.696.696 0 000-1.008.683.683 0 00-1 0l-.932.94c.324-3.894 3.58-6.926 7.514-6.926 4.15 0 7.55 3.427 7.55 7.611 0 4.185-3.4 7.611-7.55 7.611a.685.685 0 00-.68.686c0 .358.324.685.68.685C17.993 21 22 16.96 22 12.018 22 7.076 17.99 3 13.087 3z"
            />
        </svg>
    );
};

export default IconUndoFilled;
