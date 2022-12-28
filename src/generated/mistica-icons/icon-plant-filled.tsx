/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPlantFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.314 7.97c-.488.252-1.056.381-1.723.381-1.913 0-3.028-.994-3.134-2.81l-.009-.016-.008-.12v-1.97c0-.706.585-1.28 1.302-1.28h1.855c2.028 0 3.148 1.1 3.148 3.1 0 .827-.207 1.508-.619 2.034l-.14.16c-1.103-2.398-2.571-2.826-2.67-2.851a.411.411 0 00-.504.29.406.406 0 00.289.502c.02.006 1.255.4 2.213 2.58zm3.353 1.558a12.265 12.265 0 00-.849 2.179h3.717c.81 0 1.468.65 1.468 1.442v1.482c0 .68-.487 1.247-1.129 1.404H7.14c-.641-.146-1.137-.723-1.137-1.404V13.15c0-.792.661-1.442 1.468-1.442h3.759c-.182-1.62-.53-2.835-.916-3.734.199-.104.386-.235.56-.39l.118-.131c.445.963.832 2.238 1.047 3.938.239-.776.544-1.602.956-2.372l.033.033c.177.2.4.345.639.477zm0 0c.602-1.169 1.442-2.163 2.597-2.493a.413.413 0 00.29-.505c0-.002 0-.005-.002-.005a.415.415 0 00-.518-.275c-1.37.39-2.35 1.49-3.042 2.77l-.213-.274c-.34-.527-.502-1.16-.502-1.902-.002-1.966 1.143-3.092 3.146-3.092h1.846c.717 0 1.294.574 1.294 1.271l-.017 2.107c-.114 1.815-1.22 2.804-3.126 2.804-.697-.003-1.274-.14-1.753-.406zm2.991 7.507H7.353l.373 3.529c0 .706.585 1.28 1.302 1.28h5.941c.726 0 1.311-.577 1.311-1.216l.378-3.593z"
            />
        </svg>
    );
};

export default IconPlantFilled;
