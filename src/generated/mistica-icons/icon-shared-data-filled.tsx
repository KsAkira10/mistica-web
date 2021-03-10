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

const IconSharedDataFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.905 5.48c-.563-.644-1.404-.972-2.505-.972H5.291c-1.098 0-1.94.328-2.504.972C2.267 6.08 2 6.948 2 8.063v4.938c0 1.115.266 1.984.787 2.583.563.644 1.403.972 2.504.972h13.11c1.098 0 1.94-.328 2.504-.97.523-.599.787-1.467.787-2.582V8.063c0-1.115-.266-1.983-.787-2.583zm.753 12.698c0 .308-.252.56-.56.56H2.594a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h18.504c.308 0 .56.252.56.56 0 .003 0 .003 0 0zm-8.672-8.9l-1.98.992c.02.166.02.33 0 .496l1.977.989.073-.076c.24-.227.574-.344.994-.344.42 0 .754.115.995.344.255.241.384.591.384 1.04 0 .428-.12.77-.356 1.008s-.591.372-1.023.372c-.431 0-.784-.128-1.022-.372s-.353-.58-.353-1.009c0-.061.003-.12.008-.176l-2.02-1.011c-.237.24-.587.367-1.016.367-.429 0-.784-.13-1.022-.373-.238-.244-.356-.58-.356-1.008 0-.448.129-.799.384-1.04.24-.226.574-.344.994-.344.42 0 .754.115.994.345l.026.025 2.016-1.009a1.875 1.875 0 01-.008-.179c0-.448.129-.798.384-1.04.24-.226.574-.344.994-.344.42 0 .754.115.995.345.254.24.383.59.383 1.04 0 .428-.12.77-.355 1.007-.236.239-.591.373-1.023.373-.431 0-.784-.129-1.022-.373-.02-.014-.031-.03-.045-.044z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSharedDataFilled;
