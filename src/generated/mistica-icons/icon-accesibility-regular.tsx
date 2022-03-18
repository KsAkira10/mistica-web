/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAccesibilityRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.927 16.67l3.857 4.05a.755.755 0 01.004 1.053.686.686 0 01-.5.227.824.824 0 01-.5-.189l-4.145-4.351c-1.428.714-3 1.088-4.645 1.088-4.248 0-8.145-2.663-9.889-6.74a.862.862 0 010-.601c.608-1.424 1.464-2.7 2.572-3.713a.671.671 0 011 .038.753.753 0 01-.036 1.05 8.842 8.842 0 00-2.108 2.923c1.572 3.372 4.857 5.548 8.465 5.548a8.867 8.867 0 003.573-.752l-.82-.861c-.789.6-1.717.937-2.753.937-2.572 0-4.644-2.176-4.644-4.876 0-1.088.32-2.067.892-2.89L2.213 2.274a.753.753 0 010-1.05.67.67 0 011 0l4.14 4.309a10.44 10.44 0 014.645-1.088c4.285 0 8.145 2.663 9.894 6.749a.862.862 0 010 .6c-.893 2.025-2.249 3.713-3.965 4.877zm-9.145-5.174c0 1.878 1.432 3.377 3.216 3.377.644 0 1.216-.189 1.713-.53L9.28 9.696c-.32.525-.5 1.125-.5 1.801zm5.933 1.802l-4.433-4.653a3.022 3.022 0 011.716-.525c1.785 0 3.217 1.499 3.217 3.376 0 .676-.18 1.277-.5 1.802zm1.928-1.802c0 1.088-.32 2.067-.892 2.89l1.176 1.193a9.612 9.612 0 003.536-4.087c-1.572-3.372-4.856-5.548-8.465-5.548-1.252 0-2.428.265-3.572.752l.82.86a4.466 4.466 0 012.752-.936c2.573 0 4.645 2.176 4.645 4.876z"
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
                    d="M21.513 12.221c-1.608 1.608-3.244 2.813-4.894 3.608l4.88 4.88a.561.561 0 01-.395.958.558.558 0 01-.395-.166l-5.2-5.199a10.577 10.577 0 01-3.694.681c-3.266 0-6.51-1.588-9.644-4.723a.562.562 0 010-.793C3.779 9.86 5.415 8.656 7.067 7.86L2.185 2.978a.561.561 0 010-.793.558.558 0 01.79 0l5.201 5.199c1.227-.454 2.46-.68 3.695-.68 3.266 0 6.51 1.587 9.642 4.725a.562.562 0 010 .793zm-1.197-.398c-2.787-2.655-5.624-4-8.445-4a9.28 9.28 0 00-2.812.446l.515.513c.572-.34 1.283-.513 2.123-.513 2.325 0 3.659 1.339 3.659 3.675 0 .84-.171 1.549-.504 2.118l.924.924c1.518-.672 3.036-1.728 4.54-3.163zm-8.498-1.37c-.18 0-.347.026-.499.074l-1.123-1.124c.41-.196.91-.294 1.502-.294.896 0 1.59.227 2.064.678.498.473.75 1.199.75 2.154 0 .586-.095 1.087-.285 1.496l-1.09-1.09a1.62 1.62 0 00.073-.498c0-.846-.546-1.395-1.392-1.395zm-8.448 1.41c2.787 2.655 5.624 4 8.445 4 .933 0 1.871-.149 2.813-.443l-2.171-2.17-.012.01-.4-.4c-.123-.123-.328-.33-.54-.55-.261-.265-.53-.54-.684-.694l-.41-.406.004-.003L7.91 8.703c-1.52.672-3.036 1.728-4.54 3.16z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconAccesibilityRegular;
