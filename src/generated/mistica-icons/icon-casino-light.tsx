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

const IconCasinoLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 14.047c0-2.428-.666-4.305-1.98-5.571-.874-.843-2.02-1.392-3.415-1.656-.33-.958-.829-1.767-1.501-2.417-1.263-1.216-3.084-1.835-5.417-1.835-2.331 0-4.149.62-5.407 1.838-1.305 1.266-1.966 3.14-1.966 5.571 0 2.426.664 4.297 1.97 5.558.87.843 2.022 1.39 3.42 1.65.327.963.826 1.776 1.498 2.423 1.255 1.212 3.073 1.826 5.403 1.826 2.334 0 4.154-.614 5.415-1.826 1.314-1.261 1.98-3.132 1.98-5.56M4.94 4.79c1.012-.858 2.418-1.323 4.185-1.384v1.798c-1.162.062-2.106.381-2.82.953zm-.585.585 1.372 1.37c-.563.717-.88 1.66-.938 2.823H2.993c.061-1.767.515-3.176 1.36-4.193m3.204 2.499c.233-.202.55-.322.888-.34a1.85 1.85 0 0 1 1.057.277l.036.02.049-.026q.024-.014.049-.027c.21-.117.437-.176.664-.21l.054-.008c.095-.015.19-.03.279-.025.336.017.653.14.888.341q.011.01.018.022l.013.015c.375.347.512.89.37 1.504-.025.106-.066.213-.106.32l-.046.123c-.078.21-.17.42-.286.636l-.064.124c-.05.1-.102.2-.165.301a6.3 6.3 0 0 1-.801 1.003l-.01.01c-.053.053-.18.18-.29.259a1.3 1.3 0 0 1-.42.188 1 1 0 0 1-.146.022l-.05.003h-.003a1 1 0 0 1-.216-.025 1.2 1.2 0 0 1-.403-.185 2.4 2.4 0 0 1-.294-.264 6.5 6.5 0 0 1-.801-1.005c-.041-.063-.073-.125-.104-.187l-.064-.121c-.224-.404-.407-.804-.496-1.196-.151-.639-.003-1.202.4-1.55m.972.484h-.044a.65.65 0 0 0-.39.143c-.221.19-.18.535-.134.723.033.143.092.291.151.44.104.263.23.532.403.803l.04.06.016.022c.2.302.367.512.65.8.025.029.11.113.18.163a.3.3 0 0 0 .109.05l.03.004h.003a.3.3 0 0 0 .13-.057c.07-.05.153-.134.176-.16.257-.268.423-.47.6-.727q.053-.073.108-.16c.126-.199.227-.392.32-.586.103-.226.185-.445.238-.66.053-.23.075-.544-.135-.723a.65.65 0 0 0-.409-.142l-.016.002a1 1 0 0 0-.519.137l-.087.05q-.081.044-.168.098l-.086.05-.012.01s-.064.044-.126.041c-.061 0-.123-.036-.123-.036L9.427 8.7l-.115-.056a9 9 0 0 0-.269-.154l-.006-.002q-.005-.001-.005-.004a1.2 1.2 0 0 0-.502-.126M21 14.468c-.064 1.764-.526 3.168-1.377 4.179l-1.37-1.373c.566-.711.885-1.65.95-2.807zm-6.13 6.125v-1.798c1.153-.061 2.089-.375 2.8-.935l1.364 1.367c-1.01.846-2.408 1.302-4.165 1.366m-.66-2.612q-.082-.008-.167-.012c-.913-.053-1.655-.286-2.213-.7l-.037-.027q-.063-.045-.123-.094.03-.007.06-.011 1.273-.269 2.249-.868c.35-.216.675-.46.963-.74.585-.56 1.037-1.25 1.361-2.05q.505-1.227.594-2.815c.174.109.34.226.485.367.608.588.935 1.473 1 2.607q.005.074.012.144c.008.083.016.166.016.257 0 .105-.01.2-.02.297l-.01.129c-.07 1.12-.393 1.994-.998 2.577-.58.557-1.434.86-2.513.924l-.15.012a3 3 0 0 1-.27.016q-.123-.002-.239-.013m-.167 2.612c-1.76-.061-3.157-.515-4.17-1.36l1.369-1.37c.711.557 1.65.87 2.801.932zm-4.76-1.943a5.2 5.2 0 0 1-.803-1.34c.339.031.686.051 1.045.048.383 0 .75-.022 1.103-.056zm-1.98-2.359c-.932-.221-1.714-.602-2.347-1.129l1.37-1.37a4 4 0 0 0 .798.482l.076.035c.128.059.254.117.392.161q.095.03.197.05.065.013.128.029c.372.092.779.154 1.21.176v1.798a10 10 0 0 1-.938-.072 8 8 0 0 1-.886-.16m-2.938-1.712c-.849-1.01-1.308-2.414-1.372-4.181h1.795q.095 1.741.95 2.809zM9.261 6.02c.088-.007.175-.015.27-.015q.133.001.256.013l.164.01c.994.059 1.79.33 2.364.815q.03.025.064.048.045.029.084.067c.182.176.336.38.47.608.28.476.446 1.064.513 1.75l.013.186.004.064q.005.072.012.143.014.123.016.257 0 .057-.006.108l-.005.071q-.001.087-.01.167l-.007.08c-.07 1.12-.392 1.997-.997 2.577-.462.443-1.092.723-1.871.857l-.032.008-.044.009a5 5 0 0 1-.446.042l-.122.008-.087.006q-.085.009-.174.011-.042 0-.08.006-.038.004-.08.005c-.094 0-.181-.007-.27-.014l-.136-.01a5.3 5.3 0 0 1-1.216-.197 2 2 0 0 1-.173-.059 3.4 3.4 0 0 1-.639-.3q-.073-.046-.138-.1a3 3 0 0 0-.169-.127 2 2 0 0 1-.186-.142 2 2 0 0 1-.22-.272l-.06-.081q-.622-.841-.709-2.224l-.012-.153a3 3 0 0 1-.016-.273c0-.095.008-.181.015-.268q.006-.066.01-.133c.065-1.134.39-2.02.995-2.608.58-.565 1.437-.868 2.518-.93q.07-.004.137-.01m.69-.813V3.406c1.764.064 3.168.532 4.184 1.392l-1.367 1.364c-.711-.571-1.658-.893-2.817-.955m4.165 9.947a4.7 4.7 0 0 1-.678.479c-.672.392-1.474.655-2.39.79a9 9 0 0 1-1.022.093l-.078.002V14.72l.136-.007c.157-.008.315-.016.463-.035q1.03-.14 1.796-.589c.114-.068.218-.152.321-.234l.085-.068 1.356 1.358zm.588-.577-1.053-1.056-.317-.314a4.2 4.2 0 0 0 .729-1.429q.184-.625.22-1.378h1.796q-.044 1.312-.383 2.35a6 6 0 0 1-.356.863 5 5 0 0 1-.636.964m.801-7.885q.172.403.294.862a8.8 8.8 0 0 1 .278 1.905q.004.055.005.112h-1.795q-.01-.158-.023-.308a5.8 5.8 0 0 0-.221-1.176 4 4 0 0 0-.24-.6 4 4 0 0 0-.455-.737l.065-.061 1.305-1.308c.317.38.577.82.787 1.31m1.182 1.02q1.408.344 2.364 1.156l-1.364 1.364a4 4 0 0 0-.773-.479 10.5 10.5 0 0 0-.227-2.042m4.314 5.93h-1.796c-.058-1.16-.375-2.104-.938-2.819l1.37-1.372c.848 1.016 1.302 2.425 1.364 4.19"
            />
        </svg>
    );
};

export default IconCasinoLight;
