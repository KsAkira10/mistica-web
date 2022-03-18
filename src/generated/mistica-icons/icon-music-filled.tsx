/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMusicFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M22 2.755a.8.8 0 00-.29-.604.68.68 0 00-.652-.113L8.35 5.822a.722.722 0 00-.544.718v9.646a3.42 3.42 0 00-2.178-.755C3.63 15.43 2 17.134 2 19.21S3.627 23 5.624 23s3.628-1.703 3.628-3.78V7.11L20.51 3.741v9.042a3.42 3.42 0 00-2.178-.755c-1.997 0-3.628 1.704-3.628 3.78 0 2.077 1.635 3.78 3.628 3.78s3.628-1.703 3.628-3.78C22 15.771 22 2.755 22 2.755z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.624 5.702a1.06 1.06 0 00-.966-1.048l-9.286-2.482-.165-.022a1.07 1.07 0 00-.984.644 1.046 1.046 0 00-.084.41v8.254c-.621-.46-1.383-.678-2.098-.694-.09-.003-.196-.003-.297-.003-1.543.014-3.344.924-3.344 3.448 0 2.52 1.812 3.442 3.361 3.465h.115c.062 0 .12 0 .171-.003 1.485-.025 3.188-.885 3.333-3.148h.028V5.94l8.953 2.445v7.233c-.622-.46-1.39-.678-2.104-.695l-.291-.003c-1.544.014-3.345.925-3.345 3.449 0 2.52 1.813 3.442 3.362 3.465h.114c.062 0 .12 0 .171-.003 1.55-.028 3.362-.947 3.362-3.448 0-.05-.012-.09-.014-.138h.014V5.702h-.006z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMusicFilled;
