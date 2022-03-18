/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCodeRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.686 5.929c0-.774-.652-1.404-1.456-1.404H3.46c-.807 0-1.46.63-1.46 1.404v11.958c0 .773.655 1.403 1.46 1.403h16.77c.804 0 1.456-.63 1.456-1.403V5.929zM3.46 5.707a.222.222 0 00-.227.219v1.73H20.46v-1.73c0-.12-.1-.219-.226-.219H3.459zm16.77 12.398a.222.222 0 00.228-.218V8.842H3.23v9.042c0 .12.103.218.227.218H20.23v.003zM6.158 7.15a.558.558 0 01-.569-.55c0-.304.255-.548.569-.548.316 0 .568.246.568.549a.558.558 0 01-.568.549zm1.14-.55c0 .303.252.55.569.55a.556.556 0 00.568-.55.558.558 0 00-.568-.548.558.558 0 00-.57.549zm-2.852.55a.558.558 0 01-.568-.55c0-.304.252-.548.568-.548.317 0 .569.246.569.549a.556.556 0 01-.569.549zm4.398 4.77a.54.54 0 00.04-.781.585.585 0 00-.81-.037l-2.34 2.045a.54.54 0 00-.187.406.54.54 0 00.185.406l2.339 2.082c.11.1.252.148.39.148a.579.579 0 00.42-.176.539.539 0 00-.031-.782l-1.88-1.672 1.874-1.639zm6.684-.82l2.339 2.044a.545.545 0 01.187.406.549.549 0 01-.185.41l-2.339 2.08a.59.59 0 01-.81-.03.539.539 0 01.032-.782l1.88-1.672-1.875-1.639a.539.539 0 01-.039-.781.59.59 0 01.81-.037zm-2.255.66a.544.544 0 00-.289-.73.58.58 0 00-.759.282l-1.896 4.079a.542.542 0 00.288.728.63.63 0 00.236.048.578.578 0 00.523-.328l1.897-4.079z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCodeRegular;
