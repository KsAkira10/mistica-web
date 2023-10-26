/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAirtimeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.956 2.896h.005c.036 0 .072.002.108.004.036.003.072.005.108.005A3.46 3.46 0 0 0 14.849 2H8.517C6.639 2 5.104 3.504 5.009 5.387h7.777c.81-1.481 2.373-2.491 4.17-2.491Zm1.41 14.639v-5.201c-.446.141-.924.219-1.414.214-.55 0-1.081-.095-1.595-.278l-1.886.516-2.063.562 1.054-4.008a4.786 4.786 0 0 1-.104-2.875H5v11.07h13.366ZM14.849 22H8.517c-1.878 0-3.413-1.508-3.508-3.387h13.348C18.262 20.496 16.727 22 14.849 22Zm2.098-10.16a3.953 3.953 0 0 1-1.553-.315l-2.99.818.796-3.04a4.121 4.121 0 0 1-.31-1.58c0-2.268 1.819-4.114 4.057-4.114C19.185 3.609 21 5.45 21 7.713v.032c-.009 2.262-1.824 4.095-4.053 4.095Zm3.004-4.154c-.014-1.66-1.351-3.008-2.986-3.008-1.666 0-3.013 1.367-3.013 3.044 0 .457.095.896.289 1.307l.08.178-.427 1.618 1.594-.434.176.082c.41.192.842.293 1.288.293 1.643 0 2.98-1.348 2.999-3.012v-.068ZM16.434 5.93a.528.528 0 1 1 1.054-.005v1.787a.529.529 0 0 1-.527.535h-1.405a.529.529 0 0 1-.527-.535c0-.297.234-.535.527-.535h.878V5.931Z"
            />
        </svg>
    );
};

export default IconAirtimeFilled;
