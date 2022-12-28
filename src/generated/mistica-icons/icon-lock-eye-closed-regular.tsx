/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLockEyeClosedRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M10.081 15.57c0-1.085.861-1.97 1.917-1.97s1.917.885 1.917 1.97c0 1.084-.861 1.968-1.917 1.968s-1.917-.884-1.917-1.969zm1.048-.005c0 .497.39.893.87.893a.88.88 0 00.868-.893.879.879 0 00-.869-.892.877.877 0 00-.869.892z"
            />
            <path
                fill={fillColor}
                d="M6.645 15.381c.047-.128 1.216-3.205 5.353-3.205s5.306 3.077 5.353 3.205a.512.512 0 010 .373c-.047.128-1.216 3.205-5.353 3.205s-5.306-3.077-5.353-3.205a.511.511 0 010-.373zm1.056.184c.3.593 1.422 2.325 4.297 2.325 2.86 0 3.997-1.74 4.297-2.325-.3-.592-1.422-2.324-4.297-2.324-2.871 0-3.997 1.74-4.297 2.324z"
            />
            <path
                fill={fillColor}
                d="M17.908 8.07v1.07c1.153 0 2.08.964 2.092 2.145v8.571c0 1.18-.939 2.145-2.088 2.145H6.088C4.938 22 4 21.036 4 19.855v-8.571c0-1.18.939-2.145 2.088-2.145V8.07c0-3.349 2.65-6.07 5.91-6.07 3.26 0 5.91 2.725 5.91 6.07zm-5.91-4.637c-2.49 0-4.515 2.08-4.515 4.637v1.07h9.03V8.07c0-2.557-2.026-4.637-4.515-4.637zm6.603 16.418h.004v-8.563a.705.705 0 00-.693-.713H6.088a.705.705 0 00-.693.713v8.563c0 .388.307.712.693.712h11.82a.705.705 0 00.693-.712z"
            />
        </svg>
    );
};

export default IconLockEyeClosedRegular;
