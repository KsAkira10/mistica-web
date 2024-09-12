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

const IconTechServiceMobileLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.709 18.664c0-.568-.328-.835-.832-.835-.502 0-.83.267-.832.835 0 .272.075.476.21.614.145.148.358.221.622.221.263 0 .476-.073.621-.221.135-.138.21-.34.21-.614"
            />
            <path
                fill={fillColor}
                d="M11.286 21.838h7.185c1.025 0 1.759-.241 2.246-.734s.723-1.238.723-2.277V5.17c0-2.025-.972-3.011-2.97-3.011h-7.184c-2.026 0-2.97.958-2.97 3.011v5.395l-2.624 2.625a2.746 2.746 0 0 0-3.034 3.426.56.56 0 0 0 .939.252l.753-.754.658.096.093.658-.754.753a.561.561 0 0 0 .252.939q.35.092.712.092a2.745 2.745 0 0 0 2.72-3.126l.283-.283v3.583c0 1.039.235 1.784.722 2.277.488.493 1.224.734 2.25.734m-2.412-7.154 3.986-3.986q.19.025.38.028a2.746 2.746 0 0 0 2.653-3.454.56.56 0 0 0-.938-.252l-.753.753-.659-.092-.092-.658.753-.754a.561.561 0 0 0-.252-.938 2.746 2.746 0 0 0-3.431 3.03l-1.644 1.645V5.171c0-1.742.697-2.45 2.409-2.45h7.182c1.689 0 2.409.733 2.409 2.45v13.656c0 .885-.185 1.501-.56 1.885s-.981.569-1.85.569h-7.184c-.868 0-1.47-.185-1.849-.57-.378-.383-.56-1-.56-1.884zm4.933-8.815-.953.952.194 1.353 1.352.193.953-.952a2.186 2.186 0 0 1-2.675 2.678L7.42 15.345a2.186 2.186 0 0 1-2.675 2.678l.952-.953-.193-1.35-1.353-.193-.952.952a2.186 2.186 0 0 1 2.675-2.677l5.255-5.255a2.182 2.182 0 0 1 2.112-2.751q.286 0 .566.073"
            />
        </svg>
    );
};

export default IconTechServiceMobileLight;
