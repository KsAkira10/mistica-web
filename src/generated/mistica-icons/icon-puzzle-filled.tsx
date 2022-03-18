/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPuzzleFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.182 21.416H3.614c-.801 0-1.454-.67-1.454-1.49v-2.847a.65.65 0 01.207-.476.591.591 0 01.485-.154c.12.014.224.023.297.025h.036c.053 0 .112 0 .163-.005a2.76 2.76 0 00.857-.14c.991-.317 1.49-1.098 1.49-2.33 0-1.236-.496-2.02-1.48-2.329-.386-.137-.727-.15-.84-.156H3.11c-.056.002-.15.005-.266.02a.604.604 0 01-.479-.158.637.637 0 01-.204-.473v-2.54c0-.824.653-1.49 1.454-1.49H6.27a5.655 5.655 0 01-.03-.59c0-2.719 1.803-3.71 3.49-3.733h.29c1.715.048 3.533 1.056 3.533 3.75 0 .197-.011.387-.03.57h2.663c.798 0 1.446.669 1.446 1.49v1.907c.168-.02.308-.022.403-.022h.3c1.697.05 3.512 1.061 3.512 3.75 0 2.72-1.893 3.712-3.512 3.734a3.319 3.319 0 01-.703-.022v2.216c0 .823-.65 1.493-1.449 1.493z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPuzzleFilled;
