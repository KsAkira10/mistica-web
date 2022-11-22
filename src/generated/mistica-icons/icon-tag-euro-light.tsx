/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTagEuroLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M7.428 12.83c0 .2.152.36.342.36h.926c.568 1.68 2.1 2.888 3.893 2.892.724 0 1.418-.196 2.061-.584a.37.37 0 00.126-.492.334.334 0 00-.468-.132 3.28 3.28 0 01-1.719.488c-1.405-.004-2.62-.896-3.15-2.168h3.15a.35.35 0 00.343-.36.35.35 0 00-.343-.36H9.22a3.788 3.788 0 010-1.448h3.37a.35.35 0 00.343-.36.35.35 0 00-.343-.359H9.435C9.97 9.031 11.18 8.14 12.59 8.14c.602 0 1.197.168 1.719.487.163.1.373.044.472-.128a.371.371 0 00-.122-.495 3.96 3.96 0 00-2.065-.588c-1.794 0-3.325 1.207-3.893 2.891h-.926a.35.35 0 00-.343.36c0 .2.153.36.343.36h.747a4.522 4.522 0 000 1.448h-.747a.345.345 0 00-.346.355z"
                fill={fillColor}
            />
            <path
                d="M21.428 2.105a.327.327 0 00-.48 0l-1.261 1.324h-8.938a1.7 1.7 0 00-1.226.532l-6.537 6.862a1.887 1.887 0 000 2.571l7.687 8.07c.34.356.777.536 1.22.536a1.7 1.7 0 001.196-.504c.14-.14.148-.38.011-.528a.344.344 0 00-.503-.012.982.982 0 01-1.425-.016l-7.68-8.074a1.115 1.115 0 010-1.515l6.534-6.863a1 1 0 01.723-.312h8.23L17.164 6.08a.367.367 0 000 .504.332.332 0 00.24.104.339.339 0 00.24-.104l1.813-1.904v8.638c0 .284-.11.56-.297.76l-3.642 3.823a.39.39 0 000 .528.347.347 0 00.503 0l3.638-3.831c.324-.34.507-.808.507-1.288V3.93l1.26-1.324a.362.362 0 000-.5z"
                fill={fillColor}
            />
            <path
                d="M14.997 19.692c0 .4-.309.724-.69.724-.38 0-.689-.324-.689-.724 0-.4.309-.723.69-.723.38 0 .69.324.69.723z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTagEuroLight;
