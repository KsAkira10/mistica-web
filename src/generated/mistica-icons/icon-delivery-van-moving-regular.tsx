/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDeliveryVanMovingRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.182 5.37H5.435c-1.075 0-1.947.844-1.958 1.889h-.81l-.09.006A.656.656 0 002 7.909c0 .359.298.65.667.65h.81v1.217h-.81l-.09.006a.656.656 0 00-.577.644c0 .36.298.65.667.65h.81v1.22h-.81l-.09.005a.656.656 0 00-.577.644c0 .36.298.65.667.65h.81v1.238c0 1.055.876 1.91 1.958 1.91h.037c.229 1.208 1.128 1.888 2.544 1.888 1.418 0 2.319-.68 2.548-1.888h4.026c.23 1.208 1.13 1.888 2.546 1.888 1.417 0 2.317-.68 2.547-1.888h.359c1.081 0 1.958-.855 1.958-1.91v-2.714c0-.425-.145-.838-.412-1.173l-3.86-4.839a1.975 1.975 0 00-1.546-.737zm-.316 10.733v-.01c0-.895.353-1.24 1.27-1.24.761 0 1.134.238 1.24.83.02.122.031.258.031.41 0 .893-.353 1.238-1.271 1.238-.914 0-1.268-.342-1.27-1.228zm3.817-.66c-.23-1.21-1.13-1.89-2.547-1.89-1.402 0-2.297.666-2.538 1.851l-.009.038h-4.025c-.23-1.209-1.13-1.888-2.548-1.888-.991 0-1.73.333-2.162.948-.16.227-.278.493-.35.794l-.003.008a2.848 2.848 0 00-.019.085l-.012.053-.035.001a.617.617 0 01-.625-.61V7.279c0-.336.28-.609.625-.609h10.747a.63.63 0 01.492.235l3.861 4.839a.602.602 0 01.132.375v2.714l-.006.083a.62.62 0 01-.62.527h-.358zm-12.737-.197c.193-.275.536-.392 1.071-.392.917 0 1.27.344 1.271 1.24v.013c-.003.883-.358 1.224-1.272 1.224-.916 0-1.269-.344-1.269-1.238 0-.364.058-.636.189-.832l.01-.015z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeliveryVanMovingRegular;
