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

const IconPersonLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.603 3.333c-.26.243-.39.63-.39 1.151 0 1.022.49 1.501 1.544 1.501 1.056 0 1.549-.476 1.549-1.501 0-.518-.132-.905-.392-1.148-.252-.239-.639-.359-1.154-.359-.518 0-.905.12-1.157.356zm1.154 3.47c-1.515 0-2.387-.846-2.387-2.319 0-.75.219-1.336.648-1.74.411-.389.997-.588 1.739-.588.74 0 1.325.2 1.74.588.43.404.65.99.65 1.74 0 1.473-.872 2.32-2.39 2.32zm4.345 8.188a.526.526 0 00.383-.633c0-.003 0-.006-.003-.008l-1.196-4.289a.802.802 0 01-.042-.115.633.633 0 00-.016-.056c-.18-.865-.975-1.493-1.888-1.493h-2.664c-.91 0-1.706.628-1.888 1.493-.003.014-.009.025-.011.037a.308.308 0 01-.034.092l-1.21 4.336a.523.523 0 00.372.636h.006c.137.04.283.022.406-.05a.502.502 0 00.247-.309l.532-2.865c.04-.21.224-.347.454-.336a.414.414 0 01.383.409v8.655a.53.53 0 001.062 0v-5.157c0-.227.188-.409.42-.409h1.188c.232 0 .423.185.423.41v5.159a.53.53 0 00.532.527.53.53 0 00.53-.527v-8.655c0-.213.168-.39.383-.41.227-.008.412.127.451.337l.538 2.893a.512.512 0 00.241.278c.12.07.266.086.4.05zm1.196-.854a1.341 1.341 0 01-.956 1.641c-.005 0-.008.003-.014.003a1.396 1.396 0 01-1.4-.41v5.124c0 .742-.616 1.348-1.373 1.348a1.36 1.36 0 01-1.372-1.348v-4.748h-.336v4.751c0 .742-.617 1.347-1.373 1.347s-1.372-.605-1.372-1.347v-5.126a1.39 1.39 0 01-1.404.409 1.34 1.34 0 01-.969-1.63l.003-.009L7.93 9.848a.825.825 0 01.047-.14c.27-1.238 1.406-2.132 2.709-2.132h2.664c1.302 0 2.437.894 2.706 2.126a.868.868 0 01.056.171l1.185 4.264z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPersonLight;
