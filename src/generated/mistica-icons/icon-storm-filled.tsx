/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconStormFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.072 2.15c.82 0 4.865.19 6.109 3.863 2.325.227 4.655 1.714 4.652 5.31 0 3.956-2.834 5.362-5.269 5.362l-.974.008-6.776 5.062a.357.357 0 01-.233.081.42.42 0 01-.252-.09.422.422 0 01-.112-.498l1.826-4.204-3.546-.28C4.111 16.62 2.15 15.57 2.15 12.278c0-2.583 1.378-3.647 2.45-4.09.194-5.748 5.407-6.039 6.472-6.039zm-1.5 18.017l6.326-4.897a.44.44 0 00.095-.409.415.415 0 00-.3-.29s-3.028-.603-3.061-.707c-.042-.131 1.778-4.711 1.778-4.711.065-.182 0-.4-.168-.507a.398.398 0 00-.507.075l-5.938 6.591a.414.414 0 00-.09.407c.04.14.149.246.289.283 0 0 2.994.663 3.061.705.021.016.006.045-.011.078a.346.346 0 00-.022.049l-1.451 3.333z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStormFilled;
