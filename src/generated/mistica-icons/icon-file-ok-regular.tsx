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

const IconFileOkRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.482 20.308V8.86H18.17c-1.011 0-1.885-.33-2.527-.952-.641-.628-.986-1.485-.986-2.482V3.21H8.134c-.072 0-.193.112-.193.168v3.95c1.011.115 1.678.549 2.216.918.633.42 1.092.726 1.975.58a.62.62 0 01.498.138.605.605 0 01.216.45c0 .073 0 .978-.034 2.082h5.314a.61.61 0 01.602.605.604.604 0 01-.602.605h-5.353a26.33 26.33 0 01-.12 1.703h5.487c.336 0 .602.266.602.605 0 .33-.266.605-.602.605h-5.745c-.258.588-.745 1.16-1.308 1.67h7.053c.336 0 .602.266.602.604a.604.604 0 01-.602.606H9.457c-.62.394-1.188.694-1.516.862v.953c0 .056.095.168.193.168h12.149c.103-.006.199-.101.199-.174zm-17.02-5.465c.202 1.16 2.432 2.653 3.955 3.417 1.524-.764 3.765-2.257 3.964-3.417.095-.58.16-1.49.202-2.395.03-.902.047-1.807.056-2.386-.972-.026-1.589-.435-2.152-.807-.593-.403-1.114-.75-2.07-.75-.955 0-1.467.347-2.07.75-.563.37-1.196.79-2.143.815.009 1.168.06 3.605.258 4.773zM15.86 3.661v1.765c0 .66.216 1.218.625 1.613.408.404.994.614 1.686.614h1.807L15.86 3.66zm5.56 3.717a.833.833 0 01.266.62v12.31c0 .742-.641 1.378-1.403 1.378H8.134c-.745 0-1.395-.644-1.395-1.378v-1.03c-1.162-.614-4.123-2.331-4.459-4.225-.288-1.66-.283-5.473-.274-5.636a.593.593 0 01.745-.58c.851.13 1.308-.17 1.935-.588.513-.347 1.132-.756 2.053-.893V3.38c0-.726.667-1.378 1.395-1.378h7.398c.224 0 .443.087.61.24l5.278 5.135zM9.594 11.302a.602.602 0 01.851 0 .605.605 0 010 .855l-3.26 3.277a.6.6 0 01-.852 0l-1.465-1.473a.605.605 0 010-.855.602.602 0 01.852 0l1.04 1.045 2.834-2.849z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileOkRegular;
