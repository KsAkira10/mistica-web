/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMobilePauseRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.886 3.107c.642.639.955 1.535.955 2.737v12.305c0 1.216-.313 2.118-.963 2.754-.645.63-1.55.938-2.765.938h-6.207c-1.219 0-2.12-.308-2.762-.938-.577-.566-.888-1.34-.953-2.359v-.549l-.053.002-.059.001c-3.742.003-5.924-1.868-5.924-5.865 0-4 2.182-5.872 5.924-5.872l.05.002.051.001v-.417c0-1.185.314-2.076.955-2.72.653-.656 1.558-.972 2.77-.972h6.21c1.22 0 2.127.31 2.771.952zm-.263 2.74c0-.869-.196-1.488-.6-1.888-.406-.403-1.03-.597-1.91-.597h-6.207c-.869 0-1.493.2-1.905.61-.406.41-.605 1.02-.605 1.875v.501c2.933.41 4.61 2.283 4.61 5.785 0 3.501-1.672 5.37-4.602 5.781v.594c.045.675.238 1.19.594 1.538.4.395 1.025.588 1.905.588h6.21c.88 0 1.501-.193 1.905-.588.409-.398.605-1.02.605-1.897V5.847zm-7.835 6.283c0-3.182-1.496-4.667-4.709-4.667-3.21 0-4.705 1.482-4.705 4.667 0 3.182 1.495 4.664 4.705 4.664 3.213 0 4.71-1.482 4.71-4.664zM16.06 18c0-.655-.392-1.047-1.05-1.047-.659 0-1.051.392-1.057 1.048 0 .32.093.574.275.759.185.188.454.286.779.286s.593-.098.778-.286c.182-.182.275-.44.275-.76zM6.259 9.299c.336 0 .608.269.608.602v4.712a.607.607 0 01-1.216 0v-4.71a.61.61 0 01.608-.604zm4.059.585a.606.606 0 00-.608-.602.607.607 0 00-.608.605v4.709a.608.608 0 001.216 0V9.883z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobilePauseRegular;
