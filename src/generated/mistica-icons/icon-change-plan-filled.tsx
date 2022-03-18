/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconChangePlanFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.686 8.51a.216.216 0 01.006.042.247.247 0 01.002.018.197.197 0 00.006.035v10.98c0 .21-.02.482-.182.709-.12.165-.353.364-.793.364h-9.162c-.675-.003-1.095-.423-1.095-1.1v-14.8c0-.667.42-1.081 1.092-1.081h5.21l.033.001.023.002a.2.2 0 01.042.005l.012.003.007.001a.317.317 0 01.04.01h.006a.911.911 0 01.023.009l.024.008h.003a.283.283 0 01.042.02l.006.002a.257.257 0 01.036.023l.009.005.033.026.011.008a.261.261 0 01.042.037l4.37 4.37a.5.5 0 01.045.05l.025.033a.052.052 0 01.002.006l.002.002a.01.01 0 00.002.003c.008.012.017.023.022.037l.003.008.01.021.01.021.002.006.009.024.008.024v.005a.236.236 0 00.006.024l.005.024c.003.005.003.008.003.014zM4.48 10.4a.42.42 0 00.42-.42v-.832c0-.714.168-1.238.504-1.56.322-.31.835-.468 1.521-.468h.729c-.1.088-.208.18-.315.272l-.12.104a.418.418 0 10.54.641l.003-.001.001-.001.003-.003c.137-.118.826-.71.95-.835.369-.37.366-.832-.006-1.207a22.463 22.463 0 00-.893-.797 7.494 7.494 0 01-.054-.047.418.418 0 00-.591.048.418.418 0 00.047.591l.024.02c.063.054.243.209.427.372h-.747c-.91 0-1.62.236-2.104.703-.504.488-.762 1.216-.762 2.166v.832c.003.235.19.422.423.422zm4.485 2.97l-2.427-2.43a.556.556 0 00-.395-.165H2.852c-.502.003-.852.353-.852.851v8.157c0 .51.342.855.852.855h5.436c.493 0 .84-.348.84-.84v-6.034a.55.55 0 00-.164-.395zm-4.942 5.434h3.093a.42.42 0 10.003-.84H4.022a.42.42 0 100 .84zm3.093-1.457H4.022a.42.42 0 110-.84h3.096a.42.42 0 11-.003.84zm-3.093-1.456h3.093a.42.42 0 10.003-.84H4.022a.42.42 0 100 .84zm3.27-2.238c-.737 0-1.037-.3-1.037-1.037v-.372l1.409 1.409H7.29zm11.691 3.714h-5.81a.562.562 0 01-.56-.56c0-.308.253-.56.56-.56h5.81c.308 0 .56.252.56.56 0 .308-.252.56-.56.56zm-5.81-2.754h5.81c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56h-5.81a.562.562 0 00-.56.56c0 .308.253.56.56.56zm5.81-2.733h-5.81a.562.562 0 01-.56-.56c0-.309.253-.56.56-.56h5.81a.561.561 0 010 1.12zM17.74 7.63c.275.275.692.418 1.21.418h.832L17.325 5.59v.832c0 .518.14.933.414 1.207z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChangePlanFilled;
