'use client';
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

const IconUserSupportFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.352 2c-5.086 0-9.188 4.297-9.188 9.63 0 1.443.282 2.779.847 3.998l-1.518 5.928c-.034.112 0 .26.073.332a.31.31 0 0 0 .248.112h.072l5.646-1.591a8.76 8.76 0 0 0 3.812.851c5.086 0 9.184-4.297 9.184-9.63S17.438 2 12.352 2m0 15.075c-.355 0-.637-.296-.637-.668 0-.371.282-.667.637-.667.354 0 .636.296.636.667-.003.372-.286.668-.636.668m1.444-5.369a3.33 3.33 0 0 0-.918 2.335c0 .296-.248.555-.53.555s-.53-.26-.53-.555c0-1.184.423-2.295 1.235-3.11l1.026-1.076c.457-.48.388-1.519 0-2.034a1.9 1.9 0 0 0-1.556-.816h-.175c-.637 0-1.201.332-1.517.927-.141.26-.458.372-.706.184a.52.52 0 0 1-.175-.74c.496-.887 1.449-1.482 2.436-1.482h.175c.92 0 1.8.443 2.368 1.223.67.92.777 2.586-.107 3.514z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.352 2c-5.086 0-9.188 4.297-9.188 9.63 0 1.443.282 2.779.847 3.998l-1.518 5.928c-.034.112 0 .26.073.332a.31.31 0 0 0 .248.112h.072l5.646-1.591a8.76 8.76 0 0 0 3.812.851c5.086 0 9.184-4.297 9.184-9.63S17.438 2 12.352 2m0 15.075c-.355 0-.637-.296-.637-.668 0-.371.282-.667.637-.667.354 0 .636.296.636.667-.003.372-.286.668-.636.668m1.444-5.369a3.33 3.33 0 0 0-.918 2.335c0 .296-.248.555-.53.555s-.53-.26-.53-.555c0-1.184.423-2.295 1.235-3.11l1.026-1.076c.457-.48.388-1.519 0-2.034a1.9 1.9 0 0 0-1.556-.816h-.175c-.637 0-1.201.332-1.517.927-.141.26-.458.372-.706.184a.52.52 0 0 1-.175-.74c.496-.887 1.449-1.482 2.436-1.482h.175c.92 0 1.8.443 2.368 1.223.67.92.777 2.586-.107 3.514z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.169 2.155h-6.583a1.664 1.664 0 0 0-1.67 1.658V7.85c0 .952.681 1.67 1.583 1.67h.557v1.383q0 .094-.004.184c-.01.322-.02.599.299.65.352.058.633-.283.854-.55l.048-.057c.098-.118.273-.306.489-.538.282-.304.634-.682.973-1.073l3.454.009c.921 0 1.666-.748 1.669-1.67V3.825a1.67 1.67 0 0 0-1.67-1.67m-3.12 6.28a.526.526 0 1 1-.002-1.052.526.526 0 0 1 .001 1.052m.803-2.716c-.125.108-.305.265-.305.447v.208a.503.503 0 0 1-.502.512.503.503 0 0 1-.501-.512v-.208c0-.516.322-.826.556-1.05l.03-.028q.026-.025.063-.056c.107-.091.261-.222.261-.398 0-.137-.078-.434-.412-.434s-.5.269-.5.428a.5.5 0 0 1-1 .026V4.63c0-.837.582-1.38 1.5-1.38.86 0 1.438.716 1.438 1.386.004.49-.223.703-.444.91l-.106.101q-.03.03-.078.07m-9.227 9.943c1.135 0 2.014-.322 2.614-.958.565-.6.854-1.445.854-2.513s-.289-1.91-.854-2.512c-.6-.636-1.48-.958-2.614-.958s-2.014.322-2.613.958c-.566.6-.855 1.445-.855 2.512 0 1.068.289 1.91.855 2.513.6.636 1.479.958 2.613.958m-5.487 1.972c.647-.655 1.616-.986 2.877-.986h5.22c1.261 0 2.228.33 2.878.983s.977 1.628.977 2.894v1.042a.28.28 0 0 1-.28.28H2.44a.28.28 0 0 1-.28-.28v-1.042c0-1.266.33-2.235.978-2.891"
                />
            </svg>
        );
    }
};

export default IconUserSupportFilled;
