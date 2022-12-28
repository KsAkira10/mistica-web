/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddBillEuroFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.548 12.192c-2.52 0-4.578-2.076-4.578-4.631 0-2.556 2.053-4.632 4.578-4.632a.53.53 0 01.057.003.887.887 0 00.056.002A1.827 1.827 0 0017.08 2H6.833C5.825 2 5 2.83 5 3.854V22h13.914v-9.827c-.122.01-.244.019-.366.019zm-5.31 3.148a.55.55 0 01.549.554.55.55 0 01-.548.555h-3.06c.257 1.37 1.448 2.408 2.877 2.408.51 0 1.017-.137 1.462-.398a.543.543 0 01.75.204.56.56 0 01-.202.758 3.99 3.99 0 01-2.015.55c-2.034 0-3.716-1.536-3.983-3.517h-.59a.55.55 0 01-.549-.555.55.55 0 01.548-.555h.59c.268-1.981 1.95-3.517 3.984-3.517.703 0 1.402.19 2.015.55a.56.56 0 01.202.758.548.548 0 01-.75.204 2.898 2.898 0 00-1.462-.398c-1.43 0-2.62 1.038-2.877 2.408h3.06v-.01zm1.468-7.775c0 2.143 1.724 3.888 3.843 3.888 2.118 0 3.842-1.745 3.842-3.888 0-2.142-1.724-3.887-3.842-3.887-2.119 0-3.843 1.745-3.843 3.887zm3.843-2.778c1.513 0 2.746 1.247 2.746 2.778 0 1.532-1.233 2.778-2.747 2.778-1.513 0-2.746-1.246-2.746-2.778 0-1.53 1.233-2.778 2.747-2.778zm1.827 3.328a.55.55 0 00.548-.554.545.545 0 00-.548-.55h-1.28V5.717a.55.55 0 10-1.096 0V7.01h-1.28a.55.55 0 00-.548.554.55.55 0 00.549.555H18v1.29a.55.55 0 101.096 0V8.114h1.28z"
            />
        </svg>
    );
};

export default IconAddBillEuroFilled;
