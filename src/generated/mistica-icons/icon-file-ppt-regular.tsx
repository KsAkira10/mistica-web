/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFilePptRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M6.136 11.458H4.842v3.77h.86v-1.3h.605c.496 0 .838-.114 1.059-.363.187-.21.28-.513.28-.916 0-.404-.098-.695-.303-.883-.243-.226-.616-.308-1.207-.308zm.49 1.681c-.109.104-.227.143-.501.143v.003h-.426v-1.202h.404c.266 0 .425.04.529.132.098.092.143.24.143.445 0 .221-.05.38-.149.479zm1.631-1.681H9.55c.59 0 .963.082 1.207.308.204.188.303.48.303.883s-.093.706-.28.916c-.222.249-.564.364-1.06.364h-.604v1.3h-.86v-3.77zm1.784 1.681c.098-.098.148-.258.148-.479 0-.204-.044-.353-.143-.445-.103-.093-.263-.132-.529-.132h-.403v1.202h.425v-.003c.275 0 .393-.04.502-.143zm2.465-1.059h-1.168v-.622h3.235l-.067.622h-1.14v3.149h-.86V12.08zm7.604-4.277l.004.003v-.003h-.003z"
                fill={fillColor}
            />
            <path
                d="M21.791 7.912a.61.61 0 01.048.238v12.306c0 .75-.644 1.383-1.409 1.383H8.248c-.75 0-1.409-.647-1.409-1.383l.034-2.774H4.57a2.427 2.427 0 01-2.42-2.425v-4.093a2.427 2.427 0 012.42-2.426h2.266V3.534c0-.726.67-1.384 1.41-1.384h7.414a.86.86 0 01.613.25l5.297 5.126c.115.109.18.243.221.386zm-1.36 12.712c.097 0 .192-.096.192-.168V9.02H18.31c-1.014 0-1.891-.33-2.532-.952-.65-.63-.995-1.487-.995-2.482V3.37H8.248c-.073 0-.188.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.093a2.427 2.427 0 01-2.42 2.425h-6.33l-.034 2.78c0 .05.1.159.193.159H20.43v.003zM3.365 15.258c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.092c0-.667-.54-1.21-1.207-1.21H4.573a1.21 1.21 0 00-1.207 1.21v4.092zM20.11 7.803L15.999 3.82v1.764c0 .656.216 1.213.622 1.608.414.4.997.61 1.689.61h1.8z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePptRegular;
