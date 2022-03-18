/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconContactBookRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.343 3.164c-.407 0-.793.16-1.081.448a1.523 1.523 0 00-.448 1.084v14.337c0 .995.81 1.806 1.806 1.806h8.87V3.164H7.342zm10.762 16.052c0 .435-.172.83-.45 1.121v-4.782h.45v3.661zm0-4.825V9.61h-.45v4.78h.45zm0-9.603v3.66h-.45V3.666c.278.292.45.687.45 1.122zM16.479 22H7.617a2.97 2.97 0 01-2.967-2.967V4.696c0-.719.28-1.395.788-1.906A2.667 2.667 0 017.343 2h9.136a2.792 2.792 0 012.788 2.788v14.428A2.79 2.79 0 0116.479 22zM9.839 9.467c0-.956.41-1.364 1.359-1.364.956 0 1.364.408 1.364 1.364 0 .952-.408 1.358-1.364 1.358-.952 0-1.358-.408-1.358-1.358zm-1.112 0c0 1.569.902 2.47 2.47 2.47 1.576 0 2.477-.901 2.477-2.47 0-1.575-.901-2.476-2.476-2.476-1.57 0-2.471.9-2.471 2.476zm5.056 5.988H8.627v-.387c0-.57.18-1.52 1.384-1.52h2.388c1.204 0 1.384.95 1.384 1.52v.387zm-5.67 1.034H14.3a.522.522 0 00.52-.517v-.904c0-1.55-.95-2.551-2.417-2.551h-2.388c-1.47 0-2.417 1-2.417 2.55v.905c0 .285.232.517.517.517z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconContactBookRegular;
