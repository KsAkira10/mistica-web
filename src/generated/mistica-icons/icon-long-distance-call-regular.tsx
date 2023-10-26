/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLongDistanceCallRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.889 21.834a.532.532 0 0 1-.533-.532v-18.6a.532.532 0 0 1 .619-.525 2.956 2.956 0 0 1 .193.003c5.345.086 9.653 4.451 9.648 9.816a9.809 9.809 0 0 1-5.986 9.028 9.77 9.77 0 0 1-3.74.77.533.533 0 0 1-.201.04Zm.532-13.876a16.439 16.439 0 0 0 3.152-.364c-.198-.7-.445-1.348-.738-1.928-.395-.787-.851-1.4-1.35-1.821-.346-.291-.703-.479-1.064-.56v4.673Zm0 3.514h3.718a16.79 16.79 0 0 0-.316-2.842 17.781 17.781 0 0 1-3.402.393v2.45Zm0 1.065v2.637c1.171.025 2.305.156 3.356.383.207-.946.33-1.965.361-3.02h-3.717Zm4.782 0a17.7 17.7 0 0 1-.393 3.28c.917.268 1.752.614 2.47 1.03a8.69 8.69 0 0 0 1.457-4.31h-3.534Zm3.536-1.065a8.744 8.744 0 0 0-1.354-4.184c-.73.436-1.585.8-2.53 1.078.202.981.32 2.028.349 3.107h3.535Zm-8.318 9.213c.361-.081.718-.269 1.064-.56.502-.42.955-1.034 1.35-1.82.263-.522.488-1.097.675-1.715a16.605 16.605 0 0 0-3.09-.351v4.446ZM18.756 6.42a8.692 8.692 0 0 0-3.917-2.715c.343.415.662.91.949 1.48.325.647.598 1.368.816 2.142.808-.244 1.538-.55 2.152-.907Zm-.129 11.283a10.44 10.44 0 0 0-2.083-.852c-.207.695-.46 1.344-.756 1.931a7.854 7.854 0 0 1-.95 1.48 8.755 8.755 0 0 0 3.79-2.56ZM6.85 21.344c-.317 0-.664-.056-.785-.076l-.014-.003-.025-.005c-1.087-.2-2.065-1.194-2.756-2.802-.712-1.658-1.09-3.87-1.09-6.403v-.09c0-2.532.375-4.745 1.09-6.406.691-1.608 1.669-2.602 2.756-2.8l.025-.004.014-.002.026-.004c.147-.024.504-.08.814-.072 1.872.042 2.858 1.036 2.858 2.868a3.93 3.93 0 0 1-.118.99c-.149.632-.465 1.122-.938 1.458-.474.337-1.087.505-1.835.505-.163 0-.328-.009-.49-.028-.042.033-.224.224-.348 1.028-.12.773-.134 1.778-.134 2.465v.09c0 .688.014 1.691.134 2.464.126.804.306.995.348 1.028.162-.02.325-.028.49-.028.745 0 1.364.168 1.835.505.47.336.79.829.938 1.459.081.322.12.655.118.989 0 1.834-.99 2.826-2.858 2.868l-.056.006Zm-.64-1.132.032.006c.274.044.49.064.644.061.652-.014 1.129-.17 1.412-.465.274-.285.406-.723.406-1.339a2.864 2.864 0 0 0-.084-.722c-.003-.006-.003-.012-.003-.017-.115-.493-.42-1.149-1.737-1.149-.148 0-.294.009-.442.028-.028.003-.056.006-.084.003-.275-.011-.664-.129-.961-.627-.163-.27-.283-.63-.37-1.098-.126-.678-.182-1.552-.182-2.838v-.09c0-1.285.056-2.162.182-2.837.087-.468.207-.83.37-1.098.297-.499.686-.616.96-.628.029 0 .057 0 .085.003.145.02.294.028.442.028 1.32 0 1.625-.655 1.737-1.148l.001-.009.002-.008a2.85 2.85 0 0 0 .084-.723c0-.619-.135-1.056-.406-1.339-.286-.294-.762-.45-1.415-.467a3.787 3.787 0 0 0-.644.061l-.031.006c-.712.137-1.423.927-1.96 2.173-.457 1.065-1.004 2.967-1.004 5.98v.096c0 3.014.547 4.916 1.003 5.98.535 1.247 1.25 2.037 1.958 2.174l.006.003Z"
            />
        </svg>
    );
};

export default IconLongDistanceCallRegular;
