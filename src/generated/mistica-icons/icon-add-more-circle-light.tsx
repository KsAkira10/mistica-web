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

const IconAddMoreCircleLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.98 11.464a.5.5 0 010 .997h-5.485v5.498a.5.5 0 01-.997 0v-5.495H6.02a.5.5 0 010-.997h5.475v-5.43a.5.5 0 01.997 0v5.427h5.488zm-5.45 11.529C14.984 22.948 23 22.023 23 12.03c0-4.327-1.483-7.452-4.399-9.279-2.384-1.495-5.075-1.717-6.123-1.741-.266-.007-.574-.01-.87-.01h-.23c-1.041.01-3.715.187-6.061 1.666-2.869 1.8-4.316 4.928-4.316 9.295 0 4.372 1.461 7.513 4.354 9.333 2.37 1.493 5.06 1.687 6.109 1.704.12.004.239.004.358.004.246-.004.492-.004.707-.01zM12.498.01C14.848.065 24 .994 24 12.03c0 11.062-9.159 11.919-11.45 11.963a47.16 47.16 0 01-.728.007c-.123 0-.249 0-.372-.003C9.04 23.962 0 23.092 0 11.962 0 .847 8.957.02 11.365 0h.239c.307 0 .621.003.895.01z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreCircleLight;
