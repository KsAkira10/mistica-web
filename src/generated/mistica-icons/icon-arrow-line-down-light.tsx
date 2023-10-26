/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowLineDownLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.62 4.471v14.011l-6.783-6.448a.47.47 0 0 0-.829.208.477.477 0 0 0 .19.473l7.573 7.201a.128.128 0 0 0 .066.048.41.41 0 0 0 .075 0 .462.462 0 0 0 .357 0 .41.41 0 0 0 .075 0 .261.261 0 0 0 .075-.048l7.43-7.069a.453.453 0 0 0 .15-.35.46.46 0 0 0-.79-.33l-6.65 6.315V4.472a.47.47 0 0 0-.47-.472.472.472 0 0 0-.469.471c.003 0 .003 0 0 0Z"
            />
        </svg>
    );
};

export default IconArrowLineDownLight;
