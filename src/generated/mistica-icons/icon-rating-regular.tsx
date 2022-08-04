/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconRatingRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.61 2H8.39C6.793 2 5.5 3.28 5.5 4.857v14.286C5.5 20.72 6.794 22 8.39 22h7.22c1.596 0 2.89-1.28 2.89-2.857V4.862C18.5 3.285 17.206 2 15.61 2zM9.394 13.05L7.4 11.316a.512.512 0 01-.148-.572.542.542 0 01.458-.37l2.723-.284 1.077-2.44a.543.543 0 01.99 0l1.076 2.44 2.723.284a.534.534 0 01.3.937l-1.992 1.733.546 2.688a.538.538 0 01-.795.571l-2.353-1.317-2.358 1.317a.557.557 0 01-.587-.032.534.534 0 01-.213-.54l.546-2.683zm1.9-2.24a.535.535 0 01-.44.32l-1.812.191 1.3 1.125a.54.54 0 01.17.507l-.374 1.842 1.59-.891a.557.557 0 01.537 0l1.59.891-.375-1.842a.531.531 0 01.176-.507l1.3-1.13-1.809-.187a.544.544 0 01-.439-.32L12 9.205l-.707 1.604zm4.318-7.38c.795 0 1.442.64 1.442 1.427v.357H6.943v-.357c0-.786.647-1.426 1.446-1.426h7.222zm1.447 3.215V17.36H6.942V6.645h10.116zM6.947 19.147v-.356h10.115v.356a1.444 1.444 0 01-1.451 1.427H8.389c-.795 0-1.442-.64-1.442-1.427z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.385 4.622c.804 0 1.456.63 1.456 1.404v11.958c0 .773-.652 1.403-1.456 1.403H3.612c-.804 0-1.457-.63-1.457-1.403V6.026c0-.773.653-1.404 1.457-1.404h16.773zm-17 1.404v1.73h17.227v-1.73a.223.223 0 00-.227-.219H3.612a.222.222 0 00-.227.219zm17.227 11.96V8.943H3.385v9.042c0 .12.1.218.227.218h16.773v.003a.222.222 0 00.227-.218zM5.757 6.702a.56.56 0 00.569.549.558.558 0 00.569-.55.558.558 0 00-.57-.548.56.56 0 00-.568.549zm2.28.549a.558.558 0 01-.568-.55.56.56 0 01.568-.548c.317 0 .569.246.569.549a.56.56 0 01-.569.549zM4.05 6.7c0 .303.252.55.568.55a.56.56 0 00.569-.55.558.558 0 00-.569-.548.56.56 0 00-.568.549zm8.899 6.53a.782.782 0 00-.219.67l.093.535-.462-.244a.798.798 0 00-.74.008l-.445.233.092-.535a.769.769 0 00-.218-.67l-.415-.403.54-.078a.808.808 0 00.603-.432l.221-.448.222.454a.81.81 0 00.596.426l.546.078-.414.406zm1.42-.734a.52.52 0 00-.418-.344l-1.022-.149c-.004 0-.007-.003-.009-.006l-.002-.002-.454-.924a.516.516 0 00-.468-.292.515.515 0 00-.467.292l-.457.924c-.003.003-.008.008-.011.008l-1.017.149a.52.52 0 00-.291.885l.736.72c.006.005.009.011.006.02l-.174 1.016c-.033.202.048.4.219.516a.543.543 0 00.543.03l.91-.479.004-.002h.002l.003.001s.001.002.003.002l.91.478a.55.55 0 00.247.06.519.519 0 00.513-.605l-.174-1.017c-.003-.006 0-.014.005-.02l.737-.72a.523.523 0 00.126-.54zm4.188.734a.782.782 0 00-.219.67l.093.535-.463-.244a.813.813 0 00-.742.008l-.445.233.092-.535a.777.777 0 00-.218-.67l-.415-.403.54-.078a.808.808 0 00.603-.432l.221-.448.219.443a.81.81 0 00.602.437l.546.078-.414.406zm1.42-.734a.52.52 0 00-.418-.344l-1.02-.149c-.003 0-.006-.003-.008-.006l-.002-.002-.454-.924a.523.523 0 00-.939 0l-.453.924c-.003.003-.009.008-.012.008l-1.016.149a.52.52 0 00-.292.885l.737.72c.006.005.008.011.006.02l-.174 1.016c-.034.202.048.4.218.516a.543.543 0 00.544.03l.91-.479c0-.002 0-.002.003-.002l.003.001s.001.002.003.002l.91.478a.55.55 0 00.247.06.519.519 0 00.513-.605l-.175-1.017c-.002-.006 0-.014.006-.02l.737-.72a.523.523 0 00.126-.54zM7.34 13.23a.772.772 0 00-.216.67l.093.535-.463-.244a.813.813 0 00-.742.008l-.445.233.09-.535a.777.777 0 00-.22-.67l-.414-.403.544-.078a.808.808 0 00.602-.432l.221-.448.222.454a.81.81 0 00.596.426l.546.078-.414.406zm1.42-.734a.52.52 0 00-.417-.344l-1.026-.149c-.004 0-.006-.003-.009-.006l-.002-.002-.453-.924a.523.523 0 00-.939 0l-.454.924c-.002.003-.008.008-.01.008l-1.018.149a.52.52 0 00-.291.885l.737.72c.005.005.005.011.005.02l-.173 1.016c-.034.202.047.4.218.516a.543.543 0 00.544.03l.91-.479v-.002h.003l.003.001s0 .002.002.002l.91.478a.55.55 0 00.247.06.516.516 0 00.515-.605l-.173-1.017c-.003-.006 0-.014.006-.02l.736-.72a.518.518 0 00.13-.54z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconRatingRegular;
