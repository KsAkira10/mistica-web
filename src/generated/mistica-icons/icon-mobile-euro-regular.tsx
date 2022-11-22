/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMobileEuroRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.165 2H8.849C6.911 2 5.34 3.6 5.34 5.571V18.43c0 1.969 1.572 3.57 3.508 3.57h6.317c1.936 0 3.508-1.6 3.508-3.571V5.576C18.673 3.605 17.101 2 15.165 2zM6.742 17.364V6.646h10.53v10.718H6.742zM15.165 3.43c1.042 0 1.905.773 2.075 1.788H6.773c.17-1.015 1.033-1.788 2.075-1.788h6.317zm0 17.147H8.849c-1.043 0-1.905-.773-2.076-1.788H17.24c-.17 1.015-1.033 1.788-2.075 1.788zm0-5.02a.718.718 0 00.256-.975.688.688 0 00-.957-.256 2.596 2.596 0 01-1.316.362c-1.209 0-2.224-.837-2.534-1.967h2.704c.387 0 .701-.32.701-.713a.708.708 0 00-.7-.713h-2.71c.306-1.134 1.326-1.966 2.534-1.966.458 0 .917.123 1.316.36a.697.697 0 00.962-.26.723.723 0 00-.256-.978 3.976 3.976 0 00-2.017-.554c-1.986 0-3.64 1.468-3.972 3.393H8.76a.708.708 0 00-.701.713c0 .394.314.714.7.714h.418c.333 1.925 1.986 3.393 3.972 3.393.705 0 1.401-.192 2.017-.554z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobileEuroRegular;
