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

const IconSettingsWebLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.588 18.623a.428.428 0 00.434-.42v-9.53H2.977v9.53c0 .232.193.42.434.42h17.177zM3.41 5.452a.43.43 0 00-.434.42V7.88h18.045V5.872a.426.426 0 00-.434-.42H3.41zm17.177-.796c.691 0 1.255.546 1.255 1.216v12.333c0 .67-.564 1.216-1.255 1.216H3.41c-.692 0-1.255-.546-1.255-1.216V5.872c0-.67.563-1.216 1.255-1.216h17.177zM6.347 7.278a.563.563 0 01-.572-.552c0-.305.255-.554.572-.554.316 0 .571.246.571.554a.563.563 0 01-.571.552zm1.714 0a.56.56 0 01-.569-.552c0-.305.255-.554.569-.554a.56.56 0 01.571.554.565.565 0 01-.571.552zm-3.426 0a.563.563 0 01-.571-.552c0-.305.255-.554.571-.554.317 0 .569.246.569.554a.56.56 0 01-.569.552zm7.317 7.448c.762 0 1.117-.344 1.117-1.084 0-.74-.355-1.084-1.117-1.084s-1.118.345-1.118 1.084c0 .74.353 1.084 1.118 1.084zm0-2.963c1.215 0 1.938.703 1.938 1.88 0 1.176-.725 1.879-1.938 1.879-1.216 0-1.939-.703-1.939-1.88 0-1.176.723-1.88 1.939-1.88zm2.778 2.148h.737l-.022-.557-.715.02a.41.41 0 01-.406-.337 2.427 2.427 0 00-.221-.697.389.389 0 01.078-.46l.544-.526-.437-.4-.521.526a.418.418 0 01-.47.075 2.592 2.592 0 00-.723-.215.4.4 0 01-.345-.392v-.712l-.577.02.02.692a.4.4 0 01-.345.392 2.58 2.58 0 00-.72.215.418.418 0 01-.473-.075l-.544-.527-.414.423.543.504c.132.126.16.322.068.477-.082.14-.166.411-.21.68a.405.405 0 01-.407.334h-.734l.02.557.714-.02a.41.41 0 01.406.334c.045.269.13.543.21.68a.383.383 0 01-.067.477l-.543.526.437.4.52-.526a.423.423 0 01.474-.076c.208.101.448.174.72.216a.4.4 0 01.345.392v.712l.554-.02v-.692a.4.4 0 01.345-.392c.272-.042.501-.112.723-.216a.428.428 0 01.47.076l.544.527.414-.423-.543-.504a.392.392 0 01-.079-.46c.104-.202.177-.437.222-.697a.413.413 0 01.408-.33zm.737-1.333c.443 0 .801.347.801.776v.58a.789.789 0 01-.8.775h-.404a3.09 3.09 0 01-.107.325l.348.337a.759.759 0 01.235.551.77.77 0 01-.235.552l-.437.423a.824.824 0 01-1.14 0l-.348-.336a3.6 3.6 0 01-.333.104v.389a.789.789 0 01-.801.776h-.594a.79.79 0 01-.801-.776v-.39a3.075 3.075 0 01-.333-.1l-.348.336a.805.805 0 01-.568.23h-.003a.805.805 0 01-.569-.23l-.437-.423a.77.77 0 01-.235-.552.77.77 0 01.235-.552l.345-.333a2.845 2.845 0 01-.101-.325h-.4a.79.79 0 01-.802-.776v-.58a.79.79 0 01.801-.776h.4c.026-.1.06-.215.102-.325l-.345-.333a.77.77 0 01-.235-.552.77.77 0 01.235-.551l.437-.423a.805.805 0 01.569-.23h.003c.215 0 .417.081.568.23l.348.336c.106-.04.218-.073.333-.101v-.39c0-.428.358-.775.801-.775h.597c.442 0 .8.347.8.775v.39c.116.028.228.061.334.103l.347-.336a.824.824 0 011.14 0l.438.423a.759.759 0 01.235.552.77.77 0 01-.235.552l-.348.336c.04.104.076.213.107.325h.4v-.011z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSettingsWebLight;
