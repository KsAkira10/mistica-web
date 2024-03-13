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

const IconAppIconRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.417 22h9.173c2.726 0 4.941-2.325 4.938-5.187v-9.63C21.528 4.325 19.313 2 16.59 2H7.417C4.695 2 2.48 4.325 2.48 7.187v9.63C2.48 19.675 4.695 22 7.417 22M3.891 7.183c0-2.041 1.582-3.702 3.526-3.702v.004h9.173c1.945 0 3.527 1.66 3.527 3.702v9.626c0 2.041-1.582 3.702-3.527 3.702H7.417c-1.944 0-3.526-1.66-3.526-3.702z"
            />
            <path
                fill={fillColor}
                d="M11.973 15.46c-2.276 0-3.843-1.881-3.843-4.142 0-2.402 1.54-4.139 3.843-4.143 2.292 0 3.828 1.737 3.828 4.143 0 2.265-1.567 4.142-3.828 4.142m0-7.104c-1.49 0-2.364 1.457-2.364 2.962 0 1.417.725 2.965 2.364 2.961 1.624 0 2.349-1.549 2.349-2.961 0-1.501-.87-2.962-2.349-2.962M17.868 17.237v-.552h-1.362c.546-.564 1.255-1.245 1.255-1.99 0-.688-.412-1.02-1.049-1.02-.339 0-.686.088-.991.252l.053.58c.218-.152.488-.28.77-.28.271 0 .546.152.546.473 0 .64-1.133 1.637-1.441 1.953v.584z"
            />
        </svg>
    );
};

export default IconAppIconRegular;
