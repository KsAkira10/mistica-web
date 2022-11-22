/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAppsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M4.308 11.232h4.616a2.311 2.311 0 002.308-2.308V4.308A2.311 2.311 0 008.924 2H4.308A2.311 2.311 0 002 4.308v4.616a2.311 2.311 0 002.308 2.308zM3.54 4.308c0-.42.348-.768.768-.768h4.616c.42 0 .768.348.768.768v4.616c0 .42-.348.768-.768.768H4.308a.773.773 0 01-.768-.768V4.308zm16.152 6.924h-4.616a2.311 2.311 0 01-2.308-2.308V4.308A2.311 2.311 0 0115.076 2h4.616A2.311 2.311 0 0122 4.308v4.616a2.311 2.311 0 01-2.308 2.308zm-5.384-6.924v4.616c0 .42.348.768.768.768h4.616c.42 0 .768-.348.768-.768V4.308a.773.773 0 00-.768-.768h-4.616a.773.773 0 00-.768.768zM8.924 22H4.308A2.311 2.311 0 012 19.692v-4.616a2.311 2.311 0 012.308-2.308h4.616a2.311 2.311 0 012.308 2.308v4.616A2.311 2.311 0 018.924 22zM3.54 15.076v4.616c0 .42.348.768.768.768h4.616c.42 0 .768-.348.768-.768v-4.616a.773.773 0 00-.768-.768H4.308a.773.773 0 00-.768.768zM19.692 22h-4.616a2.311 2.311 0 01-2.308-2.308v-4.616a2.311 2.311 0 012.308-2.308h4.616A2.311 2.311 0 0122 15.076v4.616A2.311 2.311 0 0119.692 22zm-5.384-6.924v4.616c0 .42.348.768.768.768h4.616c.42 0 .768-.348.768-.768v-4.616a.773.773 0 00-.768-.768h-4.616a.773.773 0 00-.768.768z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAppsRegular;
