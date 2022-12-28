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

const IconBatteryChargingRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.928 17.26a.724.724 0 00.98-.26l2.5-4.288a.706.706 0 00.004-.716.706.706 0 00-.616-.356h-2.328l1.876-3.208a.712.712 0 00-.256-.98.712.712 0 00-.98.256l-2.5 4.288a.706.706 0 00-.004.716c.124.22.36.356.616.356h2.328l-1.876 3.212a.712.712 0 00.256.98z"
                />
                <path
                    fill={fillColor}
                    d="M15.928 22H8.076c-1.18 0-2.144-.96-2.144-2.144V5.928c0-1.18.96-2.144 2.144-2.144h1.068V2h5.716v1.788h1.068c1.18 0 2.144.96 2.144 2.144V19.86c0 1.176-.96 2.14-2.144 2.14zM8.076 5.212a.714.714 0 00-.712.712v13.928c0 .392.32.712.712.712h7.86c.392 0 .712-.32.712-.712V5.928a.714.714 0 00-.712-.712h-2.5V3.428H10.58v1.788H8.076v-.004z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.148 7.542c0-1.056-.275-1.835-.84-2.387-.57-.555-1.373-.824-2.457-.824h-.188v-.666c0-.482-.132-.846-.406-1.112-.27-.264-.656-.398-1.146-.398h-2.227c-.49 0-.877.137-1.145.403-.27.266-.407.639-.407 1.107v.67h-.187c-1.079 0-1.88.274-2.457.84-.566.557-.843 1.333-.843 2.37v11.092c0 1.061.277 1.846.849 2.395.566.546 1.367.812 2.45.812h5.707c1.08 0 1.885-.266 2.448-.812.571-.552.849-1.336.849-2.398V7.542zM10.2 3.665c0-.359.117-.474.157-.51.039-.04.154-.154.526-.154h2.227c.37 0 .486.107.527.146l.002.002.001.001c.038.037.15.15.15.515v.666H10.2v-.666zm7.075 14.969c0 .823-.193 1.412-.588 1.796-.395.38-.994.565-1.837.565H9.145c-.843 0-1.443-.184-1.838-.566-.398-.383-.59-.971-.59-1.795V7.542c0-.804.192-1.381.59-1.774.404-.395 1.003-.588 1.838-.588h5.703c.843 0 1.445.188 1.843.574.392.384.585.97.585 1.788v11.092zm-4.952-2.375l.003-2.468a.417.417 0 00-.149-.32.44.44 0 00-.344-.1l-2.062.277 1.68-3.97-.024 2.25c0 .123.053.241.148.322a.443.443 0 00.347.101l2.278-.308-1.877 4.216zm2.93-4.992a.446.446 0 00-.406-.165l-2.54.344.044-3.963a.429.429 0 00-.347-.42.436.436 0 00-.49.254l-2.835 6.69a.415.415 0 00.059.42.44.44 0 00.403.16l2.316-.312-.008 4.034a.43.43 0 00.347.415.435.435 0 00.488-.247l3.022-6.787a.413.413 0 00-.053-.423z"
                />
            </svg>
        );
    }
};

export default IconBatteryChargingRegular;
