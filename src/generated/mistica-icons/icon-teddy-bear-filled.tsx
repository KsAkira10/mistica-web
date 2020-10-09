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

const IconTeddyBearFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.183 7.238c-.117-.109-.173-.266-.173-.473 0-.21.059-.37.173-.476.113-.104.275-.157.482-.157.208 0 .37.05.482.157.115.11.177.269.177.476 0 .207-.062.367-.177.473-.112.104-.274.157-.482.157-.207 0-.37-.053-.482-.157zm11.06 10.519a1.02 1.02 0 00-.306-.888c-.199-.185-.521-.283-.952-.283-.432 0-.751.095-.953.283-.207.193-.314.507-.314.938 0 .014-.008.028-.008.045l-.176 1.678c.002.367.092.641.271.806.174.16.46.244.843.244.381 0 .664-.084.84-.244a.917.917 0 00.11-.142c0-.003.569-1.816.644-2.437zM6.258 20.334c.18-.166.266-.437.272-.807l-.177-1.678c0-.014-.008-.028-.008-.045 0-.428-.107-.745-.311-.938-.204-.188-.524-.283-.955-.283-.432 0-.75.095-.953.283a1.03 1.03 0 00-.305.888c.073.624.644 2.434.644 2.434a.556.556 0 00.11.143c.176.16.456.244.84.244.384.005.667-.079.843-.241zM4.44 12.535c-1.092 1.236-.386 2.154.132 2.591l.162.135c.028.022.073.053.112.078.023 0 .048-.005.07-.005-.014-.196-.039-.387-.039-.591 0-1.138.207-2.124.574-2.978-.367.216-.764.496-1.01.77zm1.74-7.204a4.58 4.58 0 011.15-1.76c-.394-.156-.78-.036-1.145.376-.442.504-.434.967-.005 1.384zm5.35-1.91c-1.429 0-2.527.35-3.266 1.039C7.5 5.17 7.11 6.258 7.11 7.687c0 1.428.389 2.51 1.154 3.218.619.574 1.507.896 2.616.992V8.765a1.375 1.375 0 01-.412-.255 1.096 1.096 0 01-.314-.484s-.044-.152-.044-.267c0-.098.056-.238.056-.238.072-.148.148-.255.266-.367.271-.249.641-.378 1.095-.386.457.008.826.137 1.095.386.12.11.196.219.266.367 0 0 .056.143.056.238 0 .112-.042.267-.042.267a1.08 1.08 0 01-.313.484 1.32 1.32 0 01-.412.255v3.132c1.11-.093 1.997-.415 2.619-.992.765-.709 1.151-1.793 1.151-3.218 0-1.429-.386-2.516-1.151-3.227-.74-.69-1.838-1.04-3.266-1.04zm5.344.526c-.364-.412-.75-.532-1.145-.375.51.482.896 1.067 1.154 1.759.428-.417.437-.88-.009-1.384zm1.745 8.588c-.243-.274-.641-.554-1.01-.767.366.854.57 1.84.57 2.977 0 .205-.025.395-.039.591.023 0 .048.006.07.006a1.8 1.8 0 00.113-.078l.165-.135c.518-.44 1.224-1.358.131-2.594zm1.23 3.426c.451.42.684.96.703 1.7 0 .031-.005.149-.017.219a6.184 6.184 0 01-.042.269l-.65 2.456c-.005.028-.025.05-.036.079-.005.02-.005.039-.017.056-.005.011-.016.02-.022.03-.02.029-.037.054-.062.076-.09.143-.185.286-.308.4-.428.396-1.017.597-1.753.597-.737 0-1.328-.201-1.754-.596a2.032 2.032 0 01-.571-.975c-.995.546-2.23.818-3.743.818-.02 0-.03-.003-.05-.003-.017 0-.034.003-.05.003-1.513 0-2.746-.272-3.743-.818a2.011 2.011 0 01-.568.975c-.432.395-1.023.596-1.754.596-.737 0-1.325-.201-1.753-.596a1.968 1.968 0 01-.311-.4c-.02-.023-.042-.048-.06-.076-.007-.012-.019-.02-.024-.031-.009-.017-.009-.04-.017-.056-.011-.028-.028-.05-.037-.079l-.65-2.456s-.033-.188-.044-.27a1.881 1.881 0 01-.017-.218c.022-.736.25-1.277.703-1.7.065-.059.137-.104.21-.154-.916-.96-1.386-2.504.023-4.092.605-.684 1.913-1.457 2.641-1.563.053-.009.076-.028.134-.04-.01-.022 0 0-.008-.022-.269-.698-.412-1.496-.412-2.403 0-.35.037-.678.079-.998-.02-.01-.045-.005-.065-.016a2.568 2.568 0 01-.28-.194l-.14-.112c-.81-.683-1.347-1.94-.199-3.235 1.14-1.286 2.496-.986 3.322-.336.84-.41 1.84-.636 3.023-.636 1.182 0 2.182.227 3.022.636.827-.65 2.185-.95 3.322.336 1.149 1.294.611 2.552-.201 3.235l-.138.112a3.123 3.123 0 01-.282.194c-.02.01-.043.008-.068.016.042.323.079.647.079.998 0 .907-.143 1.705-.412 2.403l-.008.022c.056.012.078.031.131.04.728.106 2.037.88 2.644 1.563 1.407 1.588.936 3.128.02 4.092.07.048.146.095.21.154zm-5.454-8.566c-.207 0-.37-.053-.481-.157-.118-.106-.177-.266-.177-.473 0-.207.059-.37.177-.473.112-.107.277-.16.481-.16.208 0 .37.053.482.16.118.106.174.266.174.473 0 .207-.059.367-.174.473-.112.104-.274.157-.482.157z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTeddyBearFilled;
