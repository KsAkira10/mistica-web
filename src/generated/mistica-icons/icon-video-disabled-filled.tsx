/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVideoDisabledFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.375 6.734a.367.367 0 01.4-.076c.136.062.22.194.225.341v10.369a.372.372 0 01-.371.37.37.37 0 01-.254-.104l-5.26-5.126v2.954l5.538 5.59a.559.559 0 010 .787.545.545 0 01-.39.161.545.545 0 01-.39-.161L2.162 2.95a.559.559 0 010-.787.546.546 0 01.78 0l4.433 4.475h8.383c.198 0 .357.161.357.36v4.86l5.26-5.125zm-6.04 11L4.352 6.643v-.005h-1.8a.358.358 0 00-.356.36v10.374c0 .199.16.36.357.36h12.784z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVideoDisabledFilled;
