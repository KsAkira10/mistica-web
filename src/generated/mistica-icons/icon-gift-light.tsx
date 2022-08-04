/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconGiftLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M19.675 21.242H12.19v-8.677h7.107v4.53c0 .207.167.376.373.376a.376.376 0 00.374-.377V10.3a1.883 1.883 0 00-1.872-1.888h-1.006a3.589 3.589 0 001.379-2.83C18.545 3.609 16.95 2 14.992 2c-1.686 0-3.099 1.193-3.463 2.786a2.599 2.599 0 00-1.963-.898 2.632 2.632 0 00-2.62 2.641c0 .739.302 1.405.79 1.888H5.453c-1.03 0-1.872.845-1.872 1.888v11.318c0 .208.168.377.374.377h15.712a.376.376 0 00.373-.377.372.372 0 00-.364-.381zM12.19 5.588c0-1.56 1.26-2.83 2.806-2.83 1.547 0 2.807 1.27 2.807 2.83s-1.26 2.83-2.807 2.83H12.19v-2.83zm5.986 3.582c.618 0 1.12.507 1.12 1.13v1.507H12.19V9.17h5.986zm-6.733 12.072H4.337v-8.677h7.106v8.677zm-7.106-9.43v-1.507c0-.623.503-1.13 1.12-1.13h5.986v2.637H4.337zm7.106-3.395H9.571A1.883 1.883 0 017.698 6.53a1.88 1.88 0 011.873-1.888 1.88 1.88 0 011.872 1.888v1.888zm8.232 11.69a.751.751 0 00.747-.753.751.751 0 00-.747-.753.751.751 0 00-.747.753.75.75 0 00.747.753z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.26 7.06h3.317c.664 0 1.27.69 1.266 1.446v2.997c0 .77-.593 1.445-1.268 1.445h-.056V20.4c0 .77-.594 1.446-1.27 1.446H4.693c-.678 0-1.271-.678-1.271-1.448V13.04c0-.026.006-.05.013-.072l.006-.02H3.43c-.675 0-1.269-.678-1.269-1.449V8.506c0-.756.605-1.445 1.269-1.445h3.255c-.608-.432-1.009-.961-1.137-1.555-.14-.65.028-1.356.487-2.042.46-.686 1.056-1.123 1.723-1.26.666-.14 1.392.027 2.1.476.93.588 1.676 2.08 2.113 3.19.44-1.106 1.184-2.602 2.117-3.19.709-.451 1.437-.617 2.101-.477.667.138 1.263.575 1.723 1.26.46.69.627 1.396.487 2.043-.129.594-.526 1.126-1.137 1.555zm-2.705-3.689c-.89.563-1.728 2.51-2.053 3.507 1.047.115 3.243.171 4.137-.394 1.048-.664 1.24-1.55.56-2.566-.339-.507-.737-.81-1.185-.902-.448-.096-.938.025-1.459.355zm-6.622-.355c-.448.092-.846.395-1.185.902-.339.507-.46.983-.364 1.42.093.431.406.82.927 1.148.894.563 3.093.507 4.137.395-.327-.997-1.168-2.947-2.056-3.507-.408-.257-.798-.386-1.162-.386-.1 0-.199.008-.297.028zM3.014 11.5c0 .35.252.617.415.617h8.095v-4.23H3.432c-.14 0-.418.28-.418.619V11.5zm17.978 0V8.51c0-.34-.277-.62-.417-.62h-8.202v4.23h8.202c.165 0 .417-.266.417-.619zm-1.322 8.897v-7.448h-7.294v8.067h6.876c.166 0 .418-.266.418-.62zM4.278 13.038v7.356c-.003.353.252.619.414.619h6.832v-8.067H4.258l.006.02a.246.246 0 01.014.072z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconGiftLight;
