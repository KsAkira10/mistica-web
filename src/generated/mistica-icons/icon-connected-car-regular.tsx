'use client';
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

const IconConnectedCarRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.17 5.852a3.87 3.87 0 0 0-2.785-1 .74.74 0 0 0-.496.229.714.714 0 0 0 .568 1.195A2.413 2.413 0 0 1 12.02 8.59c.007.19.09.368.228.497.11.095.243.159.386.185h.114a.71.71 0 0 0 .492-.228.71.71 0 0 0 .182-.51 3.82 3.82 0 0 0-1.238-2.67z"
                />
                <path
                    fill={fillColor}
                    d="M9.178 4.135A4.234 4.234 0 0 1 13.78 8.35c.01.189.093.366.232.493a.71.71 0 0 0 .482.182h.036a.714.714 0 0 0 .678-.714 5.67 5.67 0 0 0-1.849-4.116 5.63 5.63 0 0 0-4.262-1.467.71.71 0 0 0-.489.229.71.71 0 0 0-.182.514.714.714 0 0 0 .753.664M2.714 12.7h1.428a.714.714 0 1 0 0-1.427H2.714a.714.714 0 1 0 0 1.427m0 2.142H6.64a.714.714 0 1 0 0-1.428H2.714a.714.714 0 1 0 0 1.428"
                />
                <path
                    fill={fillColor}
                    d="m21.918 14.79-.325-1.04a1.7 1.7 0 0 0-1.353-1.116l-7.888-2.003-3.63-3.64H2.713a.714.714 0 0 0 0 1.427h5.415l3.509 3.498 8.302 2.11h.093a.27.27 0 0 1 .218.157l.31 1.053a.3.3 0 0 1 0 .203l-.714 2.278h-2.673a3.399 3.399 0 0 0-6.782 0H2.714a.714.714 0 1 0 0 1.427h7.906a3.401 3.401 0 0 0 6.318 0h3.927L21.85 16c.173-.381.197-.813.068-1.21m-6.193 3.412v.043q-.03.15-.082.293v.046a2 2 0 0 1-.133.271v.032q-.078.135-.178.257a1.973 1.973 0 0 1-3.213-.257l-.02-.032a3 3 0 0 1-.13-.271v-.046a2 2 0 0 1-.082-.293.2.2 0 0 0 0-.043 2.4 2.4 0 0 1-.028-.325 1 1 0 0 1 0-.16 1.974 1.974 0 0 1 3.926 0q.006.08 0 .16a2 2 0 0 1-.06.325"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.17 5.852a3.87 3.87 0 0 0-2.785-1 .74.74 0 0 0-.496.229.714.714 0 0 0 .568 1.195A2.413 2.413 0 0 1 12.02 8.59c.007.19.09.368.228.497.11.095.243.159.386.185h.114a.71.71 0 0 0 .492-.228.71.71 0 0 0 .182-.51 3.83 3.83 0 0 0-1.238-2.67z"
                />
                <path
                    fill={fillColor}
                    d="M9.178 4.135A4.234 4.234 0 0 1 13.78 8.35c.01.189.093.366.232.493a.71.71 0 0 0 .482.182h.036a.714.714 0 0 0 .678-.714 5.67 5.67 0 0 0-1.849-4.116 5.63 5.63 0 0 0-4.262-1.467.71.71 0 0 0-.489.229.71.71 0 0 0-.182.514.714.714 0 0 0 .753.664M2.714 12.7h1.428a.714.714 0 1 0 0-1.427H2.714a.714.714 0 1 0 0 1.427m0 2.142H6.64a.714.714 0 1 0 0-1.428H2.714a.714.714 0 1 0 0 1.428"
                />
                <path
                    fill={fillColor}
                    d="m21.918 14.79-.325-1.04a1.7 1.7 0 0 0-1.353-1.116l-7.888-2.003-3.63-3.64H2.713a.714.714 0 1 0 0 1.427h5.415l3.509 3.498 8.302 2.11h.093a.27.27 0 0 1 .218.157l.31 1.053a.3.3 0 0 1 0 .203l-.714 2.278h-2.673a3.399 3.399 0 0 0-6.782 0H2.714a.714.714 0 1 0 0 1.427h7.906a3.401 3.401 0 0 0 6.318 0h3.927L21.85 16c.173-.381.197-.813.068-1.21m-6.193 3.412v.043q-.03.15-.082.293v.046a2 2 0 0 1-.133.271v.032a1.973 1.973 0 0 1-3.391 0l-.02-.032a3 3 0 0 1-.13-.271v-.046a2 2 0 0 1-.082-.293.2.2 0 0 0 0-.043 2.4 2.4 0 0 1-.028-.325 1 1 0 0 1 0-.16 1.974 1.974 0 0 1 3.926 0q.006.08 0 .16a2 2 0 0 1-.06.325"
                />
            </svg>
        );
    }
};

export default IconConnectedCarRegular;
