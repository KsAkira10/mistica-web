/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVoicemailLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.857 9.181A2.497 2.497 0 0120 11.644a2.478 2.478 0 01-2.495 2.495h-6.25a2.485 2.485 0 01-2.5-2.499 2.485 2.485 0 012.5-2.499 2.483 2.483 0 012.499 2.5 2.48 2.48 0 01-.752 1.782h2.751a2.452 2.452 0 01-.752-1.783 2.5 2.5 0 012.144-2.463V6.282H5.715v11.436h7.503c.212 0 .356.144.356.356 0 .211-.14.355-.356.355H5.716v.356a2.482 2.482 0 002.5 2.5h6.433c1.392 0 2.5-1.104 2.5-2.5v-3.57c0-.212.14-.356.356-.356.212 0 .356.14.356.356v3.57A3.202 3.202 0 0114.645 22h-6.43A3.202 3.202 0 015 18.785V5.215A3.202 3.202 0 018.215 2h6.426a3.202 3.202 0 013.216 3.215V9.18zM5.716 5.215v.356h11.429v-.356a2.482 2.482 0 00-2.5-2.5h-6.43a2.482 2.482 0 00-2.5 2.5zm5.534 8.212c1 0 1.784-.783 1.784-1.783 0-1-.784-1.783-1.784-1.783s-1.783.784-1.783 1.783c0 1 .784 1.783 1.783 1.783zm6.247-3.566c-1 0-1.784.784-1.784 1.783 0 1 .788 1.783 1.788 1.783s1.78-.783 1.78-1.783c0-1-.785-1.783-1.784-1.783z"
                fill={fillColor}
            />
            <path d="M16.073 18.07a.716.716 0 11-1.431 0 .716.716 0 011.431 0z" fill={fillColor} />
        </svg>
    );
};

export default IconVoicemailLight;
