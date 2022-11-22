/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDownloadLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.44 21.576a.698.698 0 001.08 0l9.131-9.418.017-.016a.755.755 0 00.098-.813.711.711 0 00-.644-.417h-4.197c-.09 0-.16-.081-.16-.185l.004-6.885c0-.927-.754-1.68-1.681-1.68h-6.21c-.927 0-1.68.753-1.68 1.68v6.888c0 .1-.074.185-.16.185H2.867a.708.708 0 00-.645.414.76.76 0 00.096.813l.016.017 9.107 9.417zm.413-.381L2.749 11.78a.208.208 0 01-.02-.213.153.153 0 01.14-.095h4.169c.397 0 .72-.333.72-.745v-6.88c0-.619.5-1.12 1.12-1.12h6.207c.62 0 1.12.501 1.12 1.12l-.002 6.883c0 .409.322.745.72.745h4.199c.061 0 .117.04.14.095a.21.21 0 01-.02.21l-9.126 9.415-.017.017a.146.146 0 01-.115.058.155.155 0 01-.114-.058l-.017-.017z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDownloadLight;
