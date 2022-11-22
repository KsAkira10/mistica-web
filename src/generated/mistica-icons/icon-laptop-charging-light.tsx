/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLaptopChargingLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M5.324 17.235c-1.042 0-1.842-.275-2.38-.817-.52-.52-.78-1.275-.78-2.246v-6.08c0-.967.263-1.72.782-2.234.536-.531 1.336-.8 2.38-.8L18.68 5.05c1.042 0 1.841.268 2.377.803.52.514.783 1.264.783 2.231v6.083c0 .967-.263 1.725-.78 2.245-.539.543-1.338.817-2.38.817l-13.355.006zm-2.341-3.06c0 .758.185 1.326.55 1.695.379.38.98.573 1.788.573l13.356-.006c.808 0 1.411-.193 1.787-.573.365-.369.553-.937.553-1.695V8.084c0-.752-.185-1.317-.55-1.678-.376-.372-.977-.562-1.79-.562l-13.354.009c-.813 0-1.417.187-1.79.562-.365.358-.55.923-.55 1.678v6.082zm7.785 1.39c-.5 0-.873-.126-1.142-.383-.27-.26-.402-.624-.402-1.113V9.292c0-.48.132-.841.399-1.101.264-.26.626-.386 1.109-.392v-.176c0-.235.07-.422.21-.557.14-.137.337-.207.58-.207h.963c.245 0 .441.067.582.204.14.138.21.328.21.563v.176c.483.005.848.131 1.109.386.269.263.398.623.398 1.107v4.777c0 .489-.132.855-.401 1.113-.267.257-.64.383-1.14.383-.01-.003-2.475-.003-2.475-.003zm.578-7.94v.171h1.313v-.17c0-.07-.01-.123-.033-.14-.017-.017-.07-.028-.143-.028h-.963c-.034-.003-.115 0-.143.028-.02.02-.03.07-.03.14zM9.84 14.067c0 .322.073.548.219.69.149.14.379.21.71.21h2.464c.331 0 .561-.07.71-.21.149-.142.219-.368.219-.69V9.292c0-.318-.07-.545-.219-.688-.149-.142-.379-.212-.71-.212h-2.464c-.328 0-.559.07-.707.218-.152.145-.222.37-.222.682v4.774zm1.23-2.165l.86-.114.029-.003c.05 0 .095.017.135.05.044.037.07.093.07.151l-.003.985.766-1.717-.954.128a.213.213 0 01-.163-.047.198.198 0 01-.07-.151l.011-.884-.682 1.603zm-.298.442a.21.21 0 01-.191-.075.191.191 0 01-.028-.196l1.223-2.88a.213.213 0 01.23-.118.2.2 0 01.166.196l-.02 1.686 1.081-.145a.216.216 0 01.19.075.196.196 0 01.026.199l-1.305 2.922a.206.206 0 01-.23.115.196.196 0 01-.163-.196l.003-1.717c-.003.003-.982.134-.982.134zm11.074 6.209a.402.402 0 00-.41-.397H2.565a.404.404 0 00-.41.397v.003c.003.22.188.397.41.394h18.87a.404.404 0 00.41-.397z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLaptopChargingLight;
