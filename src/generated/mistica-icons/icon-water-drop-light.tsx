/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWaterDropLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M5 13.72c0 3.332 2.679 6.045 5.969 6.045 3.29 0 5.968-2.713 5.968-6.049 0-.928-.202-1.816-.611-2.667l-2.989-5.23a.35.35 0 00-.48-.127.36.36 0 00-.127.487l2.976 5.207c.35.732.53 1.515.53 2.335 0 2.94-2.364 5.334-5.268 5.334-2.903 0-5.267-2.394-5.267-5.334a5.3 5.3 0 01.517-2.313l5.052-8.875a.364.364 0 00-.13-.487.354.354 0 00-.482.132l-5.056 8.898A6.025 6.025 0 005 13.721zm7.155-8.606a.707.707 0 00.701-.71.707.707 0 00-.7-.71.707.707 0 00-.702.71c0 .39.314.71.701.71zM18.65 17.38h-1.402c-.211 0-.35.141-.35.355s.139.355.35.355h1.402c.212 0 .351-.14.351-.355 0-.214-.14-.355-.35-.355zm-2.21 1.53a.336.336 0 00-.49 0 .347.347 0 000 .496l.984.996a.369.369 0 00.247.105.392.392 0 00.247-.105.347.347 0 000-.496l-.989-.996zm-2 1.315c0-.214.139-.355.35-.355.211 0 .35.14.35.355v1.42c0 .214-.139.355-.35.355-.211 0-.35-.141-.35-.355v-1.42z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.977 2.151a.41.41 0 01.288.12c1.362 1.373 6.698 8.25 6.706 12.527.014 4.398-2.585 7.028-6.95 7.042h-.033c-2.143 0-3.908-.636-5.106-1.834-1.205-1.208-1.846-2.995-1.852-5.166-.014-4.325 5.3-11.201 6.658-12.568a.42.42 0 01.289-.12zm.011 18.866h.034c3.969-.011 6.148-2.221 6.14-6.216-.011-3.753-4.633-9.89-6.185-11.639-1.546 1.746-6.143 7.88-6.132 11.675.009 1.978.55 3.521 1.614 4.586 1.056 1.056 2.582 1.594 4.529 1.594z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWaterDropLight;
