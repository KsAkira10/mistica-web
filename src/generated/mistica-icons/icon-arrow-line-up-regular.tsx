'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowLineUpRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.625 19.315V6.277l6.228 5.885a.69.69 0 0 0 .97-.05.684.684 0 0 0-.027-.947L12.41 4.187c-.032-.03-.073-.046-.11-.07-.033-.024-.065-.051-.104-.067A.7.7 0 0 0 11.94 4h-.005a.8.8 0 0 0-.253.052c-.04.016-.073.044-.107.069-.034.022-.075.036-.107.066l-7.252 6.852a.684.684 0 0 0-.027.97c.26.276.694.287.97.027l6.095-5.76v13.039a.687.687 0 0 0 1.371 0"
            />
        </svg>
    );
};

export default IconArrowLineUpRegular;
