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

const IconFileEnexFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.51 2.025c.23 0 .445.087.61.244l5.3 5.132a.86.86 0 01.219.386c.03.073.047.154.047.238V20.33c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.409-.647-1.409-1.384l.034-2.77h-2.3A2.427 2.427 0 012 15.134V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.726.673-1.384 1.41-1.384h7.414zM14.6 9.83H4.42a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21H14.6a1.21 1.21 0 001.207-1.21V11.04c0-.666-.54-1.21-1.208-1.21zm-7.454 1.656l1.543 2.086v-2.086h.653v3.257h-.597L7.25 12.765v1.977h-.652v-3.257h.549zm-1.124 0l-.056.537h-1.4v.79h1.12v.558h-1.12v.832h1.482v.537H3.824v-3.254h2.198zm6.227 0l-.056.537h-1.4v.79h1.12v.558h-1.12v.832h1.481v.537H10.05v-3.254h2.2zm1.154 0l.647 1.075.591-1.075h.79l-1.067 1.593 1.04 1.661h-.824l-.647-1.103-.586 1.103h-.804l1.079-1.621-.995-1.633h.776zm2.446-7.79V5.46c0 .659.215 1.213.622 1.608.414.4.997.61 1.691.61h1.798l-4.111-3.982z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileEnexFilled;
