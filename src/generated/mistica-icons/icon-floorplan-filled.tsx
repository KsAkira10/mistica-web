/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFloorplanFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.292 13.113a.716.716 0 0 1 0-1.037.716.716 0 0 1 1.037 0l3.517 3.517a.746.746 0 0 0 .926-.11.716.716 0 0 0 0-1.038l-3.48-3.48v-8.59h-6.85v9.071H8.665a.57.57 0 0 1-.556-.555.57.57 0 0 1 .556-.555h1.666V2.375H2v7.96h2.592a.57.57 0 0 1 .555.556.57.57 0 0 1-.555.555H2V21.63h16.291v-6.517l-1.999-2Z"
            />
        </svg>
    );
};

export default IconFloorplanFilled;
