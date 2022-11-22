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

const IconAddMoreCircleLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.998 2C6.488 2 2 6.488 2 12s4.487 10 9.998 10a9.97 9.97 0 005.33-1.544.353.353 0 00.113-.496.36.36 0 00-.496-.112 9.257 9.257 0 01-4.951 1.432c-5.119 0-9.282-4.164-9.282-9.284 0-5.12 4.167-9.288 9.286-9.288s9.282 4.164 9.282 9.284a9.261 9.261 0 01-1.432 4.952.36.36 0 00.608.384A9.965 9.965 0 0022 11.996C21.996 6.488 17.513 2 11.998 2z"
                    fill={fillColor}
                />
                <path
                    d="M12 5.583a.355.355 0 00-.356.356l-.002 5.705H5.941a.355.355 0 00-.357.356c0 .197.159.356.357.356h5.701v5.702a.355.355 0 00.609.252.354.354 0 00.104-.252v-5.701h5.701a.354.354 0 00.356-.356.355.355 0 00-.356-.356l-5.698-.004V5.94A.362.362 0 0012 5.583zm6.789 13.921a.716.716 0 100-1.432.716.716 0 000 1.432z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M23 12.028C23 1.911 14.61 1.06 12.457 1.01c-.25-.006-.538-.009-.82-.009h-.22C9.212 1.019 1 1.776 1 11.966c0 10.201 8.286 11 10.496 11.03.113.004.228.004.341.004.232 0 .467-.003.667-.006C14.604 22.953 23 22.167 23 12.028zM12.485 22.076a19.435 19.435 0 01-.648.01c-.11 0-.219 0-.329-.003-.96-.016-3.427-.194-5.6-1.562-2.651-1.669-3.99-4.549-3.99-8.555 0-4.004 1.326-6.872 3.956-8.521 2.15-1.356 4.602-1.518 5.556-1.528h.21c.272 0 .554.003.798.01.961.021 3.428.225 5.613 1.596 2.673 1.675 4.032 4.539 4.032 8.505 0 9.16-7.347 10.008-9.598 10.048zm4.996-10.568a.458.458 0 010 .915h-5.027v5.04a.458.458 0 01-.914 0v-5.037H6.519a.458.458 0 010-.914h5.018V6.534a.458.458 0 01.914 0v4.974h5.03z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconAddMoreCircleLight;
