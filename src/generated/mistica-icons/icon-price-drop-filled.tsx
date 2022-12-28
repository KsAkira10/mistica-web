/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPriceDropFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.722 12.002a.35.35 0 01-.35-.35v-.276a2.889 2.889 0 01-1.364-.497.423.423 0 01-.196-.364.411.411 0 01.417-.41.511.511 0 01.266.085c.292.194.586.316.877.366V9.018c-1.182-.2-1.437-.906-1.437-1.472 0-.863.555-1.452 1.437-1.558v-.277a.35.35 0 01.7 0v.288c.357.048.686.16.956.325.204.126.235.292.235.378 0 .222-.18.404-.404.404a.54.54 0 01-.238-.065l-.005-.002c-.184-.1-.363-.17-.544-.213v1.45c1.212.2 1.474.917 1.474 1.496 0 .48-.177.883-.507 1.171-.248.213-.577.353-.967.413v.299a.35.35 0 01-.35.347zM9.72 9.8c0-.27-.085-.534-.647-.673v1.41c.407-.1.647-.364.647-.737zM8.372 6.805c-.387.078-.61.33-.61.704 0 .167 0 .488.61.654V6.805z"
            />
            <path
                fill={fillColor}
                d="M20.168 14.526a.559.559 0 00-.521-.356H16.93V3.532c0-.855-.533-1.387-1.387-1.387H9.535c-.846 0-1.373.532-1.373 1.387v.257c-1.291.09-2.317.493-3.056 1.208-.877.843-1.32 2.092-1.32 3.711 0 1.62.443 2.866 1.32 3.711.74.712 1.765 1.118 3.056 1.208v.543H5.445a.56.56 0 00-.378.975l7.1 6.557a.557.557 0 00.76 0l7.098-6.56a.56.56 0 00.143-.616zM4.908 8.708c0-2.569 1.246-3.818 3.814-3.818 2.569 0 3.815 1.25 3.815 3.818 0 2.569-1.249 3.815-3.815 3.815s-3.815-1.246-3.815-3.815z"
            />
        </svg>
    );
};

export default IconPriceDropFilled;
