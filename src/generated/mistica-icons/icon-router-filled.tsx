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

const IconRouterFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.832 5.015c1.44 0 2.834.613 3.833 1.68A.706.706 0 0 1 19.63 7.7a.706.706 0 0 1-1.004-.036 3.795 3.795 0 0 0-2.793-1.226 3.795 3.795 0 0 0-2.793 1.226.715.715 0 0 1-1.003.036A.715.715 0 0 1 12 6.696a5.264 5.264 0 0 1 3.832-1.68Zm-5.449.731a.712.712 0 0 0 .513-.218 6.79 6.79 0 0 1 4.94-2.111c1.88 0 3.634.75 4.942 2.111a.714.714 0 0 0 1.003.023.714.714 0 0 0 .023-1.003A8.195 8.195 0 0 0 15.841 2 8.195 8.195 0 0 0 9.88 4.548a.71.71 0 0 0 .018 1.003.683.683 0 0 0 .486.195Zm11.485 12.748a3.374 3.374 0 0 1-3.37 3.369H5.37A3.374 3.374 0 0 1 2 18.493a3.374 3.374 0 0 1 3.37-3.37h9.754V9.803a.71.71 0 0 1 1.417 0v5.322h1.953a3.375 3.375 0 0 1 3.373 3.37Zm-15.259 0c0-.686-.554-1.24-1.24-1.24-.685 0-1.24.554-1.24 1.24 0 .685.555 1.24 1.24 1.24.686 0 1.24-.555 1.24-1.24Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.261 6.91c-.025-2.33-1.518-3.683-1.535-3.694a.603.603 0 0 1-.05-.852c.003-.003.005-.005.005-.008a.62.62 0 0 1 .869-.045c.078.07 1.907 1.731 1.938 4.569.006.098.104 2.89-1.913 4.672a.616.616 0 0 1-.868-.05.604.604 0 0 1 .044-.855l.006-.005c1.549-1.368 1.506-3.635 1.504-3.729V6.91Zm-2.59.026a3.217 3.217 0 0 0-.893-2.181l-.001-.001a.606.606 0 0 1-.05-.855l.005-.005a.62.62 0 0 1 .868-.045c.053.047 1.283 1.162 1.303 3.053.002.059.07 1.927-1.286 3.123a.609.609 0 0 1-.409.154.611.611 0 0 1-.46-.204.603.603 0 0 1 .043-.852c.002-.003.005-.005.008-.005.892-.79.872-2.128.871-2.18v-.002ZM8.022 18.05c0 .216-.061.376-.17.485-.118.115-.292.174-.5.174-.21 0-.383-.056-.5-.174-.107-.11-.169-.269-.169-.485 0-.45.263-.658.67-.658.406 0 .67.21.67.658Zm-2.608.485c-.117.115-.291.174-.501.174-.21 0-.384-.056-.502-.174-.106-.11-.168-.269-.168-.485 0-.45.264-.658.67-.658s.67.21.67.658c0 .216-.062.376-.169.485Zm16.426-1.294c0-.944-.252-1.675-.745-2.185-.513-.53-1.277-.795-2.263-.798H8.088v-7.33a.613.613 0 0 0-.617-.609.61.61 0 0 0-.616.608v7.33H5.17c-.992 0-1.754.27-2.27.796-.495.51-.744 1.244-.744 2.185v1.622c0 .941.25 1.678.745 2.188.515.526 1.277.795 2.269.795h13.658c.992 0 1.753-.269 2.269-.795.493-.507.745-1.244.745-2.185V17.24Z"
                />
            </svg>
        );
    }
};

export default IconRouterFilled;
