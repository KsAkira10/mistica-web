/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMenuLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M2.735 5.752a.575.575 0 01-.58-.568c0-.314.26-.569.58-.569h18.53c.319 0 .579.255.579.569 0 .313-.26.568-.58.568H2.734zM21.26 11.43c.32 0 .58.255.58.569 0 .313-.26.568-.58.568H2.735a.575.575 0 01-.58-.568c0-.314.26-.569.58-.569H21.26zm.58 7.384a.575.575 0 00-.58-.569H2.735c-.32 0-.58.255-.58.569 0 .314.26.569.58.569H21.26c.32 0 .58-.255.58-.57z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMenuLight;
