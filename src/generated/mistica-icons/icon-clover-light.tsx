/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconCloverLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.078 21.83c-1.63 0-3.501-.759-5.184-2.106l-.062-.056a11.666 11.666 0 01-3.26-4.15c-.026.823-.138 1.608-.404 2.198-.619 1.386-1.574 2.274-2.621 2.425-.101.014-.21.026-.325.026-.546 0-1.255-.2-1.983-.955-1.294-.154-1.874-.76-2.132-1.25-.476-.9-.272-2.155.56-3.44.588-.914 1.871-1.807 3.095-2.498-.448.036-.91.058-1.37.058-.994 0-1.963-.1-2.669-.392-1.459-.588-2.389-1.498-2.548-2.495-.087-.543.016-1.355.977-2.195.163-1.232.798-1.784 1.314-2.03.944-.454 2.263-.258 3.613.534.958.558 1.896 1.779 2.622 2.94-.118-1.346-.093-2.858.35-3.841.619-1.39 1.574-2.274 2.621-2.428.569-.087 1.42.014 2.305.93 1.295.156 1.874.761 2.132 1.251.476.902.272 2.157-.56 3.442-.585.913-1.871 1.806-3.092 2.498 1.417-.11 3.005-.087 4.039.333 1.456.59 2.386 1.5 2.546 2.498.086.543-.017 1.355-.978 2.195-.162 1.232-.798 1.784-1.314 2.03a2.61 2.61 0 01-1.131.238c-.754 0-1.613-.26-2.485-.773-.655-.38-1.296-1.072-1.87-1.842a10.84 10.84 0 003.123 4.057l.07.056c1.574 1.264 3.302 1.958 4.75 1.91.235-.017.426-.028.549.146a.4.4 0 01-.12.574.7.7 0 01-.337.106 5.831 5.831 0 01-.221.006zM13.804 2.993c-.731.106-1.46.829-1.952 1.932-.642 1.428-.233 4.458.042 5.701 1.227-.504 4.058-1.94 4.907-3.262.661-1.022.857-2.005.527-2.635-.247-.47-.787-.745-1.605-.815l-.177-.017-.115-.129c-.47-.523-.952-.79-1.434-.79-.064 0-.129.003-.193.015zm-8.745 7.93c-1.16-.468-1.918-1.162-2.027-1.86-.084-.52.19-1.041.815-1.548l.134-.11.017-.167c.073-.779.361-1.294.854-1.53.21-.1.462-.15.74-.15.588 0 1.3.224 2.028.65 1.389.809 2.898 3.505 3.428 4.67-1.308.269-4.493.655-5.989.045zm6.3 6.469c-.493 1.103-1.221 1.823-1.952 1.932-.55.078-1.096-.18-1.628-.776l-.115-.129-.176-.014c-.818-.07-1.359-.344-1.605-.815-.33-.63-.134-1.613.524-2.635.848-1.321 3.683-2.758 4.907-3.262.28 1.243.686 4.273.045 5.699zm6.792-5.999c1.157.47 1.916 1.165 2.028 1.86.084.52-.19 1.041-.812 1.548l-.138.11-.016.168c-.073.778-.362 1.293-.858 1.529-.66.316-1.694.128-2.767-.502-1.3-.753-2.689-3.139-3.296-4.407-.002-.002-.003-.003-.003-.005a.015.015 0 00-.003-.004l-.012-.024-.111-.233c1.31-.264 4.492-.653 5.988-.04z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCloverLight;
