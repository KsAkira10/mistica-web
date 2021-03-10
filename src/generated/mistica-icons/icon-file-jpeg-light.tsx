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

const IconFileJpegLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.747 2.156c.18 0 .35.07.482.194l5.409 5.238c.09.084.14.199.17.319.023.05.035.104.035.162v12.563c0 .653-.564 1.205-1.23 1.205H8.176c-.656 0-1.233-.563-1.233-1.205l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.269v-4.18A2.27 2.27 0 014.422 8.88h2.521V3.36c0-.63.586-1.205 1.233-1.205h7.571zm-.692.827H8.173c-.185 0-.406.204-.406.378v5.518h6.706a2.27 2.27 0 012.266 2.269v4.18a2.27 2.27 0 01-2.266 2.268H7.806l-.036 3.042c0 .182.204.373.406.373h12.437v.002c.207 0 .403-.184.403-.378V8.755H18.45c-.98 0-1.826-.316-2.442-.915-.622-.603-.953-1.429-.953-2.384V2.983zm-.58 6.722H4.423c-.792 0-1.44.647-1.44 1.443v4.18c0 .795.645 1.442 1.44 1.442h10.054c.792 0 1.44-.647 1.44-1.443v-4.18c0-.795-.645-1.442-1.44-1.442zM5.73 11.624v2.314c0 .403-.067.622-.232.787-.148.143-.384.21-.75.21-.16 0-.267-.011-.5-.042l-.053-.566c.149.028.314.04.384.04.314 0 .412-.085.412-.446v-2.297h.74zm7.897-.062c.322 0 .706.068.916.157l-.095.54a2.89 2.89 0 00-.768-.117c-.655 0-.924.39-.924 1.095 0 .365.047.664.19.863.118.165.314.26.628.26.117 0 .28-.013.395-.033v-.683h-.457v-.533h1.19v1.656a4.523 4.523 0 01-1.156.165c-1.166.003-1.56-.638-1.56-1.667 0-1.014.534-1.703 1.64-1.703zm-6.093.062c.507 0 .83.07 1.04.266.176.163.26.412.26.76 0 .347-.081.607-.24.786-.191.213-.485.314-.911.314h-.521v1.12h-.74v-3.246h1.112zm4.012 0l-.056.535h-1.395v.787h1.114v.555h-1.114v.829h1.476v.535H9.355v-3.241h2.19zm-4.042.535h-.348v1.034h.367c.238 0 .336-.034.432-.124.084-.084.128-.224.128-.411 0-.177-.039-.303-.123-.384-.09-.081-.227-.115-.456-.115zm8.378-8.997v2.291c0 .728.24 1.348.7 1.79.462.445 1.11.684 1.868.684h2.35l-4.918-4.765z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileJpegLight;
