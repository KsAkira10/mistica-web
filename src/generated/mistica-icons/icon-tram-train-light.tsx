/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTramTrainLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.042 8.135c.191.009 4.172.237 6.01 3.94 2.04 4.105-.364 5.673-1.521 6.424l-.076.049a1.876 1.876 0 01-1.042.313h-.017l-.835-.005c-.059.933-.675 1.51-1.647 1.51-.975 0-1.594-.582-1.648-1.521l-3.02-.006c-.05.942-.67 1.527-1.647 1.527-.98 0-1.6-.585-1.65-1.53h-.86c-.05.945-.67 1.53-1.65 1.53-.981 0-1.6-.587-1.65-1.532H2.566a.41.41 0 01-.41-.409v-2.722l-.002-.008.003-.008v-1.832c-.003 0-.003-.003-.003-.006V8.544a.4.4 0 01.12-.289.406.406 0 01.289-.12h5.488l1.42-1.415h-.226a.41.41 0 01-.41-.409V4.447h-6.27a.408.408 0 110-.817H21.29a.408.408 0 110 .817h-6.273V6.31a.408.408 0 01-.409.409h-1.513a.026.026 0 00-.005.01.026.026 0 01-.006.009l-1.403 1.396h3.361zm3.967 9.732l.076-.049c.56-.364 1.311-.86 1.695-1.712H2.981v1.914h.922c.23-.604.776-.958 1.541-.958.765 0 1.314.356 1.541.96h1.076c.227-.606.773-.96 1.54-.96.768 0 1.317.356 1.544.963l3.23.006c.225-.61.777-.97 1.544-.97.77 0 1.323.363 1.547.978l.941.005c.196.003.418-.057.602-.177zm-3.092 1.685c.563 0 .837-.272.837-.835 0-.564-.274-.839-.837-.839-.564 0-.838.275-.838.839 0 .56.272.835.838.835zm-7.159-.835c0 .56.275.835.84.835.564 0 .841-.272.839-.835 0-.564-.275-.839-.838-.839-.566 0-.84.275-.84.839zm-3.32.835c.566 0 .841-.272.841-.835 0-.564-.275-.839-.84-.839-.564 0-.838.275-.838.839 0 .56.274.835.838.835zm.337-6.108v-2.867h-2.8v2.867h2.8zm.82 0H8.93v-2.867H6.596v2.867zm5.736 0v-2.867H9.75v2.867h2.58zm1.652-4.492l-11.007.003v.803h9.764a.41.41 0 01.409.408v3.683a.408.408 0 01-.41.409H2.976v1.029h17.807c.076 0 .14.024.202.06a3.626 3.626 0 00-.026-1.021h-6.566a.41.41 0 01-.41-.409V8.953zm-2.04-2.232h-1.31l-1.42 1.415h1.31l1.42-1.415zm-2.285-.817h4.544V4.447H9.658v1.456zM20.76 13.51a8.258 8.258 0 00-.443-1.072c-1.609-3.243-5.183-3.478-5.29-3.485h-.226v4.557h5.959z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTramTrainLight;
