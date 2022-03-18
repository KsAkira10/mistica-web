/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTvContentLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.632 16.378a.37.37 0 01-.363.375h-7.633v1.498h2.546c.2 0 .363.168.363.374a.37.37 0 01-.363.375H7.455a.37.37 0 01-.363-.375.37.37 0 01.363-.374h2.546v-1.498H2V4h19.637v7.88a.37.37 0 01-.363.374.37.37 0 01-.363-.375V4.75H2.726v11.255H21.27c.2 0 .363.163.363.374zM22 14.126a.74.74 0 01-.726.75.739.739 0 01-.726-.75.74.74 0 01.726-.749c.4 0 .726.336.726.75zm-11.278 2.627h2.183v1.498h-2.183v-1.498z"
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
                    d="M5.315 17.297c-1.043 0-1.842-.275-2.383-.815-.518-.522-.782-1.28-.782-2.25V8.146c0-.97.264-1.722.782-2.236.536-.532 1.337-.8 2.38-.8l13.366-.01c1.043 0 1.845.269 2.38.801.518.516.782 1.269.782 2.236v6.087c0 .97-.264 1.728-.782 2.25-.538.54-1.34.814-2.383.814l-13.36.009zM18.68 5.643l-13.366.008c-1.752 0-2.604.815-2.604 2.494v6.088c0 .825.21 1.453.625 1.871.429.432 1.093.65 1.979.65l13.366-.009c.883 0 1.55-.217 1.979-.649.415-.416.625-1.046.625-1.872V8.137c-.003-1.679-.852-2.494-2.604-2.494zm-9.422 13.24h5.47c.153 0 .28-.122.28-.272a.277.277 0 00-.28-.271h-5.47a.277.277 0 00-.28.271c0 .15.126.272.28.272z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTvContentLight;
