/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPenRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.533 3.107a3.79 3.79 0 015.364 5.353l-.724.725-.512.512L9.157 20.204a.728.728 0 01-.388.2l-5.856 1.572a.723.723 0 01-.888-.884l1.588-5.926a.71.71 0 01.228-.364L14.81 3.832l.724-.725zM4.681 16.751l-.936 3.505 3.5-.94-2.564-2.565zm3.964 1.916l-3.312-3.313 9.992-9.994 3.312 3.313-9.992 9.994zM19.657 7.652l.212-.212c.912-.912.912-2.4 0-3.312a2.346 2.346 0 00-3.312 0l-.212.212 3.312 3.312z"
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
                    d="M20.346 3.244c.084.08.169.165.25.249 1.339 1.39 2.011 3.622-.115 5.731L9.237 20.401l-.01.008-.01.008c0 .002-.002.004-.004.006a.268.268 0 01-.065.047.618.618 0 00-.028.017l-.022.014-.015.009a.594.594 0 01-.305.095.055.055 0 01-.016-.003.055.055 0 00-.015-.003L2.88 21.678a.622.622 0 01-.532-.16.592.592 0 01-.18-.524l.941-6.1a.295.295 0 01.017-.05l.011-.034a.608.608 0 01.02-.068.527.527 0 01.123-.179l11.308-11.19c2.154-2.132 4.387-1.463 5.76-.13zM18.95 9.036l.666-.663c1.85-1.83.687-3.44.104-4.048-.067-.07-.148-.151-.221-.224-.6-.58-2.185-1.726-4.048.12l-.683.678 4.182 4.137zM4.643 20.13l-.966-.958-.182 1.168 1.148-.21zm1.611-3.474L4.568 14.99l9.339-9.238 1.683 1.666-9.336 9.238zm-2.35 1.04l2.19 2.168 1.415-.26-3.384-3.348-.221 1.44zm4.871 1.456l-1.664-1.644 9.336-9.238 1.639 1.622c.003 0-9.31 9.26-9.31 9.26z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPenRegular;
