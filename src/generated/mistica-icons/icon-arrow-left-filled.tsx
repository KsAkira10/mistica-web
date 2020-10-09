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

const IconArrowLeftFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.826 2.011c.152 0 .3.028.44.084.434.177.7.602.695 1.107l.003 3.65a.21.21 0 00.039.056l6.882.02c.616-.01 1.07.145 1.384.467.314.322.46.776.442 1.392v6.042c.009.42-.03 1.025-.436 1.446-.407.42-1.009.481-1.426.487h-.009l-6.711-.003a.453.453 0 00-.157.053l.006 3.563v.003c-.006.857-.415 1.149-.659 1.247-.417.168-.899.014-1.322-.42L2.34 12.492c-.087-.084-.336-.33-.333-.69a.82.82 0 01.274-.593l8.48-8.706c.302-.32.691-.493 1.066-.493z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowLeftFilled;
