/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconStormLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.063 2.155c.823 0 4.909.188 6.086 3.861 1.418.11 4.699.83 4.696 5.117 0 4.912-4.31 5.161-5.173 5.161l-1.852.011-5.158 5.414a.42.42 0 01-.297.126.414.414 0 01-.384-.563l1.793-4.82-.594-.134a.107.107 0 00-.01.003.082.082 0 01-.026.005l-3.76.017c-2.043 0-4.229-1.118-4.229-4.26 0-2.566 1.451-3.566 2.502-3.953.112-5.694 5.347-5.985 6.406-5.985zm5.61 13.31c1.022 0 4.351-.311 4.354-4.33 0-3.777-2.94-4.267-4.2-4.303a.412.412 0 01-.387-.309c-.891-3.365-4.635-3.536-5.377-3.536-1.309 0-5.582.387-5.582 5.34l.006.116c0 .185-.124.35-.3.4-1.466.42-2.208 1.516-2.208 3.254 0 3.093 2.382 3.427 3.404 3.427l1.236-.006a.417.417 0 01.092-.39l6.067-6.598a.41.41 0 01.521-.07c.168.106.238.32.165.504l-1.81 4.721 3.127.707c.143.03.261.14.303.285a.418.418 0 01-.098.407l-.367.386 1.053-.005zm-4.96.846l-1.264 3.38 4.433-4.652-2.878-.65a.411.411 0 01-.272-.21.412.412 0 01-.02-.345l1.209-3.152-4.12 4.483 2.618.594c.114.025.215.1.271.207a.424.424 0 01.023.345z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStormLight;
