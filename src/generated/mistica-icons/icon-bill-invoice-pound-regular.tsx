/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBillInvoicePoundRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.702 2H7.118C5.953 2 5 2.96 5 4.144V22h14.815V4.144C19.819 2.964 18.867 2 17.702 2zm.704 18.574H6.413V4.144a.71.71 0 01.705-.713h10.584a.71.71 0 01.704.713v16.43zm-1.585-3.214a.53.53 0 01-.528.535H8.53a.53.53 0 01-.528-.535.53.53 0 01.528-.535h7.762c.289 0 .528.238.528.535zm0-3.57a.53.53 0 01-.528.535H8.53a.53.53 0 01-.528-.535.53.53 0 01.528-.535h7.762a.53.53 0 01.528.535zm0-3.932a.53.53 0 01-.528.535h-2.998a.53.53 0 01-.529-.535.53.53 0 01.529-.535.174.174 0 00.176-.178v-.891a.53.53 0 01-.529-.535.53.53 0 01.529-.535v-.896c0-.887.713-1.61 1.59-1.61.437 0 .857.184 1.155.508a.545.545 0 01-.023.76.529.529 0 01-.75-.024.517.517 0 00-.383-.169.532.532 0 00-.528.535v.891h.88a.53.53 0 01.529.535.53.53 0 01-.529.535h-.88v.892c0 .059-.005.118-.014.178h1.775a.542.542 0 01.528.54z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBillInvoicePoundRegular;
