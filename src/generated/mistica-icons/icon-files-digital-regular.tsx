'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFilesDigitalRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.087 14.468c-.499.532-1.235.804-2.182.804h-7.168v.79h9.476c.339 0 .602.28.602.616a.605.605 0 0 1-.602.616h-9.479v1.784c0 .591-.496 1.093-1.081 1.093H3.266a1.103 1.103 0 0 1-1.08-1.093V8.594c0-.591.503-1.101 1.08-1.101h1.275v-.714c0-.936.25-1.667.73-2.168.5-.524 1.236-.788 2.183-.788l11.45-.008c.948 0 1.687.263 2.183.79q.733.764.731 2.17v5.516c0 .936-.24 1.667-.731 2.177m-9.585-3.566c.09.081.145.196.184.31q.051.114.048.25v2.588l7.168-.008c.608 0 1.05-.14 1.322-.429.255-.268.384-.714.384-1.322V6.78c0-.6-.126-1.042-.384-1.306q-.396-.42-1.322-.42l-11.45.009c-.609 0-1.06.14-1.323.42-.255.263-.384.706-.384 1.305v.714h2.02c.193 0 .392.082.53.222zM8.199 9.339v.526c0 .345.104.625.305.83.264.257.611.305.866.305h.513zm2.33 9.605v-6.712H9.368c-.68 0-1.266-.224-1.7-.658-.44-.434-.672-1.028-.672-1.709V8.731H3.387v10.213z"
            />
        </svg>
    );
};

export default IconFilesDigitalRegular;
