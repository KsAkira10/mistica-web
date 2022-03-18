/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPlayRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.944 21.68c.336.212.71.32 1.08.32.369 0 .739-.108 1.045-.284l13.176-8.112c.034 0 .068-.036.102-.072.472-.432.71-1.108.642-1.752a2.044 2.044 0 00-.978-1.572L7.103 2.28c-.642-.396-1.42-.36-2.091.032A1.997 1.997 0 004 4.064v15.9c0 .716.336 1.36.944 1.716zm.743-18.152a.85.85 0 01.404-.108c.098 0 .2.036.302.072l12.98 7.932a.639.639 0 01.302.5.88.88 0 01-.17.5l-13.112 8.04c-.268.144-.57.072-.774-.036-.098-.072-.268-.212-.268-.464v-15.9c0-.284.234-.464.336-.536z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.986 21.821c-3.123 0-5.552-.815-7.218-2.423-1.731-1.666-2.608-4.157-2.608-7.403 0-3.247.877-5.74 2.608-7.41C6.434 2.979 8.866 2.16 11.986 2.16c3.123 0 5.552.815 7.221 2.423 1.734 1.67 2.611 4.162 2.611 7.409 0 3.246-.88 5.737-2.61 7.406-1.67 1.608-4.098 2.423-7.222 2.423zm0-18.571c-5.798 0-8.74 2.94-8.74 8.745 0 5.798 2.942 8.74 8.74 8.74 5.801 0 8.745-2.942 8.745-8.74 0-5.801-2.944-8.745-8.745-8.745zM9.188 16.3a.484.484 0 01-.487-.485V8.133a.484.484 0 01.728-.42l6.652 3.84a.484.484 0 010 .84L9.43 16.236a.501.501 0 01-.241.064zm.485-1.328l5.196-3-5.196-3v6z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPlayRegular;
