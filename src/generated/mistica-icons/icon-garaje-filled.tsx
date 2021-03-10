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

const IconGarajeFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M7.854 21.686v-2.05h7.95v2.05h-7.95zm0-3.131V16.5h7.947v2.054H7.854zm0-3.258v-2.053h7.947v2.053H7.854zm13.41-4.734c.408.4.532.97.324 1.479-.232.566-.81.933-1.47.933h-.745v7.274c0 .793-.704 1.434-1.57 1.434h-.77v-9.03a.616.616 0 00-.616-.617H7.238a.616.616 0 00-.616.617v9.033h-.857c-.866 0-1.569-.644-1.569-1.434v-7.274h-.625c-.66 0-1.238-.367-1.47-.933-.21-.513-.087-1.081.322-1.482l8.274-8.106c.62-.608 1.673-.608 2.292 0l8.274 8.106z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGarajeFilled;
