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

const IconQuestionLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2 12c0 5.5 4.5 10 10 10a10.14 10.14 0 005.356-1.536c.18-.108.216-.32.108-.5s-.32-.216-.5-.108A9.43 9.43 0 0112 21.284c-5.108 0-9.284-4.176-9.284-9.284 0-5.108 4.18-9.284 9.284-9.284 5.104 0 9.284 4.176 9.284 9.248 0 1.784-.5 3.5-1.428 4.964-.108.18-.072.392.108.5.18.108.392.072.5-.108A9.925 9.925 0 0022 12c0-5.5-4.5-10-10-10S2 6.5 2 12z"
                    fill={fillColor}
                />
                <path
                    d="M18.784 19.5a.716.716 0 100-1.432.716.716 0 000 1.432zm-6.248-2.68a.536.536 0 11-1.072 0 .536.536 0 011.072 0zm-.892-2.32c0 .212.14.356.356.356.216 0 .356-.14.352-.352 0-.892.356-1.748.928-2.392l1.036-1.036c.86-.824.716-2.324.108-3.144a2.866 2.866 0 00-2.248-1.108h-.18c-.964 0-1.856.5-2.32 1.32-.072.18-.036.392.144.5.18.072.392.036.5-.144.36-.608 1-.964 1.68-.964h.18c.68 0 1.324.32 1.716.856.428.572.5 1.68-.036 2.216l-1.036 1.036a4.041 4.041 0 00-1.18 2.856z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.841 12.023c0-9.162-7.86-9.818-9.442-9.86-.188-.008-.418-.008-.63-.008h-.272c-8.891.081-9.342 8.188-9.342 9.81 0 1.621.46 9.745 9.409 9.868.09.008.188.008.286.008.105 0 .212-.002.314-.004.097-.002.19-.004.277-.004 1.566-.03 9.4-.639 9.4-9.81zm-.82 0c0 8.197-6.58 8.947-8.597 8.99h-.26c-.191.003-.396.005-.592 0-2.016-.023-8.596-.763-8.596-9.048 0-8.27 6.532-8.972 8.532-8.99.286 0 .605 0 .877.01 2.025.047 8.636.842 8.636 9.038zm-9.432 4.827c.395 0 .647.255.647.655v.065c0 .383-.255.638-.647.638-.434 0-.689-.255-.689-.638v-.065c0-.4.255-.655.647-.655h.042zm3.502-8.196c0-.975-.306-1.63-.97-2.115-.515-.392-1.238-.591-2.15-.597-.864 0-1.788.18-2.15.345a.21.21 0 00-.123.23l.065.352c.017.05.047.098.09.132a.19.19 0 00.165.025c.655-.157 1.179-.23 1.753-.23 1.107 0 1.54.23 1.787.426.435.345.622.773.622 1.412 0 .86-.294 1.387-1.745 3.098l-.17.205c-.942 1.123-1.214 1.73-1.214 2.68 0 .238.017.429.05.608a.21.21 0 00.205.165h.449a.204.204 0 00.204-.204c0-1.558.106-1.69 1.468-3.255 1.179-1.4 1.664-2.09 1.664-3.277z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconQuestionLight;
