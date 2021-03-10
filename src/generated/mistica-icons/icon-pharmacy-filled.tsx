/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconPharmacyFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.392 16.924a3.535 3.535 0 01-1.37.645c.961-.6 1.482-1.345 1.482-2.446 0-1.061-.804-1.773-1.54-2.187.137-.126.268-.26.392-.401.115.05.213.112.31.185.085.062.163.118.244.165.737.429 1.233 1.241 1.297 2.118.025.454-.036 1.302-.815 1.921m-4.227.678v-3.437a5.078 5.078 0 001.745-.512c.524.19 1.496.73 1.496 1.473-.003.938-.507 1.583-3.24 2.476M6.59 6.681c.185-1.06.882-2.037 1.919-2.684 2.65-1.652 5.103-.23 5.232-.154.006.003.737.41.86 1.098.076.418-.09.89-.493 1.406-.16-.137-.336-.551-.378-1.341a.58.58 0 00-.23-.435c-.072-.053-1.764-1.319-4.283-.098-.882.426-1.5.944-1.862 2.216a3.245 3.245 0 00.084 1.978v.784c0 .14.011.274.022.409-.857-.966-1.033-2.233-.871-3.18m12.706 8.25c-.09-1.233-.793-2.375-1.835-2.986-.05-.028-.095-.064-.145-.1a3.24 3.24 0 00-.348-.23 4.776 4.776 0 00.485-2.07l.003-.88a.585.585 0 00-.586-.586H8.493a2.04 2.04 0 01-.003-1.07c.27-.95.684-1.21 1.241-1.481 1.417-.684 2.437-.348 2.852-.146.095.947.389 1.597.87 1.938.387.272.819.283 1.07.208a.578.578 0 00.273-.171c.792-.888 1.117-1.768.963-2.622-.224-1.252-1.414-1.9-1.434-1.91C14.196 2.745 11.162.96 7.888 3c-1.32.82-2.213 2.09-2.454 3.479-.28 1.602.185 3.919 2.404 5.174.044.025.092.022.137.036.725 1.395 2.154 2.303 4.014 2.473v4.678c-1.084.224-1.7 1.023-1.7 2.286 0 .325.263.585.588.585h3.532a.588.588 0 00.588-.585c0-1.314-.658-2.134-1.832-2.316v-.118c.126.025.698.134 1.462.134 1.02 0 2.379-.193 3.446-1.042.86-.683 1.305-1.722 1.224-2.854"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPharmacyFilled;
