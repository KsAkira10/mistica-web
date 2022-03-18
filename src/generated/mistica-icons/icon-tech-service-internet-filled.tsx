/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTechServiceInternetFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.577 6.937c.109-2.395.91-4.275 2.032-4.937A5.568 5.568 0 002 6.937h2.577zm8.475 0h-2.577c-.11-2.395-.91-4.275-2.032-4.937a5.573 5.573 0 014.609 4.937zM6.969 3.104c-.625.558-1.184 2-1.279 3.833h1.28V3.104zm14.766 6.36l-.213-.509-2.07 2.08a.37.37 0 01-.517.01l-.54-.514a.372.372 0 01-.113-.266c0-.105.037-.196.108-.267l2.085-2.095-.507-.214a3.317 3.317 0 00-3.657.714 3.36 3.36 0 00-.91 3.019l-3.931 3.951a3.323 3.323 0 00-3.004.914 3.354 3.354 0 00-.71 3.675l.213.51 2.07-2.08a.37.37 0 01.516-.01l.54.51a.372.372 0 01.005.532L9.016 21.52l.507.214a3.306 3.306 0 003.652-.714 3.36 3.36 0 00.91-3.018l3.931-3.952a3.327 3.327 0 003.004-.914 3.341 3.341 0 00.715-3.67zM6.969 8.057v3.832c-.62-.557-1.18-1.995-1.279-3.832h1.28zm1.113 0v3.832c.626-.562 1.185-2 1.28-3.832h-1.28zm2.393 0c-.11 2.394-.91 4.275-2.032 4.937a5.568 5.568 0 004.609-4.937h-2.577zm-8.47 0h2.572c.109 2.394.91 4.275 2.037 4.937a5.573 5.573 0 01-4.61-4.937zm6.077-1.12V3.105c.621.558 1.18 1.995 1.28 3.833h-1.28z"
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
                    d="M21.842 8.455v4.938c0 1.115-.266 1.983-.787 2.583-.563.644-1.404.972-2.505.972H5.441c-1.098 0-1.941-.328-2.504-.97-.521-.602-.787-1.47-.787-2.585V8.455c0-1.115.266-1.984.787-2.583C3.5 5.228 4.34 4.9 5.441 4.9h13.11c1.098 0 1.94.328 2.504.972.52.6.787 1.468.787 2.583zm-.594 10.678H2.744a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56h18.504a.561.561 0 010 1.12zM10.44 12.56a.615.615 0 00-.269.297s-.333.919-.902 1.182c-.568.263-1.481-.073-1.481-.073-.115-.042-.118-.117-.009-.168l.552-.258a.493.493 0 00.24-.302l.13-.61a.304.304 0 00-.146-.314l-.549-.294a.487.487 0 00-.387-.012l-.551.258c-.11.05-.163 0-.124-.112 0 0 .328-.919.897-1.182.568-.264 1.482.073 1.482.073a.617.617 0 00.4-.017l3.824-1.782a.598.598 0 00.269-.294s.327-.919.896-1.182c.569-.263 1.482.073 1.482.073.114.04.117.115.008.165l-.552.258a.492.492 0 00-.24.302l-.13.611a.304.304 0 00.146.314l.552.294c.12.056.26.062.387.011l.551-.258c.11-.05.163 0 .124.113 0 0-.33.918-.897 1.182-.568.263-1.481-.073-1.481-.073a.613.613 0 00-.401.017l-3.82 1.781z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTechServiceInternetFilled;
