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

const IconDigitalLibraryRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.046 14.607c-.555.59-1.348.89-2.356.89l-4.067.003v.776h6.616a.61.61 0 0 1 .602.62.61.61 0 0 1-.602.618h-6.616v.77a.61.61 0 0 1-.602.62c-2.997 0-5.254 1.175-5.35 1.225l-.003.002a.6.6 0 0 1-.236.058l-.017.006a.1.1 0 0 1-.027.008.6.6 0 0 1-.278-.07l-.003-.001c-.092-.048-2.366-1.226-5.35-1.226a.61.61 0 0 1-.602-.619v-8.33c0-.322.244-.594.555-.62.067-.005.89-.066 2.03.057V7.032c0-1 .272-1.79.804-2.352.552-.58 1.342-.874 2.353-.874l10.79-.006c1.011 0 1.801.294 2.353.874.532.56.804 1.35.804 2.35v5.224c0 .997-.269 1.793-.798 2.359M5.945 7.03v2.552a10 10 0 0 1 2.443.831c2.567-1.289 5.466-1.092 5.673-1.078h.007a.614.614 0 0 1 .555.619v4.305l4.064-.002c.67 0 1.171-.171 1.488-.51.308-.328.462-.832.462-1.499V7.024c0-.664-.154-1.162-.46-1.485-.313-.333-.817-.5-1.49-.5l-10.79.005c-.672 0-1.173.17-1.49.501-.305.322-.462.82-.462 1.485m1.846 4.456c-1.667-.812-3.524-.927-4.429-.93v7.12c1.925.09 3.505.592 4.429.959zm1.202 7.149a14 14 0 0 1 4.428-.958v-7.12c-.905.002-2.767.12-4.428.93z"
            />
        </svg>
    );
};

export default IconDigitalLibraryRegular;
