/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconConfigureDeviceFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.692 4.144h1.298l-.143-.284-.037-.073A3.519 3.519 0 0013.743 2H7.502a3.475 3.475 0 00-3.428 2.856h10.934c-.036-.388.287-.712.684-.712zM7.502 22h6.352a3.475 3.475 0 003.427-2.857H4.07A3.488 3.488 0 007.502 22zm7.47-7.5c0 .393.323.713.72.713v.018h1.663v2.962H4V6.053h8.301l-.36.357a.67.67 0 00-.217.499c0 .141.037.32.217.498l.18.178a4.51 4.51 0 00-.286.713h-.254c-.398 0-.72.32-.72.713v1.463c0 .393.322.713.72.713h.217c.043.086.08.178.12.273.057.14.118.29.203.44l-.18.178a.67.67 0 00-.217.498c0 .142.037.32.217.498l1.081 1.07a.753.753 0 001.049 0l.18-.179c.217.105.466.21.72.284v.251zm5.81-5.644h-.613c-.074-.43-.255-.823-.504-1.216l.434-.43c.074-.073.074-.178 0-.215l-.938-.927c-.037-.037-.074-.037-.106-.037-.037 0-.074 0-.106.037l-.434.43a4.552 4.552 0 00-1.23-.499v-.608c0-.105-.073-.178-.18-.178h-1.334c-.107 0-.18.073-.18.178V6c-.435.073-.832.251-1.23.498l-.434-.43c-.037-.036-.073-.036-.106-.036-.037 0-.074 0-.106.037l-.9.927c-.038.037-.038.074-.038.106 0 .036 0 .073.037.105l.434.43a4.448 4.448 0 00-.503 1.215h-.615a.171.171 0 00-.18.178v1.321c0 .105.074.178.18.178h.615c.074.43.254.823.503 1.216l-.434.43c-.037.036-.037.073-.037.105 0 .036 0 .073.037.105l.938.928c.037.036.074.036.106.036.037 0 .074 0 .106-.036l.435-.43c.36.215.794.393 1.228.498v.608c0 .105.074.178.18.178h1.336c.106 0 .18-.073.18-.178v-.608c.434-.073.831-.251 1.229-.498l.434.43c.037.036.074.036.106.036.037 0 .074 0 .106-.036l.938-.928c.074-.073.074-.178 0-.215l-.434-.43c.217-.356.397-.786.503-1.215h.615c.106 0 .18-.073.18-.178V9.024c-.037-.096-.11-.17-.217-.17zM16.45 12a2.36 2.36 0 002.166-1.426c.36-.86.18-1.86-.508-2.541-.688-.64-1.7-.855-2.564-.498a2.342 2.342 0 00-1.441 2.143A2.332 2.332 0 0016.45 12z"
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
                    d="M10.483 2h7.185c2.157 0 3.25 1.106 3.246 3.291v13.11c0 2.215-1.061 3.29-3.249 3.29H10.48c-2.187 0-3.249-1.075-3.249-3.29v-3.236a.841.841 0 01-.804-.84v-.53a2.86 2.86 0 01-.221-.07l-.356.356a.84.84 0 01-1.188 0l-.733-.73a.84.84 0 010-1.189l.355-.355a5.11 5.11 0 01-.07-.222H3.69a.84.84 0 01-.84-.84V9.71a.84.84 0 01.84-.84h.527c.02-.076.045-.15.07-.222l-.356-.356a.84.84 0 010-1.187l.734-.731a.84.84 0 011.188 0l.356.355a5.11 5.11 0 01.22-.07v-.524a.837.837 0 01.805-.84v-.003c0-1.106.26-1.91.795-2.46C8.573 2.272 9.377 2 10.483 2zm.185 8.748h1.216V9.714h-1.216c-.05-.493-.182-.907-.387-1.243l.774-.774-.732-.73-.77.77c-.344-.208-.762-.334-1.244-.387V6.134H7.273V7.35c-.485.05-.9.18-1.244.387l-.77-.77-.734.73.768.77c-.202.337-.334.751-.387 1.244H3.69v1.037h1.216c.053.493.182.907.387 1.244l-.77.77.733.73.77-.77c.345.208.762.334 1.244.387v1.216h1.037v-1.213c.484-.05.899-.18 1.243-.387l.77.77.732-.733-.77-.77c.201-.337.333-.751.386-1.244zm4.132 8.224c-.168.17-.412.252-.715.252-.302 0-.546-.081-.714-.252-.154-.157-.24-.392-.24-.706 0-.655.374-.958.954-.958s.955.305.955.958c0 .317-.086.55-.24.706zM6.335 10.23c0-.995.532-1.454 1.453-1.454.922 0 1.454.46 1.454 1.454s-.532 1.453-1.454 1.453c-.921 0-1.453-.459-1.453-1.453z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconConfigureDeviceFilled;
