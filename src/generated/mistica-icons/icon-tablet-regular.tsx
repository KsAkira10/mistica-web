/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTabletRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.087 2h11.826C19.062 2 20 2.964 20 4.143v15.714c0 1.18-.938 2.143-2.087 2.143H6.087C4.938 22 4 21.036 4 19.857V4.143C4 2.963 4.938 2 6.087 2zm11.826 1.427H6.087a.708.708 0 00-.693.716V4.5H18.61v-.356a.708.708 0 00-.697-.716zm.693 2.5V18.07H5.394V5.926h13.212zM6.087 20.568h11.826c.381 0 .693-.32.693-.716v-.356H5.39v.356c0 .392.312.716.697.716z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.282 5.608s.005 8.507.005 12.431c0 3.426-2.675 3.644-3.358 3.644-.101 0-.157-.002-.157-.002s-3.757.002-7.714.002c-3.958 0-3.521-3.641-3.521-3.641V5.622C4.539 2.193 7.293 2 7.915 2c.078 0 .123.003.123.003L15.788 2c3.81.003 3.494 3.608 3.494 3.608zM5.73 5.622c0-1.496.66-1.908.88-2.042.518-.325 1.131-.35 1.307-.35h.042a.76.76 0 00.081.003h7.751c.821 0 1.426.207 1.796.613.574.639.512 1.653.512 1.653v.007a1.27 1.27 0 00-.005.105s.005 6.932.005 11.168H5.73V5.622zm12.37 12.42c0 1.994-1.18 2.415-2.169 2.415l-.061-.006c-.034-.003-.065-.003-.095-.003l-7.715.003c-.88 0-1.512-.216-1.882-.639-.55-.63-.457-1.619-.457-1.619.006-.05.009-.1.009-.151v-.034H18.1v.034zm-5.463 1.221c0-.476-.274-.759-.73-.759-.457 0-.732.283-.732.76 0 .232.065.417.19.551.13.137.314.207.541.207.227 0 .412-.072.54-.207.127-.134.191-.32.191-.552z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTabletRegular;
