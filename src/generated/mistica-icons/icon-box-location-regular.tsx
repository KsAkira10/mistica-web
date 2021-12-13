/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBoxLocationRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M13.017 2.08a.727.727 0 01.666 0l7.037 3.97c.28.144.355.471.32.615v8.331c0 .256-.14.472-.351.616l-7.045 4.331c-.136.108-.42.144-.666.036l-2.11-1.083a.734.734 0 01-.315-.975.7.7 0 01.951-.323l1.092.575v-6.709l-3.17-1.95L6.963 8v2.2c2.042.324 3.59 2.022 3.59 4.076 0 .971-.74 2.705-2.25 5.127-.806 1.298-1.547 2.345-1.582 2.381a.508.508 0 01-.425.216.498.498 0 01-.425-.216C5.45 21.241 2 16.338 2 14.244c0-2.058 1.548-3.756 3.625-4.08v-3.5c0-.256.036-.435.351-.615zm-6.721 9.1c-1.797 0-3.24 1.37-3.24 3.064 0 1.187 1.829 4.256 3.24 6.278.285-.436.702-1.051 1.127-1.735 1.333-2.13 2.109-3.792 2.109-4.547 0-1.698-1.439-3.06-3.236-3.06zm13.367-3.253l-5.629 3.46v6.637l5.63-3.496V7.927zm-13.37 4.44c.985 0 1.827.862 1.827 1.873 0 1.011-.842 1.874-1.828 1.874-.986 0-1.828-.827-1.828-1.874 0-1.05.842-1.874 1.828-1.874zm-.005 1.078a.79.79 0 00-.776.795.79.79 0 00.776.795.79.79 0 00.776-.795.79.79 0 00-.776-.795zM16.99 5.617l-5.773 3.249 2.116 1.298 5.59-3.464-1.933-1.083zm-3.657-2.094L7.703 6.7 9.813 8l5.738-3.213-2.219-1.263z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBoxLocationRegular;
