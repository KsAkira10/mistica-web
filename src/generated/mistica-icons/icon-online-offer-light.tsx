'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOnlineOfferLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.366 11.722c0 .154.126.28.28.28a.28.28 0 0 0 .28-.28v-2.96a.28.28 0 0 0-.28-.28.28.28 0 0 0-.28.28zM14.192 19.467c0 .154.126.28.28.28.087 0 .168-.039.219-.109l2.709-3.46a.28.28 0 0 0-.048-.392.28.28 0 0 0-.392.048l-2.709 3.462a.27.27 0 0 0-.059.171M14.898 17.453c-.496 0-.806-.308-.806-.807 0-.498.308-.806.806-.806s.807.308.807.806-.311.807-.807.807m-.246-.804c0-.19.056-.246.246-.246.188 0 .247.056.247.246s-.056.247-.247.247c-.19 0-.246-.056-.246-.247M16.758 19.632c-.496 0-.806-.308-.806-.806s.308-.807.806-.807.807.308.807.807c0 .498-.308.806-.807.806m-.246-.804c0-.19.056-.246.246-.246s.247.056.247.246c0 .191-.056.247-.247.247-.19 0-.246-.056-.246-.247"
            />
            <path
                fill={fillColor}
                d="M10.957 5.879v.655c3.353.107 5.123 1.98 5.123 5.429v1.752c.179.112.301.335.412.54l.018.031c.052.095.122.221.173.274.078-.023.232-.115.33-.174.275-.168.588-.356.866-.196.277.16.271.53.263.854-.003.112-.006.291.014.367.063.016.196.015.304.014h.063c.325-.008.695-.014.854.263.16.278-.028.589-.196.866l-.015.025c-.059.098-.14.233-.159.305.048.046.168.114.26.166l.043.025.009.005c.286.158.605.334.605.659 0 .327-.327.506-.612.663h-.002l-.03.018a1.6 1.6 0 0 0-.273.173 2 2 0 0 0 .174.33c.168.275.356.589.196.866-.16.278-.53.272-.854.264a2 2 0 0 0-.367.014c-.016.062-.015.196-.014.303v.064c.008.325.014.694-.263.854-.278.16-.589-.028-.866-.196l-.025-.015a1.6 1.6 0 0 0-.305-.159 2 2 0 0 0-.166.259l-.025.044c-.157.288-.336.613-.664.613-.327 0-.506-.326-.663-.612v-.001l-.004-.006a2 2 0 0 0-.187-.297c-.079.023-.233.115-.33.174-.278.168-.589.356-.866.196a.4.4 0 0 1-.112-.091c-.813.423-1.828.637-3.02.637-3.554 0-5.434-1.88-5.434-5.434v-3.337a.3.3 0 0 1 0-.107v-.993c0-3.47 1.79-5.343 5.182-5.431v-.653a1.8 1.8 0 0 0-.182-.709c-.221-.431-.616-.65-1.176-.65H7.089c-1.801 0-3.011-.837-3.011-2.084a.28.28 0 0 1 .28-.28.28.28 0 0 1 .28.28c0 .303.109.737.624 1.076.446.294 1.076.448 1.827.448h1.95c.988 0 1.462.53 1.683.975.143.294.224.616.235.944m2.555 14.765q-.001-.106.002-.21a2 2 0 0 0-.013-.367 1.6 1.6 0 0 0-.304-.015h-.063c-.325.009-.695.015-.855-.263-.16-.277.028-.588.196-.865l.015-.025c.06-.098.14-.234.159-.306-.052-.049-.187-.124-.283-.178l-.022-.012-.009-.005c-.286-.159-.605-.335-.605-.66 0-.327.325-.506.614-.663l.032-.018c.094-.052.22-.122.273-.172-.022-.079-.115-.233-.174-.331-.168-.277-.355-.588-.196-.865.16-.278.53-.272.854-.264.113.003.292.006.368-.014.016-.062.015-.196.014-.304v-.063c-.009-.325-.014-.694.263-.854s.588.028.865.196l.025.015c.098.059.234.14.306.159.049-.052.124-.187.178-.283l.012-.023c.1-.182.207-.379.356-.499v-.424c-1.615.21-3.245.313-4.874.31-1.63.002-3.258-.1-4.874-.313V16.4c0 1.644.426 2.888 1.266 3.697.81.782 2.026 1.177 3.608 1.177 1.157 0 2.118-.21 2.866-.63m2.008-8.681c0-1.644-.426-2.888-1.266-3.698-.812-.781-2.025-1.176-3.608-1.176-1.582 0-2.798.395-3.608 1.176-.84.81-1.266 2.054-1.266 3.698v.803c1.616.213 3.244.32 4.874.317 1.63.003 3.258-.104 4.874-.317zm-.524 8.39q.063 0 .126.016c.25.067.392.327.532.582q.077.15.174.29.097-.138.174-.29c.14-.255.283-.515.532-.582.255-.067.515.09.768.244q.133.083.274.154.01-.16.006-.32v-.011c-.006-.29-.012-.588.17-.77s.48-.177.77-.171h.012q.16.008.32-.005a3 3 0 0 0-.155-.275c-.154-.252-.31-.515-.243-.767.067-.247.327-.393.582-.533q.15-.076.289-.173a2 2 0 0 0-.289-.174c-.255-.14-.515-.283-.582-.532-.068-.255.09-.516.243-.768q.084-.133.154-.274a3 3 0 0 0-.319-.006h-.012c-.29.006-.587.012-.77-.17-.182-.183-.176-.48-.17-.77v-.012a2.4 2.4 0 0 0-.006-.32 3 3 0 0 0-.274.155c-.253.154-.516.31-.768.243-.249-.067-.392-.327-.532-.581v-.001a3 3 0 0 0-.174-.286 2.3 2.3 0 0 0-.173.288l-.001.001c-.14.255-.283.515-.532.582-.255.067-.515-.09-.767-.244a3 3 0 0 0-.275-.154 3 3 0 0 0-.005.32v.012c.006.29.011.587-.171.77-.185.184-.488.178-.782.17a2.4 2.4 0 0 0-.319.006q.069.14.154.274c.154.252.311.515.244.768-.068.246-.328.392-.583.532q-.15.077-.288.173.137.098.288.174h.001c.255.14.515.283.582.532.067.255-.09.516-.244.768a3 3 0 0 0-.154.274q.16.012.32.006h.011c.29-.006.588-.012.77.17.185.186.18.488.17.782q-.007.16.006.32.142-.069.275-.154c.21-.132.428-.264.641-.264"
            />
        </svg>
    );
};

export default IconOnlineOfferLight;
