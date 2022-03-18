/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTachometerFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.667 19.352l.677.648h-4.79l-.105-.181A10.733 10.733 0 012 14.419C2 8.676 6.484 4 12 4a9.68 9.68 0 015.58 1.776l-3.72 2.229a6.19 6.19 0 00-1.86-.29c-3.542 0-6.426 3.004-6.426 6.694a6.85 6.85 0 002.093 4.943zM20.291 8.605l-2.14 3.876a6.93 6.93 0 01.28 1.938 6.836 6.836 0 01-2.094 4.933l-.68.648h4.79l.104-.181a10.733 10.733 0 001.449-5.4c0-2.152-.63-4.152-1.71-5.814zm.013-3.6a.518.518 0 01.645.09.566.566 0 01.082.667L14.99 16.7a.325.325 0 01-.032.052A3.62 3.62 0 0112 18.285c-.95 0-1.901-.375-2.628-1.133-1.449-1.51-1.449-3.966 0-5.476.123-.128.251-.243.384-.343a.303.303 0 01.05-.033l10.498-6.295z"
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
                    d="M2.15 14.986c0-6.314 3.403-9.653 9.84-9.653 6.443 0 9.846 3.34 9.846 9.653 0 1.42-.18 2.709-.53 3.83a.8.8 0 01-.036.086l-.02.042a.6.6 0 01-.54.33H3.268a.601.601 0 01-.577-.414c-.359-1.132-.541-2.434-.541-3.874zm9.829-7.18a.597.597 0 00-.602.592v.8c0 .326.269.592.602.592.33 0 .602-.263.602-.591v-.801a.597.597 0 00-.602-.591zM7.542 11.16a.61.61 0 00.429-.174.58.58 0 000-.838l-.577-.565a.61.61 0 00-.855 0 .585.585 0 000 .837l.577.566a.61.61 0 00.426.174zm5.678 5.117l6.375-1.832a.59.59 0 00.41-.736.602.602 0 00-.749-.4l-6.38 1.834a1.257 1.257 0 00-.883-.356c-.692 0-1.255.55-1.255 1.23 0 .68.56 1.232 1.255 1.232a1.25 1.25 0 001.227-.972zM5.95 14.93h-.818a.597.597 0 01-.602-.591.6.6 0 01.602-.591h.818c.333 0 .602.266.602.591a.597.597 0 01-.602.591zm10.03-4.779l.578-.566a.61.61 0 01.854 0 .585.585 0 010 .838l-.577.566a.609.609 0 01-.851 0 .583.583 0 01-.003-.838z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTachometerFilled;
