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

const IconCowboyLassoRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.103 11.987c-1.289 1.109-3.373 1.935-6.194 2.456a21.62 21.62 0 01-3.064.356c-.157-1.081-1.048-1.678-2.513-1.82a5.168 5.168 0 00-.537-.029c-.827 0-1.463.219-1.877.661-.756-.605-1.238-1.423-1.44-2.512-.3-1.633.165-2.955 1.429-4.042 1.288-1.11 3.37-1.936 6.187-2.457 2.818-.52 5.056-.493 6.659.084 1.565.566 2.476 1.633 2.776 3.264.305 1.63-.163 2.952-1.426 4.039M7.027 16.144c-1.52-.149-1.468-.709-1.428-1.118.039-.398.08-.849 1.196-.849.134 0 .271.009.417.023 1.524.148 1.47.708 1.429 1.12-.04.398-.082.846-1.196.846-.13 0-.272-.008-.418-.022m14.712-8.42c-.381-2.07-1.58-3.482-3.566-4.2-1.807-.65-4.26-.697-7.294-.134-3.034.56-5.311 1.48-6.765 2.734-1.6 1.375-2.216 3.123-1.835 5.196.275 1.496.995 2.653 2.126 3.451-.005.048-.02.09-.022.137-.143 1.496.798 2.292 2.53 2.46.187.02.366.028.537.028.266 0 .507-.028.734-.073.185.33.353.776.233 1.202-.183.638-.964 1.078-1.589 1.336a.613.613 0 00.465 1.134c1.275-.524 2.048-1.243 2.3-2.137.185-.647.062-1.367-.317-2.073a1.89 1.89 0 00.465-.759 22.052 22.052 0 003.395-.378c3.034-.56 5.311-1.48 6.768-2.731 1.597-1.376 2.216-3.123 1.835-5.193"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCowboyLassoRegular;
