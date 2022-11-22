/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconChevronLeftRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.855 4.16a.535.535 0 010 .77L8.586 12l7.27 7.07a.535.535 0 010 .77.571.571 0 01-.793 0L7 12l8.063-7.84a.571.571 0 01.792 0z"
                    fill={fillColor}
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.8 5.266a.79.79 0 000-1.049.641.641 0 00-.962 0L8.2 11.455A.777.777 0 008 12a.777.777 0 00.2.545l6.638 7.238c.266.29.697.29.963 0a.79.79 0 000-1.05L9.624 12l6.177-6.734z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.068 20a.96.96 0 01-.627-.23l-8.133-7.05a.858.858 0 01-.05-1.273c.013-.014.028-.025.042-.04l8.137-7.17a.964.964 0 011.297.029l.02.02a.861.861 0 01-.054 1.257L9.31 12.06l7.385 6.393c.38.33.407.892.06 1.257a.964.964 0 01-.687.291z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconChevronLeftRegular;
