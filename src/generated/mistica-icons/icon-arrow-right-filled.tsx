/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowRightFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2 15.871h7.858v3.875c0 .885.428 1.696 1.284 2.068.284.112.572.186.824.186.536 0 1.072-.223 1.464-.591L22 11.996l-8.574-9.38c-.608-.628-1.5-.777-2.284-.442-.856.368-1.284 1.183-1.284 2.068v3.875H2v7.754z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.033 21.84c-.15 0-.3-.029-.44-.085-.434-.176-.7-.602-.694-1.106l-.003-3.65c-.011-.02-.022-.04-.039-.056l-6.882-.02c-.617.009-1.07-.146-1.384-.468-.314-.322-.46-.776-.443-1.392v-6.04C2.14 8.604 2.18 8 2.585 7.58c.406-.42 1.009-.48 1.426-.488l6.72.003a.454.454 0 00.157-.053l-.009-3.56v-.006c.006-.857.415-1.149.659-1.247.417-.168.899-.014 1.322.42l8.658 8.712c.087.084.336.33.333.69a.82.82 0 01-.274.593L13.1 21.349c-.306.32-.692.49-1.068.49z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowRightFilled;
