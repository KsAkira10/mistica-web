/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAppsLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path d="M21.616 20.851a.768.768 0 11-1.537 0 .768.768 0 011.537 0z" fill={fillColor} />
            <path
                d="M9.31 11.231H3.926A1.927 1.927 0 012 9.314V3.926C2 2.865 2.864 2 3.925 2h5.382c1.052 0 1.917.865 1.917 1.926V9.31a1.923 1.923 0 01-1.914 1.92zM3.926 2.77c-.64 0-1.157.516-1.157 1.157V9.31c0 .64.517 1.157 1.157 1.157h5.382c.64 0 1.156-.517 1.156-1.157V3.926c0-.641-.516-1.157-1.156-1.157H3.925zm10.768 8.462h5.386a1.923 1.923 0 001.913-1.921V3.926A1.927 1.927 0 0020.076 2h-5.382a1.93 1.93 0 00-1.925 1.926v5.38c0 1.06.865 1.925 1.925 1.925zm0-8.462h5.382c.64 0 1.157.516 1.157 1.157V9.31c0 .64-.517 1.157-1.157 1.157h-5.382c-.64 0-1.156-.517-1.156-1.157V3.926c0-.641.516-1.157 1.156-1.157zM3.925 22H9.31a1.931 1.931 0 001.92-1.918v-5.384c0-1.06-.864-1.925-1.924-1.925H3.925c-1.06 0-1.925.864-1.925 1.925v5.384C2 21.136 2.864 22 3.925 22zm0-8.463v.004h5.382c.64 0 1.156.517 1.156 1.157v5.38c0 .641-.516 1.157-1.156 1.157H3.925c-.64 0-1.157-.516-1.157-1.157v-5.384c0-.64.517-1.157 1.157-1.157zM14.693 22h3.846c.212 0 .38-.16.38-.38a.386.386 0 00-.388-.389h-3.846c-.64 0-1.156-.516-1.156-1.157V14.69c0-.64.516-1.157 1.156-1.157h5.382c.64 0 1.157.517 1.157 1.157v3.847c0 .22.168.389.388.389s.388-.177.388-.389V14.69c0-1.06-.864-1.925-1.925-1.925h-5.382c-1.06 0-1.925.864-1.925 1.925v5.385c0 1.06.865 1.925 1.925 1.925z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAppsLight;
