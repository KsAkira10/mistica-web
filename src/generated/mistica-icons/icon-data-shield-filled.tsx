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

const IconDataShieldFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.119 10.93a.71.71 0 00.704.713c.388 0 .709-.32.704-.713C21.527 6 17.578 2 12.708 2a.71.71 0 00-.704.713.71.71 0 00.704.714c4.096 0 7.41 3.36 7.41 7.503zm-3.527 0a.71.71 0 00.704.713c.389 0 .705-.32.71-.708 0-2.968-2.367-5.36-5.293-5.36a.71.71 0 00-.705.714.71.71 0 00.705.713c2.15 0 3.879 1.747 3.879 3.928zm-3.423-1.788c-2.102 0-3.789-1.329-4.16-1.621a.618.618 0 00-.076-.057l-.668-.608-.46.393-.177.179c-.004 0-.03.02-.075.057-.37.299-2.055 1.657-4.16 1.657H2.48v7.216c0 3.324 3.035 4.75 5.329 5.5L8.3 22l.492-.142c2.294-.713 5.329-2.144 5.329-5.464V9.142h-.953zm-6.458 8.61l-2.15-2.18a.521.521 0 010-.75.506.506 0 01.741 0l1.378 1.394 4.2-4.253a.506.506 0 01.74 0 .574.574 0 01.068.787L6.71 17.752z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.94 4.068c.181.53.868.992 2 1.33 1.193.356 2.761.555 4.43.558 1.67 0 3.239-.202 4.432-.557 1.107-.33 1.784-.773 1.986-1.286 0-.008.008-.017.008-.017-.148-.557-.817-1.028-2.002-1.384-1.182-.358-2.762-.557-4.432-.557-1.67 0-3.246.199-4.437.557-1.126.34-1.812.81-1.994 1.34.008.008.008.008.008.016zm4.683 7.64l-.003.15c-.014.68-.036 1.359-.064 2.036H9.063V8.822c.834.114 1.392.476 1.972.86.67.445 1.417.938 2.602.938l-.003.356c-.002.22-.007.467-.011.732zm-.291 4.699a1.843 1.843 0 01-.188.53c-.07.134-.154.263-.244.383l-.01.016c-.016.022-.03.043-.049.065-.098.127-.201.25-.316.376a7.04 7.04 0 01-.4.392l-.068.064a13.703 13.703 0 01-1.485 1.129l-.053.037c-.473.31-.96.602-1.456.874v-5.168h4.417c-.01.14-.024.275-.037.406l-.013.129c-.017.156-.034.305-.054.445l-.006.052c-.012.094-.024.19-.038.27zm-5.48-7.571v5.061H3.456a86.116 86.116 0 01-.084-3.266h.011c1.155 0 1.91-.5 2.587-.947l.004-.002c.557-.37 1.092-.718 1.88-.846zm0 11.389c-1.773-.975-3.955-2.55-4.176-3.818a15.7 15.7 0 01-.151-1.303h4.328v5.121zm7.121-9.178c.132.005.264.01.4.01 1.67-.003 3.247-.19 4.432-.552 1.176-.356 1.82-.896 2.036-1.305V5.376c-.434.35-1.025.628-1.784.855-1.272.38-2.933.59-4.683.59-1.751 0-3.412-.21-4.684-.59-.776-.224-1.378-.521-1.812-.869v2.23l-.116-.007a4.105 4.105 0 00-.257-.01H8.5c-1.533 0-2.418.586-3.196 1.101-.74.49-1.325.877-2.401.711a.604.604 0 00-.748.583v.018c0 .362-.004 4.713.33 6.63.454 2.596 5.216 4.91 5.762 5.167a.594.594 0 00.516 0c.709-.339 1.398-.72 2.062-1.137l.103.034c1.202.358 2.776.557 4.44.557 1.664 0 3.238-.202 4.431-.558 1.359-.408 2.045-.963 2.045-1.644v-3.434c-.46.356-1.07.661-1.784.868-1.263.384-2.925.591-4.684.591-.327 0-.65-.01-.966-.027.047-.14.09-.278.115-.42.022-.135.045-.286.064-.443.258.011.518.022.784.022 1.673 0 3.247-.199 4.432-.554 1.176-.359 1.82-.897 2.036-1.306v-3.86c-.46.356-1.07.65-1.784.86-1.263.381-2.924.591-4.683.591-.14 0-.276-.005-.412-.01-.044 0-.088-.002-.132-.004.005-.28.008-.54.01-.778l.001-.09.132.005z"
                />
            </svg>
        );
    }
};

export default IconDataShieldFilled;
