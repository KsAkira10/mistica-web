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

const IconBoxFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m12.007 2-8.38 4.848 3.833 2.14 8.183-4.886L12.007 2Zm-3.43 7.613 8.16-4.876 3.65 2.111-8.38 4.684-3.43-1.919Zm2.872 2.869-8.39-4.684v9.349L11.45 22v-9.518ZM12.566 22v-9.518l8.389-4.684v9.349L12.565 22Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.8 8.211a.534.534 0 0 1 .01.23c.017.09.031.179.034.28v11.448c0 .924-.818 1.678-1.826 1.678H3.984c-1.008 0-1.826-.754-1.826-1.678V8.72c0-.163.03-.317.078-.465.002-.007.002-.013.002-.02l.001-.02 1.333-4.739c.048-.734.77-1.32 1.653-1.32h13.549c.88 0 1.6.583 1.652 1.317L21.8 8.211Zm-2.822-4.653c0-.098-.092-.173-.207-.176h-4.664l.462 3.655h5.398l-.966-3.333a.428.428 0 0 1-.023-.146Zm-13.96 0a.502.502 0 0 1-.02.143l-.944 3.34h5.042l.387-3.656h-4.26c-.113 0-.205.078-.205.173Zm14.994 17.053c.202 0 .378-.21.378-.448V8.715c0-.238-.176-.448-.378-.448h-5.361l.002 2.462c0 .34-.325.614-.725.614h-4.18c-.4 0-.725-.275-.725-.614V8.267H3.978c-.201 0-.375.21-.375.448v11.448c0 .238.174.448.375.448h16.034Z"
                />
            </svg>
        );
    }
};

export default IconBoxFilled;
