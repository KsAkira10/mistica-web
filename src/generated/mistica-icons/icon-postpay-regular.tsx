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

const IconPostpayRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.846 2.16c1.098 0 1.905.277 2.468.843.503.509.771 1.215.816 2.154h.262a.55.55 0 01.395.165l2.731 2.732a.55.55 0 01.165.395v6.784c0 .524-.35.877-.873.877l-.099-.001h-2.574v2.452c0 1.114-.271 1.927-.826 2.479-.555.546-1.359.812-2.465.812H7.29c-1.106 0-1.913-.266-2.465-.812C4.27 20.485 4 19.675 4 18.56V5.452c0-1.103.269-1.91.82-2.465.553-.554 1.362-.826 2.471-.826h6.555zm0 1.12H7.29c-.795 0-1.344.163-1.678.496-.333.334-.493.883-.493 1.675v13.11c0 1.582.589 2.17 2.171 2.17h6.555c1.583 0 2.17-.588 2.17-2.17v-2.452h-2.669c-.532 0-.888-.358-.888-.89V6.042c0-.53.356-.885.888-.885h2.661c-.079-1.327-.724-1.877-2.162-1.877zM10.57 17.29c.698 0 1.112.417 1.112 1.115 0 .341-.098.613-.288.81-.19.195-.485.305-.826.305-.342 0-.628-.107-.821-.306-.193-.199-.289-.47-.289-.81 0-.697.415-1.114 1.112-1.114zm5.992-11.012H13.58v8.71h5.98V9.287h-.798c-1.398 0-2.199-.8-2.199-2.198v-.813zm1.65 6.947a.42.42 0 110 .84h-3.286a.42.42 0 110-.84h3.286zm0-1.638a.42.42 0 110 .84h-3.286a.42.42 0 110-.84h3.286zm0-1.639a.42.42 0 110 .84h-3.286a.42.42 0 110-.84h3.286zm-.53-3.143v.286c0 .39.085.67.247.832.162.162.443.246.832.246h.285l-1.364-1.364z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPostpayRegular;
