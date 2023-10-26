/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSmileySadLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.837 11.997c0-6.706-3.627-9.846-9.845-9.846-6.219 0-9.84 3.14-9.84 9.846 0 6.706 3.621 9.84 9.84 9.84 6.218 0 9.845-3.134 9.845-9.84Zm-9.845 9.02c-5.986 0-9.02-3.034-9.02-9.02 0-5.989 3.034-9.025 9.02-9.025 5.988 0 9.025 3.036 9.025 9.025 0 5.986-3.037 9.02-9.025 9.02Zm.08-7.25c3.634.04 5.752 2.35 5.841 2.449a.41.41 0 0 1-.61.549l-.003-.003c-.084-.088-2.033-2.138-5.25-2.174a.44.44 0 0 1-.017 0c-.264-.002-3.408-.028-5.344 2.138a.412.412 0 0 1-.613-.547c2.184-2.443 5.577-2.415 5.965-2.412h.032ZM9.009 10.44c-.327 0-.599-.101-.787-.292-.185-.187-.277-.448-.277-.775 0-.67.398-1.068 1.064-1.068.667 0 1.065.4 1.065 1.068 0 .327-.093.588-.277.775-.188.19-.46.292-.788.292Zm5.185-.292c.188.19.46.292.787.292.328 0 .6-.101.787-.292.185-.187.278-.448.278-.775 0-.667-.398-1.068-1.065-1.068-.666 0-1.064.398-1.064 1.068 0 .327.092.588.277.775Z"
            />
        </svg>
    );
};

export default IconSmileySadLight;
