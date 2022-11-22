/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowLineUpRightLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.867 7.775l.039 9.356a.47.47 0 00.732.44.477.477 0 00.201-.47l-.064-10.447a.128.128 0 00-.013-.08.414.414 0 00-.053-.053.463.463 0 00-.253-.253.416.416 0 00-.053-.053.264.264 0 00-.087-.02L7.064 6.179a.454.454 0 00-.355.142.46.46 0 00.326.792h9.169L6.297 17.02a.47.47 0 00-.002.665.472.472 0 00.665-.002l9.907-9.907z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowLineUpRightLight;
