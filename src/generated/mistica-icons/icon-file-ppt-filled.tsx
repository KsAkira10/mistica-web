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

const IconFilePptFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.535 2.025a.86.86 0 01.613.25L21.445 7.4c.115.109.18.243.222.386.03.073.047.154.047.238V20.33c0 .751-.644 1.384-1.409 1.384H8.123c-.748 0-1.409-.647-1.409-1.384l.034-2.773H4.445a2.427 2.427 0 01-2.42-2.425v-4.093a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.726.67-1.384 1.41-1.384h7.414zm-1.24 7.807H4.447a1.21 1.21 0 00-1.207 1.21v4.092c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.092c0-.667-.54-1.21-1.207-1.21zm-8.508 1.501c.591 0 .964.082 1.207.308.205.188.303.48.303.883s-.093.706-.28.916c-.221.25-.563.364-1.059.364h-.605v1.3h-.86v-3.77h1.294zm3.415 0c.59 0 .963.082 1.207.308.204.188.302.48.302.883s-.092.706-.28.916c-.22.25-.563.364-1.058.364h-.606v1.3h-.86v-3.77h1.295zm5.022 0l-.067.622h-1.14v3.149h-.86v-3.149h-1.168v-.622h3.235zm-8.47.625H5.35v1.202h.426v-.003c.274 0 .392-.04.501-.143.098-.098.149-.258.149-.479 0-.204-.045-.353-.143-.445-.104-.093-.263-.132-.53-.132zm3.414 0h-.403v1.202h.425v-.003c.275 0 .393-.04.502-.143.098-.098.148-.258.148-.479 0-.204-.044-.353-.143-.445-.103-.093-.263-.132-.529-.132zm6.706-8.263v1.764c0 .656.216 1.213.622 1.608.414.4.997.61 1.692.61h1.797l-4.111-3.982z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePptFilled;
