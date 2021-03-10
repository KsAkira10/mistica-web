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

const IconShieldCrossRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.9 20.073v-7.888h6.587c-.058.807-.131 1.543-.227 2.103-.372 2.16-4.156 4.6-6.36 5.785m-7.57-5.785a22.452 22.452 0 01-.232-2.103h6.585v7.888c-2.201-1.185-5.98-3.625-6.352-5.785m3.302-9.747c.88-.591 1.717-1.152 3.053-1.283v7.697h-6.66a121.92 121.92 0 01-.132-5.12c1.677.087 2.728-.617 3.739-1.294m11.056 1.294a118.903 118.903 0 01-.129 5.12H12.9V3.258c1.332.131 2.17.694 3.052 1.283 1.009.677 2.05 1.383 3.737 1.294m1.216-.687a.618.618 0 00-.23-.459.642.642 0 00-.504-.137c-1.622.255-2.476-.314-3.552-1.037C15.56 2.804 14.359 2 12.294 2h-.008c-2.065 0-3.266.804-4.328 1.515-1.076.723-1.924 1.292-3.527 1.04a.611.611 0 00-.52.109.632.632 0 00-.236.482c0 .269-.017 6.61.457 9.35.61 3.552 7.15 6.773 7.896 7.129.003.002.006 0 .008.002a.57.57 0 00.496 0c.003-.002.009 0 .011-.002.745-.356 7.294-3.577 7.905-7.13.474-2.739.457-9.078.457-9.347"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconShieldCrossRegular;
