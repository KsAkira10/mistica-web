/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconEuroSymbolFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.61 18.966c-.285-.635-1.002-.913-1.604-.61-1.009.501-2.28.753-3.774.753-3.33 0-5.411-1.25-6.333-3.753h4.883c.669 0 1.204-.572 1.204-1.275s-.538-1.271-1.204-1.271H8.395c-.02-.325-.059-.634-.059-.984 0-.09.014-.162.017-.249h5.429c.669 0 1.204-.571 1.204-1.274 0-.704-.538-1.272-1.204-1.272h-5.11c.768-2.995 2.919-4.485 6.56-4.485 1.477 0 2.734.25 3.737.737.605.3 1.322.017 1.6-.62.28-.638.016-1.394-.589-1.691C18.658 2.328 17.062 2 15.235 2c-5.05 0-8.179 2.476-9.05 7.036H4.896c-.666 0-1.204.572-1.204 1.272 0 .703.538 1.275 1.204 1.275h1.04c0 .084-.009.162-.009.249 0 .336.014.661.034.983H4.896c-.666 0-1.204.569-1.204 1.272 0 .703.538 1.274 1.204 1.274h1.449c1.058 4.087 4.12 6.297 8.89 6.297 1.855 0 3.468-.333 4.801-.997.603-.3.858-1.059.575-1.695"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEuroSymbolFilled;
