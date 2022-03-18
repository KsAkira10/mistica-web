/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCreditCardRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.144 5h15.704c1.18 0 2.144 1.017 2.152 2.272v9.456c0 1.25-.964 2.272-2.144 2.272H4.144C2.964 19 2 17.979 2 16.728V7.272C2 6.022 2.964 5 4.144 5zm15.712 1.509H4.144c-.396 0-.72.343-.72.763v1.5h17.144V7.263c0-.41-.316-.754-.712-.754zm-.008 10.974H4.144c-.396 0-.712-.344-.712-.755v-6.43h17.136v6.43c0 .411-.324.755-.72.755zM4.857 12.184h4.636c.397 0 .713.344.713.755 0 .42-.316.754-.713.754H4.857c-.397 0-.713-.335-.713-.754 0-.42.316-.755.713-.755zm6.78 0h2.505c.389 0 .713.344.709.755 0 .42-.317.754-.713.754h-2.5c-.396 0-.712-.335-.712-.754 0-.42.316-.755.712-.755zm7.498 0H16.28c-.396 0-.712.335-.712.755s.316.754.712.754h2.856c.396 0 .713-.335.713-.754 0-.411-.316-.755-.713-.755z"
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
                    d="M21.714 13.095V9.328a.158.158 0 00-.009-.049.2.2 0 01-.008-.035V6.793c0-.807-.666-1.46-1.484-1.46H3.523c-.82 0-1.487.653-1.487 1.46V9.28a.133.133 0 01-.005.02c-.003.009-.006.018-.006.028v3.767c0 .01.003.019.006.028l.005.02v4.678c0 .804.667 1.46 1.488 1.46h16.689c.818 0 1.484-.656 1.484-1.46v-4.642a.193.193 0 01.009-.038c.004-.015.008-.029.008-.046zm-1.269 4.723a.233.233 0 01-.232.227s-16.69 0-16.69.003a.229.229 0 01-.232-.227v-4.11h17.154v4.107zM3.524 6.566a.229.229 0 00-.233.227V8.71h17.151V6.793a.229.229 0 00-.232-.227H3.524zm16.918 5.913H3.293V9.944h17.15v2.535z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconCreditCardRegular;
