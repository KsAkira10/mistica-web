/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowDownRightRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.304 6.668c-.77-.332-1.658-.144-2.26.476l-2.639 2.769-7.341-7.706a.665.665 0 0 0-.965 0 .748.748 0 0 0 0 1.012l7.921 8.314.123.056c.415.188.54.056 1.227-.664L19 8.165a.664.664 0 0 1 .77-.168.638.638 0 0 1 .385.616v11.963H8.826c-.377 0-.534-.292-.58-.42-.09-.236-.099-.593.153-.857l3.156-3.313.054-.128c.137-.356.16-.428-.633-1.28L3.642 6.844a.665.665 0 0 0-.965 0 .748.748 0 0 0 0 1.012l7.342 7.706-2.584 2.713c-.603.632-.778 1.588-.454 2.42.316.8 1.018 1.305 1.837 1.305h12.71V8.6c0-.864-.47-1.608-1.224-1.932Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.486 20.49c.028.002.053.002.079.002.249 0 .473-.09.638-.258a.901.901 0 0 0 .255-.717V7.43c.003-.476-.243-.865-.658-1.044-.445-.19-1.009-.098-1.339.218l-2.588 2.588-4.813-5.115-.014-.014c-.218-.218-.487-.448-.823-.52-.37-.079-.731.041-1.079.36l-.016.018-5.026 5.047c-.736.737-.745 1.577-.016 2.306l.005.005 4.902 4.79-2.378 2.378a.074.074 0 0 1-.014.017c-.328.359-.42.95-.216 1.406.174.384.524.614.944.614l12.157.005Zm-.103-1.076L7.36 19.408c-.014-.062 0-.17.031-.21l2.448-2.448a.973.973 0 0 0-.017-1.376l-.005-.005-4.972-4.857c-.107-.104-.23-.255-.227-.381.003-.101.09-.244.246-.4l5.017-5.037a.605.605 0 0 1 .129-.093c.028.011.104.054.275.222l4.88 5.184.01.012a.97.97 0 0 0 1.376.02l2.65-2.65a.241.241 0 0 1 .176-.009.175.175 0 0 1 .006.05v11.984Z"
                />
            </svg>
        );
    }
};

export default IconArrowDownRightRegular;
