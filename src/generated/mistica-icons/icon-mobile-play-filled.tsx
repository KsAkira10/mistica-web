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

const IconMobilePlayFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M6.958 13.785v-3.297l2.88 1.647-2.88 1.65zm4.4-2.171L6.654 8.922a.605.605 0 00-.608 0 .604.604 0 00-.305.52v5.385c0 .215.115.414.305.52a.594.594 0 00.305.082c.107 0 .21-.025.306-.081l4.706-2.692a.605.605 0 00.305-.524.61.61 0 00-.308-.518zm-3.276 5.19c3.215 0 4.717-1.487 4.717-4.664 0-3.184-1.502-4.672-4.717-4.672-3.208 0-4.7 1.488-4.7 4.672 0 3.177 1.492 4.664 4.7 4.664zM20.899 3.11c.642.644.95 1.535.95 2.742v12.302c0 1.213-.316 2.115-.966 2.751-.642.636-1.544.941-2.762.941h-6.21c-1.219 0-2.118-.305-2.768-.932-.574-.572-.885-1.342-.95-2.365v-.546c-.039 0-.072.009-.114.009-3.743 0-5.919-1.874-5.919-5.872 0-4.005 2.176-5.88 5.919-5.88.039 0 .073.01.106.01v-.418c0-1.19.308-2.076.958-2.726.65-.652 1.552-.966 2.768-.966h6.21c1.218 0 2.129.314 2.778.95zm-6.66 15.658c.184.188.453.286.778.286s.594-.098.779-.286c.182-.185.274-.44.274-.76 0-.655-.395-1.047-1.053-1.047-.658 0-1.053.392-1.053 1.048 0 .316.092.574.274.759z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobilePlayFilled;
