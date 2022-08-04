/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLockOpenLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.8 9.856h-.34V7.712C17.458 4.572 15.006 2 12.005 2c-1.91 0-3.72 1.072-4.674 2.784a.393.393 0 00.103.5c.172.108.378.036.477-.108.856-1.536 2.425-2.464 4.094-2.464 2.627 0 4.773 2.252 4.773 5v2.144H6.203c-.955 0-1.703.784-1.703 1.784v8.576c0 1 .748 1.784 1.703 1.784h11.594c.954 0 1.703-.784 1.703-1.784v-8.572c.004-1-.745-1.788-1.7-1.788zm1.024 10.36c0 .608-.443 1.072-1.023 1.072H6.203c-.58 0-1.023-.464-1.023-1.072v-8.572c0-.608.443-1.072 1.023-1.072h11.594c.58 0 1.023.464 1.023 1.072v8.572h.004z"
                    fill={fillColor}
                />
                <path
                    d="M6.887 7.712c.377 0 .683-.32.683-.716 0-.395-.306-.716-.683-.716-.378 0-.684.32-.684.716 0 .395.306.716.684.716z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.385 19.098c-.003-2.602 0-7.885 0-7.885v-.003c.005-.08.071-1.128-.65-1.924-.51-.555-1.26-.838-2.235-.838-2.255 0-7.099.006-8.572.009V7.062c0-3.762 2.944-4.082 3.849-4.09.129-.003.283 0 .409.003.73.017 3.165.274 3.762 2.823.002.003.002.006.002.009.054.215.27.35.488.297a.41.41 0 00.302-.493c-.73-3.124-3.655-3.435-4.535-3.457l-.216-.001c-.075 0-.15 0-.223-.002-.776.009-4.653.278-4.656 4.913v1.404c-.442.033-1.151.168-1.709.683-.518.476-.778 1.157-.778 2.023v7.913c-.003.045-.07 1.123.67 1.924.506.546 1.248.826 2.204.826l8.972-.005c.047.005 1.291.084 2.145-.72.513-.479.77-1.16.77-2.014zm-1.258-9.26c.493.537.445 1.302.443 1.341 0 0-.003 5.308 0 7.919 0 .616-.171 1.09-.508 1.409-.55.52-1.397.507-1.544.504h-.021l-9 .006c-.715 0-1.255-.188-1.6-.558-.498-.535-.46-1.305-.456-1.341V11.17c0-.622.17-1.098.507-1.412.47-.44 1.156-.482 1.409-.482.05 0 .082.002.093.003h.069l1.23-.001c1.976-.003 5.814-.007 7.748-.007.733 0 1.283.187 1.63.566zm-6.154 7.08h-.227c-.82-.01-1.796-.355-1.796-1.93 0-1.565.967-1.901 1.774-1.91h.047l.185.003c.826.023 1.812.37 1.812 1.927 0 1.552-.977 1.897-1.795 1.91zm2.608-1.912c0-2.519-2.076-2.732-2.608-2.745-.062-.003-.132-.003-.205-.003h-.053c-.546.003-2.58.193-2.58 2.73 0 2.544 2.053 2.743 2.6 2.752h.09c.055 0 .109 0 .159-.003.518-.009 2.597-.205 2.597-2.731z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconLockOpenLight;
