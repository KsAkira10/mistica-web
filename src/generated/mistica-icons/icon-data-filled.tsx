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

const IconDataFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M7.58 5.373C6.364 5.023 5.622 4.549 5.426 4c0-.008 0-.008-.009-.02.196-.546.936-1.03 2.143-1.38 1.283-.368 2.978-.575 4.776-.575 1.798 0 3.493.207 4.768.574 1.274.367 1.994.852 2.154 1.426 0 0-.012.009-.012.017-.215.53-.944.986-2.134 1.328-1.283.367-2.97.574-4.768.574-1.795.003-3.481-.205-4.764-.571zm9.806.862c.816-.232 1.451-.52 1.92-.88v3.947c-.236.423-.928.978-2.191 1.348-1.275.367-2.97.566-4.768.566-1.798 0-3.481-.196-4.767-.566-1.143-.334-1.967-.835-2.219-1.336V5.339c.468.358 1.115.664 1.95.896 1.367.395 3.157.61 5.036.61 1.883-.002 3.673-.218 5.04-.61zm-5.039 5.874c1.891 0 3.681-.215 5.04-.61.767-.216 1.422-.521 1.918-.888v3.983c-.235.423-.927.977-2.19 1.344-1.275.367-2.97.575-4.768.575-1.798 0-3.484-.208-4.767-.575-1.143-.33-1.967-.826-2.219-1.336v-3.98c.499.35 1.152.655 1.95.88 1.367.392 3.154.607 5.036.607zm0 5.3c1.891 0 3.681-.216 5.04-.61.767-.216 1.422-.53 1.918-.897v3.54c0 .7-.74 1.275-2.201 1.695-1.283.37-2.978.574-4.768.574-1.787 0-3.482-.207-4.776-.574-1.46-.423-2.201-.994-2.201-1.694V15.91c.487.35 1.15.653 1.95.888 1.369.395 3.156.61 5.038.61z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataFilled;
