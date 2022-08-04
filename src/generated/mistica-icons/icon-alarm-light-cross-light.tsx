/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAlarmLightCrossLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.626 3.944a.419.419 0 10.837.003v-1.53a.419.419 0 00-.837 0v1.526zm7.17 13.904c.655 0 1.227.467 1.227 1.002v2.148c0 .532-.575 1.002-1.227 1.002H5.292c-.666 0-1.226-.458-1.226-1.002V18.85c0-.544.563-1.002 1.226-1.002h.367v-6.152c0-4.198 2.208-6.415 6.382-6.415 4.177 0 6.388 2.217 6.388 6.414v6.15h.367v.003zm-12.3-.026h11.097v-6.124c0-3.7-1.87-5.574-5.549-5.574-3.685 0-5.548 1.872-5.548 5.574v6.124zm12.693 3.154l-.003-2.126a.57.57 0 00-.39-.163H5.292c-.21 0-.367.12-.39.171v2.14c.015.037.174.162.39.162h13.501c.2 0 .373-.128.396-.184zM4.359 9.479c0 .23-.188.418-.418.42H2.418A.419.419 0 012 9.483V9.48a.42.42 0 01.418-.422h1.52a.42.42 0 01.42.422zM22 9.504a.419.419 0 00-.418-.418l-1.523-.006c-.23 0-.418.19-.418.421v.003c0 .23.188.419.419.419h1.522A.42.42 0 0022 9.504zM5.585 5.59L4.51 4.506a.424.424 0 010-.595.417.417 0 01.589-.002l.002.002 1.076 1.082a.425.425 0 01-.006.597.42.42 0 01-.586-.003zm11.382-.422a.42.42 0 00.717.296l1.075-1.081a.424.424 0 000-.595l-.003-.003a.417.417 0 00-.589.003L17.092 4.87a.425.425 0 00-.125.298zm-2.393 7.47l-1.653.003a.42.42 0 00-.419.421v1.665h-.97v-1.665a.42.42 0 00-.418-.418H9.458v-.973h1.656a.42.42 0 00.415-.421V9.584h.97v1.665c0 .23.188.418.419.418h1.656v.97zm.836-1.138c0-.358-.341-.671-.734-.671h-1.34V9.482c0-.393-.313-.738-.669-.738h-1.303c-.356 0-.669.345-.669.738v1.348h-1.34c-.398 0-.734.308-.734.672v1.309c0 .364.336.672.734.672h1.34v1.346c0 .398.308.737.67.737h1.302c.362 0 .669-.336.669-.737v-1.35h1.34c.39 0 .734-.312.734-.67v-1.31z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmLightCrossLight;
