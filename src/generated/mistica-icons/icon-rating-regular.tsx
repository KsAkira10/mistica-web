'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRatingRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.61 2H8.39C6.793 2 5.5 3.28 5.5 4.857v14.286C5.5 20.72 6.794 22 8.39 22h7.22c1.596 0 2.89-1.28 2.89-2.857V4.862C18.5 3.285 17.206 2 15.61 2M9.394 13.05 7.4 11.316a.51.51 0 0 1-.148-.572.54.54 0 0 1 .458-.37l2.723-.284 1.077-2.44a.543.543 0 0 1 .99 0l1.076 2.44 2.723.284a.534.534 0 0 1 .3.937l-1.992 1.733.546 2.688a.538.538 0 0 1-.795.571l-2.353-1.317-2.358 1.317a.56.56 0 0 1-.587-.032.53.53 0 0 1-.213-.54zm1.9-2.24a.54.54 0 0 1-.44.32l-1.812.191 1.3 1.125a.54.54 0 0 1 .17.507l-.374 1.842 1.59-.891a.56.56 0 0 1 .537 0l1.59.891-.375-1.842a.53.53 0 0 1 .176-.507l1.3-1.13-1.809-.187a.54.54 0 0 1-.439-.32L12 9.205zm4.318-7.38c.795 0 1.442.64 1.442 1.427v.357H6.943v-.357c0-.786.647-1.426 1.446-1.426zm1.447 3.215V17.36H6.942V6.645zM6.947 19.147v-.356h10.115v.356a1.444 1.444 0 0 1-1.451 1.427H8.389c-.795 0-1.442-.64-1.442-1.427"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.61 2H8.39C6.793 2 5.5 3.28 5.5 4.857v14.286C5.5 20.72 6.794 22 8.39 22h7.22c1.596 0 2.89-1.28 2.89-2.857V4.862C18.5 3.285 17.206 2 15.61 2M9.394 13.05 7.4 11.316a.51.51 0 0 1-.148-.572.54.54 0 0 1 .458-.37l2.723-.284 1.077-2.44a.543.543 0 0 1 .99 0l1.076 2.44 2.723.284a.534.534 0 0 1 .3.937l-1.992 1.733.546 2.688a.538.538 0 0 1-.795.571l-2.353-1.317-2.358 1.317a.56.56 0 0 1-.587-.032.53.53 0 0 1-.213-.54zm1.9-2.24a.54.54 0 0 1-.44.32l-1.812.191 1.3 1.125a.54.54 0 0 1 .17.507l-.374 1.842 1.59-.891a.56.56 0 0 1 .537 0l1.59.891-.375-1.842a.53.53 0 0 1 .176-.507l1.3-1.13-1.809-.187a.54.54 0 0 1-.439-.32L12 9.205zm4.318-7.38c.795 0 1.442.64 1.442 1.427v.357H6.943v-.357c0-.786.647-1.426 1.446-1.426zm1.447 3.215V17.36H6.942V6.645zM6.947 19.147v-.356h10.115v.356a1.444 1.444 0 0 1-1.451 1.427H8.389c-.795 0-1.442-.64-1.442-1.427"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.385 4.622c.804 0 1.456.63 1.456 1.404v11.958c0 .773-.652 1.403-1.456 1.403H3.612c-.804 0-1.457-.63-1.457-1.403V6.026c0-.773.653-1.404 1.457-1.404zm-17 1.404v1.73h17.227v-1.73c0-.12-.101-.219-.227-.219H3.612a.22.22 0 0 0-.227.219m17.227 11.96V8.943H3.385v9.042c0 .12.1.218.227.218h16.773v.003a.22.22 0 0 0 .227-.218M5.757 6.702a.56.56 0 0 0 .569.549.56.56 0 0 0 .569-.55.56.56 0 0 0-.57-.548.56.56 0 0 0-.568.549m2.28.549a.56.56 0 0 1-.568-.55.56.56 0 0 1 .568-.548c.317 0 .569.246.569.549a.56.56 0 0 1-.569.549M4.05 6.7c0 .303.252.55.568.55a.56.56 0 0 0 .569-.55.56.56 0 0 0-.569-.548.56.56 0 0 0-.568.549m8.899 6.53a.78.78 0 0 0-.219.67l.093.535-.462-.244a.8.8 0 0 0-.74.008l-.445.233.092-.535a.77.77 0 0 0-.218-.67l-.415-.403.54-.078a.81.81 0 0 0 .603-.432l.221-.448.222.454a.81.81 0 0 0 .596.426l.546.078zm1.42-.734a.52.52 0 0 0-.418-.344l-1.022-.149q-.006 0-.009-.006l-.002-.002-.454-.924a.52.52 0 0 0-.468-.292.52.52 0 0 0-.467.292l-.457.924q-.005.006-.011.008l-1.017.149a.52.52 0 0 0-.291.885l.736.72q.01.007.006.02l-.174 1.016c-.033.202.048.4.219.516a.54.54 0 0 0 .543.03l.91-.479.004-.002h.002l.003.001q0 .001.003.002l.91.478a.55.55 0 0 0 .247.06.519.519 0 0 0 .513-.605l-.174-1.017q-.004-.01.005-.02l.737-.72a.52.52 0 0 0 .126-.54m4.188.734a.78.78 0 0 0-.219.67l.093.535-.463-.244a.813.813 0 0 0-.742.008l-.445.233.092-.535a.78.78 0 0 0-.218-.67l-.415-.403.54-.078a.81.81 0 0 0 .603-.432l.221-.448.219.443a.81.81 0 0 0 .602.437l.546.078zm1.42-.734a.52.52 0 0 0-.418-.344l-1.02-.149q-.005 0-.008-.006l-.002-.002-.454-.924a.523.523 0 0 0-.939 0l-.453.924q-.006.006-.012.008l-1.016.149a.52.52 0 0 0-.292.885l.737.72q.009.007.006.02l-.174 1.016c-.034.202.048.4.218.516a.54.54 0 0 0 .544.03l.91-.479q0-.003.003-.002l.003.001q0 .001.003.002l.91.478a.55.55 0 0 0 .247.06.519.519 0 0 0 .513-.605l-.175-1.017q-.003-.01.006-.02l.737-.72a.52.52 0 0 0 .126-.54M7.34 13.23a.77.77 0 0 0-.216.67l.093.535-.463-.244a.813.813 0 0 0-.742.008l-.445.233.09-.535a.78.78 0 0 0-.22-.67l-.414-.403.544-.078a.81.81 0 0 0 .602-.432l.221-.448.222.454a.81.81 0 0 0 .596.426l.546.078zm1.42-.734a.52.52 0 0 0-.417-.344l-1.026-.149q-.005 0-.009-.006l-.002-.002-.453-.924a.523.523 0 0 0-.939 0l-.454.924c-.002.003-.008.008-.01.008l-1.018.149a.52.52 0 0 0-.291.885l.737.72q.006.007.005.02l-.173 1.016c-.034.202.047.4.218.516a.54.54 0 0 0 .544.03l.91-.479v-.002h.003l.003.001q0 .001.002.002l.91.478a.55.55 0 0 0 .247.06.516.516 0 0 0 .515-.605l-.173-1.017q-.004-.01.006-.02l.736-.72a.52.52 0 0 0 .13-.54"
                />
            </svg>
        );
    }
};

export default IconRatingRegular;
