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

const IconCasinoRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.25 17.574c.66-.877 1.036-2.047 1.117-3.498H18.98c-.084.972-.347 1.787-.804 2.425l1.073 1.073zm-4.368 1.975c1.446-.081 2.62-.448 3.493-1.1l-1.075-1.08c-.642.449-1.451.712-2.418.793v1.387zm-2.874-3.129c.558.359 1.306.552 2.253.552 1.173 0 2.058-.28 2.635-.832.594-.571.897-1.479.897-2.695 0-1.215-.303-2.126-.897-2.7-.07-.067-.16-.12-.238-.18a8.67 8.67 0 01-.462 2.107c-.328.891-.81 1.647-1.445 2.26a5.815 5.815 0 01-1.146.844 7.051 7.051 0 01-1.597.644zm1.64 3.129v-1.387c-.967-.078-1.78-.341-2.421-.79l-1.079 1.079c.88.653 2.054 1.02 3.5 1.098zm-4.37-1.97l.854-.854c-.255.014-.513.026-.78.026-.2 0-.394-.012-.587-.02.145.311.319.588.512.849zm-2.23-2.347c.4.11.837.185 1.3.23.131.011.263.025.397.034v-1.387c-.148-.014-.314-.011-.454-.03-.047-.009-.087-.023-.131-.031a4.864 4.864 0 01-1.202-.373l-.042-.02a3.92 3.92 0 01-.591-.333l-1.079 1.079c.505.37 1.11.647 1.802.831zM3.263 10.02c.084 1.453.457 2.627 1.115 3.504l1.073-1.073c-.454-.641-.717-1.457-.798-2.429h-1.39v-.002zm1.101-4.754c-.653.882-1.025 2.059-1.103 3.516h1.386c.078-.978.336-1.802.787-2.446l-1.07-1.07zM8.748 3.27c-1.457.078-2.639.454-3.516 1.118l1.079 1.078c.644-.46 1.462-.731 2.44-.81V3.27h-.003zm.61 2.58c-1.17 0-2.055.28-2.63.834-.59.575-.893 1.485-.893 2.7 0 1.22.3 2.127.89 2.695.073.07.163.12.244.183.322.24.72.411 1.19.518.093.02.174.042.272.059.286.044.589.072.925.072.067 0 .12-.01.185-.014.26-.008.51-.025.742-.061a3.95 3.95 0 00.501-.112c.488-.138.897-.35 1.208-.647.473-.457.75-1.13.848-1.992.026-.224.045-.454.045-.703 0-.199-.022-.378-.036-.56-.048-.527-.163-.98-.342-1.364a2.725 2.725 0 00-.518-.776 2.439 2.439 0 00-.384-.286c-.557-.356-1.302-.546-2.246-.546zm.622-2.58v1.386c.978.082 1.793.353 2.437.813l1.076-1.076c-.88-.667-2.059-1.042-3.513-1.123zm3.493 11.123l-1.075-1.078a3.344 3.344 0 01-.432.263 4.685 4.685 0 01-1.193.415c-.112.025-.238.033-.356.053a4.865 4.865 0 01-.22.03c-.074.009-.141.023-.217.031v1.387c.398-.025.774-.07 1.13-.137a6.232 6.232 0 001.688-.555c.241-.123.468-.255.675-.409zm-.196-1.947l.465.465.608.608c.151-.201.286-.42.406-.652.21-.401.381-.844.499-1.337.11-.459.18-.955.21-1.49v-.022h-1.387a6.136 6.136 0 01-.137.888c-.137.59-.356 1.106-.664 1.54zm1.082-7.173l-.821.82-.247.247c.138.199.252.417.356.644.053.112.118.213.16.334.143.406.218.87.266 1.364.064-.003.12-.014.185-.014.218 0 .417.028.622.044.198.017.4.031.585.065v.006h.025a.076.076 0 00-.025-.006 8.715 8.715 0 00-.188-1.417 6.107 6.107 0 00-.395-1.202v-.02h-.005c-.009-.017-.014-.033-.025-.05a4.813 4.813 0 00-.493-.815zm4.036 3.176c-.507-.384-1.118-.666-1.815-.854.081.493.123 1.022.134 1.58.216.1.418.215.605.35l1.076-1.076zm1.972 4.392c-.078-1.453-.451-2.63-1.106-3.512l-1.068 1.07c.454.644.712 1.465.79 2.442h1.384zM19.65 7.9c1.308 1.262 1.972 3.128 1.972 5.545 0 2.42-.664 4.283-1.972 5.541-1.255 1.207-3.07 1.818-5.392 1.818-2.325 0-4.138-.614-5.387-1.82-.67-.645-1.165-1.457-1.493-2.415-1.392-.258-2.54-.801-3.406-1.642-1.303-1.255-1.96-3.117-1.96-5.538 0-2.42.66-4.285 1.96-5.546 1.252-1.216 3.064-1.832 5.387-1.832 2.322 0 4.137.616 5.395 1.832.669.644 1.168 1.454 1.495 2.41 1.387.257 2.533.803 3.4 1.646zm-11.588.18c-.143.12-.096.4-.068.518.02.084.062.174.09.26.1.3.235.603.437.917a4.858 4.858 0 00.675.849c.022.025.093.098.151.143l.02.014h.003a5.415 5.415 0 00.636-.711c.064-.09.131-.183.201-.292.185-.289.311-.569.412-.843.04-.112.09-.225.115-.334.03-.137.064-.384-.059-.504-.003-.003-.003-.011-.008-.014a.452.452 0 00-.266-.092.8.8 0 00-.44.112c-.037.02-.073.042-.11.064-.047.025-.092.05-.14.081l-.148.09-.347.006-.12-.056-.04-.017a8.809 8.809 0 00-.288-.166c-.02-.01-.04-.014-.062-.025a.847.847 0 00-.347-.087h-.034a.407.407 0 00-.263.087zm-1.27.804c-.167-.711.004-1.344.466-1.745.269-.23.624-.367 1.005-.386a2.03 2.03 0 011.101.266 2.048 2.048 0 011.101-.266c.028.002.056.014.084.016a1.7 1.7 0 01.922.37c.154.135.263.303.35.482.173.361.224.79.112 1.263-.02.09-.065.182-.093.275a4.548 4.548 0 01-.285.711 5.486 5.486 0 01-.311.572l-.096.14a6.099 6.099 0 01-.725.89c-.05.056-.199.202-.325.295a1.352 1.352 0 01-.423.196c-.025.005-.048.016-.07.022a.917.917 0 01-.176.025l-.062.003-.09-.003a.867.867 0 01-.176-.03 1.292 1.292 0 01-.474-.213 3.199 3.199 0 01-.296-.264l-.026-.025a5.888 5.888 0 01-.826-1.036c-.036-.056-.059-.112-.092-.168-.275-.465-.485-.933-.594-1.39z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCasinoRegular;
