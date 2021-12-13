/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconInternetDeviceRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20 7.714c0-2.167-1.666-3.945-3.764-4.091A3.151 3.151 0 0013.495 2h-6.33C5.418 2 4 3.44 4 5.214v13.572C4 20.56 5.418 22 7.165 22h6.33c1.746 0 3.165-1.44 3.165-3.214v-7.03c1.895-.34 3.34-2.018 3.34-4.043zm-1.103-.535h-1.198c-.04-.772-.162-1.54-.378-2.162.815.43 1.41 1.22 1.576 2.162zm-3.629 1.075h1.378c-.081 1.513-.49 2.354-.689 2.491-.198-.137-.608-.978-.689-2.491zm0-1.075c.081-1.513.491-2.354.69-2.491.197.133.607.978.688 2.491h-1.378zM5.405 5.22c0-.984.787-1.788 1.76-1.788h6.33c.427 0 .815.16 1.116.416a4.07 4.07 0 00-1.99 1.545H5.405v-.174zm8.81 1.96h-1.198a3.036 3.036 0 011.576-2.162c-.216.626-.342 1.39-.378 2.162zm.378 3.237a3.036 3.036 0 01-1.576-2.162h1.198c.036.772.162 1.536.378 2.162zm.662 8.37c0 .983-.788 1.788-1.76 1.788h-6.33c-.968 0-1.76-.8-1.76-1.788v-.178h9.85v.178zm-9.85-1.248V6.466h6.699a4.086 4.086 0 00-.194 1.248c0 2.02 1.445 3.703 3.34 4.041v5.783H5.405zm11.916-7.122c.216-.622.338-1.385.378-2.162h1.198a3.045 3.045 0 01-1.576 2.162z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconInternetDeviceRegular;
