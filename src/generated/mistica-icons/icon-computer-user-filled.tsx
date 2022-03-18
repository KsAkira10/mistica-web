/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconComputerUserFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.32 11.199c-1.407 0-2.519-.39-3.306-1.154-.818-.799-1.235-1.955-1.235-3.437 0-1.482.414-2.639 1.232-3.443.787-.77 1.9-1.162 3.305-1.162 1.407 0 2.521.39 3.311 1.16.824.803 1.241 1.96 1.241 3.442 0 1.482-.417 2.639-1.24 3.44-.788.764-1.902 1.154-3.309 1.154zm11.366 2.54c0-.652-.176-1.162-.53-1.51-.36-.358-.904-.54-1.613-.543l-9.036.006c-.703 0-1.244.182-1.608.54-.35.35-.53.858-.53 1.513v4.115c0 .658.18 1.168.53 1.521.367.367.908.552 1.61.552l9.037-.006c.706 0 1.247-.185 1.61-.552.354-.353.53-.865.53-1.52v-4.116zm-.092 7.356a.601.601 0 00-.61-.594H9.181a.603.603 0 00-.61.594.6.6 0 00.61.594h11.801c.336 0 .61-.266.61-.594zm-13.458-9.02l.004-.005v.006h-.004zm-.472 1.707c0-.681.161-1.25.472-1.706H7.43c-1.704 0-3.112.512-4.073 1.487C2.468 14.459 2 15.689 2 17.118v1.33c0 .577.485 1.048 1.081 1.048h4.98c-.26-.443-.397-.975-.397-1.6v-4.115z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconComputerUserFilled;
