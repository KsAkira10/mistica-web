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

const IconEcoRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.561 20.337a.369.369 0 01-.06-.005l.065.005a.54.54 0 01-.532-.453c-.054-.33-.082-.821-.118-1.443-.087-1.549-.219-3.893-.894-6.053a11.23 11.23 0 00-.525-1.376c-.74.55-1.736.835-2.965.835-2.796 0-4.385-1.474-4.508-4.159a.514.514 0 01-.01-.104V4.48a1.645 1.645 0 011.641-1.638h2.877c2.91 0 4.513 1.6 4.513 4.504 0 1.16-.256 2.11-.748 2.835.955 1.873 1.345 4.079 1.533 5.937.207-.714.463-1.47.775-2.217.193-.463.397-.897.614-1.302-.392-.68-.594-1.539-.594-2.561 0-2.877 1.602-4.462 4.512-4.462h2.874c.905 0 1.642.728 1.642 1.624v3.073a.538.538 0 01-.008.093c-.12 2.667-1.711 4.131-4.508 4.131-1.348 0-2.415-.34-3.172-.99a14.51 14.51 0 00-.366.808c-.972 2.325-1.37 4.765-1.498 5.569a.543.543 0 01-.48.45l.032-.008a.3.3 0 01-.08.011h-.012zm8.453-13.691h-2.877c-2.316 0-3.442 1.109-3.442 3.389 0 .552.066 1.035.198 1.45.226-.33.46-.63.704-.904.946-1.059 2.036-1.708 3.24-1.927a.538.538 0 11.194 1.062c-1.36.247-2.546 1.192-3.534 2.813.57.599 1.447.893 2.64.893 2.317 0 3.446-1.11 3.446-3.387V7.2a.563.563 0 00-.569-.554zM6.532 3.917H3.655a.57.57 0 00-.565.566l.001 2.823.001.037c0 2.305 1.126 3.426 3.44 3.426 1.065 0 1.878-.238 2.445-.719-.752-1.2-1.725-2.032-2.91-2.486a.54.54 0 01.387-1.008c1.399.535 2.435 1.447 3.205 2.555.207-.482.31-1.07.31-1.768 0-2.305-1.123-3.426-3.437-3.426z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEcoRegular;
