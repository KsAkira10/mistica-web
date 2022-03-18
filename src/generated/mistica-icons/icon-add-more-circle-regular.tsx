/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAddMoreCircleRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2zm0 18.576c-4.728 0-8.576-3.848-8.576-8.576 0-4.728 3.848-8.576 8.576-8.576 4.728 0 8.576 3.848 8.576 8.576 0 4.728-3.848 8.576-8.576 8.576zm-.717-14.637a.722.722 0 01.715-.715.722.722 0 01.716.715v5.346l5.34.006a.722.722 0 01.716.715c0 .198-.08.38-.207.507a.726.726 0 01-.506.206H12.71v5.346a.702.702 0 01-.713.713.722.722 0 01-.715-.716v-5.346H5.937a.722.722 0 01-.716-.715.722.722 0 01.716-.716h5.346V5.94z"
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
                    d="M23 12.028C23 1.914 14.617 1.063 12.457 1.01a35.08 35.08 0 00-.82-.009h-.22C9.208 1.019 1 1.776 1 11.966c0 10.201 8.286 11 10.496 11.03.119.004.238.004.357.004.228 0 .454-.003.651-.006C14.601 22.953 23 22.167 23 12.028zM12.476 21.62c2.751-.05 9.146-1.086 9.146-9.59 0-8.506-6.432-9.58-9.196-9.645a33.14 33.14 0 00-.79-.01h-.206C8.707 2.4 2.377 3.38 2.377 11.966c0 8.599 6.392 9.62 9.14 9.657.32.003.64.003.959-.004zm5.004-10.34a.689.689 0 010 1.377h-4.799v4.808a.689.689 0 01-1.377 0v-4.81h-4.79a.689.689 0 010-1.378h4.79V6.534a.689.689 0 011.377 0v4.746h4.8z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconAddMoreCircleRegular;
