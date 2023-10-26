/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSmileyHappyFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12.001c0-6.706-3.627-9.846-9.846-9.846-6.218 0-9.84 3.14-9.84 9.846 0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84Zm-4.689 1.77.003-.003a.613.613 0 1 1 .913.821c-.09.101-2.269 2.474-6.003 2.516H12.044l-.133.002c-.736 0-3.893-.142-5.983-2.481a.613.613 0 1 1 .916-.818c1.918 2.146 5.044 2.073 5.183 2.07h.005c3.143-.033 5.04-2.022 5.12-2.107Zm-8.14-3.224c-.356 0-.652-.115-.86-.322-.201-.207-.305-.493-.305-.846 0-.723.445-1.17 1.165-1.17.717 0 1.165.447 1.165 1.17 0 .353-.1.639-.305.846-.207.21-.504.322-.86.322Zm6.832-.325c-.207.213-.504.325-.86.325s-.652-.115-.857-.325c-.205-.207-.308-.493-.308-.846 0-.722.445-1.17 1.165-1.17.717 0 1.165.448 1.165 1.17 0 .353-.103.639-.305.846Z"
            />
        </svg>
    );
};

export default IconSmileyHappyFilled;
