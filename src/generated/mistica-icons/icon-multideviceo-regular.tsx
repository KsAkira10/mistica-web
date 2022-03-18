/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMultideviceoRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.773 2h-5.185c-1.223 0-2.223 1.013-2.223 2.25v.375H4.223C3 4.625 2 5.638 2 6.875V20.75C2 21.987 3 23 4.223 23h10.37c1.222 0 2.222-1.013 2.222-2.25V17h2.962C21 17.001 22 15.99 22 14.751V4.25C21.995 3.013 20.995 2 19.773 2zm-5.925 3.753h6.664v7.496h-6.664V5.753zm5.925-2.25h-5.185a.745.745 0 00-.74.748v.374h6.664v-.374a.745.745 0 00-.74-.749zM4.223 6.126h8.147V7.25H3.479v-.374c0-.375.37-.749.744-.749zm0 15.37h10.365c.37 0 .739-.373.744-.748v-.374H3.483v.374c0 .375.37.749.74.749zm11.104-2.25H3.479V8.377h8.886v6.374c0 1.238 1 2.25 2.223 2.25h.739v2.246zm-.74-3.748h5.186a.745.745 0 00.739-.748v-.375h-6.664v.375c0 .412.332.748.74.748z"
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
                    d="M14.72 16.084v-5.269c0-1.35.745-2.095 2.095-2.095h.897v-.008c0-.835-.171-1.457-.513-1.846-.344-.395-.888-.588-1.658-.588H5.45c-.77 0-1.313.193-1.658.588-.339.39-.513 1.011-.513 1.846v4.938c0 .835.171 1.457.513 1.846.345.395.888.588 1.658.588h9.27zm0 1.118H5.451c-1.098 0-1.94-.328-2.504-.97-.524-.599-.787-1.467-.787-2.582V8.712c0-1.115.266-1.983.787-2.583.563-.644 1.403-.969 2.504-.969h10.09c1.098 0 1.941.328 2.504.97.524.599.787 1.467.787 2.582v.008h.922c1.37 0 2.095.726 2.095 2.095v6.49c-.003 1.37-.726 2.096-2.098 2.096h-2.936c-1.37 0-2.095-.726-2.095-2.095v-.104zm-6.818 2.202h4.916a.56.56 0 100-1.12H7.902a.562.562 0 00-.56.56c0 .308.252.56.56.56zM18.283 17.6c-.286 0-.456-.112-.549-.208a.746.746 0 01-.199-.54c0-.457.294-.75.748-.75s.748.293.748.75c0 .28-.106.448-.199.54a.747.747 0 01-.549.208zm-1.468-7.762c-.728 0-.974.246-.974.975v6.49c0 .375.07.636.207.773.137.134.395.204.77.204h2.939c.375 0 .633-.067.77-.204.137-.134.207-.395.207-.773v-6.488c0-.747-.227-.974-.975-.974h-2.944v-.003z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMultideviceoRegular;
