/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAddMoreLocationFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.967 4.043c1.232 1.23 1.885 3.028 1.876 5.216-.008 4.613-5.927 11.58-6.77 12.406a.61.61 0 01-.431.176.592.592 0 01-.432-.176c-.423-.41-1.37-1.51-2.47-3.037-1.272 1.614-3.353 1.802-4.037 1.807-.098.009-.21.009-.316.009h-.171c-1.062-.014-5.056-.395-5.056-5.247 0-4.837 3.955-5.199 5.014-5.207h.367a5 5 0 01-.048-.782c0-2.176.661-3.977 1.908-5.199 1.25-1.221 3.09-1.848 5.294-1.854 2.207.008 4.034.658 5.272 1.888zM16.855 8.6c0 1.303-.821 2.112-2.143 2.112-1.322 0-2.146-.81-2.146-2.112s.82-2.112 2.146-2.112c1.322 0 2.143.81 2.143 2.112zm-5.32 6.628c0-3.423-2.44-3.995-3.89-4.034h-.457c-1.426.014-3.807.546-3.807 4 0 3.47 2.415 4.017 3.849 4.042h.157c.095 0 .201 0 .291-.005 1.434-.026 3.857-.58 3.857-4.003zm-1.437-.63H8.065v-1.98a.605.605 0 00-.611-.603.607.607 0 00-.61.602v1.98h-2.03a.607.607 0 00-.61.603c0 .333.271.602.61.602h2.028v2.009c0 .333.272.602.611.602.336 0 .61-.27.61-.602v-2.009h2.034c.336 0 .61-.269.61-.602a.605.605 0 00-.61-.602z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreLocationFilled;
