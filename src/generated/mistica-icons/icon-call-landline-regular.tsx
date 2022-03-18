/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCallLandlineRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.689 22h.032c2.793 0 6.191-1.78 9.333-4.89l.049-.047c3.125-3.158 4.913-6.565 4.897-9.366-.008-1.459-.513-2.713-1.443-3.635l-1.383-1.367c-.901-.89-2.308-.93-3.142-.096l-2.071 2.096c-.377.389-.59.918-.59 1.475 0 .605.261 1.214.714 1.66l1.45 1.434c.245.232.365.557.365.962 0 1.03-.745 2.404-2.008 3.675-1.27 1.254-2.636 2.007-3.666 2.007h-.009c-.404-.008-.725-.128-.961-.364L7.82 14.093c-.445-.445-1.054-.713-1.66-.713h-.007a2.04 2.04 0 00-1.459.589L2.6 16.04c-.833.825-.793 2.236.096 3.134l1.359 1.382C4.976 21.5 6.23 21.992 7.689 22zM5.72 15.003a.601.601 0 01.429-.169c.228 0 .46.1.629.289l1.435 1.45c.509.518 1.198.786 1.992.794 1.418 0 3.141-.882 4.712-2.436 1.555-1.571 2.445-3.29 2.437-4.713 0-.794-.277-1.483-.794-1.992l-1.45-1.435a.906.906 0 01-.285-.633c0-.12.032-.3.169-.437l2.08-2.096c.268-.268.753-.22 1.078.104l1.382 1.367c.661.645.994 1.519 1.002 2.597.008 2.412-1.619 5.446-4.476 8.328l-.04.04c-2.882 2.857-5.9 4.484-8.328 4.476-1.066-.008-1.94-.336-2.597-1.002l-1.367-1.382c-.324-.333-.372-.81-.104-1.078l2.096-2.072z"
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
                    d="M14.682 21.17c1.068.426 2.06.639 2.925.639.823 0 1.538-.194 2.103-.577.009-.009.017-.014.026-.02l.016-.011.02-.014c.15-.11.534-.389.812-.68.832-.87 1.244-1.757 1.227-2.634-.017-.849-.431-1.683-1.235-2.487a5.017 5.017 0 00-1-.787c-.695-.432-1.412-.589-2.132-.466-.72.124-1.423.524-2.095 1.197a5.31 5.31 0 00-.443.495c-.117.065-.49.026-1.249-.495-.88-.605-1.919-1.611-2.624-2.317l-.085-.084c-.705-.706-1.714-1.745-2.316-2.625-.521-.761-.56-1.131-.496-1.249.174-.137.34-.286.496-.442.672-.673 1.073-1.376 1.196-2.096.123-.72-.034-1.437-.465-2.131a4.958 4.958 0 00-.787-1c-.804-.804-1.641-1.219-2.487-1.236-.877-.014-1.765.398-2.633 1.227a6.315 6.315 0 00-.681.813l-.014.02-.011.016-.017.025c-.796 1.151-.776 2.936.053 5.025.871 2.183 2.566 4.572 4.902 6.908l.006.006.075.072.006.006c2.336 2.336 4.725 4.03 6.907 4.902zm.412-1.04c-2.042-.814-4.3-2.422-6.526-4.65l-.04-.038-.01-.011-.04-.04c-2.227-2.227-3.835-4.484-4.65-6.526-.675-1.698-.742-3.143-.182-3.967l.025-.033a5.12 5.12 0 01.558-.675c1.277-1.222 2.341-1.225 3.554-.012.238.23.443.493.614.776l.008.017c.289.465.392.908.317 1.359-.082.484-.379.986-.883 1.49a4 4 0 01-.448.395.422.422 0 00-.064.059c-.219.238-.446.666-.275 1.344.095.384.311.815.656 1.317.655.958 1.711 2.047 2.448 2.784l.084.084c.736.737 1.826 1.793 2.781 2.448.502.345.933.558 1.317.656.678.173 1.106-.054 1.344-.275l.06-.064c.12-.16.251-.308.394-.449.504-.504 1.006-.8 1.49-.882.449-.075.894.028 1.359.317l.017.008a3.9 3.9 0 01.776.614c1.215 1.212 1.213 2.277-.009 3.554a5.234 5.234 0 01-.675.558l-.033.022c-.824.56-2.27.496-3.967-.18z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCallLandlineRegular;
