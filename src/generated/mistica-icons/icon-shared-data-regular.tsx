/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSharedDataRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.819 9.877a1.064 1.064 0 00-.025-.024c-.241-.23-.575-.345-.995-.345-.42 0-.753.118-.994.345-.255.24-.384.59-.384 1.039 0 .428.118.764.356 1.008s.59.373 1.022.373c.425 0 .78-.132 1.016-.366l2.02 1.01a2.157 2.157 0 00-.008.18c0 .428.115.764.353 1.008.238.243.591.372 1.023.372.431 0 .79-.134 1.025-.372.235-.238.356-.58.356-1.009 0-.448-.13-.798-.384-1.039-.241-.23-.574-.345-.995-.345-.42 0-.753.118-.994.345a1.095 1.095 0 00-.069.071l-1.98-.989a2.027 2.027 0 00.001-.495l1.978-.988.04.043c.237.243.59.372 1.022.372.431 0 .79-.134 1.025-.372.235-.239.356-.58.356-1.009 0-.448-.13-.798-.384-1.04-.244-.229-.574-.344-.995-.344-.42 0-.753.118-.994.345-.255.24-.384.59-.384 1.04 0 .06.003.12.007.179L10.82 9.877z"
            />
            <path
                fill={fillColor}
                d="M5.446 16.931h13.11c1.098 0 1.94-.328 2.504-.972.52-.6.787-1.468.787-2.583V8.438c0-1.115-.264-1.983-.787-2.583-.563-.644-1.406-.972-2.505-.972H5.446c-1.1 0-1.94.328-2.504.972-.52.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.984.787 2.586.563.641 1.406.969 2.504.969zM3.788 6.595c.345-.395.885-.588 1.658-.588l13.11-.003c.77 0 1.313.193 1.658.588.339.39.512 1.011.512 1.846v4.938c0 .835-.173 1.457-.512 1.846-.345.395-.888.588-1.659.588H5.446c-.77 0-1.313-.193-1.658-.588-.339-.389-.513-1.01-.513-1.846V8.438c0-.835.174-1.457.513-1.843zm17.465 12.521H2.749a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56h18.504c.308 0 .56.252.56.56 0 .308-.252.56-.56.56z"
            />
        </svg>
    );
};

export default IconSharedDataRegular;
