/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAlarmClockLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.918 1.745a10.812 10.812 0 014.335 3.859c.08.117.196.197.313.197a.279.279 0 00.195-.08c.196-.117.234-.353.117-.55-1.134-1.774-2.735-3.232-4.648-4.14-.196-.08-.43 0-.508.197-.08.202 0 .437.195.517zm-5.32 4.098v5.91H8.084c-.233 0-.392.16-.392.395 0 .235.159.395.392.395h4.298v-6.7c0-.235-.158-.395-.392-.395-.23 0-.392.156-.392.395zm-9.374-.099l-.038-.018c-.196-.122-.238-.358-.121-.551C3.199 3.4 4.799 1.943 6.717 1.035c.196-.08.43 0 .508.197.08.198 0 .433-.195.513a10.845 10.845 0 00-4.336 3.863c-.037.118-.196.197-.312.197a.534.534 0 01-.158-.061zM20.59 17.267c0 .437-.35.79-.784.79a.787.787 0 01-.783-.79c0-.436.35-.79.783-.79.433 0 .784.354.784.79zm-8.6-15.404h.196C17.697 1.98 22.074 6.549 22 12.11a9.452 9.452 0 01-.588 3.27c-.079.198-.312.315-.508.236-.196-.08-.313-.316-.234-.513.35-.984.546-2.01.546-3.035.075-5.082-3.947-9.335-9.029-9.415-5.077-.08-9.258 3.98-9.338 9.1a9.19 9.19 0 009.063 9.415 9.056 9.056 0 006.02-2.127c.024-.052.065-.085.113-.125a.864.864 0 00.082-.073l.509.597 1.876 1.892a.378.378 0 010 .55.418.418 0 01-.275.118.418.418 0 01-.275-.118l-1.914-1.929a9.879 9.879 0 01-5.982 2.01h-.196a9.785 9.785 0 01-5.823-2.052l-1.951 1.967a.418.418 0 01-.275.118.418.418 0 01-.275-.118.378.378 0 010-.55l1.875-1.892a10.118 10.118 0 01-3.36-7.683c.084-5.477 4.536-9.89 9.93-9.89z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmClockLight;
