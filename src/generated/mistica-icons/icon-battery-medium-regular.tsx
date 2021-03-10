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

const IconBatteryMediumRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.931 18.639V7.547c0-.818-.193-1.404-.588-1.788-.395-.386-.997-.574-1.84-.574H8.8c-.835 0-1.434.193-1.838.588-.398.393-.59.97-.59 1.774v11.092c0 .826.192 1.412.59 1.796.395.38.995.565 1.838.565h5.703c.843 0 1.442-.185 1.837-.565.398-.384.591-.972.591-1.796zM9.856 3.669v.667h3.59V3.67c0-.367-.114-.48-.15-.516-.037-.036-.152-.148-.53-.148H10.54c-.372 0-.487.115-.526.154-.042.036-.157.151-.157.51zm7.106 1.491c.566.552.84 1.33.84 2.387v11.092c0 1.062-.277 1.846-.848 2.398-.566.546-1.367.812-2.451.812H8.8c-1.084 0-1.885-.266-2.451-.81-.572-.551-.849-1.336-.849-2.397V7.549c0-1.036.277-1.812.843-2.37.577-.565 1.378-.84 2.457-.84h.185v-.67c0-.467.137-.84.406-1.106.271-.266.658-.403 1.148-.403h2.227c.49 0 .877.134 1.146.398.269.263.403.638.403 1.112v.666h.188c1.087 0 1.89.27 2.46.824zM15.212 18v-4.955H8.087V18c0 .661.552 1.2 1.233 1.2h4.66c.679 0 1.23-.539 1.23-1.2zm.434-5.8a.43.43 0 01.437.422V18c0 1.13-.944 2.045-2.104 2.045H9.321c-1.16 0-2.104-.916-2.104-2.045v-5.378c0-.235.196-.423.434-.423h7.995z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBatteryMediumRegular;
