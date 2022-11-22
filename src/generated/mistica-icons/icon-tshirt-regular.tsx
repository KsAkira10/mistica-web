/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTshirtRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.575 2.247l5.983 3.625c.25.15.355.467.246.74l-1.711 4.31a.593.593 0 01-.81.316l-1.266-.613.034 10.614a.598.598 0 01-.597.605H6.813a.587.587 0 01-.423-.177.613.613 0 01-.174-.428l.03-10.62-1.296.62a.582.582 0 01-.46.022.597.597 0 01-.338-.316L2.216 6.633a.61.61 0 01.247-.774l6.232-3.624a.592.592 0 01.594.003.606.606 0 01.297.523c0 1.762.81 2.583 2.546 2.583 1.737 0 2.546-.82 2.546-2.583 0-.002 0-.005.002-.007a.66.66 0 01.04-.197l.006-.016a.2.2 0 01.011-.029l.005-.017a.16.16 0 01.015-.042.243.243 0 01.049-.057c.009-.009.018-.017.026-.027.011-.017.025-.03.04-.045a.605.605 0 01.134-.092l.017-.009c.016-.008.03-.016.047-.022a.651.651 0 01.143-.03.107.107 0 00.031-.006.109.109 0 01.03-.006c.01 0 .02.003.027.006a.146.146 0 00.01.003c.037.002.07.008.104.02a.64.64 0 01.153.056l.007.002zm2.1 6.877l1.55.753 1.282-3.232-4.736-2.874c-.342 1.779-1.62 2.784-3.639 2.784-2.062 0-3.33-.983-3.655-2.795L3.52 6.636l1.46 3.252 1.605-.767a.584.584 0 01.574.036.609.609 0 01.277.513l-.033 10.97h9.45L16.82 9.67a.596.596 0 01.854-.546z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTshirtRegular;
