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
                d="M18.92 2v15.184c0 .204-.164.37-.366.37a.368.368 0 01-.366-.37v-7.78H5.732v11.852h12.822c.202 0 .37.17.37.374s-.164.37-.365.37H5V2h13.92zm-.366 16.663c.404 0 .732.33.732.74a.736.736 0 01-.732.739.736.736 0 01-.732-.74c0-.408.328-.74.732-.74zm-7.696-2.589v3.703H6.829v-3.703h4.029zm-.732.74H7.561v2.223h2.565v-2.223zm6.599.74c.202 0 .366.165.366.37a.368.368 0 01-.366.369h-4.4a.368.368 0 01-.365-.37c0-.204.164-.37.366-.37zm-5.863-6.666v3.703H6.834v-3.703h4.028zm-.736.74H7.561v2.223h2.565v-2.223zm6.599.74c.202 0 .366.165.366.37a.368.368 0 01-.366.369h-4.4a.368.368 0 01-.365-.37c0-.204.164-.37.366-.37zm1.463-7.405H5.732v3.702h12.456V4.963zm0-2.223H5.732v1.479h12.456v-1.48z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNewsletterLight;
