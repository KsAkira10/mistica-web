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

const IconArrowUpLeftLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.072 15.347a.354.354 0 00.108-.256.359.359 0 00-.104-.26L13.428 8.18l3.076-3.076c.528-.528.68-1.288.392-1.98A1.795 1.795 0 0015.216 2H2v13.211c0 .748.432 1.392 1.124 1.68a1.788 1.788 0 001.98-.392l3.076-3.076 8.472 8.472a.37.37 0 00.516 0 .362.362 0 000-.516l-8.984-8.984-3.592 3.592c-.38.38-.864.372-1.188.236a1.077 1.077 0 01-.676-1.008V2.724h12.48c.536 0 .872.352 1.008.676.136.324.144.808-.236 1.188L12.388 8.18l7.168 7.167a.37.37 0 00.516 0zm1.928 1.2a.728.728 0 10-1.456 0 .728.728 0 001.456 0z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.338 20.006c.183.177.484.469.872.469.213 0 .451-.087.712-.325l5.056-5.064c.66-.661.666-1.356.016-2.006l-5.072-5.092a.195.195 0 01-.062-.135c0-.025.006-.073.042-.109l2.571-2.571c.267-.289.342-.788.177-1.16a.772.772 0 00-.728-.474L4.244 3.534a.672.672 0 00-.538.182.669.669 0 00-.182.538v12.602c-.003.384.188.686.518.83.359.153.826.08 1.09-.172l2.778-2.778a.143.143 0 01.11-.043.19.19 0 01.134.06l5.168 5.238.003.002.013.013zm1.2-.262c-.275.25-.41.258-.815-.146l-5.168-5.246a.743.743 0 00-.513-.224.707.707 0 00-.524.204l-2.77 2.77c-.092.087-.311.135-.479.062-.123-.053-.18-.151-.18-.314V4.223l-.002-.014c-.006-.045.003-.084.02-.1.016-.018.053-.026.1-.02.009.002.02.002.028.002l12.684.006c.073 0 .165.017.221.143.076.168.04.423-.073.549l-2.56 2.56a.711.711 0 00-.204.524c.005.19.086.375.224.512l5.075 5.096c.219.218.322.414.32.602-.003.185-.115.39-.337.61l-5.047 5.051z"
                />
            </svg>
        );
    }
};

export default IconArrowUpLeftLight;
