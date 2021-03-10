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

const IconGiftLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.992 11.505c0 .353-.252.62-.417.62h-8.202v-4.23h8.202c.14 0 .417.28.417.619v2.991zm-1.322 8.897c0 .353-.252.619-.418.619h-6.876v-8.067h7.294v7.448zm-15.392-.003v-7.356c0-.033-.012-.061-.02-.092h7.266v8.067H4.692c-.162 0-.417-.266-.414-.62zm-1.264-8.894V8.511c0-.339.278-.62.418-.62h8.092v4.23H3.43c-.163 0-.415-.266-.415-.616zm3.734-7.582c.34-.507.737-.81 1.185-.902.098-.02.196-.028.297-.028.364 0 .754.129 1.162.386.888.56 1.729 2.51 2.057 3.507-1.045.112-3.244.168-4.138-.395-.52-.327-.834-.717-.927-1.148-.095-.437.025-.913.364-1.42zm7.807-.547c.521-.33 1.011-.45 1.46-.355.448.092.845.395 1.184.902.68 1.017.488 1.902-.56 2.566-.894.565-3.09.51-4.137.394.325-.997 1.162-2.943 2.053-3.507zm6.022 3.69h-3.316c.61-.429 1.008-.961 1.137-1.555.14-.647-.028-1.353-.487-2.042-.46-.686-1.056-1.123-1.723-1.26-.664-.14-1.392.025-2.1.476-.934.588-1.679 2.084-2.118 3.19-.437-1.11-1.183-2.602-2.113-3.19-.708-.449-1.434-.617-2.1-.477-.667.138-1.264.575-1.723 1.26-.46.687-.628 1.393-.487 2.043.128.594.529 1.123 1.137 1.555H3.429c-.664 0-1.269.689-1.269 1.445v2.994c0 .77.594 1.449 1.269 1.449h.011c-.008.03-.02.058-.02.092v7.356c0 .77.594 1.448 1.272 1.448H19.25c.675 0 1.269-.675 1.269-1.445v-7.451h.056c.675 0 1.268-.676 1.268-1.446V8.511c.003-.756-.602-1.445-1.266-1.445z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGiftLight;
