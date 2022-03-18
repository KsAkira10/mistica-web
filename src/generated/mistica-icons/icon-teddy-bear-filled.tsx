/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTeddyBearFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.85 15.961c.451.42.684.96.703 1.7 0 .031-.005.149-.017.219a6.167 6.167 0 01-.042.269l-.65 2.456a.14.14 0 01-.02.047.264.264 0 00-.016.032.121.121 0 00-.002.01l-.002.009a.097.097 0 01-.024.052l-.011.016-.004.006c-.018.025-.034.049-.058.07a1.96 1.96 0 01-.308.4c-.428.395-1.017.596-1.753.596-.737 0-1.328-.201-1.754-.596a2.033 2.033 0 01-.571-.975c-.995.546-2.23.818-3.743.818a.26.26 0 01-.025-.001l-.025-.002c-.008 0-.017 0-.025.002a.304.304 0 01-.025.001c-1.513 0-2.746-.272-3.743-.818a2.011 2.011 0 01-.568.975c-.432.395-1.023.596-1.754.596-.737 0-1.325-.201-1.753-.596a1.969 1.969 0 01-.311-.4l-.003-.004a.523.523 0 01-.056-.072.137.137 0 00-.01-.013.05.05 0 01-.015-.018.084.084 0 01-.009-.028.216.216 0 00-.025-.062c-.007-.014-.015-.029-.02-.045l-.65-2.456s-.033-.188-.044-.27a1.88 1.88 0 01-.017-.218c.022-.736.25-1.277.703-1.7.05-.046.105-.083.162-.121l.048-.033c-.916-.96-1.386-2.504.023-4.092.605-.684 1.913-1.457 2.641-1.563a.323.323 0 00.066-.02c.02-.006.04-.014.068-.02l-.005-.01-.003-.012c-.269-.697-.412-1.496-.412-2.403 0-.35.037-.678.079-.998a.084.084 0 00-.032-.008.084.084 0 01-.033-.008 2.567 2.567 0 01-.28-.194l-.14-.112c-.81-.683-1.347-1.94-.199-3.235 1.14-1.286 2.496-.986 3.322-.336.84-.41 1.84-.636 3.023-.636 1.182 0 2.182.227 3.022.636.827-.65 2.185-.95 3.322.336 1.149 1.294.611 2.552-.201 3.235l-.138.112a3.036 3.036 0 01-.283.194c-.01.006-.023.008-.036.01a.177.177 0 00-.03.006c.041.323.078.647.078.998 0 .907-.143 1.706-.412 2.403l-.009.022a.425.425 0 01.065.02.3.3 0 00.067.02c.729.106 2.037.88 2.644 1.563 1.407 1.588.936 3.129.02 4.092l.036.024c.06.04.12.081.174.13zM8.265 4.46c.74-.69 1.837-1.04 3.266-1.04 1.428 0 2.526.35 3.266 1.04.765.711 1.151 1.798 1.151 3.227 0 1.425-.386 2.51-1.151 3.218-.622.577-1.51.9-2.62.992V8.765c.155-.062.295-.146.413-.255a1.08 1.08 0 00.313-.484s.042-.154.042-.267a.845.845 0 00-.056-.238 1.085 1.085 0 00-.266-.367c-.269-.249-.638-.378-1.095-.386-.454.008-.824.137-1.095.386a1.197 1.197 0 00-.266.367s-.056.14-.056.238c0 .115.044.267.044.267.073.207.16.341.314.484.118.11.258.19.412.255v3.132c-1.11-.095-1.997-.418-2.616-.992-.765-.709-1.154-1.79-1.154-3.218 0-1.429.389-2.516 1.154-3.227zm-2.084.87a4.58 4.58 0 011.15-1.758c-.394-.157-.78-.037-1.145.375-.442.504-.434.967-.005 1.384zM8.01 6.766c0 .207.056.364.173.473.113.104.275.157.482.157.208 0 .37-.053.482-.157.115-.106.177-.266.177-.473 0-.207-.062-.367-.177-.476-.112-.107-.274-.157-.482-.157-.207 0-.37.053-.482.157-.114.106-.173.266-.173.476zM18.937 16.87c.199.185.353.49.305.888-.07.572-.557 2.154-.634 2.403l-.01.034a.917.917 0 01-.11.143c-.176.16-.459.243-.84.243-.383 0-.669-.084-.843-.243-.179-.166-.269-.44-.271-.807l.176-1.678a.07.07 0 01.005-.025.074.074 0 00.003-.02c0-.431.107-.745.314-.938.202-.188.521-.283.953-.283.431 0 .753.098.952.283zM6.259 20.334c.18-.166.266-.437.272-.807l-.177-1.678a.074.074 0 00-.004-.02c-.002-.008-.004-.016-.004-.025 0-.428-.107-.745-.311-.938-.204-.188-.524-.283-.955-.283-.432 0-.75.095-.953.283a1.03 1.03 0 00-.305.888c.073.624.644 2.434.644 2.434a.556.556 0 00.11.143c.176.16.456.244.84.244.384.005.667-.079.843-.241zm-1.686-5.208c-.518-.437-1.224-1.355-.132-2.59.247-.275.644-.555 1.011-.77-.367.853-.574 1.84-.574 2.977 0 .141.012.277.024.411l.015.18-.035.002a.307.307 0 01-.035.003 1.506 1.506 0 01-.112-.078l-.162-.135zM16.875 3.947c-.364-.412-.75-.532-1.145-.375.51.482.896 1.067 1.154 1.759.428-.417.437-.88-.009-1.384zm.734 7.82c.37.214.768.494 1.011.768 1.093 1.236.387 2.154-.131 2.594l-.166.135a1.8 1.8 0 01-.111.078.198.198 0 01-.035-.003l-.035-.003.014-.179a4.54 4.54 0 00.025-.412c0-1.137-.205-2.123-.572-2.977zm-3.694-4.529c.112.104.274.157.481.157.208 0 .37-.053.482-.157.115-.106.174-.266.174-.473 0-.207-.056-.367-.174-.473-.112-.107-.274-.16-.482-.16-.204 0-.37.053-.481.16-.118.103-.177.266-.177.473 0 .207.059.367.177.473z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTeddyBearFilled;
