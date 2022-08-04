/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPauseFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2zm-1.965 14.465A.532.532 0 019.5 17a.533.533 0 01-.535-.535v-8.93c0-.297.238-.535.535-.535.297 0 .535.238.535.535v8.93zM14.5 17a.532.532 0 01-.535-.535v-8.93c0-.297.238-.535.535-.535.297 0 .535.238.535.535v8.93A.532.532 0 0114.5 17z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.218 4.593c-1.67-1.608-4.098-2.423-7.222-2.423-3.123 0-5.552.815-7.218 2.426-1.731 1.67-2.608 4.162-2.608 7.409 0 3.246.877 5.736 2.608 7.406 1.666 1.608 4.095 2.423 7.218 2.423s5.552-.815 7.222-2.423c1.73-1.67 2.61-4.16 2.61-7.406 0-3.247-.88-5.743-2.61-7.412zM9.792 15.814c0 .308-.238.56-.532.56a.547.547 0 01-.533-.56V8.167c0-.308.238-.56.533-.56.294 0 .532.252.532.56v7.647zm4.96.569c-.29 0-.529-.252-.529-.56V8.176c0-.309.238-.56.53-.56.29 0 .529.251.529.56v7.647c0 .308-.238.56-.53.56z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPauseFilled;
