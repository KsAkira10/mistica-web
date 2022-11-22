/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTicketsFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.27 11.105l1.176-.228-.59.963a.543.543 0 00-.019.544l.6 1.121-1.186-.265a.526.526 0 00-.511.154l-.841.88-.121-1.27a.545.545 0 00-.316-.443l-1.028-.465 1.102-.465a.54.54 0 00.33-.438l.135-1.153.753.884a.54.54 0 00.516.181z"
                    fill={fillColor}
                />
                <path
                    d="M21.892 9.007l-2.496-2.498a.356.356 0 00-.511 0 .987.987 0 01-1.39 0 .989.989 0 010-1.391.363.363 0 00.107-.256.355.355 0 00-.107-.256l-2.496-2.498a.356.356 0 00-.512 0L2.108 14.482a.357.357 0 000 .512l2.496 2.498c.07.07.163.107.256.107s.19-.037.256-.107a.987.987 0 011.39 0 .989.989 0 010 1.391.357.357 0 000 .512l2.496 2.498c.07.07.163.107.256.107a.363.363 0 00.255-.107L21.888 9.509a.342.342 0 00.004-.502zm-6.865 1.386l-1.084 1.75 1.018 1.893a.538.538 0 01-.046.586.54.54 0 01-.553.2l-2.05-.46-1.45 1.52a.562.562 0 01-.572.14.543.543 0 01-.363-.46l-.205-2.14-1.873-.852a.554.554 0 01-.32-.502.543.543 0 01.334-.493l1.957-.828.246-2.075a.543.543 0 01.953-.288l1.358 1.59 2.087-.4a.542.542 0 01.563.82z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.693 2.155h2.238c1.05 0 1.905.852 1.905 1.9v14.248c0 1.048-.854 1.9-1.905 1.9h-2.255a1.01 1.01 0 01-.988-.816.898.898 0 00-.883-.722.897.897 0 00-.882.723 1.01 1.01 0 01-.989.815h-.82a.91.91 0 01-.373.434l-1.754.983a1.722 1.722 0 01-.848.221 1.73 1.73 0 01-1.521-.885L2.38 9.892a1.735 1.735 0 01.663-2.364l1.737-.972a.944.944 0 011.213.249.757.757 0 001.305-.731.933.933 0 01.418-1.163l1.736-.972c.11-.061.23-.098.35-.134a1.899 1.899 0 011.88-1.647h2.238c.504 0 .925.364.997.865a.906.906 0 00.891.768c.445 0 .83-.33.894-.768a.993.993 0 01.991-.868zM5.43 10.603l4.373 7.521-.006-9.933-4.367 2.412zm6.448-4.386v9.972c0 .23.185.414.415.414h7.143c.23 0 .414-.185.414-.414V6.214a.414.414 0 00-.414-.415h-7.143v.003a.414.414 0 00-.415.415z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTicketsFilled;
