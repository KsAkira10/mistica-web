/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowLineDownLeftRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M7.47 15.543l.061-8.568a.688.688 0 00-.721-.65.684.684 0 00-.65.688l-.017 10.16c.002.043.02.083.027.127.009.04.012.082.028.12a.71.71 0 00.146.218c.066.063.139.11.22.145.04.018.082.021.123.027.04.009.08.028.123.03l9.973.045a.684.684 0 00.706-.663v-.004a.687.687 0 00-.667-.705H8.439l9.22-9.22a.687.687 0 00-.97-.969l-9.22 9.22z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowLineDownLeftRegular;
