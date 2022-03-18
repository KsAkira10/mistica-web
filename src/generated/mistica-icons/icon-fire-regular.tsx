/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFireRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.699 9.756c.51.364.98.776 1.409 1.233a6.026 6.026 0 011.647 4.367 6.004 6.004 0 01-1.96 4.218c-1.752 1.616-3.684 1.9-3.766 1.91a8.051 8.051 0 01-1.809.202c-.042 0-.084-.003-.126-.006l-.084-.005c-.013 0-.025.002-.038.003a.842.842 0 01-.083.005c-.182 0-.364-.02-.549-.044-2.19-.23-4.277-1.306-5.624-3.028-3.404-4.35-.6-11.042 2.907-13.925 1.572-1.288 3.437-2.238 5.252-2.67a.597.597 0 01.6.202c.146.177.18.42.087.63-.07.166-1.712 4.096 2.137 6.908zm.288 8.925a6.538 6.538 0 01-1.773 1.162c1.379-2.218.11-5.437-1.49-6.846-.74-.652-1.622-1.131-2.482-1.353a.6.6 0 00-.7.815l.001.003c.03.077.66 1.76-.852 2.944-.25.19-.477.403-.678.636a3.317 3.317 0 00-.594 3.35 6.524 6.524 0 01-1.762-1.538C3.749 14.137 6.329 8.126 9.382 5.62a12.556 12.556 0 013.757-2.134c-.342 1.672-.429 4.846 2.863 7.255.45.322.868.686 1.232 1.078a4.836 4.836 0 011.325 3.49 4.804 4.804 0 01-1.572 3.373zm-5.77 1.706c-.005 0-.639-.113-1.21-.678-.781-.77-.82-2.031-.095-2.866.148-.17.32-.33.51-.476 1.215-.955 1.515-2.199 1.47-3.182.376.199.726.44 1.045.723 1.247 1.098 2.347 3.832 1.168 5.448a2.733 2.733 0 01-2.076 1.104.752.752 0 01-.075 0c-.065.002-.132 0-.199-.004-.108-.007-.214-.022-.32-.037l-.159-.021a.164.164 0 00-.03-.006l-.029-.005z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFireRegular;
