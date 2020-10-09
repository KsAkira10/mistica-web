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

const IconFolderFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.406 6.038h-8.563v-.991a1.264 1.264 0 00-1.272-1.255H3.255A1.262 1.262 0 002 5.047v13.795c.006.692.563 1.25 1.255 1.255h17.151a1.264 1.264 0 001.28-1.247V7.293a1.264 1.264 0 00-1.272-1.255h-.008z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFolderFilled;
