/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSniperScopeRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.887 11.614h1.347a.602.602 0 110 1.205H19.86c-.446 6.087-5.597 6.857-7.208 6.944v1.476a.604.604 0 01-.604.602.604.604 0 01-.606-.602v-1.473c-1.61-.079-6.745-.835-7.207-6.947h-1.48a.604.604 0 01-.605-.602c0-.334.272-.603.605-.603h1.448c.174-6.714 5.659-7.417 7.238-7.479V2.757c0-.333.272-.602.605-.602.334 0 .606.269.606.602V4.15c1.691.107 7.036.972 7.235 7.465zm-7.236 4.81v2.134c1.642-.092 5.592-.837 6.006-5.74H16.4a.604.604 0 01-.605-.601c0-.334.272-.603.605-.603h2.28c-.181-5.302-4.3-6.145-6.025-6.26v2.218a.604.604 0 01-.605.603.604.604 0 01-.605-.603V5.34c-1.644.064-5.868.779-6.03 6.274h2.179a.604.604 0 110 1.204H5.44c.426 4.928 4.365 5.66 6 5.743v-2.137c0-.333.272-.602.605-.602.334 0 .606.269.606.602z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSniperScopeRegular;
