/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileMp4Filled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M13.597 14.217h-1.619a.778.778 0 01-.022-.188c0-.151.028-.322.112-.56l.765-2.09h.742l-.83 2.26h.852v-.876h.77v.877h.432v.577h-.431v.846h-.77v-.846zm-9.26-2.835h.66l1.163 2.056 1.202-2.056h.647v3.68h-.77v-2.12l-.765 1.28h-.647L5.04 12.92v2.143h-.703v-3.681zm4.473 0h1.263c.578 0 .942.081 1.18.302.199.183.297.468.297.86 0 .393-.093.69-.275.894-.216.24-.549.356-1.033.356H9.65v1.269h-.84v-3.681zm1.74 1.641c.098-.098.145-.252.145-.467 0-.2-.042-.345-.14-.437-.1-.093-.257-.13-.515-.13h-.392v1.174h.412c.268 0 .38-.036.49-.14z"
                fill={fillColor}
            />
            <path
                d="M21.793 7.914a.61.61 0 01.048.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.384l.034-2.773H4.578a2.427 2.427 0 01-2.423-2.423V11.17a2.426 2.426 0 012.42-2.426h2.266V3.54c0-.726.672-1.384 1.409-1.384h7.415c.232 0 .448.087.613.247l5.297 5.126a.847.847 0 01.218.386zm-5.792-4.09V5.59c0 .658.215 1.213.624 1.608.415.4.997.61 1.69.61h1.8l-4.114-3.983zM4.575 16.471h9.846a1.21 1.21 0 001.207-1.21v-4.095c0-.667-.54-1.21-1.207-1.21H4.575c-.667 0-1.207.54-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMp4Filled;
