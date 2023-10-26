/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAngelLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.268 3.453c0-1.15 2.97-1.453 4.73-1.453 1.755 0 4.73.307 4.73 1.453 0 1.145-2.975 1.457-4.73 1.457-1.755 0-4.73-.308-4.73-1.457ZM20 21.273a.727.727 0 0 1-1.452 0 .727.727 0 0 1 1.452 0ZM11.998 4.18c2.35 0 3.784-.452 3.99-.727-.206-.274-1.64-.726-3.99-.726-2.351 0-3.785.452-3.99.726.205.275 1.639.727 3.99.727Zm6.578 15.07c-1.225-1.863-3.804-3.064-6.578-3.064-4.013 0-7.272 2.365-7.272 5.275a.364.364 0 0 1-.726 0c0-2.742 2.463-5.056 5.819-5.773a5.09 5.09 0 0 1-2.91-4.595A5.1 5.1 0 0 1 12.003 6a5.1 5.1 0 0 1 5.093 5.093c0 2.03-1.196 3.78-2.919 4.6 2.142.465 3.995 1.606 5.014 3.156a.362.362 0 0 1-.102.503.37.37 0 0 1-.512-.102Zm-2.212-8.161a4.373 4.373 0 0 0-4.366-4.367 4.373 4.373 0 0 0-4.367 4.367 4.37 4.37 0 0 0 4.367 4.366 4.373 4.373 0 0 0 4.366-4.366Z"
            />
        </svg>
    );
};

export default IconAngelLight;
