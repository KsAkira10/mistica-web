/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconIotSensorHumidityLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.994 8.188c.23.502.38 1.038.38 1.5 0 .808-.34 1.581-.945 2.167a2.971 2.971 0 01-2.136.886 2.97 2.97 0 01-2.135-.886 3.038 3.038 0 01-.878-2.156c0-.847.458-1.772.917-2.54l1.789-3.037a.455.455 0 01.341-.192c.112 0 .264.073.303.152l1.106 1.925.171.288c.057.096.115.192.17.288l.079.113c0 .04.039.113.078.153V4.693C9.234 3.19 10.414 2 11.9 2c1.487 0 2.667 1.191 2.667 2.693V9.65c0 .23-.152.383-.38.383-.23 0-.38-.152-.38-.383V4.648c0-1.078-.84-1.924-1.907-1.924-1.068 0-1.907.846-1.907 1.924v3.54zm-4.266 3.155c.42.423.99.655 1.6.655.609 0 1.18-.232 1.599-.665.458-.423.687-1 .687-1.615 0-.768-.61-1.806-1.107-2.613L8.43 6.99a35.757 35.757 0 00-.17-.288 35.586 35.586 0 01-.171-.288l-.76-1.343-1.449 2.46c-.38.655-.838 1.502-.838 2.157 0 .615.229 1.191.687 1.654zm6.173-7.034c-.23 0-.38.152-.38.384V16.27a1.925 1.925 0 00-1.522 1.886c0 1.078.839 1.924 1.907 1.924 1.067 0 1.906-.846 1.906-1.924a1.93 1.93 0 00-1.521-1.886V4.693c-.01-.232-.161-.384-.39-.384zm0 14.993c.643 0 1.14-.497 1.14-1.151 0-.655-.497-1.152-1.14-1.152a1.13 1.13 0 00-1.141 1.152c0 .65.497 1.151 1.14 1.151zm1.52-7.304c0 .423.342.767.761.767.42 0 .761-.344.761-.768a.765.765 0 00-.76-.767.765.765 0 00-.761.768zm.766 1.924c.23 0 .38.153.38.384v1.113a3.808 3.808 0 011.142 2.732c0 2.116-1.717 3.85-3.808 3.85-2.092 0-3.808-1.729-3.808-3.845 0-1 .42-2.004 1.14-2.732v-1.118c0-.231.152-.384.381-.384.23 0 .38.153.38.384v1.27a.409.409 0 01-.112.271c-.648.615-1.029 1.423-1.029 2.309 0 1.693 1.37 3.076 3.048 3.076 1.677 0 3.047-1.383 3.047-3.076 0-.886-.38-1.733-1.029-2.309-.073-.04-.112-.157-.112-.27v-1.27c0-.232.151-.385.38-.385z"
            />
        </svg>
    );
};

export default IconIotSensorHumidityLight;
