/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconInvoiceEuroRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.358 20.642V3.358h8.68V7.66h4.302v12.982H5.358ZM15.396 4.317l1.985 1.985h-1.985V4.317ZM14.998 2H4v20h15.698V6.7l-4.7-4.7Zm-2.79 15.058a3.263 3.263 0 0 1-2.75-1.511h3.825V14.19H8.97a3.25 3.25 0 0 1-.026-.397c0-.135.01-.267.026-.397h4.314v-1.358H9.458a3.263 3.263 0 0 1 5.253-.342l1.04-.872a4.616 4.616 0 0 0-3.543-1.654 4.628 4.628 0 0 0-4.275 2.868H6.83v1.358h.775a4.64 4.64 0 0 0-.02.397c0 .134.009.265.02.397H6.83v1.357h1.103a4.628 4.628 0 0 0 4.275 2.868c1.389 0 2.692-.617 3.574-1.692l-1.05-.861a3.255 3.255 0 0 1-2.524 1.196Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.31 7.42 9.617 2h10.078v20H4.31V7.42ZM9.206 7V4.44L6.7 7h2.506ZM5.71 20.57h12.588V3.43h-7.693v5H5.711v12.14Zm9.656-9.804a3.95 3.95 0 0 0-2.009-.553c-1.978 0-3.624 1.472-3.96 3.396h-.416a.707.707 0 0 0-.698.713c0 .393.313.713.698.713h.416c.331 1.924 1.978 3.39 3.956 3.39.702 0 1.396-.191 2.009-.552a.719.719 0 0 0 .255-.974.688.688 0 0 0-.953-.26 2.579 2.579 0 0 1-1.311.36c-1.204 0-2.215-.835-2.524-1.964h2.698c.385 0 .698-.32.698-.713a.707.707 0 0 0-.698-.713H10.83c.304-1.134 1.32-1.966 2.524-1.966.456 0 .913.124 1.31.361a.693.693 0 0 0 .959-.26.724.724 0 0 0-.255-.978Z"
                />
            </svg>
        );
    }
};

export default IconInvoiceEuroRegular;
