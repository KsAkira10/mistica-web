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

const IconImageFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.839 13.408a.626.626 0 00-.115-.872l-3.246-2.507a.61.61 0 00-.757.009l-3.711 2.977-.896-.854a.61.61 0 00-.816-.025l-5.277 4.44a.627.627 0 00-.078.876.608.608 0 00.865.082l4.86-4.087 3.378 3.213a.61.61 0 00.869-.026.628.628 0 00-.026-.88l-1.969-1.873 3.196-2.566 2.866 2.213a.61.61 0 00.857-.12zM7.046 6.606c-1.243 0-2.255 1.023-2.255 2.278a2.267 2.267 0 002.255 2.277c1.244 0 2.255-1.022 2.255-2.277 0-1.255-1.011-2.278-2.255-2.278zm13.367-2.084c.743 0 1.42.583 1.42 1.224v12.317c0 .641-.677 1.224-1.42 1.224H3.567c-.756 0-1.417-.574-1.417-1.224l.003-12.317c0-.652.664-1.224 1.417-1.224h16.843zM7.046 9.92a1.031 1.031 0 01-1.025-1.033c0-.572.46-1.034 1.025-1.034a1.035 1.035 0 010 2.067z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconImageFilled;
