/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataCentreRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.246 2H8.524v2.5H6.092v2.501H3.66V22h11.808V9.145c0-1.18-.938-2.144-2.085-2.144H7.479v-1.07h8.335c.383 0 .694.32.694.714v12.141c0 .393.311.713.693.713.383 0 .694-.32.694-.713V6.645c0-1.18-.938-2.144-2.085-2.144h-5.9V3.43h8.336c.382 0 .694.32.694.713v12.142c0 .393.31.713.693.713.382 0 .694-.32.694-.713V4.144C20.33 2.964 19.393 2 18.247 2zm-4.165 13.93H5.05v-3.215h9.03v3.214zm-9.03 1.073h9.03v3.57H5.05v-3.57zm9.03-7.858v2.5H5.05V8.433h8.336c.382 0 .694.32.694.713zm-5.557 1.431H6.612a.544.544 0 01-.52-.535c0-.283.244-.535.52-.535h1.912c.275 0 .52.252.52.535a.544.544 0 01-.52.535zM6.612 14.86h1.912c.275 0 .52-.252.52-.535a.544.544 0 00-.52-.535H6.612a.544.544 0 00-.52.535c0 .283.244.535.52.535zm1.912 4.283H6.612a.544.544 0 01-.52-.535c0-.284.244-.535.52-.535h1.912c.275 0 .52.252.52.535a.544.544 0 01-.52.535z"
            />
        </svg>
    );
};

export default IconDataCentreRegular;
