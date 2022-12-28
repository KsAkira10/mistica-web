/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMicrochipFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.235 12.614a.605.605 0 000-1.21h-2.77v-1.21h2.77a.606.606 0 000-1.213h-2.77V6.614c0-.555-.526-1.06-1.106-1.06h-2.325V2.766a.607.607 0 00-1.213 0V5.55h-1.21V2.768a.604.604 0 10-1.21 0v2.784h-1.21V2.768a.606.606 0 00-1.21 0v2.784H6.653c-.58 0-1.107.504-1.107 1.059v2.367H2.765a.606.606 0 000 1.213h2.779v1.21H2.765a.605.605 0 000 1.21h2.779v1.21H2.765a.606.606 0 000 1.213h2.779v2.392c0 .558.515 1.05 1.106 1.05h2.328v2.762a.605.605 0 001.21 0v-2.761h1.21v2.761a.606.606 0 001.213 0v-2.761h1.21v2.761a.605.605 0 001.21 0v-2.761h2.325c.591 0 1.106-.49 1.106-1.05v-2.393h2.77a.606.606 0 000-1.213h-2.77v-1.21l2.773.003z"
            />
        </svg>
    );
};

export default IconMicrochipFilled;
