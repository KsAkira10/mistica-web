/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconGroupFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.72 5.17c-.638-.645-1.563-.97-2.745-.97-1.182 0-2.103.325-2.742.97-.661.666-.997 1.655-.997 2.938 0 1.28.336 2.268.997 2.932.636.639 1.56.964 2.742.964s2.107-.325 2.745-.964c.667-.663 1.006-1.652 1.006-2.932s-.339-2.27-1.006-2.939zm-7.07 4.4c-.336-.34-.823-.51-1.445-.51-.622 0-1.106.17-1.448.51-.348.35-.524.87-.524 1.546 0 .675.176 1.193.527 1.543.336.336.82.507 1.442.507s1.11-.17 1.446-.507c.352-.35.529-.868.529-1.543 0-.675-.177-1.196-.527-1.546zm10.101-.482c.614 0 1.095.17 1.429.504.344.348.518.863.518 1.53 0 .666-.174 1.182-.521 1.526-.33.334-.812.502-1.429.502-.616 0-1.098-.168-1.431-.502-.347-.347-.521-.86-.521-1.526 0-.667.177-1.182.521-1.53.336-.336.82-.504 1.434-.504zm-.196 5.605c-.77-.882-1.91-1.347-3.297-1.347v.002H9.695c-1.39 0-2.526.465-3.291 1.348-.703.81-1.073 1.93-1.073 3.246v1.376c0 .26.19.47.426.47h12.45c.236 0 .427-.21.427-.47v-1.376c0-1.316-.373-2.44-1.079-3.249zm-11.76-.602l-.002.002a.067.067 0 00-.014.015c-.843.972-1.288 2.3-1.288 3.834v.748H3.02c-.474 0-.86-.4-.86-.896v-.703c0-.846.26-1.575.755-2.112.538-.583 1.311-.891 2.239-.891h.644l-.004.003zm16.051 2.983c0-.843-.26-1.574-.756-2.112-.535-.583-1.308-.89-2.238-.89h-.712l.034.033c.849.975 1.297 2.3 1.297 3.834v.734h1.515c.474 0 .86-.4.86-.896v-.703z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGroupFilled;
