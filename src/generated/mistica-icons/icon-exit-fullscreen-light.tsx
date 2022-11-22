/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconExitFullscreenLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M8.245 2.155a.58.58 0 01.58.577v5.513a.59.59 0 01-.578.58H2.735a.579.579 0 110-1.157h4.933V2.735c0-.322.257-.58.577-.58zm.58 13.594a.578.578 0 00-.58-.577s-5.51 0-5.51-.003a.58.58 0 100 1.16h4.93v4.933a.581.581 0 001.16 0v-5.513zm13.016.003a.58.58 0 00-.58-.58h-5.515c-.32 0-.577.26-.577.58v5.512a.581.581 0 001.16 0v-4.933h4.932c.32 0 .58-.26.58-.58zm-6.67-7.505c0 .32.261.578.58.578v.002h5.51a.581.581 0 000-1.16H16.33V2.736a.579.579 0 10-1.157 0v5.512z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExitFullscreenLight;
