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

const IconAlarmOffFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.861 20.51c.639 0 1.101-.165 1.412-.502.325-.353.429-.837.46-1.19h-3.74c.028.35.129.837.454 1.19.31.34.773.502 1.414.502zM3.965 2.23l16.767 18.45a.593.593 0 01-.036.838l-.014.014a.623.623 0 01-.868-.05l-2.42-2.661H14.97c-.037.543-.194 1.355-.77 1.989-.55.602-1.337.907-2.337.907-1.003 0-1.79-.305-2.339-.907-.577-.634-.73-1.446-.764-1.99H3.458a.615.615 0 01-.58-.4.59.59 0 01.19-.666c2.051-1.642 1.858-5.057 1.855-5.093L4.92 8.826c0-.355.023-.694.059-1.022l.034-.263c.01-.084.016-.171.03-.255l.014.017c.084-.541.23-1.07.435-1.578L3.046 3.028a.593.593 0 01.037-.838l.014-.014a.629.629 0 01.868.054zM20.66 17.748c.201.16.277.428.19.67a.604.604 0 01-.126.195L7.066 3.585c1.913-1.59 4.423-1.537 4.798-1.518.387-.02 3.053-.081 4.986 1.678 1.297 1.18 1.955 2.888 1.955 5.079v3.795c-.002.073-.187 3.499 1.855 5.129z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmOffFilled;
