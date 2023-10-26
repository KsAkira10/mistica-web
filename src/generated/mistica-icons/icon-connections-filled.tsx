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

const IconConnectionsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.13 12.716c-.172 0-.378 0-.546.036l-1.5-2.747c.855-.856 1.363-2.035 1.363-3.359C16.447 4.071 14.47 2 12.017 2 9.563 2 7.583 4.071 7.583 6.642c0 1.324.546 2.5 1.362 3.359l-1.534 2.75c-.137-.035-.34-.035-.51-.035-2.454 0-4.43 2.07-4.43 4.642C2.47 19.928 4.442 22 6.895 22c2.217 0 4.056-1.715 4.362-3.93h1.469c.34 2.215 2.148 3.93 4.36 3.93 2.454 0 4.43-2.071 4.43-4.642s-1.934-4.642-4.387-4.642Zm-5.113-9.289c1.706 0 3.068 1.428 3.068 3.215 0 .716-.24 1.396-.615 1.927a2.107 2.107 0 0 0-.988-1.071c.271-.324.408-.752.408-1.216 0-1.071-.854-1.967-1.877-1.967-1.022 0-1.877.896-1.877 1.967 0 .464.171.896.408 1.252-.477.252-.816.608-.988 1.071a3.584 3.584 0 0 1-.614-1.967c.003-1.78 1.365-3.21 3.075-3.21Zm-.004 7.861c.68 0 1.362-.18 1.942-.463l1.294 2.359c-1.294.643-2.252 1.927-2.488 3.466h-1.465c-.24-1.535-1.194-2.823-2.488-3.466l1.263-2.36c.58.284 1.263.464 1.942.464Zm-2.66 8.001a2.107 2.107 0 0 0-.988-1.072c.271-.323.409-.751.409-1.215 0-1.072-.855-1.967-1.878-1.967-1.022 0-1.873.895-1.873 1.967 0 .464.172.896.408 1.252-.477.251-.816.607-.988 1.071a3.582 3.582 0 0 1-.614-1.963c0-1.787 1.362-3.215 3.067-3.215 1.706 0 3.068 1.428 3.068 3.215a3.345 3.345 0 0 1-.61 1.927Zm9.242-1.072c.271-.323.408-.751.408-1.215 0-1.072-.854-1.967-1.877-1.967-1.023 0-1.877.895-1.877 1.967 0 .464.171.896.408 1.252-.477.251-.816.607-.988 1.071a3.584 3.584 0 0 1-.614-1.967c0-1.787 1.362-3.215 3.067-3.215 1.706 0 3.068 1.428 3.068 3.215a3.373 3.373 0 0 1-.607 1.931 2.107 2.107 0 0 0-.988-1.072Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.026 12.078c-.927 0-1.765.345-2.423.894l-1.524-1.336c.44-.61.709-1.356.709-2.165 0-.096-.023-.185-.028-.278l2.4-.708a2.45 2.45 0 0 0 2.093 1.182 2.46 2.46 0 0 0 2.46-2.46 2.463 2.463 0 0 0-2.46-2.46 2.465 2.465 0 0 0-2.462 2.46c0 .023.005.04.005.062l-2.339.689a3.724 3.724 0 0 0-3.389-2.205c-1.03 0-1.96.42-2.636 1.098l-1.49-1.277c.182-.328.297-.703.297-1.106a2.307 2.307 0 0 0-4.613 0A2.307 2.307 0 0 0 4.93 6.773c.406 0 .781-.112 1.112-.297L7.71 7.902a3.68 3.68 0 0 0-.359 1.566c0 .792.255 1.526.68 2.131l-1.355 1.328a2.75 2.75 0 0 0-1.742-.633 2.778 2.778 0 0 0-2.776 2.773 2.776 2.776 0 0 0 5.552 0c0-.403-.093-.787-.25-1.134l1.47-1.437a3.69 3.69 0 0 0 4.247.028l1.597 1.4a3.764 3.764 0 0 0-.557 1.958c0 .496.1.964.274 1.398l-1.661.765a2.296 2.296 0 0 0-1.742-.81 2.31 2.31 0 0 0-2.308 2.306 2.307 2.307 0 0 0 4.613 0c0-.118-.017-.23-.034-.342l1.804-.83c.7.805 1.72 1.326 2.866 1.326a3.817 3.817 0 0 0 3.815-3.81 3.822 3.822 0 0 0-3.818-3.807Z"
                />
            </svg>
        );
    }
};

export default IconConnectionsFilled;
