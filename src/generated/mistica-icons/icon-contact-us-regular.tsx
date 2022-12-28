/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconContactUsRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.244 10.893h-.808c-.211.36-.455.683-.783.969 2.003.752 3.335 2.546 3.335 4.982a.711.711 0 01-.7.715.711.711 0 01-.7-.715c0-2.55-1.72-3.981-4.387-4.018-.944 0-1.787.18-2.56.54-.351.18-.735 0-.911-.36-.176-.36 0-.752.352-.932.094-.03.189-.07.286-.109.121-.049.246-.1.382-.14a3.866 3.866 0 01-1.296-2.902c0-2.117 1.616-3.874 3.723-3.874 2.108 0 3.791 1.757 3.791 3.874 0 .327-.032.613-.104.9h.384c.348 0 .7-.287.7-.61v-.36c0-2.545-2.067-4.695-4.559-4.769a4.778 4.778 0 00-3.507 1.361 4.518 4.518 0 00-1.368 3.262c0 .29-.244.54-.528.54a.547.547 0 01-.528-.54c0-1.541.596-2.976 1.684-4.05a5.722 5.722 0 014.28-1.652C19.471 3.115 22 5.731 22 8.85v.36c0 .894-.808 1.683-1.756 1.683zM18.59 8.92c0-1.36-1.088-2.436-2.384-2.436a2.395 2.395 0 00-2.387 2.412c0 1.36 1.087 2.435 2.383 2.435.528 0 .984-.147 1.368-.433H16.2a.547.547 0 01-.528-.54c0-.29.248-.539.528-.539h2.212a2.6 2.6 0 00.176-.899zm-8.135 7.173a3.882 3.882 0 001.264-2.87c0-2.116-1.684-3.874-3.791-3.874-2.108 0-3.751 1.758-3.751 3.875a3.89 3.89 0 001.263 2.869C3.332 16.774 2 18.278 2 20.285c0 .392.316.715.7.715.384 0 .7-.323.7-.715 0-1.827 1.86-3.119 4.559-3.119 2.7 0 4.559 1.292 4.559 3.119 0 .392.316.715.7.715.384 0 .7-.323.7-.715.008-2.007-1.324-3.51-3.464-4.193zm-.108-2.873c0 1.324-1.051 2.435-2.383 2.435s-2.384-1.07-2.384-2.431c0-1.325 1.088-2.44 2.384-2.44 1.296 0 2.383 1.075 2.383 2.436z"
            />
        </svg>
    );
};

export default IconContactUsRegular;
