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

const IconMoonLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.796 16.299a.42.42 0 0 1 .493.056c.135.12.177.316.098.479-2.1 4.532-7.028 4.963-8.49 4.988-.258.009-.577.009-.874.009-8.994-.151-9.448-8.244-9.448-9.863 0-8.992 7.18-9.779 9.38-9.807l.897.009q.904.022 1.796.187a.42.42 0 0 1 .344.406.42.42 0 0 1-.333.415c-2.342.499-5.132 2.11-5.132 6.941 0 6.55 5.23 7.143 6.832 7.168.224 0 .47 0 .673-.008.798-.02 2.336-.171 3.764-.98m-8.764 4.7c.28 0 .59 0 .845-.009 1.213-.022 5.003-.341 7.121-3.414a9.6 9.6 0 0 1-2.944.538c-.204.008-.462.008-.703.008-1.286-.02-7.667-.501-7.667-8.003 0-4.201 1.992-6.182 3.905-7.115L11.959 3c-2 .025-8.544.745-8.544 8.972 0 8.244 6.594 8.994 8.617 9.028"
            />
        </svg>
    );
};

export default IconMoonLight;
