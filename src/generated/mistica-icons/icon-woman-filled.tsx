'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconWomanFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.982 16.922a.2.2 0 0 0 .013-.076c0-.01.005-.024.005-.033q-.001-.019-.01-.038c0-.014.005-.029 0-.038L15.388 8.96c-.247-1.186-1.029-2.134-2.043-2.59.59-.435.978-1.151.978-1.962C14.322 3.08 13.284 2 12 2c-1.28 0-2.322 1.081-2.322 2.409 0 .81.389 1.527.983 1.963A3.64 3.64 0 0 0 8.618 8.96l-1.609 7.78c-.004.015 0 .024 0 .038 0 .015-.009.024-.009.038 0 .015.005.024.005.034l.013.07q.008.035.023.062.016.03.037.057c.013.02.027.034.045.053q.028.022.055.037a.2.2 0 0 0 .064.029q.014.008.032.014c.014.005.028 0 .037 0 .013 0 .023.01.036.01h2.144V22h4.995v-4.813h2.14c.022 0 .05-.004.072-.01.014-.004.019-.009.032-.013l.064-.029q.028-.016.055-.038.026-.022.046-.052a.4.4 0 0 0 .036-.057.09.09 0 0 0 .05-.066"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.982 16.922a.2.2 0 0 0 .013-.076c0-.01.005-.024.005-.033q-.001-.019-.01-.038c0-.014.005-.029 0-.038L15.388 8.96c-.247-1.186-1.029-2.134-2.043-2.59.59-.435.978-1.151.978-1.962C14.322 3.08 13.284 2 12 2c-1.28 0-2.322 1.081-2.322 2.409 0 .81.389 1.527.983 1.963A3.64 3.64 0 0 0 8.618 8.96l-1.609 7.78c-.004.015 0 .024 0 .038 0 .015-.009.024-.009.038 0 .015.005.024.005.034l.013.07q.008.035.023.062.016.03.037.057c.013.02.027.034.045.053q.028.022.055.037a.2.2 0 0 0 .064.029q.014.008.032.014c.014.005.028 0 .037 0 .013 0 .023.01.036.01h2.144V22h4.995v-4.813h2.14c.022 0 .05-.004.072-.01.014-.004.019-.009.032-.013l.064-.029q.028-.016.055-.038.026-.022.046-.052a.4.4 0 0 0 .036-.057.09.09 0 0 0 .05-.066"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.552 4.645c0 1.549.915 2.473 2.448 2.473 1.535 0 2.454-.924 2.454-2.476 0-.793-.227-1.418-.676-1.852-.43-.417-1.028-.63-1.778-.63s-1.348.213-1.779.636c-.445.437-.67 1.059-.67 1.849m7.627 10.294c.177-.364.205-.779.073-1.171 0 0-1.518-4.37-1.521-4.364a1.3 1.3 0 0 0-.076-.194 2.83 2.83 0 0 0-2.605-1.74h-2.098a2.83 2.83 0 0 0-2.594 1.712c-.036.079-.061.14-.08.205L6.75 13.779c-.131.384-.103.801.076 1.165.177.359.48.628.84.751q.249.09.505.09h.002l-.168.63a.604.604 0 0 0 .577.759h.4l.018 3.146c0 .848.6 1.504 1.398 1.523h.036c.347.009.68-.123.927-.366.283-.28.437-.69.437-1.16l-.017-3.146h.47l-.013 3.149c0 .868.56 1.507 1.33 1.523h.037c.501 0 .81-.204.983-.375.272-.272.417-.67.417-1.146l.017-3.15h.4a.604.604 0 0 0 .577-.76l-.167-.63c.168.008.336-.023.493-.087.375-.126.678-.395.854-.756"
                />
            </svg>
        );
    }
};

export default IconWomanFilled;
