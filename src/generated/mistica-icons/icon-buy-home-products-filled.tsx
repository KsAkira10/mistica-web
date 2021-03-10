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

const IconBuyHomeProductsFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.476 18.37c.499 0 .902.143 1.193.423.306.294.46.706.46 1.23 0 .523-.154.935-.46 1.229-.288.28-.691.423-1.193.423-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.291-.28.695-.422 1.193-.422zm5.462 0c.499 0 .902.143 1.194.423.302.294.459.706.459 1.23 0 .523-.154.935-.46 1.229-.288.28-.691.423-1.193.423-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.291-.28.695-.422 1.193-.422zM3.924 2.01c1.367 0 2.519.883 2.737 2.101.049.272.222 1.267.439 2.52l3.034.001h.014l3.474-3.65a.557.557 0 01.406-.173c.154 0 .3.064.406.173l.938.989v-.056c0-.308.253-.56.56-.56h1.64c.307 0 .56.252.56.56v2.752a.555.555 0 01.179-.03h2.793a.562.562 0 01.543.698c-.154.61-.445 1.784-.756 3.028l-.59 2.369-.095.38-.043.17-.075.297-.08.314c-.266 1.025-.652 1.778-1.182 2.308-.56.554-1.263.837-2.092.837h-6.258c-.837 0-1.58-.283-2.148-.815-.591-.557-.975-1.361-1.138-2.39-.14-.89-1.484-8.683-1.635-9.526-.12-.672-.821-1.176-1.633-1.176h-1.35a.562.562 0 01-.56-.56.56.56 0 01.56-.56h1.352zm10.104 2.174l-3.89 4.09h.333c.308 0 .56.252.56.56v3.806h5.98V8.83c0-.307.252-.56.56-.56h.336l-.742-.78a.561.561 0 01-.154-.387V4.476h-.518v.902a.562.562 0 01-.966.387l-1.499-1.58z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBuyHomeProductsFilled;
