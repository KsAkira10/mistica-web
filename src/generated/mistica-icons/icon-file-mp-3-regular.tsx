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

const IconFileMp3Regular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.339 15.12v-.583c.216.039.47.064.74.064.302 0 .481-.04.61-.123.129-.087.199-.227.199-.426 0-.193-.07-.325-.185-.406-.134-.098-.342-.129-.72-.129h-.103v-.54h.128c.34 0 .513-.043.645-.157.087-.076.145-.2.145-.379 0-.14-.039-.26-.123-.336-.11-.098-.291-.14-.583-.14-.238 0-.507.023-.722.053v-.57c.25-.054.563-.082.849-.082.465 0 .86.11 1.086.336.157.157.255.373.255.68 0 .384-.168.653-.49.816.39.14.622.431.622.913 0 .286-.087.535-.26.714-.244.255-.64.384-1.2.384a4.7 4.7 0 0 1-.893-.09M4.429 11.436h.664L6.26 13.5l1.204-2.064h.647v3.694h-.77v-2.128l-.768 1.285h-.647l-.79-1.308v2.152H4.43zM8.916 11.436h1.269c.577 0 .944.081 1.182.302.199.185.297.471.297.866q0 .591-.274.896c-.216.244-.552.356-1.037.356h-.594v1.274h-.843zm1.75 1.647q.147-.147.146-.47c0-.2-.042-.345-.14-.438-.103-.092-.26-.129-.518-.129H9.76v1.18h.418v-.003c.268 0 .383-.04.49-.14"
            />
            <path
                fill={fillColor}
                d="M21.798 7.912q.047.11.048.238v12.306c0 .75-.644 1.383-1.409 1.383H8.255c-.75 0-1.406-.647-1.406-1.383l.033-2.774h-2.3a2.427 2.427 0 0 1-2.42-2.425v-4.093a2.427 2.427 0 0 1 2.42-2.426H6.85V3.534c0-.726.67-1.384 1.406-1.384h7.414c.23 0 .457.093.62.252l5.29 5.124c.113.109.177.243.22.386m-1.361 12.712c.098 0 .193-.096.193-.168V9.02h-2.313c-1.014 0-1.891-.33-2.535-.952-.65-.63-.995-1.487-.995-2.482V3.37H8.252c-.073 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.093a2.427 2.427 0 0 1-2.42 2.425h-6.33l-.034 2.78c0 .05.1.159.193.159h12.185zM3.373 15.259c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 0 0 1.207-1.21v-4.092c0-.667-.54-1.21-1.207-1.21H4.58a1.21 1.21 0 0 0-1.207 1.21zM16.006 3.822v1.765c0 .658.215 1.213.622 1.608.414.4.997.61 1.691.61h1.802z"
            />
        </svg>
    );
};

export default IconFileMp3Regular;
