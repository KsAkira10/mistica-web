/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.09 4.125c.197.549.94 1.022 2.155 1.373 1.283.366 2.97.574 4.765.571 1.798 0 3.484-.207 4.767-.574 1.19-.342 1.919-.799 2.135-1.328 0-.008.01-.017.01-.017-.159-.574-.879-1.059-2.153-1.426-1.275-.367-2.97-.574-4.768-.574-1.798 0-3.493.207-4.776.574-1.207.35-1.946.835-2.143 1.381.006.007.008.01.008.013v.007Zm13.88 1.356c-.467.358-1.103.647-1.918.88-1.367.391-3.157.607-5.04.61-1.88 0-3.669-.216-5.036-.61-.835-.233-1.482-.539-1.95-.897v3.975c.253.501 1.076 1.002 2.219 1.336 1.286.37 2.97.566 4.767.566 1.799 0 3.493-.2 4.768-.566 1.263-.37 1.955-.925 2.19-1.348V5.481Zm-6.958 6.753c1.891 0 3.681-.216 5.04-.61.767-.216 1.423-.521 1.918-.888v3.983c-.235.423-.927.977-2.19 1.344-1.275.367-2.97.575-4.768.575-1.798 0-3.484-.208-4.767-.575-1.143-.33-1.966-.826-2.219-1.336v-3.98c.5.35 1.152.655 1.95.88 1.367.391 3.154.607 5.036.607Zm5.04 4.69c-1.359.394-3.149.61-5.04.61-1.882 0-3.669-.216-5.039-.61-.798-.236-1.462-.539-1.95-.889v3.532c0 .7.743 1.272 2.202 1.695 1.294.367 2.99.574 4.776.574 1.79 0 3.485-.204 4.768-.574 1.462-.42 2.201-.994 2.201-1.695v-3.54c-.495.367-1.15.68-1.918.896Z"
            />
        </svg>
    );
};

export default IconDataFilled;
