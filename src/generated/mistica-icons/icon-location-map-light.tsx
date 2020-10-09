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

const IconLocationMapLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.295 19.159l3.498 1.543-1.966-6.878-2.255 1.127.017.092.706 4.116zM5.38 13.84l-2.157 6.853 3.499-1.518.496-4.295-1.838-1.04zm6.225 4.575c-.558-.585-1.684-1.98-2.78-3.67l-.798.23-.016.14-.465 4.068 4.04 1.656.019-2.424zM8.265 4.274c-.876.87-1.324 2.134-1.327 3.76-.011 3.092 3.72 8.077 5.053 9.592 1.34-1.518 5.09-6.505 5.1-9.562.01-3.278-1.788-5.085-5.063-5.093h-.025c-1.611 0-2.869.437-3.737 1.303zm7.489 10.76l-.639-.201c-1.056 1.605-2.129 2.936-2.692 3.536l-.017 2.454 4.06-1.625-.712-4.163zm3.728-1.91l2.342 8.192a.41.41 0 01-.56.487l-4.334-1.91-4.782 1.916a.435.435 0 01-.246.02l-.115-.028-4.664-1.905-4.399 1.91a.41.41 0 01-.555-.501l2.58-8.192a.408.408 0 01.595-.233l2.364 1.337.664-.194c-1.21-1.986-2.258-4.239-2.255-5.992.006-1.824.549-3.323 1.569-4.337 1.017-1.012 2.51-1.544 4.32-1.544h.027c3.69.011 5.889 2.224 5.878 5.917-.006 1.76-1.096 4.046-2.337 6.049l.505.162 2.824-1.409a.418.418 0 01.347-.008c.115.05.196.145.232.263zM10.69 7.697c0 .88.445 1.325 1.325 1.325.88 0 1.325-.445 1.325-1.325 0-.88-.445-1.325-1.325-1.325-.877 0-1.325.446-1.325 1.325zm3.47 0c0 1.323-.823 2.146-2.145 2.146S9.87 9.023 9.87 7.697c0-1.325.82-2.146 2.143-2.146 1.322 0 2.146.824 2.146 2.146z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLocationMapLight;
