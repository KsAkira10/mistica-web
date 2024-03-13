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

const IconArrowDownRightLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.453 3.454a.727.727 0 1 0 0-1.454.727.727 0 0 0 0 1.454M8.782 22H22V8.719c0-.735-.42-1.355-1.09-1.638a1.85 1.85 0 0 0-2.016.411l-3.078 3.08-6.646-6.65a.36.36 0 0 0-.515 0 .36.36 0 0 0 0 .515l6.95 6.97.064.024c.057.026.1.045.144.047.125.007.258-.127.774-.642L19.4 8.004a1.11 1.11 0 0 1 1.226-.252c.391.168.635.531.635.967v12.55H8.786c-.435 0-.79-.244-.958-.655a1.18 1.18 0 0 1 .252-1.274l3.321-3.324.024-.063a.4.4 0 0 0 .03-.094c.026-.167-.174-.366-1.471-1.664L2.623 6.829a.36.36 0 0 0-.515 0 .36.36 0 0 0 0 .516l8.463 8.468-3.014 3.015a1.885 1.885 0 0 0-.403 2.066C7.437 21.58 8.056 22 8.782 22"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.821 20.474a.64.64 0 0 0 .47-.187.67.67 0 0 0 .183-.538v-12.6c.003-.383-.188-.686-.518-.829-.36-.154-.827-.081-1.09.171L16.087 9.27a.14.14 0 0 1-.11.042.2.2 0 0 1-.134-.06l-5.168-5.237-.003-.003c-.274-.272-.848-.84-1.593-.157L4.023 8.92c-.334.33-.496.658-.502.997-.003.341.16.68.485 1.005l5.067 5.096c.04.036.059.084.062.134a.16.16 0 0 1-.042.11l-2.572 2.57c-.266.29-.341.788-.176 1.16.134.3.4.474.728.474l12.678.005a1 1 0 0 0 .07.003m-.056-.56-12.683-.006c-.076 0-.166-.016-.222-.143-.075-.168-.039-.422.073-.549l2.56-2.56a.7.7 0 0 0 .205-.523.76.76 0 0 0-.224-.513L4.4 10.527c-.219-.218-.322-.414-.32-.602q.004-.279.337-.61l5.044-5.05c.275-.25.41-.259.816.145l5.168 5.238c.137.14.319.218.512.224a.7.7 0 0 0 .524-.204l2.77-2.77c.093-.085.311-.132.48-.06.123.054.179.152.179.314v12.616l.002.028c.006.045-.002.084-.02.101-.016.017-.052.025-.1.02-.008-.003-.02-.003-.028-.003"
                />
            </svg>
        );
    }
};

export default IconArrowDownRightLight;
