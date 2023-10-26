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

const IconArrowDownLeftLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.55 3.457a.729.729 0 1 0 0-1.457.729.729 0 0 0 0 1.457ZM2 22h13.217c.725 0 1.35-.42 1.63-1.093a1.896 1.896 0 0 0-.405-2.07l-3.019-3.02 8.469-8.468a.358.358 0 0 0 0-.512.358.358 0 0 0-.513 0l-8.973 8.98 3.528 3.528c.332.333.424.837.244 1.274a1.017 1.017 0 0 1-.957.648H2.733V8.723c0-.437.236-.793.632-.965a1.112 1.112 0 0 1 1.226.252l2.798 2.807.034.033c.689.686.747.744 1.003.487l6.915-6.91a.358.358 0 0 0 0-.513.358.358 0 0 0-.512 0l-6.65 6.655-3.076-3.076A1.864 1.864 0 0 0 3.09 7.09 1.737 1.737 0 0 0 2 8.727V22Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3.716 20.292c.12.12.286.185.47.185h.023c.016-.002.033-.002.048 0h12.599c.384 0 .683-.188.826-.518.154-.359.082-.827-.17-1.09l-2.78-2.779c-.064-.061-.052-.174.018-.243l5.238-5.169.003-.002c.271-.275.84-.85.156-1.594l-5.064-5.06c-.33-.332-.658-.495-.997-.5-.342-.006-.681.16-1.006.484L7.988 9.08a.195.195 0 0 1-.135.062.155.155 0 0 1-.109-.042L5.173 6.527c-.289-.266-.788-.342-1.16-.176a.766.766 0 0 0-.474.736l-.005 12.667a.672.672 0 0 0 .182.538Zm.527-13.434a.532.532 0 0 1 .204-.04c.132 0 .263.042.345.115l2.56 2.56c.14.138.325.21.524.205a.762.762 0 0 0 .512-.224L13.481 4.4c.218-.218.414-.322.602-.32.185.004.39.116.61.337l5.045 5.042c.25.274.258.409-.145.815l-5.238 5.168a.743.743 0 0 0-.225.513.707.707 0 0 0 .205.524l2.77 2.77c.087.092.135.31.062.479-.053.123-.151.18-.314.18H4.226a.105.105 0 0 1-.014.002c-.045.005-.084-.003-.101-.02-.017-.016-.025-.053-.02-.1.003-.009.003-.02.003-.029L4.1 7.08c0-.073.017-.165.143-.221Z"
                />
            </svg>
        );
    }
};

export default IconArrowDownLeftLight;
