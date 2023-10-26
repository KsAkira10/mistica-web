/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddBillPoundFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.548 12.192c-2.52 0-4.578-2.076-4.578-4.631 0-2.556 2.053-4.632 4.578-4.632.02 0 .038.001.057.003a.887.887 0 0 0 .056.002A1.827 1.827 0 0 0 17.08 2H6.833C5.825 2 5 2.83 5 3.854V22h13.914v-9.827c-.122.01-.244.019-.366.019Zm0-8.519c-2.118 0-3.842 1.745-3.842 3.888 0 2.142 1.724 3.887 3.843 3.887 2.118 0 3.842-1.745 3.842-3.888 0-2.142-1.724-3.887-3.842-3.887Zm0 6.665c-1.513 0-2.746-1.246-2.746-2.778 0-1.53 1.233-2.777 2.747-2.777 1.513 0 2.746 1.246 2.746 2.777 0 1.532-1.233 2.778-2.747 2.778Zm1.828-2.223a.55.55 0 0 0 .548-.554.545.545 0 0 0-.548-.55h-1.28V5.717a.55.55 0 1 0-1.096 0V7.01h-1.28a.55.55 0 0 0-.548.554.55.55 0 0 0 .549.555H18v1.29a.55.55 0 1 0 1.096 0V8.114h1.28ZM9.668 19.227a.55.55 0 0 1-.549-.555.55.55 0 0 1 .549-.555c.309 0 .548-.241.548-.554v-1.669h-.183a.55.55 0 0 1-.548-.554.55.55 0 0 1 .548-.555h.183v-1.48c0-1.222.984-2.222 2.198-2.222.501 0 .993.175 1.382.493a.561.561 0 0 1 .08.782.546.546 0 0 1-.773.08 1.078 1.078 0 0 0-.69-.246c-.604 0-1.096.498-1.096 1.11v1.478h1.65a.55.55 0 0 1 .548.555.55.55 0 0 1-.548.554h-1.65v1.67c0 .194-.033.378-.094.554h3.023a.55.55 0 0 1 .549.554c0 .308-.249.56-.549.56H9.668Z"
            />
        </svg>
    );
};

export default IconAddBillPoundFilled;
