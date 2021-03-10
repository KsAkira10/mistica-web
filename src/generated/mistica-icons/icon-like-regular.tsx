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

const IconLikeRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M4.888 12.95c.448 0 .762.314.762.762s-.314.762-.762.762-.762-.314-.762-.762c0-.451.311-.762.762-.762zm15.367-.048a.62.62 0 01-.03-.874l.033-.033c.233-.213.359-.577.359-1.05 0-.95-.832-1.099-1.19-1.118h-3.393l-2.684-.079a.613.613 0 01-.596-.619s.008-2.398.008-4.221v-.034l.006-.12c.003-.975-.378-1.364-1.27-1.364-.327 0-.77.056-1.027.336-.19.204-.272.515-.244.927l.017.19c.008.085.017.166.022.264a.505.505 0 01.006.067c.025 1.157.042 2.641-.073 3.852-.173 1.82-1.781 2.86-2.54 3.249v.008c0 .017.005.031.005.048v7.52l2.476.034c.328 0 .653.093 1.062.21l.216.062c.73.213 1.557.457 3.638.457 3.44 0 3.656-.334 3.902-.997.084-.547.003-.79-.08-.942a.617.617 0 01.302-.862c.414-.171.91-.499.91-1.062 0-.395-.09-.706-.255-.902a.62.62 0 01-.143-.479.628.628 0 01.26-.428c.443-.297.667-.67.667-1.101 0-.4-.123-.715-.364-.939zm-14.05 7.25c.12 0 .218-.096.224-.216v-7.62a.225.225 0 00-.224-.215H3.614a.228.228 0 00-.227.23v7.594c0 .126.104.227.227.227h2.59zm15.26-7.703c.213.333.381.787.381 1.392 0 .655-.263 1.263-.748 1.748.126.294.222.677.222 1.168 0 .787-.412 1.467-1.149 1.93.07.347.065.74-.011 1.196a.487.487 0 01-.03.109c-.564 1.527-1.463 1.857-5.076 1.857-2.258 0-3.216-.28-3.986-.507l-.208-.059c-.316-.092-.571-.165-.73-.165l-2.805-.036c-.067 0-.129-.026-.193-.04-.26.219-.588.34-.927.342H3.614a1.455 1.455 0 01-1.454-1.456V12.33c0-.804.653-1.457 1.454-1.457h2.59c.334 0 .64.118.886.308.549-.28 1.767-1.042 1.885-2.274.11-1.123.095-2.527.07-3.639l-.003-.042a2.339 2.339 0 00-.02-.26l-.019-.23c-.067-.95.275-1.53.569-1.849.442-.476 1.109-.728 1.927-.728 1.563 0 2.499.947 2.499 2.535l-.003.098-.006.132c0 1.257-.003 2.787-.005 3.613l2.07.062h3.411c1.205.064 2.384.818 2.384 2.347-.003.67-.174 1.154-.384 1.502z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLikeRegular;
