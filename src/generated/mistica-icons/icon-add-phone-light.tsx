/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddPhoneLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.803 2.606l1.384 1.403c1.28 1.335 1.65 3.33 1.083 5.683-.64 2.313-2.159 4.77-4.417 7.154-2.428 2.561-5.026 4.28-7.354 4.841h-.07a.333.333 0 01-.338-.28c-.07-.177.065-.385.235-.421 2.227-.525 4.721-2.172 7.049-4.629 2.193-2.312 3.642-4.665 4.251-6.873.574-2.104.305-3.788-.81-4.946l-1.383-1.403c-.505-.489-1.214-.525-1.619-.104l-2.058 2.14c-.44.421-.374 1.155.1 1.648l1.419 1.474c1.314 1.331.64 3.924-1.619 6.313-2.258 2.388-4.756 3.09-6.07 1.755l-1.419-1.475a1.188 1.188 0 00-.844-.385.9.9 0 00-.774.281l-2.059 2.14c-.439.421-.373 1.154.1 1.647l1.384 1.403a2.3 2.3 0 00.61.525c.169.108.204.317.1.493-.105.176-.305.208-.475.104a6.092 6.092 0 01-.743-.597l-1.384-1.403c-.744-.77-.81-1.963-.135-2.665l2.058-2.14a1.57 1.57 0 011.284-.493c.474.036.944.245 1.283.597l1.418 1.475c1.01 1.05 3.138.349 5.127-1.755 1.988-2.068 2.632-4.277 1.618-5.33l-1.418-1.476c-.744-.769-.81-1.963-.135-2.665l2.058-2.14c.675-.701 1.82-.67 2.563.104zM6.323 6.92H2.951c-.2 0-.335-.14-.34-.349 0-.212.136-.353.34-.353h3.372V2.711c0-.213.135-.353.34-.353.204 0 .339.14.339.353v3.502h3.372c.204 0 .34.14.34.353 0 .212-.136.353-.34.353H7.002v3.506c0 .213-.135.353-.34.353-.204 0-.339-.14-.339-.353V6.92z"
            />
            <path
                fill={fillColor}
                d="M8.011 21.299a.688.688 0 01-.674.701.688.688 0 01-.675-.701c0-.388.302-.702.675-.702.372 0 .674.314.674.702z"
            />
        </svg>
    );
};

export default IconAddPhoneLight;
