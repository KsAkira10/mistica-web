/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconWinnerFiberQualityFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.428 9.567c0 4.178-3.336 7.568-7.449 7.568-4.113 0-7.449-3.39-7.449-7.568C4.53 5.39 7.866 2 11.98 2c4.112 0 7.448 3.39 7.448 7.567zM9.605 21.723l1.943-3.518c-2.324-.12-4.403-1.19-5.874-2.832l-1.607 2.942a.545.545 0 00.05.6c.136.17.359.244.567.18l3.024-.923.921 3.427a.543.543 0 00.513.4c.19 0 .368-.105.463-.276zm2.696-3.518a8.452 8.452 0 005.97-2.822l1.656 2.919a.544.544 0 01-.04.604.526.526 0 01-.568.184l-3.068-.922-.922 3.43a.528.528 0 01-.44.393.528.528 0 01-.531-.258L12.3 18.205zm1.807-7.374v-4.09c.418-.203.708-.632.708-1.135a1.25 1.25 0 00-1.24-1.259c-.68 0-1.238.567-1.238 1.26 0 .502.29.93.708 1.134v4.09h-2.13V9.263c.418-.203.709-.632.709-1.134a1.25 1.25 0 00-1.24-1.26c-.68 0-1.238.568-1.238 1.26 0 .502.29.931.708 1.134v1.568a1.25 1.25 0 00-1.24 1.259v2.163c0 .3.236.54.532.54.295 0 .53-.24.53-.54V12.09a.18.18 0 01.178-.18h4.258c.1 0 .177.083.177.18v2.163c0 .3.236.54.53.54.296 0 .532-.24.532-.54V12.09h-.005a1.25 1.25 0 00-1.239-1.259z"
            />
        </svg>
    );
};

export default IconWinnerFiberQualityFilled;
