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

const IconComputerRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M5.252 14.333h13.334v-8H5.252v8zM19.309 17l-.928-1.334H5.458L4.528 17H19.31zM1.976 18.333l1.944-2.79V5h15.999v10.542l1.943 2.79H1.976zm9.275-10h1.333V7h-1.333v1.333z"
                    fill={fillColor}
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.217 15.685V7.212c0-1.217-.964-2.212-2.144-2.212H5.931c-1.179 0-2.144.995-2.144 2.212v8.473H2v.552C2 17.746 3.18 19 4.642 19h14.752C20.821 19 22 17.746 22 16.237v-.552h-1.783zM5.218 7.212c0-.406.32-.736.713-.736h12.142c.393 0 .713.33.713.736v8.473H5.218V7.212zm-.571 10.685c-.677 0-1.248-.481-1.463-1.104h17.678c-.252.623-.823 1.104-1.468 1.104H4.647z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.401 17.462l-12.803-.008c-1.12 0-1.99-.311-2.58-.927-.574-.591-.863-1.437-.863-2.513V7.737c0-2.202 1.221-3.412 3.44-3.412l12.806.008c2.219 0 3.44 1.213 3.44 3.412v6.278c0 1.075-.288 1.921-.86 2.512-.594.616-1.462.927-2.58.927zM5.595 5.445c-.807 0-1.406.194-1.779.575-.358.367-.54.944-.54 1.717v6.277c0 1.583.736 2.32 2.319 2.32l12.804.008c1.582 0 2.32-.737 2.32-2.32V7.746c0-.773-.183-1.35-.544-1.717-.373-.38-.97-.574-1.78-.574l-12.8-.009zm-2.88 14.222l18.566.008c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56l-18.566-.009a.562.562 0 00-.56.56c0 .309.252.56.56.56z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconComputerRegular;
