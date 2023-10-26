/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTkLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.845 12.003c0-6.441-3.404-9.848-9.848-9.848-6.438 0-9.842 3.407-9.842 9.848 0 6.438 3.404 9.842 9.842 9.842 6.444 0 9.848-3.404 9.848-9.842Zm-.824 0c0 5.987-3.034 9.021-9.024 9.021-5.984 0-9.021-3.037-9.021-9.021 0-5.99 3.034-9.024 9.021-9.024 5.987 0 9.024 3.034 9.024 9.024ZM11.67 7.1a.31.31 0 0 1 .303.367l-.073.37a.309.309 0 0 1-.302.25H8.983v8.5c0 .17-.138.308-.309.308h-.406a.307.307 0 0 1-.308-.309v-8.5H5.284a.307.307 0 0 1-.308-.308v-.37c0-.17.138-.308.308-.308h6.385Zm7.203 9.755a.31.31 0 0 0 .107-.423l-3.121-5.183 2.886-3.642a.31.31 0 0 0-.241-.501h-.471a.311.311 0 0 0-.241.114l-3.81 4.797V7.414a.307.307 0 0 0-.308-.308h-.401a.307.307 0 0 0-.308.308v9.175c0 .171.137.308.308.308h.4c.171 0 .309-.137.309-.308v-3.017l1.21-1.516 2.802 4.693a.313.313 0 0 0 .266.151h.457a.34.34 0 0 0 .156-.045Z"
            />
        </svg>
    );
};

export default IconTkLight;
