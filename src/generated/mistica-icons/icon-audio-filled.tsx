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

const IconAudioFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.872 2.05a.354.354 0 01.362 0c.112.066.181.19.181.322V21.63a.38.38 0 01-.18.323.357.357 0 01-.363-.005l-9.887-5.876H2.362a.367.367 0 01-.362-.37V8.295c0-.204.162-.37.362-.37h2.623l9.887-5.875zm5.236 14.81a.725.725 0 01-.524.232.717.717 0 01-.501-.204.753.753 0 01-.028-1.048 5.548 5.548 0 00-.093-7.659.753.753 0 010-1.048.715.715 0 011.026 0 7.036 7.036 0 01.12 9.727zm-1.82-7.986a.715.715 0 00-1.025 0 .753.753 0 000 1.048 3.074 3.074 0 01.088 4.187.753.753 0 00.047 1.048.713.713 0 001.026-.047 4.58 4.58 0 00-.135-6.236z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M6.398 7.165c.963-1.277 2.709-2.591 5.826-2.591.997 0 1.75.768 1.75 1.709V17.73c0 .938-.747 1.7-1.668 1.7-3.208 0-4.964-1.305-5.922-2.582l-3.16.002c-.58 0-1.053-.479-1.053-1.07l-.008-7.54c0-.283.109-.555.308-.757a1.04 1.04 0 01.745-.316l3.182-.003zm12.7-1.664a1.042 1.042 0 00-1.482.079 1.087 1.087 0 00.068 1.512c.084.079 2.016 1.922 2.053 5.112.003.031.11 3.21-2.009 5.137a1.088 1.088 0 00-.084 1.516 1.043 1.043 0 001.491.084c2.854-2.597 2.717-6.658 2.708-6.796-.044-4.126-2.636-6.543-2.745-6.644zm-.829 6.678c-.028-2.781-1.79-4.423-1.865-4.49a1.041 1.041 0 00-1.488.081 1.085 1.085 0 00.079 1.515c.014.012 1.148 1.098 1.168 2.953.002.017.044 1.86-1.14 2.938a1.088 1.088 0 00-.085 1.516 1.039 1.039 0 001.49.084c1.939-1.765 1.844-4.515 1.841-4.597z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconAudioFilled;
