/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLocationLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.253 21.888A.31.31 0 0012.5 22a.347.347 0 00.247-.116C13.024 21.588 19 14.661 19 9.219c0-.592-.068-1.185-.175-1.74a.359.359 0 00-.421-.297c-.209.036-.315.26-.281.444.102.52.175 1.037.175 1.593 0 4.554-4.636 10.444-5.798 11.853-1.158-1.409-5.798-7.3-5.798-11.853 0-3.702 2.495-6.479 5.798-6.479 1.55 0 2.916.553 3.971 1.665.137.148.35.148.49 0a.369.369 0 000-.516A6.18 6.18 0 0012.5 2C8.81 2 6 5.113 6 9.223c0 5.442 5.972 12.369 6.253 12.665zM17.77 6.442c.388 0 .702-.332.702-.74 0-.41-.314-.74-.702-.74-.388 0-.703.33-.703.74 0 .408.315.74.703.74z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 9.152c.014-4.465-2.596-7.138-6.98-7.152h-.031C7.627 2 5.014 4.655 5 9.11c-.014 4.39 5.318 11.38 6.685 12.767l.006.005a.4.4 0 00.573-.006c1.367-1.391 6.722-8.378 6.736-12.724zm-.819-.003c-.01 3.82-4.648 10.05-6.206 11.825-1.553-1.773-6.168-8.005-6.157-11.859.012-4.053 2.202-6.281 6.17-6.281h.032c3.985.011 6.173 2.254 6.162 6.315zM12 10.407c1.094 0 1.673-.589 1.673-1.705 0-1.115-.58-1.704-1.673-1.704-1.094 0-1.676.589-1.676 1.704 0 1.116.58 1.705 1.676 1.705zm2.492-1.705c0-1.588-.931-2.538-2.492-2.538-1.56 0-2.492.95-2.492 2.538 0 1.588.931 2.539 2.492 2.539 1.56 0 2.492-.95 2.492-2.539z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconLocationLight;
