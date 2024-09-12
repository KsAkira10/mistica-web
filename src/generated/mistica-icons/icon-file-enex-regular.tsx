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

const IconFileEnexRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.923 11.61H6.12l-.056.537h-1.4v.79h1.12v.558h-1.12v.832h1.482v.537H3.923zM7.245 11.61l1.543 2.086V11.61h.653v3.257h-.597L7.348 12.89v1.977h-.652V11.61zM12.348 11.61H10.15v3.254h2.225v-.537h-1.482v-.832h1.12v-.558h-1.12v-.79h1.4zM13.72 13.243l-.994-1.633h.776l.647 1.075.591-1.075h.79l-1.067 1.593 1.04 1.661h-.824l-.647-1.103-.586 1.103h-.804zM20.116 7.803l.003.003v-.003z"
            />
            <path
                fill={fillColor}
                d="M21.794 7.912q.046.11.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.77h-2.3a2.427 2.427 0 0 1-2.42-2.427v-4.095a2.427 2.427 0 0 1 2.42-2.426h2.266V3.534c0-.726.67-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.3 5.132c.112.109.177.243.219.386m-1.362 12.712c.098 0 .194-.096.194-.168V9.02h-2.311c-1.014 0-1.891-.33-2.535-.952-.65-.63-.995-1.487-.995-2.482V3.37H8.25c-.073 0-.187.109-.193.168v5.201h6.697a2.43 2.43 0 0 1 2.423 2.426v4.095a2.43 2.43 0 0 1-2.423 2.426H8.088l-.034 2.779c0 .05.101.16.193.16zM3.368 15.259c0 .667.54 1.21 1.207 1.21h10.18a1.21 1.21 0 0 0 1.207-1.21v-4.095c0-.666-.54-1.21-1.208-1.21H4.575a1.21 1.21 0 0 0-1.207 1.21zm16.748-7.456L16.004 3.82v1.764c0 .659.215 1.213.622 1.608.414.4.997.61 1.691.61z"
            />
        </svg>
    );
};

export default IconFileEnexRegular;
