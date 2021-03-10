/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconSearchFileRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.625 2.008a.55.55 0 01.395.166l5.462 5.462a.55.55 0 01.165.395v12.496c0 .686-.445 1.128-1.129 1.131l-.454.003H9.118c-.712 0-1.154-.445-1.154-1.16v-4.115a5.791 5.791 0 01-1.749-.987l-3.249 3.374a.56.56 0 11-.807-.779l3.262-3.385A5.803 5.803 0 017.963 5.44V3.157c0-.706.443-1.146 1.152-1.149h6.51zm-.561 1.123h-5.98v2.037a5.8 5.8 0 014.91 9.846 5.759 5.759 0 01-4.1 1.7 5.85 5.85 0 01-.81-.056v3.883h11.44V8.593h-2.168c-.955 0-1.779-.316-2.376-.915-.596-.6-.916-1.42-.916-2.375V3.13zm-5.17 3.101a4.678 4.678 0 00-4.678 4.684 4.678 4.678 0 004.683 4.678 4.682 4.682 0 003.305-7.992 4.646 4.646 0 00-3.31-1.37zm6.29-2.308v1.379c0 .652.203 1.198.586 1.585.384.387.933.588 1.583.588h1.378L17.19 4.93l-1.005-1.006z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchFileRegular;
