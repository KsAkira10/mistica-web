/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconVideoFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path d="M16.643 12l-7.321 4.246V7.754L16.644 12z" fill={fillColor} />
                <path
                    d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2zm5.983 10.462L9.057 17.64a.51.51 0 01-.27.073.543.543 0 01-.535-.54V6.823c0-.192.1-.37.27-.466a.533.533 0 01.535 0l8.926 5.178a.537.537 0 010 .928z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.828 6.682s.285-3.698-3.639-3.698L5.76 2.987s-.072-.005-.196-.005c-.753 0-3.409.243-3.409 3.678 0 4.002.003 10.66.003 10.66s-.246 3.684 3.616 3.684h12.418s.12.017.314.017c.882 0 3.324-.308 3.324-3.72l-.002-10.619zM3.399 6.399c.073-1.294.639-1.68.838-1.807.333-.215.705-.297.991-.33v2.137H3.4zm15.359 13.356v-2.101h1.832c-.037.74-.286 1.977-1.832 2.1zM3.393 17.67h1.835v2.047c-.549-.075-.972-.269-1.266-.58-.431-.462-.54-1.112-.569-1.467zM20.598 6.385H18.76v-2.11c.56.08.992.275 1.283.592.451.487.538 1.182.555 1.518zm0 10.02h-1.84v-2.087h1.84v2.087zm-1.84-6.681V7.637h1.84v2.087h-1.84zm1.84 3.339h-1.84v-2.087h1.84v2.087zM3.385 16.419v-2.087h1.84v2.087h-1.84zm1.843-6.687H3.385v-2.08h1.843v2.08zm-1.843 1.253h1.84v2.092h-1.84v-2.092zm6.356 3.599V9.42l4.39 2.583-4.39 2.58zm-.308-6.787l6.238 3.664c.19.112.305.319.305.543a.63.63 0 01-.308.543l-6.235 3.664a.607.607 0 01-.617 0 .622.622 0 01-.308-.54V8.34a.63.63 0 01.308-.544.607.607 0 01.617 0z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconVideoFilled;
