/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMobilePauseFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.889 3.11c.641.639.955 1.535.955 2.737v12.305c0 1.216-.314 2.115-.963 2.754-.645.63-1.55.938-2.765.938h-6.21c-1.219 0-2.12-.308-2.762-.938-.577-.566-.888-1.34-.953-2.359v-.549c-.017 0-.035 0-.053.002h-.059c-3.742 0-5.924-1.87-5.924-5.867 0-4 2.182-5.872 5.924-5.872l.05.002.051.001v-.417c0-1.185.314-2.076.955-2.72.653-.653 1.558-.972 2.77-.972h6.21c1.222.003 2.13.314 2.774.955zM8.082 16.796c3.213 0 4.709-1.481 4.709-4.663 0-3.183-1.496-4.667-4.709-4.667-3.21 0-4.706 1.482-4.706 4.667 0 3.182 1.496 4.663 4.706 4.663zm5.877 1.208c0 .319.092.577.274.759.185.188.454.285.78.285.324 0 .593-.097.778-.285.182-.185.274-.44.274-.76 0-.655-.392-1.047-1.053-1.047-.658 0-1.053.392-1.053 1.048zM6.261 9.3c.337 0 .608.269.608.602v4.711a.607.607 0 01-.608.605.605.605 0 01-.607-.605V9.906c0-.334.274-.605.607-.605zm4.06.588a.606.606 0 00-.609-.602.604.604 0 00-.607.602V14.6a.607.607 0 001.216 0V9.89z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobilePauseFilled;
