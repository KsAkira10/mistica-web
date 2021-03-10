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

const IconRulerFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.545 18.025a1.17 1.17 0 00-.426-1.597 1.174 1.174 0 00-1.596.429 1.171 1.171 0 001.01 1.753 1.174 1.174 0 001.011-.585h.001zm-2.759-3.507a.424.424 0 00.605.005l1.303-1.28-.605-.605-1.297 1.275a.429.429 0 00-.006.605zm-2.521-1.067l2.32-2.323-.606-.605-2.319 2.323a.426.426 0 000 .605.426.426 0 00.605 0zm-1.415-3.009c.11 0 .216-.042.3-.123l1.322-1.3-.605-.605-1.316 1.294a.429.429 0 00.3.734zM8.982 9.285l2.378-2.38-.605-.606L8.377 8.68a.426.426 0 000 .605.426.426 0 00.605 0zM7.568 6.277c.109 0 .215-.04.3-.123L9.25 4.792l-.605-.605-1.378 1.356a.429.429 0 00.3.734zm14.01 10.291a1.298 1.298 0 01-.117 1.709l-3.185 3.188a1.293 1.293 0 01-.927.383c-.35 0-.678-.134-.924-.383L2.542 7.574a1.315 1.315 0 010-1.854L5.73 2.532c.493-.496 1.359-.496 1.852 0l.218.218.011-.008 13.796 13.801-.028.025z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRulerFilled;
