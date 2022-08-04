/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowUpRightRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.266 22a.7.7 0 01-.496-1.196l8.915-8.916 3.711 3.712a.69.69 0 00.764.152.693.693 0 00.436-.648v-11.7H8.902a.682.682 0 00-.648.436.683.683 0 00.152.764l3.711 3.712L3.2 17.232a.701.701 0 11-.992-.992l7.923-7.924-2.72-2.72a2.072 2.072 0 01-.456-2.292A2.076 2.076 0 018.902 2H22v13.1c0 .868-.5 1.612-1.3 1.944a2.08 2.08 0 01-2.296-.456l-2.72-2.72-7.922 7.928a.7.7 0 01-.496.204z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.963 19.895c.373.373.77.557 1.166.557.39 0 .779-.179 1.137-.54l.006-.006 4.79-4.904 2.375 2.38a.075.075 0 01.017.014c.358.328.95.42 1.406.216.39-.174.616-.53.613-.955L20.48 4.51a.89.89 0 00-.252-.717.902.902 0 00-.717-.255H7.423c-.476-.002-.866.244-1.045.659-.19.445-.098 1.008.219 1.338l2.588 2.589-5.115 4.812-.014.014c-.219.218-.448.487-.521.824-.079.37.042.73.361 1.078l.017.017 5.05 5.025zm.76-.762l-5.04-5.017a.55.55 0 01-.092-.126c.011-.028.053-.103.221-.274l5.185-4.88.011-.011a.995.995 0 00.294-.675.95.95 0 00-.274-.7L7.375 4.797a.241.241 0 01-.008-.176.175.175 0 01.05-.006h11.989L19.4 16.637a.335.335 0 01-.212-.03l-2.449-2.449a.973.973 0 00-1.375.017l-.006.006-4.854 4.972c-.104.103-.252.227-.378.227h-.003c-.1-.003-.244-.09-.4-.247z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowUpRightRegular;
