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

const IconShieldCheckedOkRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.28 14.294c.364-2.134.423-6.75.431-8.479-1.68.081-2.733-.613-3.75-1.294-1.009-.675-1.961-1.314-3.667-1.317h-.006c-1.705 0-2.658.64-3.669 1.317-1.014.678-2.056 1.373-3.748 1.294.009 1.728.067 6.345.437 8.48.412 2.386 4.958 5.108 6.983 6.12 2.028-1.012 6.58-3.74 6.99-6.12zm1.625-9.154c0 .269.02 6.616-.448 9.361-.622 3.611-7.611 6.986-7.908 7.13a.582.582 0 01-.51-.004c-.297-.14-7.28-3.518-7.902-7.126-.476-2.745-.46-9.092-.456-9.361a.597.597 0 01.74-.583c1.613.255 2.464-.319 3.543-1.042C9.025 2.804 10.227 2 12.29 2h.009c2.064.003 3.263.807 4.325 1.518 1.078.723 1.932 1.294 3.565 1.04a.615.615 0 01.715.582zm-10.101 8.585l4.983-5.042a.592.592 0 01.843 0 .607.607 0 010 .852l-5.403 5.468a.591.591 0 01-.84 0L7.96 12.546a.607.607 0 010-.851.592.592 0 01.843 0l2 2.03z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconShieldCheckedOkRegular;
