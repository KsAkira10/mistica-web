'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOpenEmailRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.02 7.71c.376.263.793.77.816 1.773 0 0-.009 9.8-.006 9.804.025.218.059.899-.403 1.456-.25.3-.734.661-1.628.678-.745.012-4.333.012-6.521.011H9.654c-2.633 0-4.95-.003-5.454-.011-.896-.02-1.381-.378-1.63-.678-.463-.557-.426-1.238-.4-1.456l-.01-9.788c.023-1.016.443-1.523.788-1.773l7.417-4.683c.042-.034.698-.482 1.625-.482a3.07 3.07 0 0 1 1.67.502zm-9.966-3.645L3.645 8.746c-.143.104-.238.38-.246.767v.003l7.512 4.734.002.001c.044.03.438.293.96.293.327-.003.646-.103.918-.288l7.795-4.86c-.022-.32-.112-.56-.263-.667l-7.358-4.647a1.8 1.8 0 0 0-.961-.288 1.84 1.84 0 0 0-.95.271m8.723 16.124c.232-.006.543-.048.695-.233.161-.194.128-.502.126-.528v-.001l-.009-.104.009-8.482-7.138 4.448a2.87 2.87 0 0 1-1.588.485 3 3 0 0 1-1.66-.51l-6.813-4.291.005 8.403-.008.05s-.04.334.132.536c.154.179.462.224.694.227.664.01 4.577.01 8.157.01h.042c4.084.004 6.765 0 7.356-.01"
            />
        </svg>
    );
};

export default IconOpenEmailRegular;
