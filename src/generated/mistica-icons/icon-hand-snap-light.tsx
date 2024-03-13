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

const IconHandSnapLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.053 2.357v3.927c0 .197.158.357.351.357.194 0 .351-.16.351-.357V2.357A.354.354 0 0 0 8.405 2c-.194 0-.352.16-.352.357m11.1 12.016c.391.046.756.215 1.039.503.328.334.5.787.5 1.262 0 .476-.18.924-.514 1.262l-2.681 2.725a5 5 0 0 1-.427.393.36.36 0 0 1-.225.083.34.34 0 0 1-.27-.128.365.365 0 0 1 .05-.503q.209-.177.377-.348l.207-.21a1.73 1.73 0 0 1-.999-.498 1.805 1.805 0 0 1-.202-2.273 1.73 1.73 0 0 1-1.04-.503 1.805 1.805 0 0 1-.202-2.272 1.73 1.73 0 0 1-1.04-.503 1.805 1.805 0 0 1 0-2.524v-.005l4.972-5.057c.41-.416.41-1.098 0-1.514a1.044 1.044 0 0 0-1.489 0L9.003 12.59 5.754 9.289a1.043 1.043 0 0 0-1.453 0c-.4.411-.4 1.074 0 1.481l1.809 1.838a6.15 6.15 0 0 1 1.637 3.068l.257 1.23a5.45 5.45 0 0 0 1.449 2.712 5.28 5.28 0 0 0 3.486 1.577c.194.01.342.179.333.375a.353.353 0 0 1-.35.339h-.019a6 6 0 0 1-3.945-1.784 6.15 6.15 0 0 1-1.638-3.068l-.256-1.23a5.45 5.45 0 0 0-1.45-2.711l-1.808-1.838a1.78 1.78 0 0 1 0-2.488c.324-.334.76-.517 1.224-.517s.895.183 1.224.517l2.753 2.799 7.712-7.82a1.74 1.74 0 0 1 2.483 0 1.81 1.81 0 0 1 0 2.525L16.71 8.827c.373.05.724.22.998.498a1.804 1.804 0 0 1 .203 2.273c.391.045.756.214 1.04.503a1.805 1.805 0 0 1 .202 2.272m-4.927-3.036c-.202.206-.31.471-.31.76 0 .287.112.552.315.758a1.065 1.065 0 0 0 1.489 0l1.489-1.513c.203-.206.31-.471.31-.76 0-.288-.112-.557-.31-.758a1.043 1.043 0 0 0-1.494 0zm.931 3.54a1.06 1.06 0 0 0 1.804.759l1.49-1.514c.202-.206.31-.471.31-.76 0-.287-.112-.557-.31-.758a1.043 1.043 0 0 0-1.494 0l-1.49 1.513c-.202.206-.31.471-.31.76m3.046 3.534 1.49-1.514c.197-.206.31-.475.314-.759 0-.288-.108-.553-.31-.759a1.044 1.044 0 0 0-1.494 0l-1.489 1.514c-.202.205-.31.47-.31.759 0 .288.112.557.31.759.41.416 1.08.416 1.49 0M3.586 4.035a.355.355 0 0 1 0-.503.345.345 0 0 1 .495 0L6.893 6.39c.14.141.14.365 0 .503a.35.35 0 0 1-.248.105.35.35 0 0 1-.247-.105zM9.91 6.39a.355.355 0 0 0 0 .503.33.33 0 0 0 .248.105c.09 0 .18-.037.247-.105l2.812-2.858a.36.36 0 0 0 0-.503.34.34 0 0 0-.495 0zm5.872 14.897a.71.71 0 0 1-.702.713.71.71 0 0 1-.702-.713c0-.394.315-.714.702-.714s.702.32.702.714"
            />
        </svg>
    );
};

export default IconHandSnapLight;
