'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAcademicLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.952 10.047v6.677c.572.412.816 1.205.78 1.812-.031.423-.1.521-.286.659-.255.187-.49.246-.735.246h-.49c-.328 0-.655 0-.9-.246-.163-.163-.243-.412-.243-.659 0-.577.327-1.565.979-1.812v-5.77l-1.714.743v3.955c0 .742-.49 1.319-1.143 1.484-1.303.25-3.1.823-4.486 1.896-.328.247-.655.412-1.062.412-.41 0-.735-.165-1.062-.412-1.304-1.154-3.181-1.65-4.487-1.896a1.51 1.51 0 0 1-1.143-1.484v-3.874L3 10.87c-.408-.246-.735-.658-.735-1.235S2.509 8.565 3 8.4l8.078-3.79c.407-.084.735-.084 1.142.082L20.3 8.4c.69.27.667 1.099.653 1.619zM3.083 9.635c0 .165.08.33.244.412l8.078 3.708c.163.081.244.081.408 0l8.077-3.71h-8.322c-.244 0-.407-.166-.407-.413s.163-.411.407-.411h8.486s.017-.031-.08-.082l-8.078-3.708c-.164-.081-.244-.081-.408 0L3.41 9.14c-.247.084-.327.25-.327.496m14.115 6.594c.247 0 .49-.247.49-.577l-.083-3.628-5.462 2.558a1.2 1.2 0 0 1-1.063 0l-5.304-2.474v3.544c0 .246.163.495.49.577 1.387.249 3.425.826 4.895 2.06a.975.975 0 0 0 1.142 0c1.55-1.237 3.508-1.814 4.895-2.06m2.773 2.307h1.062c0-.495-.408-1.072-.572-1.072s-.49.66-.49 1.072"
            />
        </svg>
    );
};

export default IconAcademicLight;
