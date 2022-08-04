/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileCompressedRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M13.914 2.402L19.13 7.53c.165.163.257.39.257.622V20.46a1.4 1.4 0 01-1.384 1.381H6.006c-.736 0-1.383-.647-1.383-1.38V3.535c0-.723.658-1.381 1.383-1.381h7.306a.85.85 0 01.602.247zm4.092 18.23c.098 0 .194-.099.194-.172h-.003V9.018h-2.28c-.998 0-1.86-.33-2.493-.953-.639-.627-.978-1.484-.978-2.479V3.362H9.45v.614h.908a.6.6 0 01.593.605.6.6 0 01-.593.605H9.45V6.71h.908a.6.6 0 01.593.605.6.6 0 01-.593.605H9.45v1.524h.908a.6.6 0 01.593.605.6.6 0 01-.593.605H9.45v1.523h.908a.6.6 0 01.593.606.6.6 0 01-.593.604H9.45v.493h.885a.6.6 0 01.594.606v2.266a.6.6 0 01-.594.605h-3a.6.6 0 01-.594-.605v-2.266a.6.6 0 01.594-.606h.927v-1.86h-.935a.6.6 0 01-.594-.604.6.6 0 01.594-.606h.935V9.287h-.935a.6.6 0 01-.594-.605.6.6 0 01.594-.605h.935V6.553h-.935a.6.6 0 01-.594-.605.6.6 0 01.594-.605h.935v-1.98H6.006c-.075 0-.19.111-.196.173V20.46c0 .062.098.171.196.171h12zM9.74 16.146v-.815H7.93v.815h1.81zm3.897-12.334V5.59c0 .658.212 1.216.613 1.61.406.399.983.611 1.667.611H17.7l-4.064-3.997z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileCompressedRegular;
