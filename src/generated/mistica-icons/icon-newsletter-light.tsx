/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconNewsletterLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.732 21.256h12.822c.202 0 .37.17.37.374s-.164.37-.365.37H5V2h13.92v15.184c0 .203-.164.37-.366.37a.368.368 0 01-.366-.37v-7.78H5.732v11.852zm0-16.293v3.702h12.456V4.962H5.732zM18.188 2.74v1.479H5.732v-1.48h12.456zm.366 17.402a.736.736 0 00.732-.74.736.736 0 00-.732-.74.736.736 0 00-.732.74c0 .409.328.74.732.74zm-11.72-9.254h4.029v3.703h-4.03v-3.703zm.727 2.963h2.565v-2.223H7.561v2.223zm4.765-1.484h4.399c.202 0 .366.166.366.37s-.164.37-.366.37h-4.4a.368.368 0 01-.365-.37c0-.204.164-.37.366-.37zm-1.468 7.41H6.829v-3.703h4.029v3.703zm-.732-2.963H7.561v2.223h2.565v-2.223zm2.2.74h4.399c.202 0 .366.165.366.37a.368.368 0 01-.366.369h-4.4a.368.368 0 01-.365-.37c0-.204.164-.37.366-.37z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNewsletterLight;
