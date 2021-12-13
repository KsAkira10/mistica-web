/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPayInvoicePoundFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M9.07 7.18H4.237L9.07 2.241V7.18zM19.385 2v20H4V8.254h6.117V2h9.268zM14.4 17.36a.527.527 0 00-.524-.535H10.99c.058-.169.09-.347.09-.535v-1.609h1.574a.528.528 0 00.524-.535.527.527 0 00-.524-.535H11.08v-1.426c0-.59.47-1.07 1.047-1.07.242 0 .47.083.658.238a.518.518 0 00.739-.078.545.545 0 00-.077-.754 2.083 2.083 0 00-1.32-.475c-1.154 0-2.098.96-2.098 2.144v1.426h-.17a.527.527 0 00-.524.535c0 .297.233.535.524.535h.174v1.609a.521.521 0 01-.523.535.527.527 0 00-.524.535c0 .297.233.534.524.534h4.372a.533.533 0 00.519-.539z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPayInvoicePoundFilled;
