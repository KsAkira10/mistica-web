/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTkRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.15 11.996c0 6.437 3.403 9.84 9.84 9.84 6.443 0 9.846-3.403 9.846-9.84 0-6.443-3.403-9.846-9.846-9.846-6.437 0-9.84 3.403-9.84 9.846zm1.207 0c0-5.731 2.905-8.639 8.633-8.639 5.731 0 8.639 2.908 8.639 8.639 0 5.728-2.908 8.633-8.639 8.633-5.728 0-8.633-2.905-8.633-8.633zm8.325-4.768a.404.404 0 01.392.49L12 8.064a.401.401 0 01-.393.314H9.229v7.98a.403.403 0 01-.403.404h-.381a.402.402 0 01-.403-.404v-7.98H5.609a.403.403 0 01-.403-.403V7.63c0-.221.18-.403.403-.403h6.073v.002zm7.045 9.325a.398.398 0 00-.006-.406l-2.93-4.865 2.698-3.404a.405.405 0 00.047-.425.406.406 0 00-.364-.227h-.445a.405.405 0 00-.317.15l-3.428 4.317V7.63a.402.402 0 00-.403-.403h-.382a.403.403 0 00-.403.403v8.726c0 .224.18.403.403.403h.382a.403.403 0 00.403-.403v-2.832l1.03-1.286 2.586 4.325c.073.12.202.196.345.196h.434a.404.404 0 00.35-.205z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTkRegular;
