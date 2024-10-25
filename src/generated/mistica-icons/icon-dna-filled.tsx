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

const IconDnaFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.513 12.003c0-2.263-1.614-3.554-3.303-4.61 1.69-1.057 3.303-2.348 3.303-4.611a.634.634 0 0 0-.645-.622.633.633 0 0 0-.644.622c0 1.84-1.46 2.823-3.221 3.877-1.762-1.056-3.221-2.037-3.221-3.877a.635.635 0 0 0-.645-.622.633.633 0 0 0-.644.622c0 2.263 1.613 3.554 3.303 4.61-1.69 1.057-3.303 2.35-3.303 4.611 0 1.165.429 2.07 1.07 2.82q.06.094.149.16c.588.634 1.325 1.157 2.08 1.628-1.688 1.056-3.302 2.347-3.302 4.61 0 .342.289.622.644.622a.633.633 0 0 0 .645-.621c0-1.84 1.462-2.821 3.221-3.877 1.76 1.056 3.221 2.04 3.221 3.877 0 .341.289.621.645.621a.633.633 0 0 0 .644-.621c0-2.264-1.614-3.555-3.303-4.611 1.692-1.053 3.306-2.345 3.306-4.608m-7.087 1.88a3 3 0 0 1-.577-1.244h6.305a3 3 0 0 1-.577 1.244zM12 8.123c.434.261.846.519 1.227.785h-2.451c.38-.263.793-.524 1.224-.784"
            />
        </svg>
    );
};

export default IconDnaFilled;
