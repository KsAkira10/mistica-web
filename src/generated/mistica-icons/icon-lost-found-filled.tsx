/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLostFoundFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.494 6.685C12.494 4.1 14.522 2 17.006 2c2.485 0 4.512 2.1 4.512 4.685 0 2.584-2.023 4.685-4.512 4.685-2.489 0-4.512-2.1-4.512-4.685zm3.792 2.244c0 .312.24.56.54.56a.55.55 0 00.54-.56.549.549 0 00-.54-.561c-.3 0-.54.25-.54.56zm1.805-2.8c.476-.494.42-1.338.074-1.813a1.51 1.51 0 00-1.2-.614h-.074c-.513 0-.989.283-1.243.743a.575.575 0 00.199.768.531.531 0 00.739-.207c.06-.11.18-.182.305-.182h.074a.43.43 0 01.337.173c.064.086.069.288.023.336l-.397.412c-.37.384-.582.911-.582 1.453 0 .311.244.56.545.56.3 0 .54-.249.54-.56 0-.245.097-.484.263-.657l.397-.412zm-3.043 8.525a.355.355 0 00.337-.158.427.427 0 00.033-.389.346.346 0 00-.107-.139L4.404 5.452 3.84 4.278a.711.711 0 00-.97-.336.765.765 0 00-.323 1.007l.577 1.199-.014 14.136c0 .057.019.124.042.177a.36.36 0 00.314.206h.01a.36.36 0 00.313-.187 6.215 6.215 0 012.586-2.537 5.971 5.971 0 012.115-.633l1.275 2.647a.381.381 0 01-.162.504.358.358 0 01-.484-.168l-.162-.336a.715.715 0 00-.97-.335.77.77 0 00-.323 1.007l.161.335A1.793 1.793 0 009.442 22c.272 0 .545-.062.803-.197.887-.46 1.252-1.587.809-2.512l-1.275-2.647a6.098 6.098 0 011.76-1.371 5.877 5.877 0 013.509-.619z"
            />
        </svg>
    );
};

export default IconLostFoundFilled;
