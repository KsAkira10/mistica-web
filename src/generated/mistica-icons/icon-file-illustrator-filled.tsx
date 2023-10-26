/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileIllustratorFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.177 11.318h-.955l-1.277 3.804h.829l.294-.955h1.235l.317.955h.93l-1.373-3.804Zm-.498.95.417 1.269h-.824l.395-1.27h.012ZM11.004 11.318h.868v3.804h-.868v-3.804Z"
            />
            <path
                fill={fillColor}
                d="M21.793 7.912c.031.073.048.154.048.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.774h-2.3a2.427 2.427 0 0 1-2.42-2.425v-4.093a2.427 2.427 0 0 1 2.42-2.426h2.266V3.534c0-.726.672-1.384 1.409-1.384h7.415c.232 0 .448.09.616.25l5.297 5.126c.109.109.173.243.215.386Zm-5.79-4.09v1.765c0 .658.216 1.213.622 1.608.415.4.997.61 1.692.61h1.801l-4.114-3.983ZM4.575 16.47h9.846a1.21 1.21 0 0 0 1.207-1.21v-4.093c0-.667-.54-1.21-1.207-1.21H4.575a1.21 1.21 0 0 0-1.207 1.21v4.092c0 .667.54 1.21 1.207 1.21Z"
            />
        </svg>
    );
};

export default IconFileIllustratorFilled;
