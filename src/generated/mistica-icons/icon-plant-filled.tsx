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

const IconPlantFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.667 9.533a12.265 12.265 0 00-.849 2.179h3.717c.81 0 1.468.65 1.468 1.442v1.482c0 .68-.487 1.247-1.129 1.404H7.14c-.641-.146-1.137-.723-1.137-1.404v-1.482c0-.792.661-1.442 1.468-1.442h3.759c-.182-1.62-.53-2.835-.916-3.734.199-.104.387-.235.56-.39l.118-.131c.445.964.832 2.238 1.047 3.938.239-.776.544-1.602.956-2.372l.008.008.025.025c.177.2.4.345.639.477.602-1.169 1.442-2.163 2.597-2.493a.413.413 0 00.29-.505c0-.002 0-.005-.002-.005a.415.415 0 00-.518-.275c-1.37.39-2.35 1.49-3.042 2.77l-.213-.274c-.339-.527-.501-1.16-.501-1.902-.003-1.966 1.142-3.092 3.145-3.092h1.846c.717 0 1.294.574 1.294 1.271l-.017 2.107c-.114 1.815-1.22 2.804-3.126 2.804-.697-.003-1.274-.14-1.753-.406zm-3.353-1.558c-.487.252-1.056.381-1.723.381-1.913 0-3.028-.994-3.134-2.81l-.009-.016-.008-.12V3.44c0-.706.585-1.28 1.303-1.28h1.854c2.028 0 3.148 1.1 3.148 3.1 0 .827-.207 1.508-.619 2.034l-.14.16c-1.103-2.398-2.571-2.826-2.67-2.851a.411.411 0 00-.503.29.406.406 0 00.288.502c.02.006 1.255.4 2.213 2.58zm-2.96 9.065h9.304l-.378 3.593c0 .639-.585 1.216-1.31 1.216H9.027a1.294 1.294 0 01-1.302-1.28l-.373-3.53z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPlantFilled;
