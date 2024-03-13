'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const Icon2GRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2.4 18A1.6 1.6 0 0 1 4 16.4h1A1.6 1.6 0 0 1 6.6 18v2A1.6 1.6 0 0 1 5 21.6H4A1.6 1.6 0 0 1 2.4 20zm1.6-.4a.4.4 0 0 0-.4.4v2c0 .22.18.4.4.4h1a.4.4 0 0 0 .4-.4v-2a.4.4 0 0 0-.4-.4zM7.4 14A1.6 1.6 0 0 1 9 12.4h1a1.6 1.6 0 0 1 1.6 1.6v6a1.6 1.6 0 0 1-1.6 1.6H9A1.6 1.6 0 0 1 7.4 20zm1.6-.4a.4.4 0 0 0-.4.4v6c0 .22.18.4.4.4h1a.4.4 0 0 0 .4-.4v-6a.4.4 0 0 0-.4-.4zM12.4 11A1.6 1.6 0 0 1 14 9.4h1a1.6 1.6 0 0 1 1.6 1.6v9a1.6 1.6 0 0 1-1.6 1.6h-1a1.6 1.6 0 0 1-1.6-1.6zm1.6-.4a.4.4 0 0 0-.4.4v9c0 .22.18.4.4.4h1a.4.4 0 0 0 .4-.4v-9a.4.4 0 0 0-.4-.4zM17.4 6A1.6 1.6 0 0 1 19 4.4h1A1.6 1.6 0 0 1 21.6 6v14a1.6 1.6 0 0 1-1.6 1.6h-1a1.6 1.6 0 0 1-1.6-1.6zm1.6-.4a.4.4 0 0 0-.4.4v14c0 .22.18.4.4.4h1a.4.4 0 0 0 .4-.4V6a.4.4 0 0 0-.4-.4zM2.208 8.432H7.16V7.009H4.727c1.695-1.1 2.386-1.926 2.386-2.894 0-1.27-1.07-2.106-2.557-2.106-.88 0-1.884.314-2.556 1.053l.9 1.082c.454-.427.984-.693 1.656-.693.493 0 .9.228.9.664 0 .627-.511 1.063-3.248 3.045zM7.789 5.273c0 2.01 1.534 3.272 3.418 3.272 1.193 0 2.111-.483 2.793-1.233V4.836h-3.049v1.357H12.4v.531c-.256.209-.7.38-1.193.38-1.032 0-1.761-.797-1.761-1.831s.729-1.831 1.76-1.831c.597 0 1.08.332 1.336.75l1.363-.722C13.441 2.683 12.59 2 11.207 2 9.323 2 7.789 3.262 7.789 5.273"
            />
        </svg>
    );
};

export default Icon2GRegular;
