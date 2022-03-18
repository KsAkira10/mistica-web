/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWomanRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.98 15.746l-1.66-6.764a3.47 3.47 0 00-1.553-2.24c.55-.5.9-1.22.9-2.028C14.667 3.216 13.473 2 12.001 2S9.334 3.216 9.334 4.714c0 .807.35 1.528.9 2.027A3.426 3.426 0 008.685 8.96l-1.668 6.782v.013a.343.343 0 00-.008.07.387.387 0 00-.009.069v.013l.002.024.002.024a.389.389 0 00.026.134c.004.022.013.044.021.066a.4.4 0 00.03.06l.006.014c.007.014.014.03.024.043l.038.052a.458.458 0 00.056.065c.01.009.021.019.03.03a.495.495 0 00.051.044c.012.009.024.016.037.024l.018.01c.013.01.029.018.043.024l.013.007a1.168 1.168 0 00.068.026l.021.009a.288.288 0 00.022.008h.013c.02.005.042.009.064.009.025.004.05.009.072.009h1.681V21h5.334v-4.411h1.501c.026 0 .052-.005.077-.009.03.004.06.009.09.009a.523.523 0 00.162-.022.68.68 0 00.478-.82zM12 3.36c.734 0 1.332.608 1.332 1.355 0 .746-.598 1.354-1.34 1.354a1.347 1.347 0 01-1.327-1.354c.004-.747.602-1.355 1.336-1.355zm1.332 16.282v-4.417h2.142l-1.46-5.94c-.213-1.02-1.023-1.688-2.018-1.688-.994 0-1.805.668-2.014 1.667L8.52 15.23h2.146v4.411h2.667z"
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
                    d="M9.896 4.482c0 1.552.916 2.476 2.448 2.476 1.536 0 2.454-.924 2.454-2.476 0-.793-.23-1.415-.675-1.852-.431-.417-1.028-.63-1.778-.63-.751 0-1.348.213-1.78.633-.445.437-.669 1.059-.669 1.849zm1.196 0c0-.451.104-.782.306-.98.199-.197.518-.295.95-.292.43 0 .75.098.949.291.204.2.308.53.308.98 0 .889-.375 1.267-1.258 1.267-.88 0-1.255-.378-1.255-1.266zm5.359 9.759a.34.34 0 00.017-.241l-1.524-4.378a1.533 1.533 0 01-.042-.098 1.64 1.64 0 00-1.507-1.009h-2.098A1.64 1.64 0 009.75 9.622l-1.524 4.386a.314.314 0 00.017.236c.02.042.067.114.165.148a.29.29 0 00.232-.008.311.311 0 00.157-.177l.79-2.386a.594.594 0 01.75-.39.6.6 0 01.388.76l-.365 1.14-.658 2.476h.216a.6.6 0 01.596.602l.017 3.75c0 .076.017.314.23.32.073-.008.095-.017.1-.022.04-.04.076-.143.076-.292l-.02-3.75c0-.16.062-.314.174-.429a.59.59 0 01.423-.18h1.673a.601.601 0 01.597.608l-.018 3.754s.003.308.16.314a.421.421 0 00.16-.028c.02-.02.059-.107.059-.289l.02-3.756a.602.602 0 01.596-.602h.213l-.664-2.493-.359-1.123a.6.6 0 01.386-.76.597.597 0 01.752.39l.792 2.392a.32.32 0 00.157.174c.042.02.123.047.219.01a.296.296 0 00.193-.156zm1.073.535c.176-.364.204-.779.073-1.171l-1.513-4.367a1.209 1.209 0 00-.076-.193 2.833 2.833 0 00-2.605-1.74h-2.098a2.824 2.824 0 00-2.594 1.712 1.3 1.3 0 00-.084.201l-1.526 4.393a1.516 1.516 0 00.915 1.915c.163.06.331.09.502.09h.003l-.168.633a.604.604 0 00.104.524.585.585 0 00.473.238h.4l.015 3.149c0 .848.599 1.504 1.397 1.523h.037c.364 0 .683-.126.927-.366.283-.278.437-.69.437-1.16l-.017-3.146h.47l-.013 3.149c0 .868.56 1.51 1.33 1.523h.037c.498 0 .81-.198.983-.372.274-.272.417-.67.417-1.148l.017-3.152h.4a.604.604 0 00.577-.762l-.168-.63c.171.014.337-.028.493-.087.376-.126.678-.395.855-.756z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWomanRegular;
