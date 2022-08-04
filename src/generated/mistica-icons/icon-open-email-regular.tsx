/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOpenEmailRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.02 7.71c.376.263.793.77.816 1.773 0 0-.009 9.8-.006 9.804.025.218.059.899-.403 1.456-.25.3-.734.661-1.628.678-.745.012-4.333.012-6.521.011H9.654c-2.633 0-4.95-.003-5.454-.011-.896-.02-1.381-.378-1.63-.678-.463-.557-.426-1.238-.4-1.456l-.01-9.788c.023-1.016.443-1.523.788-1.773l7.417-4.683c.042-.034.698-.482 1.625-.482a3.071 3.071 0 011.67.502l7.36 4.647zm-9.966-3.645L3.645 8.746c-.143.104-.238.38-.246.767v.003l7.512 4.734.002.001c.044.03.438.293.96.293.327-.003.646-.103.918-.288l7.795-4.86c-.022-.32-.112-.56-.263-.667l-7.358-4.647a1.804 1.804 0 00-.961-.288 1.84 1.84 0 00-.95.271zm8.723 16.123c.232-.005.543-.047.695-.232.161-.194.128-.502.126-.528v-.001l-.009-.104.009-8.482-7.138 4.448a2.868 2.868 0 01-1.588.485 2.979 2.979 0 01-1.66-.51l-6.813-4.291.005 8.403-.008.05s-.04.334.132.536c.154.179.462.224.694.227.664.01 4.577.01 8.157.01h.042c4.084.004 6.765 0 7.356-.01z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOpenEmailRegular;
