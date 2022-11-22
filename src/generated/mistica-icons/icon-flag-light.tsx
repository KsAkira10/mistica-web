/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFlagLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.166 7.174a.362.362 0 00.003.51l3.168 3.16c.303.386.348.845.152 1.237a1.146 1.146 0 01-1.031.636H4.175v8.731c0 .216-.18.39-.395.39a.394.394 0 01-.395-.393V3.29c0-.628.515-1.138 1.148-1.138h14.925a1.14 1.14 0 011.03.636c.197.39.152.857-.117 1.199l-3.204 3.188zm2.292 4.759a.35.35 0 00.322-.2.348.348 0 00-.036-.374l-3.138-3.127a1.143 1.143 0 010-1.61l3.168-3.151c.087-.12.034-.278.003-.337a.353.353 0 00-.322-.198H4.531a.357.357 0 00-.359.355v8.642h15.286z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFlagLight;
