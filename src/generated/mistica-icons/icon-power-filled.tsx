/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPowerFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.188 12.735a.83.83 0 00.814.836c.446 0 .814-.379.814-.84V1.835A.83.83 0 0012.002 1a.83.83 0 00-.814.836v10.899zm-9.188 0C2 18.393 6.491 23 12.002 23 17.51 23 22 18.389 22 12.735c0-4.444-2.773-8.382-6.895-9.764-.407-.123-.9.128-1.02.546-.12.418.124.924.531 1.047 3.429 1.175 5.756 4.44 5.756 8.17 0 4.74-3.755 8.594-8.37 8.594-4.615 0-8.37-3.859-8.37-8.593 0-3.727 2.328-7 5.756-8.171.45-.123.651-.63.531-1.047-.12-.462-.612-.669-1.02-.546C4.778 4.353 2 8.291 2 12.735z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.234 4.579c-1.672-1.611-4.107-2.429-7.238-2.429-3.132 0-5.563.818-7.233 2.429C3.03 6.254 2.15 8.749 2.15 12.004s.88 5.751 2.613 7.423C6.436 21.038 8.87 21.856 12 21.856c3.128 0 5.565-.818 7.238-2.429 1.736-1.672 2.616-4.17 2.616-7.423 0-3.252-.882-5.75-2.62-7.425zm-7.745.308c0-.308.252-.56.56-.56.308 0 .56.252.56.56v4.098c0 .308-.252.56-.56.56a.562.562 0 01-.56-.56V4.887zm.585 13.21c1.922 0 3.42-.504 4.457-1.504 1.078-1.04 1.625-2.577 1.622-4.577 0-1.681-.39-3.042-1.16-4.05-.76-.992-1.868-1.628-3.302-1.892a.56.56 0 10-.202 1.104c2.384.437 3.543 2.02 3.543 4.84 0 1.678-.431 2.947-1.28 3.765-.82.79-2.059 1.19-3.678 1.19-1.619 0-2.857-.4-3.678-1.19-.848-.818-1.28-2.084-1.28-3.765 0-2.781 1.126-4.358 3.446-4.82a.559.559 0 10-.219-1.098c-1.398.277-2.479.921-3.218 1.91-.748 1.003-1.126 2.35-1.126 4.008 0 1.995.546 3.535 1.621 4.572 1.037 1 2.533 1.507 4.454 1.507z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPowerFilled;
