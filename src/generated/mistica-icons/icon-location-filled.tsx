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

const IconLocationFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.328 2c4.367.014 6.963 2.644 6.952 7.042-.014 4.28-5.347 11.154-6.711 12.527a.407.407 0 01-.577 0C10.633 20.202 5.322 13.322 5.333 9c.006-2.17.647-3.958 1.855-5.165C8.387 2.633 10.15 2 12.294 2h.034zm2.52 6.597c0-1.566-.935-2.499-2.498-2.499-1.563 0-2.498.936-2.498 2.499 0 1.565.935 2.498 2.498 2.498 1.566 0 2.499-.933 2.499-2.498z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLocationFilled;
