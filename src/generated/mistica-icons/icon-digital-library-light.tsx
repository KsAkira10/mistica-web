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

const IconDigitalLibraryLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.659 17.744a14.459 14.459 0 00-4.93 1.036v-7.395c1.896-.921 4.067-.989 4.93-.977v7.336zM2.98 10.408c.857-.02 3.033.058 4.93.98v7.392a14.528 14.528 0 00-4.93-1.036v-7.336zM5.617 7.17c0-.7.179-1.236.529-1.589.361-.364.924-.549 1.67-.549l11.016-.005c.745 0 1.306.185 1.67.549.35.353.53.885.53 1.588v5.09c0 .703-.18 1.24-.53 1.6-.364.372-.925.56-1.667.56l-4.353.002v-4.398a.406.406 0 00-.378-.4c-.129-.011-3.151-.227-5.782 1.075a10.374 10.374 0 00-2.7-.868L5.617 7.17zm13.212 8.05c.972 0 1.734-.272 2.258-.807.504-.515.76-1.24.76-2.16V7.165c0-.919-.258-1.641-.763-2.151-.52-.524-1.28-.793-2.252-.793l-11.017.006c-.972 0-1.73.266-2.254.79-.505.51-.762 1.232-.762 2.15v2.527a12.478 12.478 0 00-2.26-.078.41.41 0 00-.379.406v8.12c0 .225.182.401.409.401 3.148 0 5.535 1.207 5.557 1.219a.42.42 0 00.19.044c.01 0 .018-.005.026-.005a.491.491 0 00.165-.04c.023-.01 2.41-1.218 5.56-1.218.227 0 .41-.18.41-.403v-1.27h6.938a.404.404 0 00.409-.403.408.408 0 00-.41-.403h-6.937v-.843h4.352z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDigitalLibraryLight;
