/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconImageLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.421 4.62c.745 0 1.42.583 1.42 1.224v12.317c0 .638-.678 1.224-1.42 1.224H3.572c-.753.002-1.417-.572-1.417-1.224l.003-12.317c0-.653.664-1.224 1.42-1.224h16.843zm.6 13.54V5.848c0-.135-.272-.395-.6-.395H3.575c-.33 0-.596.238-.596.395l-.003 12.316c0 .157.269.395.6.395h16.848c.325-.002.596-.263.596-.397zM5.823 8.982c0 .687.552 1.241 1.23 1.241.678 0 1.23-.557 1.23-1.24 0-.684-.552-1.242-1.23-1.242-.678 0-1.23.558-1.23 1.241zm1.23 2.073c-1.131 0-2.05-.93-2.05-2.07 0-1.14.919-2.07 2.05-2.07 1.132 0 2.05.93 2.05 2.07 0 1.14-.918 2.07-2.05 2.07zm12.555 1.742l-3.247-2.506a.408.408 0 00-.504.005l-3.851 3.09-1.026-.975a.407.407 0 00-.543-.017l-5.277 4.44a.416.416 0 00-.054.583l.003.002c.143.174.4.196.574.05l5-4.2 3.507 3.335.006.006c.165.151.42.143.574-.023a.415.415 0 00-.017-.585l-2.142-2.04 3.507-2.817 2.994 2.31.003.003c.18.138.437.101.571-.078a.42.42 0 00-.078-.582z"
            />
        </svg>
    );
};

export default IconImageLight;
