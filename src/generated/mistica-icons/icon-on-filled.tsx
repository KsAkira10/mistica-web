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

const IconOnFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.463 15.665V8.942a.41.41 0 00-.41-.409h-.274a.41.41 0 00-.409.41v4.772l-3.314-5a.41.41 0 00-.341-.185h-.219a.411.411 0 00-.409.41v6.722a.41.41 0 00.41.41h.274a.41.41 0 00.409-.41v-4.765l3.3 4.995a.41.41 0 00.341.185h.227c.23 0 .415-.185.415-.412zm-8.928.549c1.286 0 2.818-.675 2.818-3.9 0-3.232-1.532-3.91-2.818-3.91-1.291 0-2.829.678-2.829 3.91 0 3.222 1.538 3.9 2.83 3.9zm3.871-14.045c1.575.037 9.44.69 9.44 9.86 0 9.177-7.834 9.784-9.403 9.812-.171.003-.364.006-.563.006-.104 0-.213 0-.314-.003-8.952-.129-9.406-8.246-9.406-9.87 0-1.626.451-9.738 9.339-9.813.3-.003.63.003.907.008zm-3.87 7.35c.784 0 1.683.32 1.683 2.796 0 2.445-.852 2.776-1.684 2.776-.837 0-1.694-.33-1.694-2.776 0-2.465.857-2.796 1.694-2.796z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOnFilled;
