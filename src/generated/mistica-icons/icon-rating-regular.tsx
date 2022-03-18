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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.11 2H7.89C6.293 2 5 3.28 5 4.857v14.286C5 20.72 6.294 22 7.89 22h7.22c1.596 0 2.89-1.28 2.89-2.857V4.862C18 3.285 16.706 2 15.11 2zM8.894 13.05L6.9 11.316a.512.512 0 01-.148-.572.542.542 0 01.458-.37l2.723-.284 1.077-2.44a.543.543 0 01.99 0l1.076 2.44 2.723.284a.534.534 0 01.3.937l-1.992 1.733.546 2.688a.538.538 0 01-.795.571l-2.353-1.317-2.358 1.317a.557.557 0 01-.587-.032.534.534 0 01-.213-.54l.546-2.683zm1.9-2.24a.535.535 0 01-.44.32l-1.812.191 1.3 1.125c.143.128.207.32.17.507l-.374 1.842 1.59-.891a.557.557 0 01.537 0l1.59.891-.375-1.842a.531.531 0 01.176-.507l1.3-1.13-1.809-.187a.544.544 0 01-.439-.32L11.5 9.205l-.707 1.604zm4.318-7.38H7.889c-.8 0-1.447.64-1.447 1.427v.357h10.111v-.357c0-.786-.647-1.426-1.442-1.426zm1.447 3.215V17.36H6.442V6.645h10.116zM6.447 19.147c0 .787.647 1.427 1.442 1.427h7.222c.8 0 1.447-.64 1.451-1.427v-.356H6.447v.356z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.23 4.522c.804 0 1.456.63 1.456 1.404v11.958c0 .773-.652 1.403-1.456 1.403H3.457c-.804 0-1.457-.63-1.457-1.403V5.926c0-.773.653-1.404 1.457-1.404H20.23zm-17 1.404c0-.12.1-.219.227-.219H20.23c.126 0 .227.098.227.219v1.73H3.23v-1.73zm17.227 11.96c0 .121-.101.22-.227.22v-.004H3.457a.222.222 0 01-.227-.218V8.842h17.227v9.045zM5.602 6.602a.56.56 0 00.569.549.558.558 0 00.568-.55.558.558 0 00-.568-.548.56.56 0 00-.569.549zm2.28.549a.558.558 0 01-.568-.55.56.56 0 01.568-.548c.317 0 .569.246.569.549a.56.56 0 01-.569.549zM3.894 6.6c0 .303.252.55.568.55a.56.56 0 00.569-.55.558.558 0 00-.569-.548.56.56 0 00-.568.549zm8.899 6.53l.414-.406-.546-.078a.811.811 0 01-.597-.426l-.22-.454-.222.448a.808.808 0 01-.602.432l-.541.078.415.403c.176.171.26.435.218.67l-.092.535.445-.232a.806.806 0 01.74-.009l.462.244-.093-.535a.782.782 0 01.219-.67zm1.42-.734a.519.519 0 00-.417-.344l-1.023-.149c-.004 0-.007-.003-.01-.006l-.001-.002-.454-.924a.515.515 0 00-.468-.292.516.516 0 00-.467.292l-.457.924c-.003.003-.008.008-.011.008l-1.017.149a.519.519 0 00-.291.885l.736.72c.006.005.009.011.006.02l-.174 1.016c-.033.202.048.4.219.516a.542.542 0 00.543.03l.91-.478.004-.003h.002l.003.001s.001.002.003.002l.91.479a.556.556 0 00.247.058.519.519 0 00.513-.605l-.175-1.016c-.002-.006 0-.014.006-.02l.737-.72a.523.523 0 00.126-.54zm4.188.734l.414-.406-.546-.078a.81.81 0 01-.602-.437l-.219-.443-.221.448a.808.808 0 01-.602.432l-.541.078.415.403a.78.78 0 01.218.67l-.092.535.445-.232a.815.815 0 01.378-.096.83.83 0 01.364.087l.462.244-.092-.535a.782.782 0 01.219-.67zm1.42-.734a.519.519 0 00-.418-.344l-1.02-.149c-.003 0-.006-.003-.008-.006l-.003-.002-.453-.924a.523.523 0 00-.939 0l-.453.924c-.003.003-.009.008-.012.008l-1.016.149a.519.519 0 00-.292.885l.737.72c.006.005.008.011.006.02l-.174 1.016c-.034.202.047.4.218.516a.542.542 0 00.544.03l.91-.478c0-.003 0-.003.003-.003l.003.001s.001.002.003.002l.91.479a.55.55 0 00.246.058.52.52 0 00.513-.605l-.174-1.016c-.002-.006 0-.014.006-.02l.737-.72a.523.523 0 00.126-.54zm-12.636.734l.414-.406-.546-.078a.81.81 0 01-.596-.426l-.222-.454-.221.448a.808.808 0 01-.602.432l-.544.078.415.403c.174.171.26.435.218.67l-.09.535.446-.232a.814.814 0 01.378-.096.82.82 0 01.364.087l.463.244-.093-.535a.772.772 0 01.216-.67zm1.42-.734a.519.519 0 00-.417-.344l-1.026-.149c-.004 0-.006-.003-.009-.006l-.002-.002-.454-.924a.523.523 0 00-.938 0l-.454.924c-.002.003-.008.008-.01.008l-1.018.149a.519.519 0 00-.291.885l.737.72c.005.005.005.011.005.02l-.173 1.016c-.034.202.047.4.218.516a.542.542 0 00.544.03l.91-.478v-.003h.003l.002.001.003.002.91.479c.08.039.163.058.247.058a.516.516 0 00.515-.605l-.173-1.016c-.003-.006 0-.014.005-.02l.737-.72a.518.518 0 00.129-.54z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconRatingRegular;
