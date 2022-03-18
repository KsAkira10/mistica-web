/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileSketchFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.242 7.76a.61.61 0 01.045.237v12.305c0 .751-.636 1.384-1.386 1.384H5.906c-.737 0-1.386-.647-1.386-1.384V3.384C4.52 2.658 5.18 2 5.906 2h7.3c.23 0 .442.087.605.25l5.213 5.125c.114.11.176.244.218.384zm-1.652-.107l-4.054-3.984v1.765c0 .658.213 1.213.614 1.608.406.398.98.61 1.664.61h1.776zm-2.558 4.08l-.339.987h.838l-.499-.986zm-.67 1.959h1.015l-1.942 2.714.928-2.714zm-3.93 2.756l-.94-2.756h-1.05l1.99 2.756zM10 12.218l-.42-1.23h1.38l-.96 1.23zm2.876-1.23l.978 1.233.423-1.232h-1.4zm-2.047 1.732l1.09-1.39 1.1 1.39h-2.19zm1.095 5.137l1.426-4.165H10.5l1.424 4.165zm-3.107-6.143l.345 1.006h-.866l.521-1.006zm7.926 1.276a.582.582 0 01.055.209c0 .004-.002.008-.003.011a.03.03 0 00-.003.011.122.122 0 01-.006.033.185.185 0 00-.005.023.46.46 0 01-.062.174.045.045 0 00-.007.018c-.001.007-.002.013-.007.018l-4.389 6.132v.003h-.003a.505.505 0 01-.19.151.446.446 0 01-.19.048h-.004a.448.448 0 01-.193-.048c-.014-.006-.028-.011-.042-.02a.467.467 0 01-.148-.128h-.003l-4.429-6.132a.079.079 0 01-.005-.018c-.002-.006-.003-.013-.006-.018a.458.458 0 01-.064-.183.166.166 0 00-.005-.02.108.108 0 01-.006-.03l-.002-.01a.483.483 0 01.049-.22c.002-.002.002-.005.002-.008l.001-.008 1.409-2.704.01-.01a.031.031 0 00.01-.01.502.502 0 01.193-.178.423.423 0 00.013-.01c.013-.009.026-.018.04-.024.035-.012.07-.014.105-.016h.021c.006 0 .01-.003.015-.005a.039.039 0 01.016-.004h6.04c.005 0 .01.002.014.004.005.002.01.004.016.004a.87.87 0 00.037.004c.03.003.062.006.092.016.01.004.019.01.028.017.009.006.018.012.028.016l.028.017.028.017a.451.451 0 01.146.16.025.025 0 01.008.008l.003.011 1.364 2.692a.014.014 0 01.001.007z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileSketchFilled;
