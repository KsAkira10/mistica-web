'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconErrorLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.838 8.167a.85.85 0 0 0-.25-.591l-5.173-4.99c-.306-.302-.653-.45-1.056-.433l-7.166.008c-.742 0-1.353.608-1.353 1.347V8.61l-4.596 9.014a.9.9 0 0 0-.093.378c.009.437.364.815.801.782l3.897.017v1.619c-.017.403.1.756.347 1.02.238.251.594.4.997.4l12.381-.017c.695 0 1.255-.569 1.255-1.258zm-.827.577-.008 11.823a.43.43 0 0 1-.432.434L8.2 21.018c-.123 0-.294-.025-.404-.148-.09-.093-.131-.233-.123-.429v-1.644l7.28.025h.028a.77.77 0 0 0 .751-.557.76.76 0 0 0-.05-.583L9.72 5.763a.73.73 0 0 0-.361-.361L9.353 5.4l-.006-.004a.78.78 0 0 0-1.047.359l-.636 1.24V3.512a.533.533 0 0 1 .535-.527l6.75-.008.034 2.465v.003c0 .1-.004 1.489.925 2.437.554.56 1.297.837 2.23.846zM7.672 17.993H2.983l3.855-7.63.826-1.628 1.322-2.613 5.983 11.88zm8.166-14.82s4.918 4.747 4.921 4.747l-2.616-.017c-.692 0-1.244-.204-1.633-.6-.687-.691-.695-1.792-.695-1.865l-.034-2.316q.031.02.056.05M9.028 14.8a.416.416 0 0 1-.412-.412v-4.47a.412.412 0 0 1 .824 0v4.47a.416.416 0 0 1-.412.412m-.639 1.165a.645.645 0 0 0 1.289 0 .644.644 0 0 0-1.289 0"
            />
        </svg>
    );
};

export default IconErrorLight;
