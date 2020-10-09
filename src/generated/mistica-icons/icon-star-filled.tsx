/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconStarFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.613 21.664a2.07 2.07 0 01-1.005-.26l-3.56-1.953c-.138-.064-.252-.081-.39.008l-3.546 1.944a2.079 2.079 0 01-2.216-.128 2.218 2.218 0 01-.899-2.191l.664-4.028c.064-.317.011-.392-.18-.591L2.67 11.608a2.234 2.234 0 01-.52-2.291 2.152 2.152 0 011.714-1.468l3.896-.591c.238-.045.308-.079.457-.381L9.938 3.24a2.111 2.111 0 011.922-1.238c.826 0 1.563.476 1.924 1.238l1.731 3.655c.14.264.185.322.49.367l3.858.586c.795.12 1.45.683 1.714 1.468.272.8.07 1.689-.521 2.29l-2.711 2.732c-.311.31-.323.339-.272.714l.65 4.031a2.223 2.223 0 01-.9 2.19c-.352.253-.775.39-1.21.39z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStarFilled;
