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

const IconTabletRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.931 20.457c.99 0 2.168-.42 2.168-2.415v-.034H5.73v.034c0 .05-.002.1-.008.151 0 0-.092.989.457 1.62.37.422 1.003.638 1.882.638l7.714-.003c.031 0 .062 0 .096.003l.061.006zM6.61 3.58c-.218.134-.88.546-.88 2.042v11.157H18.1c0-4.236-.005-11.168-.005-11.168 0-.037.003-.073.005-.112 0 0 .062-1.014-.512-1.653-.37-.406-.975-.614-1.796-.614h-7.75L7.96 3.23h-.042c-.176 0-.79.025-1.308.35zm12.672 2.028s.006 8.507.006 12.431c0 3.426-2.675 3.644-3.358 3.644-.101 0-.157-.002-.157-.002s-3.757.002-7.715.002c-3.958 0-3.52-3.641-3.52-3.641V5.622C4.538 2.193 7.292 2 7.914 2c.078 0 .123.003.123.003L15.788 2c3.81.003 3.493 3.608 3.493 3.608zm-7.375 12.896c.457 0 .731.283.731.76 0 .232-.064.417-.19.551-.13.135-.314.207-.54.207-.228 0-.413-.07-.541-.207-.127-.134-.19-.32-.19-.552 0-.476.274-.759.73-.759z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTabletRegular;
