/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTechServiceTvFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.842 8.455v4.938c0 1.115-.266 1.983-.787 2.583-.563.644-1.404.972-2.505.972H5.441c-1.098 0-1.941-.328-2.504-.97-.521-.602-.787-1.47-.787-2.585V8.455c0-1.115.266-1.984.787-2.583C3.5 5.228 4.34 4.9 5.441 4.9h13.11c1.098 0 1.94.328 2.504.972.52.6.787 1.468.787 2.583zm-6.84 10.678h-6.01a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56H15a.56.56 0 010 1.12zm-4.56-6.572a.615.615 0 00-.27.297s-.333.919-.902 1.182c-.568.263-1.481-.073-1.481-.073-.115-.042-.118-.117-.009-.168l.552-.258a.493.493 0 00.24-.302l.13-.61a.304.304 0 00-.146-.314l-.549-.294a.487.487 0 00-.387-.012l-.551.258c-.11.05-.163 0-.124-.112 0 0 .328-.919.897-1.182.568-.264 1.482.073 1.482.073a.617.617 0 00.4-.017l3.824-1.782a.598.598 0 00.269-.294s.327-.919.896-1.182c.569-.263 1.482.073 1.482.073.114.04.117.115.008.165l-.552.258a.492.492 0 00-.24.302l-.13.611a.304.304 0 00.146.314l.552.294c.12.056.26.062.387.011l.551-.258c.11-.05.163 0 .124.113 0 0-.33.918-.897 1.182-.568.263-1.481-.073-1.481-.073a.613.613 0 00-.401.017l-3.82 1.781z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTechServiceTvFilled;
