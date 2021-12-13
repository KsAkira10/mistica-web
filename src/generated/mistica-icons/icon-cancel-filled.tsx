/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCancelFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2zm4.664 13.912a.534.534 0 01-.38.912.535.535 0 01-.38-.152l-3.912-3.912-3.912 3.912a.535.535 0 01-.38.152.534.534 0 01-.38-.912L11.232 12 7.336 8.088a.534.534 0 010-.76.534.534 0 01.76 0l3.912 3.912 3.912-3.912a.534.534 0 01.76 0 .534.534 0 010 .76L12.768 12l3.896 3.912z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.362 16.395a.688.688 0 11-.973.974l-4.395-4.395-4.383 4.382a.682.682 0 01-.485.2.688.688 0 01-.485-1.174L11.023 12 6.641 7.618a.684.684 0 010-.97c.27-.27.704-.27.97 0l4.383 4.382 4.395-4.399a.688.688 0 11.973.974L12.964 12l4.398 4.395zM11.997 1C5.047 1 1 4.51 1 12.003 1 19.497 5.048 23 11.997 23 18.947 23 23 19.497 23 12.003S18.946 1 11.997 1z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCancelFilled;
