/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconParkingRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.782 22H4.223A2.226 2.226 0 012 19.777V4.223C2 3 2.995 2 4.223 2h15.554C21 2 22 2.995 22 4.223v15.554A2.222 2.222 0 0119.782 22zM8.3 17.928a.74.74 0 001.484 0V13.48h2.963a4.08 4.08 0 004.072-4.072 4.078 4.078 0 00-4.072-4.072H8.3v12.59zm4.442-5.926H9.779V6.816h2.963a2.594 2.594 0 010 5.186zM3.484 4.223a.74.74 0 01.74-.74h15.553a.74.74 0 01.74.74v15.554a.74.74 0 01-.74.74H4.223a.74.74 0 01-.74-.74V4.223z"
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
                    d="M20.265 8.6c0-2.13-.558-3.731-1.656-4.762-.641-.61-1.487-1.05-2.518-1.311-.975-.241-2.23-.367-3.731-.367H6.094a.598.598 0 00-.594.602v18.482c-.003.33.263.6.594.602h4.162a.598.598 0 00.594-.602v-5.773h2.34c1.268 0 2.363-.157 3.257-.465.933-.32 1.709-.832 2.305-1.518 1.003-1.138 1.513-2.782 1.513-4.888zm-1.19 0c0 1.8-.407 3.176-1.214 4.087-.459.529-1.064.924-1.798 1.176-.767.266-1.734.4-2.874.4h-2.933a.6.6 0 00-.596.603v5.776H6.688V3.364h5.672c1.403 0 2.563.115 3.445.334.83.21 1.499.552 1.992 1.02.849.795 1.277 2.103 1.277 3.882zm-4.76 1.977c.362-.367.546-1.014.546-1.927 0-.832-.17-1.423-.512-1.753-.165-.154-.406-.275-.712-.348-.364-.087-.848-.131-1.434-.131H10.85v4.686h1.46c.747 0 1.145-.067 1.344-.126a1.5 1.5 0 00.661-.4zm.849-4.554c-.322-.306-.742-.521-1.252-.645-.454-.109-1.028-.165-1.712-.165h-1.946a.598.598 0 00-.594.602v5.891c-.003.33.263.6.594.602h2.053c.722 0 1.269-.056 1.67-.17a2.683 2.683 0 001.178-.706c.594-.603.894-1.535.894-2.779 0-1.17-.297-2.053-.885-2.63z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconParkingRegular;
