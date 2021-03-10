/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconPlugRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.318 7.266h-.608V3.6a1.603 1.603 0 00-3.204 0v3.664l-2.502-.003V3.6a1.603 1.603 0 00-3.204 0v3.66h-.46c-.638 0-1.162.522-1.162 1.205 0 2.776 1.168 4.26 2.258 5.04v1.14c0 .865.355 1.358.647 1.613.355.327.843.501 1.437.532v3.95a.95.95 0 00.95.946h1.727a.947.947 0 00.947-.947v-3.95c.6-.027 1.093-.2 1.448-.531.289-.26.633-.754.633-1.614V13.5c1.09-.785 2.258-2.264 2.258-5.003v-.07a1.17 1.17 0 00-1.165-1.16zm-4.4 9.538v3.66h-1.18v-3.66h1.18zM7.39 8.479l9.857.006v.01h.008c0 1.945-.66 3.345-1.969 4.158a.612.612 0 00-.288.518v1.47c0 .331-.079.572-.236.715-.199.182-.538.221-.787.221h-3.28c-.364 0-.633-.076-.804-.232-.16-.14-.24-.376-.24-.704v-1.465a.61.61 0 00-.292-.52c-1.294-.802-1.955-2.191-1.97-4.177zm7.717-5.258c.204 0 .378.174.378.378v3.667h-.76V3.6c0-.204.175-.378.382-.378zm-5.706 0c.204 0 .378.174.378.378V7.26H9.02V3.6c0-.205.174-.379.38-.379z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPlugRegular;
