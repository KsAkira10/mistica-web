'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLightbulbRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^vivo-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.754 16.548v2.981c0 1.365 1.079 2.471 2.41 2.471h3.672c1.331 0 2.41-1.106 2.41-2.47v-2.982c0-1.023.54-2 1.265-2.946A7.26 7.26 0 0 0 19 9.176C19 5.213 15.866 2 12 2S5 5.213 5 9.176c0 1.67.557 3.207 1.49 4.426.723.947 1.264 1.922 1.264 2.946M12 3.176c3.232 0 5.852 2.687 5.852 6 0 1.397-.464 2.68-1.244 3.7-.758.99-1.51 2.234-1.51 3.672v.51h-2.524v-3.176a.58.58 0 0 0-.574-.588.58.58 0 0 0-.574.588v3.177H8.902v-.511c0-1.438-.752-2.681-1.51-3.672a6.07 6.07 0 0 1-1.244-3.7c0-3.313 2.62-6 5.852-6m-3.098 15.06h6.196v1.293c0 .715-.565 1.294-1.262 1.294h-3.672c-.697 0-1.262-.579-1.262-1.294z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.309 3.402V2.7c0-.387.31-.701.691-.701s.691.314.691.7v.702c0 .386-.31.7-.691.7a.697.697 0 0 1-.691-.7m9 7.017h-.519a.697.697 0 0 0-.691.7c0 .387.31.701.691.701h.519a.697.697 0 0 0 .691-.7c0-.387-.31-.701-.691-.701m-16.618 0h.519c.38 0 .691.314.691.7 0 .387-.31.701-.691.701H3.69a.697.697 0 0 1-.691-.7c0-.387.31-.701.691-.701M5.77 6.663l-.616-.36a.684.684 0 0 0-.944.257.704.704 0 0 0 .252.957l.616.359a.683.683 0 0 0 .944-.256.71.71 0 0 0-.252-.957m2.42-1.527a.69.69 0 0 1-.6-.35l-.345-.607a.705.705 0 0 1 .253-.957.685.685 0 0 1 .944.256l.345.606c.19.333.08.764-.252.957a.7.7 0 0 1-.346.095m7.262-.072a.683.683 0 0 0 .944-.256l.354-.625a.71.71 0 0 0-.252-.957.684.684 0 0 0-.944.256l-.355.625c-.19.332-.08.76.253.957m3.399 1.24a.685.685 0 0 1 .944.256c.19.337.08.763-.253.957l-.616.359a.688.688 0 0 1-.944-.256.705.705 0 0 1 .253-.957zm-.793 4.995c0 2.13-1.055 4.061-2.828 5.193-.066.04-.16.122-.221.176a1.75 1.75 0 0 1 .443 2.524c.217.292.354.656.354 1.052 0 .97-.775 1.756-1.732 1.756H9.917a1.744 1.744 0 0 1-1.732-1.756c0-.396.133-.76.354-1.052a1.746 1.746 0 0 1 .448-2.525 3 3 0 0 0-.222-.175C6.993 15.36 5.938 13.43 5.938 11.3c0-3.387 2.716-6.14 6.058-6.14 3.345 0 6.062 2.753 6.062 6.14m-3.98 8.599H9.922a.35.35 0 0 0-.346.35c0 .193.155.35.346.35h4.156c.19 0 .346-.157.346-.35a.35.35 0 0 0-.346-.35m.346-1.757a.35.35 0 0 0-.346-.35H9.922a.35.35 0 0 0-.346.35c0 .193.155.35.346.35h4.156c.19 0 .346-.157.346-.35M12 6.56c-2.579 0-4.675 2.125-4.675 4.74a4.72 4.72 0 0 0 2.179 4.007c.08.052.76.501 1.003 1.082h2.982c.242-.58.923-1.03 1.003-1.082l.007-.005a4.73 4.73 0 0 0 2.176-4.003c0-2.614-2.096-4.74-4.675-4.74"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.309 3.402V2.7c0-.387.31-.701.691-.701s.691.314.691.7v.702c0 .386-.31.7-.691.7a.697.697 0 0 1-.691-.7m9 7.017h-.519a.697.697 0 0 0-.691.7c0 .387.31.701.691.701h.519a.697.697 0 0 0 .691-.7c0-.387-.31-.701-.691-.701m-16.618 0h.519c.38 0 .691.314.691.7 0 .387-.31.701-.691.701H3.69a.697.697 0 0 1-.691-.7c0-.387.31-.701.691-.701M5.77 6.663l-.616-.36a.684.684 0 0 0-.944.257.704.704 0 0 0 .252.957l.616.359a.683.683 0 0 0 .944-.256.71.71 0 0 0-.252-.957m2.42-1.527a.69.69 0 0 1-.6-.35l-.345-.607a.705.705 0 0 1 .253-.957.685.685 0 0 1 .944.256l.345.606c.19.333.08.764-.252.957a.7.7 0 0 1-.346.095m7.262-.072a.683.683 0 0 0 .944-.256l.354-.625a.71.71 0 0 0-.252-.957.684.684 0 0 0-.944.256l-.355.625c-.19.332-.08.76.253.957m3.399 1.24a.685.685 0 0 1 .944.256c.19.337.08.763-.253.957l-.616.359a.688.688 0 0 1-.944-.256.705.705 0 0 1 .253-.957zm-.793 4.995c0 2.13-1.055 4.061-2.828 5.193-.066.04-.16.122-.221.176a1.75 1.75 0 0 1 .443 2.524c.217.292.354.656.354 1.052 0 .97-.775 1.756-1.732 1.756H9.917a1.744 1.744 0 0 1-1.732-1.756c0-.396.133-.76.354-1.052a1.746 1.746 0 0 1 .448-2.525 3 3 0 0 0-.222-.175C6.993 15.36 5.938 13.43 5.938 11.3c0-3.387 2.716-6.14 6.058-6.14 3.345 0 6.062 2.753 6.062 6.14m-3.98 8.599H9.922a.35.35 0 0 0-.346.35c0 .193.155.35.346.35h4.156c.19 0 .346-.157.346-.35a.35.35 0 0 0-.346-.35m.346-1.757a.35.35 0 0 0-.346-.35H9.922a.35.35 0 0 0-.346.35c0 .193.155.35.346.35h4.156c.19 0 .346-.157.346-.35M12 6.56c-2.579 0-4.675 2.125-4.675 4.74a4.72 4.72 0 0 0 2.179 4.007c.08.052.76.501 1.003 1.082h2.982c.242-.58.923-1.03 1.003-1.082l.007-.005a4.73 4.73 0 0 0 2.176-4.003c0-2.614-2.096-4.74-4.675-4.74"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.301 4.205a.62.62 0 0 0 .625.617.62.62 0 0 0 .624-.614V2.771a.62.62 0 0 0-.624-.616.62.62 0 0 0-.625.616zm6.317 6.807c0-5.137-4.309-5.571-5.415-5.594-.17-.008-.364-.008-.538-.008-1.134.008-5.353.395-5.353 5.571 0 2.614 1.087 4.014 2.306 4.754l.008 1.115c0 .512.151.91.45 1.173.287.258.724.39 1.892.39h1.997c1.196 0 1.63-.132 1.916-.39.294-.263.44-.66.44-1.173l-.009-1.12c1.219-.746 2.306-2.135 2.306-4.718m-1.25 0c0 1.762-.56 2.964-1.714 3.67 0 0-.594.361-.585.361l.002.692.009 1.112a1 1 0 0 1-.031.25c-.09.027-.359.08-1.078.08h-1.998c-.722 0-.98-.058-1.061-.084a.7.7 0 0 1-.034-.255l-.014-1.795-.591-.356c-1.137-.689-1.711-1.935-1.711-3.703 0-3.756 2.574-4.33 4.109-4.339h.036c.149 0 .311 0 .468.006 3.784.081 4.193 3.078 4.193 4.361m-4.776-3.725c1.908.042 4.012 1.106 4.163 3.972a.62.62 0 0 1-.591.647h-.034a.62.62 0 0 1-.622-.583C14.38 8.847 12.4 8.536 11.556 8.52h-.145q-.098 0-.197-.003a.62.62 0 0 1-.625-.616.62.62 0 0 1 .625-.616c.123 0 .26 0 .378.003m3.723 12.238a.62.62 0 0 0-.625-.616H9.396a.62.62 0 0 0-.624.616.62.62 0 0 0 .624.616h5.294a.62.62 0 0 0 .625-.616m-1.339 1.084c.345 0 .625.277.625.616a.62.62 0 0 1-.625.616H9.951a.62.62 0 0 1-.625-.616.62.62 0 0 1 .625-.616zM17.03 6.472a.63.63 0 0 1-.44-.18.61.61 0 0 1-.008-.862l.009-.009 1.025-1.017a.63.63 0 0 1 .882 0c.241.238.244.625.006.866l-.006.005L17.47 6.29a.61.61 0 0 1-.44.183M6.301 6.469c.244.24.639.24.882 0l.006-.006a.61.61 0 0 0-.006-.865L6.158 4.58a.63.63 0 0 0-.882 0l-.009.008a.614.614 0 0 0 .009.866zm-1.244 3.638c.345 0 .625.278.625.617a.62.62 0 0 1-.625.616h-1.45a.62.62 0 0 1-.625-.616.62.62 0 0 1 .624-.617zm15.97.544a.62.62 0 0 0-.625-.616H18.95a.62.62 0 0 0-.625.616c.003.342.283.619.625.616h1.45a.62.62 0 0 0 .625-.616"
                />
            </svg>
        );
    }
};

export default IconLightbulbRegular;
