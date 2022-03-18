/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconReloadLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.585 17.96l-2.155.322a10.252 10.252 0 002.123-6.28C21.553 6.484 17.271 2 12.002 2A9.215 9.215 0 006.9 3.545a.382.382 0 00-.112.52c.104.18.332.23.496.116a8.52 8.52 0 014.722-1.423c4.87-.009 8.828 4.145 8.828 9.24 0 2.215-.736 4.3-2.087 5.97l-.348-2.5c-.032-.204-.212-.347-.404-.322a.382.382 0 00-.308.423l.504 3.664 3.498-.528a.382.382 0 00.308-.423c-.032-.213-.216-.36-.412-.322zm-4.178 2.344c0 .417-.322.754-.72.754-.397 0-.719-.337-.719-.754 0-.416.322-.753.72-.753.397 0 .72.337.72.753zm-5.405.942c.908 0 1.795-.142 2.655-.422a.34.34 0 01.435.246c.056.201-.047.415-.235.474a9.147 9.147 0 01-2.875.456c-5.27 0-9.551-4.484-9.551-10.002 0-2.315.755-4.522 2.13-6.293l-2.154.323c-.192.025-.372-.118-.404-.323a.382.382 0 01.308-.423l3.494-.527.52 3.663a.382.382 0 01-.308.423h-.048a.363.363 0 01-.356-.322l-.348-2.5C3.905 7.69 3.17 9.783 3.17 11.998c0 5.095 3.958 9.248 8.832 9.248z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.496 2.196a.615.615 0 00-.647.112l-2.818 2.673a9.881 9.881 0 00-6.075-2.017c-4.958-.009-9.138 3.557-9.734 8.302-.597 4.746 2.585 9.171 7.4 10.3 4.816 1.129 9.748-1.392 11.482-5.871a.552.552 0 00-.336-.714.598.598 0 00-.445.01.568.568 0 00-.306.315c-1.308 3.358-4.703 5.529-8.42 5.383-3.717-.145-6.919-2.577-7.935-6.025-1.02-3.45.372-7.143 3.45-9.154 3.079-2.011 7.152-1.893 10.099.297l-2.6 2.473a.54.54 0 00-.134.611c.09.21.302.347.537.347l5.916-.355a.569.569 0 00.544-.524l.358-5.569a.574.574 0 00-.336-.594z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconReloadLight;
