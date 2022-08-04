/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCancelRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 20.637c-4.601 0-8.637-4.036-8.637-8.637 0-4.601 4.036-8.637 8.637-8.637 4.6 0 8.637 4.036 8.637 8.637 0 4.6-4.036 8.637-8.637 8.637zM12 2C6.673 2 2 6.673 2 12s4.673 10 10 10 10-4.673 10-10S17.327 2 12 2zm-.678 10.038L8.9 9.616a.506.506 0 11.716-.716l2.422 2.422L14.459 8.9a.506.506 0 11.716.716l-2.421 2.422 2.421 2.422a.506.506 0 01-.716.716l-2.421-2.422-2.423 2.422a.506.506 0 11-.716-.716l2.423-2.422z"
                    fill={fillColor}
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.78 7.208a.722.722 0 011.012 0 .722.722 0 010 1.012L13.012 12l3.772 3.78a.722.722 0 010 1.012.716.716 0 01-.504.212.726.726 0 01-.504-.212l-3.78-3.78-3.78 3.78a.702.702 0 01-1.008 0 .722.722 0 010-1.012l3.78-3.78-3.78-3.78a.722.722 0 010-1.012.722.722 0 011.012 0l3.78 3.78 3.78-3.78z"
                    fill={fillColor}
                />
                <path
                    d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2zm0 18.576c-4.728 0-8.576-3.848-8.576-8.576 0-4.728 3.848-8.576 8.576-8.576 4.728 0 8.576 3.848 8.576 8.576 0 4.728-3.848 8.576-8.576 8.576z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M23 12.003C23 4.513 18.946 1 11.997 1 5.047 1 1 4.512 1 12.003 1 19.497 5.048 23 11.997 23 18.947 23 23 19.497 23 12.003zm-11.003 9.623c-6.474 0-9.623-3.15-9.62-9.623 0-6.48 3.146-9.629 9.623-9.629 6.477 0 9.626 3.153 9.626 9.63 0 6.473-3.153 9.622-9.63 9.622zm5.365-14.994c.27.269.27.704 0 .97L12.964 12l4.395 4.395a.688.688 0 11-.958.99l-4.407-4.411-4.383 4.382a.687.687 0 01-.97.003l-.003-.003a.688.688 0 010-.974L11.02 12 6.638 7.618a.684.684 0 01-.035-.97.684.684 0 01.97-.035l4.418 4.417 4.395-4.395a.689.689 0 01.976-.003z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCancelRegular;
