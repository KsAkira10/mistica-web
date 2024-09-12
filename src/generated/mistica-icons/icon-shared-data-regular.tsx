'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSharedDataRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m10.819 9.877-.025-.024q-.363-.345-.995-.345c-.42 0-.753.118-.994.345-.255.24-.384.59-.384 1.039q0 .643.356 1.008c.238.244.59.373 1.022.373.425 0 .78-.132 1.016-.366l2.02 1.01a2 2 0 0 0-.008.18q-.002.642.353 1.008c.238.243.591.372 1.023.372s.79-.134 1.025-.372.356-.58.356-1.009c0-.448-.13-.798-.384-1.039q-.362-.344-.995-.344-.631.002-.994.344a1 1 0 0 0-.069.071l-1.98-.989a2 2 0 0 0 .001-.495l1.978-.988.04.043c.237.243.59.372 1.022.372.431 0 .79-.134 1.025-.372.235-.239.356-.58.356-1.009 0-.448-.13-.798-.384-1.04q-.365-.344-.995-.344c-.42 0-.753.118-.994.345-.255.24-.384.59-.384 1.04q0 .09.007.179z"
            />
            <path
                fill={fillColor}
                d="M5.446 16.931h13.11c1.098 0 1.94-.328 2.504-.972.52-.6.787-1.468.787-2.583V8.438c0-1.115-.264-1.983-.787-2.583-.563-.644-1.406-.972-2.504-.972H5.445c-1.1 0-1.94.328-2.504.972-.52.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.984.787 2.586.563.641 1.406.969 2.504.969M3.788 6.595c.345-.395.885-.588 1.658-.588l13.11-.003c.77 0 1.313.193 1.658.588.339.39.512 1.011.512 1.846v4.938c0 .835-.173 1.457-.512 1.846-.345.395-.888.588-1.658.588H5.445c-.77 0-1.313-.193-1.658-.588-.339-.389-.513-1.01-.513-1.846V8.438c0-.835.174-1.457.513-1.843M21.253 19.116H2.749a.56.56 0 0 1-.56-.56c0-.309.252-.56.56-.56h18.504c.308 0 .56.252.56.56s-.252.56-.56.56"
            />
        </svg>
    );
};

export default IconSharedDataRegular;
