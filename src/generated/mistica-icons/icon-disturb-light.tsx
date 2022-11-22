/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDisturbLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M22 21.284a.716.716 0 11-1.432 0 .716.716 0 011.432 0zm-3.503-3.364a1.987 1.987 0 00-.037.036l1.468 1.468a.355.355 0 01-.252.608.357.357 0 01-.252-.104l-1.496-1.496A9.205 9.205 0 0112 20.568c-1.38 0-2.68-.272-3.871-.816l-5.68 1.52a.357.357 0 01-.344-.092.36.36 0 01-.092-.344l1.52-5.68a9.307 9.307 0 01-.816-3.872c0-1.687.416-3.263 1.244-4.675a.354.354 0 01.488-.128c.172.1.228.316.128.488-.76 1.3-1.148 2.752-1.148 4.315 0 1.32.268 2.56.804 3.688.04.076.044.164.024.244l-1.392 5.208 5.204-1.396a.368.368 0 01.244.024 8.573 8.573 0 003.688.804 8.53 8.53 0 005.415-1.936L2.105 2.61a.355.355 0 010-.504c.14-.14.364-.14.504 0l2.716 2.716A9.336 9.336 0 0112 2c2.483 0 4.815.964 6.563 2.716a9.224 9.224 0 012.716 6.567 9.224 9.224 0 01-2.716 6.568c-.021.024-.044.046-.067.069zM12 2.718a8.63 8.63 0 00-6.172 2.608l12.123 12.123a8.536 8.536 0 002.62-6.16c0-4.727-3.844-8.571-8.571-8.571z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDisturbLight;
