/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDataSettingsFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.854 5.345c-1.227-.35-1.972-.824-2.173-1.37v-.007l-.009-.013c.199-.546.944-1.03 2.163-1.38C11.129 2.206 12.837 2 14.65 2c1.812 0 3.524.204 4.806.574 1.283.37 2.012.852 2.171 1.426 0 0-.01.008-.01.017-.217.53-.953.986-2.152 1.328-1.294.366-2.992.574-4.807.574-1.815 0-3.51-.208-4.804-.574zM7.44 14.58c0 1.305.67 1.94 2.044 1.94 1.376 0 2.048-.632 2.048-1.94 0-1.306-.67-1.941-2.048-1.941-1.375 0-2.044.636-2.044 1.94zm2.044 3.151c2.079 0 3.32-1.18 3.32-3.151 0-1.975-1.238-3.152-3.32-3.152-2.078 0-3.319 1.177-3.319 3.152s1.241 3.151 3.32 3.151zm-2.392.504a4.73 4.73 0 001.289.376c.308.047.532.3.532.596v1.224l1.095.045c.026 0 .045-.02.045-.045v-1.224c0-.297.227-.549.535-.596a5.54 5.54 0 00.616-.135c.236-.064.46-.143.678-.244a.657.657 0 01.729.115l.697.664.193.182.065.062.843-.729-.953-.98a.6.6 0 01-.142-.224.576.576 0 01.022-.47c.07-.132.123-.278.176-.424a4.3 4.3 0 00.219-.798.63.63 0 01.63-.51h1.291l.048-1.036-1.336-.045a.63.63 0 01-.63-.51 4.186 4.186 0 00-.395-1.224.484.484 0 01-.048-.148c-.011-.048-.011-.093-.011-.137a.59.59 0 01.18-.412l.475-.451.48-.454-.765-.801-1.034.905a.664.664 0 01-.728.117 4.602 4.602 0 00-1.258-.37l-.034-.008a.615.615 0 01-.534-.596V8.723L8.966 8.68v.022l-.047 1.25a.613.613 0 01-.533.596 4.634 4.634 0 00-1.288.375.662.662 0 01-.734-.114l-.955-.905-.843.725.952.98a.58.58 0 01.104.726c-.168.28-.311.804-.378 1.199a.629.629 0 01-.628.507H3.328l-.048 1.04 1.336.041c.311 0 .58.216.628.507.067.395.21.916.378 1.2a.58.58 0 01-.104.722l-.952.904.764.802 1.034-.908a.655.655 0 01.728-.115zm12.65-6.77c-1.342.386-3.104.6-4.969.608l.543-.521c.13-.12.224-.26.292-.415 1.465-.067 2.826-.26 3.888-.574 1.271-.378 1.963-.941 2.196-1.364l-.04-3.944c-.467.364-1.106.655-1.927.896-1.372.406-3.173.639-5.073.656-1.896.017-3.703-.185-5.084-.566-.843-.224-1.495-.524-1.971-.88l.033 3.384.02.003v.703a7.07 7.07 0 00-.69.207l-.646-.613c-.502-.476-1.376-.476-1.88 0l-.765.722a1.22 1.22 0 00-.392.894c0 .336.14.655.39.894l.641.607c-.09.227-.16.46-.21.661h-.77c-.729 0-1.32.56-1.32 1.253v.994c0 .689.591 1.252 1.32 1.252h.77c.05.205.118.437.21.661l-.641.608a1.22 1.22 0 00-.393.893c0 .337.14.656.39.894l.764.728c.505.48 1.379.477 1.88 0l.647-.613c.221.081.448.148.69.204v.734c0 .69.59 1.252 1.318 1.252h1.048c.345 0 .658-.128.894-.336 1.112.213 2.403.328 3.748.328 1.803 0 3.512-.204 4.806-.574 1.474-.423 2.219-.997 2.219-1.695v-3.54c-.502.366-1.163.68-1.936.896-1.274.364-2.924.569-4.68.596l-.398-.375c.067-.162.12-.339.17-.512 1.748-.012 3.393-.213 4.634-.57 1.274-.369 1.972-.924 2.21-1.344v-3.98c-.502.367-1.163.672-1.936.888z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataSettingsFilled;
