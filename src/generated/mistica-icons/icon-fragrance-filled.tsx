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

const IconFragranceFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.455 20.642H7.58a.222.222 0 010-.443h8.876a.221.221 0 010 .443zM9.867 4.266a.9.9 0 01.9-.902h2.128a.9.9 0 01.9.902v2.558a10.536 10.536 0 00-1.793-.171c-.712 0-1.429.076-2.132.227V4.266h-.003zm10.336 9.653c0-3.316-1.94-5.835-5.213-6.829V4.266a2.103 2.103 0 00-2.095-2.106h-2.129a2.102 2.102 0 00-2.095 2.106V7.22c-2.689.952-4.871 3.123-4.871 6.7 0 2.375.941 4.336 2.672 5.625-.19.243-.31.546-.31.88 0 .784.635 1.422 1.42 1.422h8.876c.782 0 1.418-.638 1.418-1.423a1.41 1.41 0 00-.294-.857c1.717-1.274 2.621-3.204 2.621-5.647zm-11.28-1.333v2.846c0 .395.32.717.715.717h4.481a.716.716 0 00.715-.717v-2.846a.716.716 0 00-.715-.717H9.638a.716.716 0 00-.715.717zm.715 4.764a1.917 1.917 0 01-1.914-1.918v-2.846a1.92 1.92 0 011.914-1.922h4.481a1.92 1.92 0 011.913 1.922v2.846a1.917 1.917 0 01-1.913 1.918H9.638zm1.383-3.787a.4.4 0 110-.8h1.673a.4.4 0 110 .8H11.02zm-.63 1.591a.4.4 0 110-.8h2.927a.4.4 0 110 .8h-2.927zM12.083 5.02c0 .19.143.347.316.347.174 0 .317-.157.317-.347 0-.19-.143-.35-.317-.35-.173 0-.316.157-.316.35zm1.431 0c0 .633-.501 1.151-1.115 1.151-.616 0-1.114-.518-1.114-1.151 0-.636.501-1.151 1.114-1.151.617-.003 1.115.515 1.115 1.15zm2.675-.77a.602.602 0 01-.423-1.028l.712-.717a.602.602 0 01.849.852l-.712.713a.592.592 0 01-.426.18zm.18.605a.6.6 0 01.6-.603h1.304a.6.6 0 01.6.603.6.6 0 01-.6.602h-1.305a.603.603 0 01-.6-.602zm-.552.784a.598.598 0 01.849 0l.753.756a.602.602 0 01-.423 1.028.59.59 0 01-.423-.176l-.753-.756a.604.604 0 01-.003-.852z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFragranceFilled;
