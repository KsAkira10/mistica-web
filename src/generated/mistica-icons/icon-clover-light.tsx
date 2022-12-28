/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCloverLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.088 21.84c-1.63 0-3.501-.759-5.185-2.106l-.061-.056a11.666 11.666 0 01-3.26-4.15c-.026.824-.138 1.608-.404 2.198-.619 1.387-1.574 2.274-2.621 2.425-.101.014-.21.026-.325.026-.546 0-1.255-.2-1.983-.955-1.294-.154-1.874-.76-2.132-1.25-.476-.9-.272-2.155.56-3.44.589-.914 1.871-1.807 3.095-2.498-.448.036-.91.058-1.37.058-.994 0-1.963-.1-2.669-.392-1.459-.588-2.389-1.498-2.548-2.495-.087-.543.016-1.355.977-2.195.163-1.232.798-1.784 1.314-2.03.944-.454 2.263-.258 3.613.534.958.558 1.896 1.779 2.622 2.94-.118-1.346-.093-2.858.35-3.841.619-1.39 1.574-2.274 2.621-2.428.569-.087 1.42.014 2.306.93 1.294.156 1.873.761 2.131 1.251.476.902.272 2.157-.56 3.442-.585.913-1.871 1.806-3.092 2.498 1.417-.11 3.005-.087 4.039.333 1.456.59 2.386 1.5 2.546 2.498.087.543-.017 1.355-.978 2.195-.162 1.232-.798 1.784-1.314 2.03a2.61 2.61 0 01-1.131.238c-.754 0-1.613-.26-2.485-.773-.655-.38-1.296-1.072-1.87-1.842a10.84 10.84 0 003.123 4.058l.07.056c1.574 1.262 3.302 1.957 4.75 1.91.235-.018.426-.029.549.145a.4.4 0 01-.12.574.7.7 0 01-.337.106 5.831 5.831 0 01-.22.006zM13.814 3.003c-.731.106-1.46.829-1.952 1.932-.642 1.428-.233 4.458.042 5.701 1.227-.504 4.058-1.94 4.907-3.262.661-1.022.857-2.005.527-2.635-.247-.47-.788-.745-1.605-.815l-.177-.017-.115-.129c-.47-.523-.952-.79-1.434-.79-.064 0-.128.003-.193.015zm-8.744 7.93c1.495.61 4.68.224 5.988-.045-.53-1.165-2.04-3.861-3.428-4.67-.729-.426-1.44-.65-2.028-.65-.278 0-.53.05-.74.15-.493.236-.781.751-.854 1.53l-.017.168-.134.11c-.625.506-.9 1.027-.815 1.548.109.697.868 1.391 2.028 1.859zm6.299 6.469c.641-1.426.235-4.456-.045-5.699-1.224.504-4.059 1.94-4.907 3.262-.658 1.023-.855 2.005-.524 2.635.246.47.787.745 1.605.815l.176.014.115.13c.532.596 1.079.853 1.628.775.73-.11 1.459-.83 1.952-1.932zm6.792-5.999c-1.496-.613-4.678-.224-5.988.04.03.066.072.153.111.234l.012.023.006.009c.607 1.268 1.997 3.654 3.296 4.407 1.073.63 2.106.818 2.768.502.495-.236.784-.75.857-1.53l.016-.167.138-.11c.622-.506.896-1.027.812-1.548-.112-.695-.871-1.39-2.028-1.86z"
            />
        </svg>
    );
};

export default IconCloverLight;
