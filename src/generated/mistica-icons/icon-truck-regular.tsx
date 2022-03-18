/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTruckRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12.607l-6.848-6.971h-2.796v-.362C12.356 3.47 10.916 2 9.14 2H2.716A.727.727 0 002 2.729c0 .399.32.729.716.729h6.428c.984 0 1.784.814 1.784 1.816V18.36H2.716a.722.722 0 00-.716.729c0 .403.32.729.716.729h10.9C14.06 21.088 15.248 22 16.644 22c1.396 0 2.588-.912 3.028-2.182H22v-7.211zm-5.356 7.935c-.984 0-1.784-.814-1.784-1.816 0-1.001.8-1.816 1.784-1.816s1.784.815 1.784 1.816c0 1.002-.8 1.816-1.784 1.816zm3.192-2.182h.736v-5.147l-6.012-6.12h-2.2V18.36h1.092c.176-1.633 1.544-2.907 3.192-2.907 1.648 0 3.012 1.274 3.192 2.907zm-17.12-3.998h5.716a.722.722 0 00.716-.73.722.722 0 00-.716-.728H2.716a.722.722 0 00-.716.729c0 .403.32.729.716.729zm2.5-3.636h-2.5A.718.718 0 012 10c0-.403.32-.729.716-.733h2.5c.396 0 .716.326.716.729 0 .403-.32.729-.716.729z"
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
                    d="M18.148 7.745c.37.53 2.555 3.558 2.83 3.924.249.325.708.944.705 1.67v2.97c0 .534-.224 1.072-.61 1.48-.392.413-.916.645-1.423.645h-.868c-.194 1.54-1.255 2.468-2.855 2.468-1.608 0-2.67-.927-2.863-2.468h-3.93c-.193 1.54-1.254 2.468-2.854 2.468-1.608 0-2.672-.927-2.871-2.468C2.627 18.42 2 17.76 2 16.947V5.168c0-.82.641-1.49 1.431-1.49l10.622.008c.787 0 1.432.661 1.432 1.482v1.616l.82-.008h.009c.708 0 1.425.384 1.834.97zm-9.03 9.437h3.963c.154-.846.563-1.49 1.2-1.885V5.168a.23.23 0 00-.228-.227L3.431 4.933a.23.23 0 00-.224.235V16.95a.236.236 0 00.227.232c.258-1.445 1.294-2.308 2.846-2.308 1.544 0 2.58.863 2.838 2.308zm11.364-.871a.897.897 0 01-.258.594c-.168.176-.387.274-.571.274h-.886c-.257-1.445-1.294-2.308-2.837-2.308a3.8 3.8 0 00-.443.025v-6.86l.827-.008c.314 0 .678.193.854.443.395.56 2.583 3.58 2.863 3.958.168.226.45.61.45.921v2.96zm-4.555 3.339c-1.126 0-1.697-.594-1.697-1.756 0-1.174.571-1.768 1.697-1.768 1.118 0 1.69.594 1.69 1.765 0 1.165-.572 1.759-1.69 1.759zm-9.65 0c-1.126 0-1.697-.594-1.697-1.756 0-1.171.571-1.765 1.697-1.765 1.118 0 1.69.594 1.69 1.764 0 1.163-.572 1.757-1.69 1.757z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTruckRegular;
