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

const IconOnlineReloadLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.548 18.043a.28.28 0 01.28.28.28.28 0 01-.28.28H2.43a.28.28 0 01-.28-.28.28.28 0 01.28-.28h19.118zM18.825 4.9c1.014 0 1.784.294 2.291.874.477.546.72 1.353.72 2.398v4.938c0 1.045-.24 1.852-.72 2.398-.507.582-1.277.877-2.29.877H5.17c-1.014 0-1.785-.295-2.292-.874-.479-.55-.72-1.356-.72-2.4V8.17c0-1.044.241-1.85.72-2.397.507-.58 1.278-.874 2.292-.874h13.655zm0 .56H5.17c-1.673 0-2.451.863-2.451 2.715v4.938c0 1.851.778 2.714 2.45 2.714h13.656c1.672 0 2.451-.863 2.451-2.714V8.172c0-1.852-.779-2.712-2.45-2.712zm-4.098 2.465c.14.028.415.104.868.23l.236.064a.283.283 0 01.196.345.282.282 0 01-.345.196l-.235-.064-.357-.099c.35.55.525 1.257.525 2.11 0 1.151-.322 2.039-.952 2.633-.608.571-1.49.86-2.622.86a4.83 4.83 0 01-1.504-.216.28.28 0 01-.169-.359.281.281 0 01.345-.173 4.32 4.32 0 001.33.187c.987 0 1.737-.238 2.239-.708.515-.485.776-1.233.776-2.224 0-.868-.201-1.551-.598-2.032a7.23 7.23 0 00-.058.407 7.558 7.558 0 01-.087.563.28.28 0 01-.549-.118c.028-.134.053-.33.079-.515.025-.202.053-.409.087-.566.086-.406.386-.602.795-.52zm-2.787-.843c.563 0 1.067.073 1.504.213a.28.28 0 01-.174.532 4.32 4.32 0 00-1.33-.188c-.986 0-1.737.239-2.238.71-.516.484-.776 1.232-.776 2.223 0 .864.199 1.544.59 2.024.022-.117.041-.255.057-.39a7.25 7.25 0 01.087-.56.279.279 0 01.546.117c-.028.134-.053.327-.078.515a7.212 7.212 0 01-.087.566c-.07.339-.297.532-.614.532a.941.941 0 01-.176-.017c-.14-.028-.415-.103-.869-.23l-.235-.064a.279.279 0 11.12-.546l.029.008.235.065.365.1c-.354-.551-.53-1.26-.53-2.117 0-1.151.319-2.04.952-2.633.608-.571 1.49-.86 2.622-.86z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOnlineReloadLight;
