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

const IconMobileQuestionFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.886 3.119c.65.635.958 1.535.958 2.73v12.3c0 1.222-.316 2.124-.966 2.757-.642.627-1.544.94-2.76.94h-6.207c-1.218 0-2.117-.313-2.767-.94-.577-.572-.885-1.342-.95-2.356v-.546H8.08c-3.74 0-5.924-1.874-5.924-5.869S4.34 6.267 8.079 6.267h.107v-.42c0-1.182.308-2.073.958-2.717.647-.65 1.549-.975 2.767-.975h6.208c1.218.006 2.126.32 2.767.964m-8.09 9.02c0-3.183-1.5-4.662-4.714-4.662-3.204 0-4.706 1.48-4.706 4.661 0 3.182 1.502 4.661 4.706 4.661 3.213 0 4.714-1.479 4.714-4.66m-3.518-3.22c.457.331.67.788.67 1.435 0 .77-.33 1.24-1.028 2.062-.779.893-.779.893-.779 1.675 0 .22-.182.4-.406.4h-.26a.4.4 0 0 1-.398-.325 2 2 0 0 1-.037-.403c0-.68.247-1.095.768-1.714l.098-.115c.832-.978.944-1.205.944-1.591 0-.275-.07-.437-.252-.58-.104-.084-.297-.18-.852-.18-.316 0-.6.037-.938.124a.42.42 0 0 1-.317-.05.4.4 0 0 1-.182-.264l-.04-.199a.4.4 0 0 1 .228-.44c.28-.128.868-.23 1.367-.23.588-.002 1.064.132 1.414.396M7.62 14.755c.406 0 .683.278.683.659 0 .42-.274.689-.666.689-.412 0-.684-.266-.684-.65v-.037a.643.643 0 0 1 .667-.66m6.345 3.25c0 .319.09.577.268.753.188.194.454.289.78.289.324 0 .59-.095.778-.289.185-.176.274-.434.274-.753 0-.659-.389-1.045-1.053-1.045-.658 0-1.047.386-1.047 1.045"
            />
        </svg>
    );
};

export default IconMobileQuestionFilled;
