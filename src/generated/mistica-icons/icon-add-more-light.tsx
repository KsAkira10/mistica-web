/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAddMoreLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.266 12.209h4.581c.146 0 .272.126.272.291 0 .165-.123.291-.272.291h-4.57v6.918c0 .165-.117.291-.271.291-.155 0-.272-.132-.272-.291V12.79H5.272c-.154 0-.272-.126-.272-.291 0-.165.123-.291.272-.291h6.45V5.29c0-.165.118-.291.272-.291.155 0 .272.132.272.291v6.918zm6.196.861c.297 0 .538-.258.538-.576 0-.318-.241-.576-.538-.576-.297 0-.538.258-.538.576 0 .318.24.576.538.576z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.403 11.402h-7.802V3.599a.6.6 0 00-1.2 0v7.803H3.6a.599.599 0 100 1.199h7.803v7.8a.6.6 0 001.199 0v-7.8h7.8a.6.6 0 00.002-1.2z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconAddMoreLight;
