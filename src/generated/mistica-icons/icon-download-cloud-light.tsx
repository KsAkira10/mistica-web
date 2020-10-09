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

const IconDownloadCloudLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.666 17.02l-.978.008 1.02-1.081a.687.687 0 00.123-.714.639.639 0 00-.585-.401h-1.67l-.008-4.521c-.008-.359-.286-.655-.641-.655H10.06a.652.652 0 00-.641.655v4.437H7.742a.632.632 0 00-.586.4.683.683 0 00.132.718l1.143 1.21-2.056.008c-1.02 0-3.398-.342-3.398-3.507 0-1.77.742-2.896 2.204-3.33.183-.05.295-.334.295-.519 0-5.072 4.268-5.467 5.577-5.467.74 0 4.484.17 5.38 3.619a.409.409 0 00.387.313c1.26.034 4.196.535 4.196 4.404.003 4.106-3.328 4.423-4.35 4.423zm-4.613 2.675L8.184 15.6h1.423a.643.643 0 00.633-.656v-4.437h3.504l.009 4.521c0 .367.288.656.641.656h1.407l-3.748 4.01zm5.092-12.34c-1.176-3.755-5.263-3.949-6.087-3.949-1.061 0-6.294.297-6.4 6.123-1.054.401-2.502 1.423-2.502 4.045 0 3.219 2.182 4.359 4.23 4.359l2.846-.017 2.361 2.513a.642.642 0 00.462.204.632.632 0 00.451-.204l2.387-2.538 1.776-.017c.865 0 5.176-.246 5.176-5.28-.002-4.395-3.285-5.129-4.7-5.238z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDownloadCloudLight;
