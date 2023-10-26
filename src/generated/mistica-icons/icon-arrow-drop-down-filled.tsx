/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowDropDownFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.757 7.943a1.304 1.304 0 0 0-1.182-.711L3.452 7.08c-.524-.01-1 .27-1.196.698a1.03 1.03 0 0 0 .275 1.24l8.56 7.575a1.407 1.407 0 0 0 1.815 0l8.56-7.423c.356-.3.473-.798.291-1.227Z"
            />
        </svg>
    );
};

export default IconArrowDropDownFilled;
