/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCallLandlineRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m20.432 18.304-.596.596-3.904-3.902.599-.6c.22-.22.675-.22.896 0l3.005 3.006a.635.635 0 0 1 0 .9Zm-3.477 2.338c-2.311 0-5.826-1.962-8.745-4.882-4.07-4.073-5.988-8.782-4.276-10.495l.171-.171L8.01 8.997l-.056.057c-.419.417-.443 1.236-.066 2.246.362.968 1.059 2.012 1.913 2.866 1.507 1.509 3.17 2.184 4.15 2.184.418 0 .742-.112.961-.332l.06-.06 3.904 3.903-.177.177c-.402.401-.989.604-1.744.604ZM6.117 3.357c.175 0 .338.063.448.173L9.57 6.537c.12.12.185.279.185.448a.63.63 0 0 1-.185.45l-.601.602-3.904-3.903.603-.604a.636.636 0 0 1 .449-.173Zm15.275 13.088-3.005-3.006a1.997 1.997 0 0 0-1.408-.571c-.533 0-1.046.208-1.409.571l-1.549 1.55a.792.792 0 0 1-.07.003c-.543 0-1.89-.484-3.19-1.785-.722-.721-1.305-1.59-1.601-2.382-.175-.468-.192-.763-.18-.878l1.55-1.552a1.98 1.98 0 0 0 .583-1.41c0-.532-.207-1.032-.583-1.408L7.526 2.571A2.002 2.002 0 0 0 6.117 2a2 2 0 0 0-1.409.57L2.974 4.306C.656 6.624 2.495 11.961 7.25 16.72c3.206 3.207 7.016 5.28 9.705 5.28 1.128 0 2.038-.337 2.704-1.003l1.734-1.735c.376-.377.583-.878.583-1.408 0-.53-.207-1.031-.584-1.409Z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.689 22h.032c2.793 0 6.191-1.78 9.333-4.89l.049-.047c3.125-3.158 4.913-6.565 4.897-9.366-.008-1.459-.513-2.713-1.443-3.635l-1.383-1.367c-.901-.89-2.308-.93-3.142-.096l-2.071 2.096c-.377.389-.59.918-.59 1.475 0 .605.261 1.214.714 1.66l1.45 1.434c.245.232.365.557.365.962 0 1.03-.745 2.404-2.008 3.675-1.27 1.254-2.636 2.007-3.666 2.007h-.009c-.404-.008-.725-.128-.961-.364L7.82 14.093c-.445-.445-1.054-.713-1.66-.713h-.007a2.04 2.04 0 0 0-1.459.589L2.6 16.04c-.833.825-.793 2.236.096 3.134l1.359 1.382C4.976 21.5 6.23 21.992 7.689 22ZM5.72 15.003a.601.601 0 0 1 .429-.169c.228 0 .46.1.629.289l1.435 1.45c.509.518 1.198.786 1.992.794 1.418 0 3.141-.882 4.712-2.436 1.555-1.571 2.445-3.29 2.437-4.713 0-.794-.277-1.483-.794-1.992l-1.45-1.435a.906.906 0 0 1-.285-.633c0-.12.032-.3.169-.437l2.08-2.096c.268-.268.753-.22 1.078.104l1.382 1.367c.661.645.994 1.519 1.002 2.597.008 2.412-1.619 5.446-4.476 8.328l-.04.04c-2.882 2.857-5.9 4.484-8.328 4.476-1.066-.008-1.94-.336-2.597-1.002l-1.367-1.382c-.324-.333-.372-.81-.104-1.078l2.096-2.072Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.702 21.19c1.068.426 2.06.639 2.925.639.823 0 1.538-.194 2.104-.577a.154.154 0 0 1 .025-.02l.017-.011a6.357 6.357 0 0 0 .832-.695c.831-.868 1.243-1.756 1.226-2.633-.017-.849-.431-1.684-1.235-2.487a5.017 5.017 0 0 0-1-.788c-.695-.43-1.412-.588-2.132-.465-.72.124-1.423.524-2.095 1.197-.16.157-.305.322-.442.495-.118.065-.49.026-1.25-.495-.88-.605-1.918-1.611-2.624-2.317l-.085-.084c-.705-.706-1.714-1.745-2.316-2.625-.521-.762-.56-1.131-.496-1.249.174-.137.34-.286.496-.442.672-.673 1.073-1.376 1.196-2.096.123-.72-.034-1.437-.465-2.131a4.958 4.958 0 0 0-.787-1c-.804-.804-1.641-1.219-2.487-1.236-.877-.014-1.765.398-2.633 1.227-.292.279-.572.662-.681.813l-.014.02-.028.041c-.796 1.151-.776 2.936.053 5.025.871 2.183 2.566 4.572 4.902 6.908l.006.005.075.073.006.006c2.336 2.336 4.725 4.03 6.907 4.902Zm.412-1.04c-2.042-.814-4.3-2.422-6.526-4.65l-.09-.089c-2.227-2.227-3.835-4.484-4.65-6.526-.675-1.698-.742-3.143-.182-3.967l.025-.033c.219-.303.406-.53.558-.675 1.277-1.222 2.341-1.225 3.554-.012.238.23.443.493.614.776l.008.017c.289.465.392.908.317 1.359-.082.484-.378.986-.883 1.49a4 4 0 0 1-.448.395.423.423 0 0 0-.064.059c-.219.238-.446.666-.275 1.344.095.384.311.815.656 1.317.655.958 1.711 2.047 2.448 2.784l.084.084c.737.737 1.826 1.793 2.781 2.448.502.345.933.558 1.317.656.678.173 1.106-.054 1.344-.275l.06-.064c.12-.16.251-.308.394-.448.504-.505 1.006-.802 1.49-.883.449-.075.894.028 1.359.317l.017.008a3.9 3.9 0 0 1 .776.613c1.215 1.213 1.213 2.278-.009 3.555a5.234 5.234 0 0 1-.675.558l-.033.022c-.824.56-2.27.496-3.967-.18Z"
                />
            </svg>
        );
    }
};

export default IconCallLandlineRegular;
