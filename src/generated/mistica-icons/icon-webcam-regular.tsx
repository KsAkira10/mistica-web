'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconWebcamRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12 2.235c-4.29 0-7.767 3.485-7.767 7.783S7.71 17.8 12 17.8s7.767-3.484 7.767-7.782S16.29 2.235 12 2.235m-9 7.783C3 5.038 7.03 1 12 1s9 4.037 9 9.018c0 4.98-4.03 9.017-9 9.017s-9-4.037-9-9.017m9-2.533a2.53 2.53 0 0 1 2.527 2.533A2.53 2.53 0 0 1 12 12.55a2.53 2.53 0 0 1-2.527-2.532A2.53 2.53 0 0 1 12 7.485m-3.76 2.533A3.764 3.764 0 0 0 12 13.785a3.764 3.764 0 0 0 3.76-3.767A3.764 3.764 0 0 0 12 6.25a3.764 3.764 0 0 0-3.76 3.768m-.802 11.364c0-.34.276-.617.617-.617h7.89a.617.617 0 0 1 0 1.235h-7.89a.617.617 0 0 1-.617-.618"
            />
        </svg>
    );
};

export default IconWebcamRegular;
