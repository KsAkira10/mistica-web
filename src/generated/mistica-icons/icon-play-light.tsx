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

const IconPlayLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.998 2.16c3.14 0 5.574.812 7.238 2.417C20.96 6.241 21.838 8.74 21.838 12c.003 6.435-3.4 9.838-9.84 9.838-6.435 0-9.838-3.4-9.838-9.838 0-6.437 3.4-9.84 9.838-9.84zm0 .56C5.843 2.72 2.72 5.843 2.72 12c0 6.154 3.12 9.278 9.278 9.278 6.16 0 9.28-3.12 9.28-9.278.002-6.16-3.12-9.28-9.28-9.28zm-2.91 4.891l7.128 4.115a.26.26 0 010 .448l-7.132 4.118a.26.26 0 01-.257 0 .257.257 0 01-.13-.224V7.835a.26.26 0 01.39-.224zm.128.675v7.33l6.347-3.663-6.347-3.667z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPlayLight;
