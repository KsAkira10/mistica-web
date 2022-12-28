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

const IconCalendarLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3.189 21.284h17.619c.204 0 .344.144.344.36 0 .212-.136.356-.345.356H2.5V5.928c0-1 .758-1.784 1.726-1.788h3.458V2.356c0-.212.14-.356.345-.356.205 0 .344.14.344.356V4.14h6.906V2.356c0-.212.14-.356.344-.356.205 0 .345.14.345.356v1.788h3.454c.968 0 1.726.784 1.726 1.784v11.428c0 .212-.136.356-.344.356-.205 0-.345-.14-.345-.356v-7.5H3.19v11.428zM7.68 4.856H4.226c-.589 0-1.037.464-1.037 1.072v3.216h17.27V5.928c0-.608-.448-1.072-1.037-1.072h-3.455V6.64c0 .212-.139.356-.344.356-.205 0-.344-.14-.344-.356V4.856h-6.91V6.64c0 .212-.14.356-.344.356-.205 0-.345-.14-.345-.356V4.856z"
                />
                <path
                    fill={fillColor}
                    d="M21.5 19.5c0 .395-.31.716-.692.716a.705.705 0 01-.693-.716c0-.395.31-.716.693-.716.382 0 .692.32.692.716zm-6.566-.716c.21 0 .345-.144.345-.356V12a.37.37 0 00-.174-.32.302.302 0 00-.345 0l-1.59.928c-.174.108-.209.32-.139.5.104.18.31.216.484.144l1.071-.644v5.82c.004.216.14.356.348.356zm-3.454-5.176c0-1.072-.863-1.964-1.935-1.964h-.623c-.379 0-1.071.144-1.45.428-.14.108-.175.356-.07.5.104.144.344.18.483.072.175-.144.693-.284 1.037-.284h.623a1.25 1.25 0 010 2.5h-.932c-.21 0-.345.144-.345.356 0 .216.14.356.345.356h.932a1.253 1.253 0 010 2.504h-.623c-.31 0-.862-.144-1.037-.284-.139-.108-.379-.072-.483.072-.105.144-.07.392.07.5.344.284 1.071.428 1.45.428h.623c1.072 0 1.935-.892 1.935-1.964 0-.68-.31-1.252-.828-1.608.518-.364.828-.936.828-1.612z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.24 16.723c0-.12.022-.232.07-.333.047-.1.14-.235.277-.403l1.364-1.667c.348-.428.591-.776.729-1.047.14-.27.207-.538.207-.804 0-.359-.107-.617-.322-.768-.213-.154-.533-.23-.956-.23a6.09 6.09 0 00-1.249.132v-.566c.44-.11.89-.165 1.356-.165.66 0 1.151.146 1.476.434.3.266.451.642.451 1.129 0 .244-.034.468-.104.672a2.82 2.82 0 01-.347.664 12.22 12.22 0 01-.703.902l-1.426 1.678h2.684v.574h-3.474a.675.675 0 01-.033-.202zM7.595 6.533a.54.54 0 01-.4-.148.548.548 0 01-.14-.395c0-.342.201-.547.543-.547s.544.205.544.547a.55.55 0 01-.14.395.574.574 0 01-.407.148zm8.754 0a.539.539 0 01-.4-.148.548.548 0 01-.14-.395c0-.342.201-.547.543-.547.16 0 .294.048.39.138a.55.55 0 01.153.409c0 .165-.047.3-.14.395a.574.574 0 01-.406.148z"
                />
                <path
                    fill={fillColor}
                    d="M19.349 20.191H4.556a2.397 2.397 0 01-2.395-2.395v-11.6a2.397 2.397 0 012.395-2.394h14.877a2.397 2.397 0 012.395 2.395v1.657a.276.276 0 010 .08v9.778a2.482 2.482 0 01-2.48 2.48zm1.927-12.02H2.713v9.625c0 1.017.826 1.843 1.843 1.843H19.35a1.93 1.93 0 001.927-1.927v-9.54zm0-.554v-1.42a1.845 1.845 0 00-1.843-1.843H4.556a1.845 1.845 0 00-1.843 1.843v1.42h18.563z"
                />
            </svg>
        );
    }
};

export default IconCalendarLight;
