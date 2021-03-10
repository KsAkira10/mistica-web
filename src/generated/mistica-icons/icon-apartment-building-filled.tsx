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

const IconApartmentBuildingFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.144 7.625a.407.407 0 01-.406.409H13.15a.409.409 0 01-.406-.41V5.009c0-.226.182-.409.406-.409h2.588c.224 0 .406.183.406.41v2.616zm0 5.137a.407.407 0 01-.406.409H13.15a.409.409 0 01-.406-.41v-2.618c0-.227.182-.41.406-.41h2.588a.41.41 0 01.406.41v2.619zm-5.117-5.137a.407.407 0 01-.407.409H8.032a.409.409 0 01-.406-.41V5.009c0-.226.182-.409.406-.409h2.588c.225 0 .407.183.407.41v2.616zm0 5.137a.407.407 0 01-.407.409H8.032a.409.409 0 01-.406-.41v-2.618c0-.227.182-.41.406-.41h2.588a.41.41 0 01.407.41v2.619zM18.07 2H5.741c-.636 0-1.216.574-1.216 1.202v17.283c0 .641.569 1.201 1.216 1.201h4.05V16.18c0-.227.182-.409.406-.409h3.42c.225 0 .407.182.407.41v5.506h4.05c.647 0 1.216-.563 1.216-1.201V3.202C19.287 2.574 18.707 2 18.07 2z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconApartmentBuildingFilled;
