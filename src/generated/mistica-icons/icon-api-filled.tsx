/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconApiFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.407 11.183H5.5l-1.208 3.61h.785l.28-.907h1.17l.3.907h.883l-1.303-3.61zm-.473.902l.395 1.204h-.782l.376-1.204h.01zm2.199-.902v3.613h.823V13.55h.58c.476 0 .804-.11 1.014-.348.18-.201.269-.49.269-.877 0-.386-.095-.666-.291-.845-.233-.219-.591-.297-1.157-.297H8.133zm1.706 1.61c-.104.101-.216.138-.48.138h-.408v-1.152h.386c.255 0 .406.037.507.126.095.09.137.233.137.429 0 .21-.047.364-.143.46zm1.571-1.61h.823v3.61h-.823v-3.61z"
            />
            <path
                fill={fillColor}
                d="M20.38 4.622c.806 0 1.461.63 1.461 1.41V17.98c0 .776-.655 1.406-1.462 1.406H3.617c-.807.003-1.462-.63-1.462-1.406V6.031c0-.776.655-1.409 1.462-1.409H20.38zM4.028 6.776a.56.56 0 00.571.55.562.562 0 00.572-.55.56.56 0 00-.572-.549.56.56 0 00-.571.55zm16.58 5.219v-3.05H3.388v9.036c0 .12.1.218.226.218h10.39a.862.862 0 01.185-.263l.37-.356a3.662 3.662 0 01-.096-.296h-.414c-.541 0-.984-.426-.984-.947v-.661c0-.521.44-.944.984-.944h.414a2.79 2.79 0 01.095-.297l-.37-.353a.93.93 0 01-.027-1.317.119.119 0 01.019-.02l.009-.008.501-.484a1.014 1.014 0 011.398 0l.37.358a4.58 4.58 0 01.305-.092v-.398c0-.524.44-.947.983-.947h.686c.541 0 .984.423.984.947v.398c.103.028.204.059.305.095l.37-.356a.95.95 0 01.518-.263zm-2.569 5.714c1.163 0 1.883-.694 1.883-1.812s-.723-1.812-1.883-1.812c-1.162 0-1.882.694-1.882 1.812s.72 1.812 1.882 1.812zM6.315 6.227a.56.56 0 00-.572.55.56.56 0 00.572.548.562.562 0 00.571-.549.56.56 0 00-.571-.549zm1.143.55a.56.56 0 00.571.548.562.562 0 00.571-.549.56.56 0 00-.571-.549.56.56 0 00-.571.55z"
            />
        </svg>
    );
};

export default IconApiFilled;
