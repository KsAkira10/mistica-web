/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBillQueriesEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.435 19.407a.74.74 0 1 1-1.478 0 .74.74 0 0 1 1.478 0ZM19.066 17.189v-4.447a.37.37 0 0 0-.74 0v4.447a.37.37 0 0 0 .74 0Z"
            />
            <path
                fill={fillColor}
                d="M19.066 3.854v.018a3.702 3.702 0 0 1-.375 7.386c-2.041 0-3.7-1.659-3.7-3.702a3.707 3.707 0 0 1 3.33-3.684v-.018a1.11 1.11 0 0 0-1.108-1.11H6.848a1.11 1.11 0 0 0-1.109 1.11V21.26h12.957a.37.37 0 0 1 0 .739H5V3.854C5 2.83 5.834 2 6.852 2h10.361c1.023 0 1.853.834 1.853 1.854Zm-3.33 3.707a2.963 2.963 0 0 0 2.96 2.962 2.963 2.963 0 0 0 0-5.926 2.963 2.963 0 0 0-2.96 2.964Z"
            />
            <path
                fill={fillColor}
                d="M13.144 12.002c.55 0 1.094.147 1.573.427a.371.371 0 0 0 .374-.64 3.904 3.904 0 0 0-1.943-.526 3.89 3.89 0 0 0-3.657 2.593h-.966a.37.37 0 0 0 0 .74h.786c-.028.18-.043.364-.043.554 0 .062.005.123.01.185h-.749a.37.37 0 0 0 0 .74h.858a3.892 3.892 0 0 0 3.77 2.962c.678 0 1.351-.18 1.943-.526a.37.37 0 0 0-.374-.64 3.122 3.122 0 0 1-1.573.427 3.158 3.158 0 0 1-3.008-2.223h3.193a.37.37 0 0 0 0-.74h-3.321a2.387 2.387 0 0 1-.01-.185c0-.19.02-.374.053-.555h3.278a.37.37 0 0 0 0-.74h-3.051a3.13 3.13 0 0 1 2.857-1.853ZM19.08 9.533a.37.37 0 1 1-.74 0 .37.37 0 0 1 .74 0ZM18.786 5.152h-.076c-.46 0-.886.247-1.113.645a.37.37 0 0 0 .137.507.369.369 0 0 0 .507-.137.55.55 0 0 1 .474-.275h.076c.194 0 .379.09.497.246.11.143.133.45.01.574l-.408.408c-.34.346-.54.82-.54 1.303a.37.37 0 0 0 .74 0c0-.289.118-.578.321-.782l.408-.408c.422-.421.37-1.142.057-1.55a1.397 1.397 0 0 0-1.09-.53Z"
            />
        </svg>
    );
};

export default IconBillQueriesEuroLight;
