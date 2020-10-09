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

const IconPoundRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12 20.639c5.731 0 8.639-2.905 8.639-8.633 0-5.731-2.905-8.639-8.639-8.639-5.728 0-8.633 2.908-8.633 8.639 0 5.728 2.905 8.633 8.633 8.633zM12 2.16c6.44 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.44 0-9.84-3.403-9.84-9.84C2.16 5.563 5.563 2.16 12 2.16zm2.843 14.387c.222 0 .404.182.404.403v.431c0 .224-.18.404-.404.404H8.675a.4.4 0 01-.358-.219.914.914 0 01-.093-.423c0-.445.233-.672.698-1.117.871-.84 1.04-1.437 1.04-2.183 0-.481-.077-.963-.245-1.526H8.72a.402.402 0 01-.403-.403v-.272c0-.213.165-.387.375-.404l.661-.044a6.852 6.852 0 01-.302-1.93c0-2.16 1.291-3.4 3.54-3.4.572 0 1.496.08 2.224.304.169.054.283.21.283.387v.367a.402.402 0 01-.476.398 10.495 10.495 0 00-1.871-.202c-1.639 0-2.403.678-2.403 2.134 0 .642.154 1.286.325 1.86h2.476c.224 0 .403.182.403.404v.398c0 .224-.18.403-.403.403h-2.11c.132.526.2 1.042.2 1.54 0 1.062-.297 1.818-1.115 2.69h4.72z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPoundRegular;
