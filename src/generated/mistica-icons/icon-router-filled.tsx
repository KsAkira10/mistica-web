/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRouterFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.465 2 2 6.465 2 12s4.465 10 10 10 10-4.465 10-10S17.535 2 12 2zm-1.07 13.748a.55.55 0 01-.534.534.55.55 0 01-.535-.534v-.86L7.22 17.53a.544.544 0 01-.393.142.55.55 0 01-.393-.142.517.517 0 010-.75l2.642-2.641h-.86a.55.55 0 01-.534-.535.55.55 0 01.535-.534h2.715v2.678zm-.539-4.822a.544.544 0 00.393-.142.6.6 0 00-.036-.786L8.106 7.356h.86a.55.55 0 00.534-.534.55.55 0 00-.535-.535H6.287v2.678a.55.55 0 00.535.535.55.55 0 00.534-.535v-.859l2.642 2.678a.55.55 0 00.393.142zm7.322 6.787h-2.678a.55.55 0 01-.535-.535.55.55 0 01.535-.535h.859l-2.642-2.641a.516.516 0 010-.75.516.516 0 01.75 0l2.641 2.642v-.86a.55.55 0 01.535-.534.55.55 0 01.535.535v2.678zm-2.82-7.857l2.678-2.641c.178-.215.178-.571-.04-.745a.517.517 0 00-.75 0l-2.642 2.642v-.86a.55.55 0 00-.535-.534.55.55 0 00-.534.534v2.674h2.678a.55.55 0 00.534-.535.55.55 0 00-.534-.535h-.855z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.256 6.905c-.025-2.33-1.518-3.683-1.535-3.694a.603.603 0 01-.044-.86.62.62 0 01.868-.045c.078.07 1.907 1.731 1.938 4.569.006.098.104 2.89-1.913 4.672a.616.616 0 01-.868-.05.604.604 0 01.044-.855l.006-.005c1.55-1.368 1.506-3.635 1.504-3.729v-.003zm-2.59.026c-.017-1.34-.859-2.149-.893-2.181l-.001-.001a.606.606 0 01-.05-.855l.005-.005a.62.62 0 01.868-.045c.053.047 1.283 1.162 1.303 3.053.003.059.07 1.927-1.286 3.123a.609.609 0 01-.409.154.611.611 0 01-.46-.204.603.603 0 01.043-.852c.003-.003.005-.005.008-.005.892-.79.872-2.128.871-2.18V6.93zM8.017 18.045c0 .216-.061.376-.17.485-.118.115-.292.174-.5.174-.21 0-.383-.056-.5-.174-.107-.11-.169-.269-.169-.485 0-.45.264-.658.67-.658s.67.21.67.658zm-2.608.485c.107-.11.168-.269.168-.485 0-.448-.263-.658-.669-.658s-.67.207-.67.658c0 .216.062.376.169.485.117.118.29.174.501.174.21 0 .384-.06.501-.174zm16.426-1.294c0-.944-.252-1.675-.745-2.185-.513-.53-1.277-.796-2.263-.798H8.083v-7.33a.613.613 0 00-.617-.609.61.61 0 00-.616.608v7.33H5.164c-.992 0-1.754.27-2.269.796-.496.51-.745 1.244-.745 2.185v1.622c0 .941.25 1.678.745 2.188.515.526 1.277.795 2.269.795h13.658c.992 0 1.754-.269 2.27-.795.492-.507.744-1.244.744-2.185v-1.622z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconRouterFilled;
