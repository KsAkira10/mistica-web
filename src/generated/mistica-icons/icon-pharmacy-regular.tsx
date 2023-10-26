/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPharmacyRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.12 12.05c1.05.617 1.76 1.773 1.849 3.017.081 1.143-.37 2.196-1.233 2.88-1.073.854-2.437 1.05-3.462 1.05a7.702 7.702 0 0 1-1.456-.131v.078c1.168.185 1.826 1.006 1.826 2.32 0 .321-.26.585-.586.585h-3.52a.585.585 0 0 1-.586-.586c0-1.26.61-2.061 1.695-2.286v-4.675c-1.855-.173-3.28-1.078-4.003-2.473-.018-.005-.035-.008-.053-.01a.25.25 0 0 1-.087-.026C5.29 10.538 4.829 8.22 5.106 6.619c.24-1.39 1.132-2.655 2.448-3.479 3.27-2.042 6.291-.258 6.418-.18.022.012 1.21.659 1.434 1.911.151.854-.171 1.737-.961 2.622a.601.601 0 0 1-.274.17c-.253.076-.684.065-1.068-.206-.482-.34-.773-.99-.868-1.936-.415-.202-1.431-.538-2.846.146-.555.271-.97.535-1.238 1.481-.095.35-.093.72.003 1.07h8.358c.322 0 .586.26.586.586l-.003.88a4.782 4.782 0 0 1-.465 2.036 3.614 3.614 0 0 1 .395.265c.031.023.063.046.095.065ZM6.26 6.82c-.162.947.014 2.214.871 3.177-.011-.134-.022-.269-.022-.409v-.784L7.106 8.8a3.253 3.253 0 0 1-.081-1.978c.358-1.271.975-1.79 1.854-2.215 2.51-1.216 4.205.047 4.275.1a.587.587 0 0 1 .226.435c.051.986.3 1.274.379 1.342.397-.513.563-.984.49-1.401-.118-.69-.852-1.1-.86-1.104h-.001c-.137-.08-2.58-1.491-5.215.157-1.03.647-1.728 1.625-1.913 2.684Zm2.017 2.572v.196c.022 2.636 2.09 3.577 4.014 3.577 1.779 0 3.594-1.201 3.63-3.498v-.275H8.277Zm7.616 8.213c.392-.12.776-.305 1.112-.572.765-.607.826-1.442.796-1.882-.062-.865-.55-1.666-1.272-2.09-.077-.043-.15-.097-.227-.153l-.02-.014a1.618 1.618 0 0 0-.313-.185 3.9 3.9 0 0 1-.336.344c.74.42 1.546 1.14 1.546 2.213 0 1.034-.451 1.756-1.286 2.339Zm-3.075-3.297V17.7c2.689-.882 3.19-1.515 3.19-2.434 0-.742-1-1.274-1.501-1.445-.53.26-1.101.425-1.69.487Zm-1.614 6.373h2.185c-.146-.418-.49-.597-1.092-.597-.603 0-.947.18-1.093.597Z"
            />
        </svg>
    );
};

export default IconPharmacyRegular;
