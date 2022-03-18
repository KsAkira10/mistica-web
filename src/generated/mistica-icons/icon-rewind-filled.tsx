/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRewindFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2zm-1.051 14.264a.535.535 0 11-.759.759l-4.639-4.644a.535.535 0 010-.758l4.644-4.644a.535.535 0 11.759.759L6.688 12l4.26 4.264zm6.07.759a.535.535 0 000-.759L12.758 12l4.264-4.264a.535.535 0 000-.759.535.535 0 00-.759 0l-4.643 4.644a.535.535 0 000 .758l4.639 4.644a.532.532 0 00.379.155c.137 0 .274-.05.38-.155z"
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
                    d="M11.999 2.15c3.131 0 5.565.818 7.238 2.429 1.736 1.675 2.616 4.173 2.616 7.425s-.88 5.751-2.616 7.423c-1.673 1.611-4.11 2.429-7.238 2.429-3.13 0-5.563-.818-7.236-2.429C3.03 17.755 2.15 15.26 2.15 12.004s.88-5.75 2.616-7.425C6.436 2.968 8.867 2.15 12 2.15zm5.042 13.092a.56.56 0 00.56-.56V8.716a.56.56 0 00-.849-.479l-4.989 2.997a.57.57 0 00-.213.232V8.71a.56.56 0 00-.849-.479l-4.988 2.997a.56.56 0 00.003.96l4.989 2.97a.56.56 0 00.846-.482V11.96a.56.56 0 00.215.235l4.989 2.969a.57.57 0 00.286.078z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconRewindFilled;
