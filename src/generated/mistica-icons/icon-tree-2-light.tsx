/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTree2Light: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.049 2c.836 0 4.986.192 6.177 3.907 1.44.106 4.774.838 4.774 5.197 0 3.879-2.834 5.255-5.255 5.255l-4.294.029a.183.183 0 01-.066-.016.209.209 0 00-.04-.013v5.255a.43.43 0 01-.383.384.42.42 0 01-.452-.384v-5.236H6.294C4.219 16.378 2 15.252 2 12.067c0-2.608 1.47-3.619 2.546-4.014C4.65 2.29 9.973 2 11.049 2zm1.393 13.531l4.303-.029c1.038 0 4.42-.317 4.41-4.398 0-3.82-2.988-4.32-4.265-4.36a.43.43 0 01-.394-.317c-.903-3.407-4.707-3.58-5.457-3.58-1.325 0-5.667.394-5.667 5.409 0 .192-.116.471-.298.52-1.48.423-2.238 1.53-2.238 3.29 0 3.138 2.42 3.475 3.458 3.475h5.216v-.616a.04.04 0 00-.025-.02c-.005-.003-.01-.005-.013-.009l-2.488-2.54a.425.425 0 010-.597.411.411 0 01.586 0l1.95 1.982V9.478a.419.419 0 11.835.029v1.713l1.614-2.204a.424.424 0 01.586-.087.426.426 0 01.087.587l-2.229 3.041a.14.14 0 01-.042.039.168.168 0 00-.025.02v2.944l.025-.01a.173.173 0 01.07-.019z"
            />
        </svg>
    );
};

export default IconTree2Light;
