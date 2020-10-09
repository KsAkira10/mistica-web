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

const IconCloudUploadFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.548 14.807a.338.338 0 01-.303.201h-1.854c-.076 0-.126.05-.132.126v4.594l-4.543-.008v-1.964c.008-.008.008-.008.008-.017v-2.52a.118.118 0 00-.123-.118l-1.868-.009a.312.312 0 01-.294-.204.316.316 0 01.064-.364l4.302-4.544a.313.313 0 01.233-.1c.09 0 .17.041.238.1l4.205 4.46c.09.103.114.238.067.367m.59-7.533c-1.176-3.73-5.265-3.924-6.086-3.924-1.062 0-6.294.297-6.4 6.092-1.054.39-2.502 1.407-2.502 4.02 0 3.188 2.18 4.33 4.23 4.33l2.515-.016v2.039c0 .423.361.762.798.762h4.591c.435 0 .799-.34.799-.754v-2.08l1.58-.01c.862 0 5.173-.254 5.173-5.246 0-4.364-3.283-5.1-4.697-5.213"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCloudUploadFilled;
