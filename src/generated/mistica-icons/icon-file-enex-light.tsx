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

const IconFileEnexLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.742 2.156c.182 0 .353.07.481.194l5.41 5.238c.09.08.142.199.173.319.023.05.034.104.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.563-1.23-1.205l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.269v-4.18A2.27 2.27 0 014.422 8.88h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.569zm-.69.827H8.17c-.185 0-.406.204-.406.378v5.518h6.703a2.27 2.27 0 012.266 2.269v4.18a2.27 2.27 0 01-2.266 2.268H7.801l-.037 3.042c0 .182.205.373.406.373h12.44v.002c.207 0 .406-.184.406-.378V8.755h-2.568c-.98 0-1.824-.316-2.443-.915-.622-.603-.952-1.429-.952-2.384V2.983zm-.582 6.722H4.42c-.793 0-1.44.647-1.44 1.443v4.18c0 .795.644 1.442 1.44 1.442h10.05c.793 0 1.44-.647 1.44-1.443v-4.18c0-.795-.645-1.442-1.44-1.442zM7.019 11.61l1.543 2.087V11.61h.653v3.258h-.597L7.123 12.89v1.978H6.47V11.61h.549zm-1.123 0l-.056.538h-1.4v.79h1.12v.557H4.44v.832h1.48v.538H3.697V11.61h2.199zm6.227 0l-.056.538h-1.4v.79h1.12v.557h-1.12v.832h1.48v.538H9.925V11.61h2.199zm1.154 0l.647 1.076.59-1.076h.79l-1.067 1.594 1.04 1.66h-.824l-.647-1.103-.585 1.104h-.804l1.078-1.622-.994-1.633h.776zm2.602-8.448v2.291c0 .728.24 1.348.7 1.79.462.445 1.11.684 1.869.684h2.35l-4.92-4.765z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileEnexLight;
