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

const IconFileErrorRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.12 7.53c.165.163.26.39.26.622V20.46a1.4 1.4 0 0 1-1.384 1.381H6c-.737 0-1.384-.644-1.384-1.38V3.535c0-.723.658-1.381 1.384-1.381h7.303c.226 0 .44.087.602.247zm-.93 12.93V9.02h-2.28c-.998 0-1.86-.327-2.494-.952-.638-.63-.975-1.487-.975-2.479V3.365H6c-.073 0-.19.112-.196.171V20.46c0 .06.1.171.196.171h11.997c.098 0 .193-.098.193-.17M13.625 3.813v1.773c0 .659.213 1.216.617 1.611.406.4.983.61 1.666.61 0 .003 1.782.003 1.782.003zm-5.89 8.807a.61.61 0 0 0 .002.86.59.59 0 0 0 .835-.006l.779-.792.779.792.008.009a.59.59 0 0 0 .832-.009.61.61 0 0 0 0-.854l-.779-.793.779-.793a.61.61 0 0 0 0-.854l-.008-.008a.585.585 0 0 0-.83.008l-.778.793-.779-.793-.011-.011a.585.585 0 0 0-.83.011.61.61 0 0 0 0 .854l.78.793zm8.655-2.443a.61.61 0 0 1 0 .855l-.779.793.78.792a.61.61 0 0 1 0 .854.59.59 0 0 1-.833.009l-.008-.008-.779-.793-.779.793a.59.59 0 0 1-.834.005l-.006-.005a.61.61 0 0 1 0-.855l.779-.793-.779-.792a.61.61 0 0 1 0-.855.585.585 0 0 1 .83-.01l.01.01.78.793.778-.793a.585.585 0 0 1 .829-.01zm-.316 6.69c0-1.233-.866-1.805-1.726-1.824l-.129.003c-.854.005-1.72.568-1.72 1.829 0 .18 0 .602-.549.605h-.087c-.562-.014-.562-.434-.562-.614 0-1.232-.866-1.803-1.726-1.823h-.129c-.86.006-1.723.569-1.723 1.815a.6.6 0 0 0 .594.605.6.6 0 0 0 .594-.605c0-.18 0-.602.55-.605h.086c.563.014.563.434.563.613 0 1.23.866 1.799 1.725 1.821h.132c.854-.005 1.72-.569 1.72-1.829 0-.18 0-.602.549-.605h.087c.563.014.563.434.563.613a.6.6 0 0 0 .594.605.6.6 0 0 0 .594-.605"
            />
        </svg>
    );
};

export default IconFileErrorRegular;
