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

const IconSharedMobileDataFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.501 7.256c.715 0 1.241.18 1.611.546.373.37.555.9.552 1.62v8.207c0 1.417-.748 2.165-2.165 2.165h-4.404c-1.398 0-2.165-.77-2.165-2.165v-2.264l1.496-.005a.499.499 0 00.395-.168.516.516 0 00.126-.384l-.003-1.098a.508.508 0 00-.555-.513l-1.456-.002v-1.367l.003-.042.677-.505c.003.003.006.003.009.003v-.005l1.263-.942a.41.41 0 00.171-.33.41.41 0 00-.17-.33l-1.73-1.295a.586.586 0 01.08-.257c.344-.577.971-.869 1.862-.869zM17.3 17.19c-.294 0-.488.154-.488.49 0 .163.045.28.124.362.084.086.21.128.364.128s.28-.042.364-.128c.081-.079.123-.2.123-.362 0-.333-.19-.49-.487-.49zM8.585 4.519c1.398 0 2.166.77 2.166 2.166v2.02a.578.578 0 01-.045.22l-1.373.004a.508.508 0 00-.555.513l-.005 1.094a.52.52 0 00.126.384.49.49 0 00.395.168l1.457.006v1.328a.57.57 0 01-.012.103l-.605.454a.45.45 0 01-.103-.02l-.003.101-1.188.89a.41.41 0 00-.17.331c0 .13.061.25.17.331l1.61 1.199a.564.564 0 01-.077.496c-.365.504-.947.75-1.788.75H4.182c-.714 0-1.24-.176-1.61-.543-.373-.37-.555-.9-.555-1.62v-8.21c0-1.417.748-2.164 2.165-2.164zm2.63 8.477l-.008.636c0 .07.056.126.123.126l2.872.002c.106-.016.187.076.185.163l.002.703c.014.115-.075.193-.162.188l-2.857.008a.132.132 0 00-.13.126l-.008.591c0 .07-.047.093-.103.05l-1.675-1.246c-.056-.042-.056-.11 0-.151l1.664-1.247c.056-.042.1-.02.098.05zm-4.8 1.473c-.295 0-.488.154-.488.49 0 .163.045.28.123.362.084.087.21.129.365.129.154 0 .28-.042.364-.13.08-.08.123-.198.123-.36 0-.334-.19-.49-.487-.49zm6.095-5.748c-.003-.07.042-.092.098-.05l1.664 1.246c.056.042.056.11 0 .152l-1.675 1.246c-.056.042-.104.02-.104-.05l-.008-.591a.132.132 0 00-.13-.126L9.5 10.539c-.09.009-.177-.07-.163-.187l.003-.704a.162.162 0 01.185-.162l2.87-.003a.125.125 0 00.124-.126z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSharedMobileDataFilled;
