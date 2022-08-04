/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconShopFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.824 6.53h2.654L20 19.735C20 21.094 19.278 22 18.184 22H5.816C4.73 22 4 21.094 4 19.735v-.076L5.53 6.526h2.657v-.565C8.187 3.776 9.895 2 12.004 2s3.816 1.776 3.82 3.965v.565zm-3.82-3.023c-1.31 0-2.364 1.095-2.364 2.454v.565h4.728v-.565c0-1.36-1.055-2.454-2.364-2.454z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.846 10.825a1.71 1.71 0 00-.513-1.2c-.131-.207-.481-1.476-.65-2.086l-.039-.144a15.764 15.764 0 00-.176-.615l-1.26-4.003a.895.895 0 00-.858-.622h-.003L5.65 2.191a.903.903 0 00-.852.62c-.148.473-.357 1.145-.586 1.885l-.117.375-.172.557C3.393 7.337 2.769 9.346 2.68 9.55c-.043.101-.1.19-.156.28l-.018.028c-.154.241-.344.54-.344.966 0 1.2 1.319 2.14 3.002 2.14.897 0 1.729-.274 2.289-.745.566.474 1.392.745 2.288.745.519 0 1.031-.092 1.477-.271.302-.12.574-.277.798-.462.563.462 1.386.733 2.274.733.891 0 1.718-.271 2.278-.733.563.462 1.386.733 2.274.733 1.684 0 3.003-.94 3.003-2.14zm-3.006 2.96c-.826 0-1.624-.201-2.274-.566-.647.365-1.445.566-2.275.566-.829 0-1.627-.201-2.277-.566-.154.087-.32.166-.493.236a4.9 4.9 0 01-1.781.33c-.835 0-1.639-.207-2.289-.574-.65.37-1.454.574-2.288.574a4.738 4.738 0 01-1.774-.341v6.787c0 .888.678 1.61 1.516 1.61h4.493v-5.644c0-.68.49-1.232 1.098-1.232h3.036c.605 0 1.098.551 1.098 1.232v5.644h4.468c.835 0 1.515-.722 1.515-1.61v-6.788a4.79 4.79 0 01-1.773.342z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconShopFilled;
