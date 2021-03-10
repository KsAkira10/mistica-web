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

const IconHomeFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.263 10.555L13.006 2.44c-.597-.586-1.726-.586-2.325 0l-8.258 8.117a1.326 1.326 0 00-.311 1.502c.24.552.818.907 1.47.907h.611v7.283c0 .793.709 1.437 1.583 1.437h3.11a.417.417 0 00.425-.409v-4.045h5.112v4.045a.42.42 0 00.426.412h2.938c.874 0 1.583-.644 1.583-1.437v-7.283h.728c.653 0 1.232-.356 1.47-.907.23-.521.113-1.098-.305-1.507"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHomeFilled;
