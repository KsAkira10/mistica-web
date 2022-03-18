/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBroadbandFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.193 6.672c0 1.653-.42 2.897-1.246 3.7a.561.561 0 00.773.813l.008-.008c1.053-1.023 1.588-2.538 1.588-4.505 0-1.972-.537-3.493-1.596-4.515a.561.561 0 00-.779.807c.83.804 1.252 2.05 1.252 3.708zM9.692 4.364a.562.562 0 01.765-.82l.014.014c.736.711 1.109 1.759 1.109 3.114 0 1.35-.373 2.395-1.104 3.107a.561.561 0 01-.781-.804c.507-.493.764-1.266.764-2.3 0-1.033-.257-1.818-.767-2.31zm12.003 14.034v-1.373c0-1.025-.278-1.834-.827-2.4-.568-.588-1.397-.888-2.467-.888H7.759V6.672a.562.562 0 00-.56-.56.562.562 0 00-.56.56v7.062H5.29c-1.07 0-1.899.297-2.467.888-.547.569-.824 1.375-.824 2.403v1.373c0 1.028.277 1.835.824 2.403.568.589 1.397.888 2.467.888h13.112c1.07 0 1.9-.297 2.468-.888.546-.568.824-1.375.824-2.403zm-15.729.134c.166-.168.25-.397.25-.686 0-.583-.364-.944-.95-.944-.585 0-.95.361-.95.944 0 .289.085.518.25.686.165.168.409.258.7.258s.532-.09.7-.258zm2.99-.686c0 .289-.085.518-.25.686-.165.168-.41.258-.7.258-.292 0-.535-.09-.7-.258-.166-.168-.25-.397-.25-.686 0-.583.364-.944.95-.944.585 0 .95.361.95.944z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBroadbandFilled;
