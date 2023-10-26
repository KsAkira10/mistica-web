/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLightningRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.697 11.023c.21.053.375.216.434.428a.627.627 0 0 1-.151.6L8.694 21.67a.584.584 0 0 1-.748.078.618.618 0 0 1-.23-.736l2.701-7.05-4.112-1.018a.6.6 0 0 1-.431-.423.626.626 0 0 1 .142-.596l8.916-9.572a.582.582 0 0 1 .754-.09c.24.16.336.474.23.746l-2.72 6.905 4.501 1.109Zm-5.919 2.731-1.893 4.944 6.504-6.74-4.146-1.022a.595.595 0 0 1-.389-.316.633.633 0 0 1-.022-.51l1.815-4.605L7.597 12l3.767.932a.6.6 0 0 1 .39.314.638.638 0 0 1 .024.507Z"
            />
        </svg>
    );
};

export default IconLightningRegular;
