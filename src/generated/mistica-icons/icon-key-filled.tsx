'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconKeyFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.71 11.66a.41.41 0 0 1 .131.302.43.43 0 0 1-.129.308l-1.94 1.86a.414.414 0 0 1-.583-.009l-1.25-1.255-.73 1.18a.41.41 0 0 1-.334.196.37.37 0 0 1-.35-.163l-.902-1.173-.801 1.156a.42.42 0 0 1-.342.18H9.83l-.062.137c-.563 1.126-1.784 1.723-3.532 1.723-2.633 0-4.081-1.457-4.081-4.101S3.603 7.9 6.236 7.9c2.104 0 3.101.922 3.572 1.79h9.638c.107 0 .208.04.286.112zM5.735 12.703c-.502 0-.698-.196-.698-.7 0-.505.194-.7.698-.7s.697.195.697.7-.196.7-.697.7m-1.532-.7c0 .963.574 1.537 1.532 1.537s1.532-.574 1.532-1.537c0-.964-.571-1.538-1.532-1.538-.958 0-1.532.577-1.532 1.538"
            />
        </svg>
    );
};

export default IconKeyFilled;
