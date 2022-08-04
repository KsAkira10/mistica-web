/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPersonalComputerLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.786 17.626H2V3h20v14.626h-6.786l.714 2.89c0 .11 0 .258-.073.335a.319.319 0 01-.284.149H8.356c-.105 0-.21-.072-.284-.149-.073-.11-.11-.225-.073-.336l.787-2.89zm6.328 2.625l-.608-2.625H9.503l-.676 2.625h6.287zM21.29 3.754H2.718v10.123h14.645c.215 0 .357.149.357.374 0 .226-.142.375-.357.375H2.718v2.25H21.29V3.755zm-1.07 10.497c0 .413-.32.749-.713.749-.393 0-.713-.336-.713-.749s.32-.749.713-.749c.393 0 .713.336.713.75z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M2.156 13.45c0 1.529.83 2.37 2.336 2.37l2.544-.002-1.058 1.086-3.544.002a.276.276 0 00-.278.277c0 .154.123.278.278.278l9.868-.004a.277.277 0 00.096 0l3.697-.002a.276.276 0 00.277-.277.276.276 0 00-.277-.278l-3.633.002-1.07-1.085h2.644c1.507 0 2.336-.844 2.336-2.37v-4.56c0-.746-.196-1.326-.58-1.726-.398-.415-.989-.625-1.756-.625l-9.544.006c-.767 0-1.358.21-1.756.625-.384.4-.58.98-.58 1.725v4.557zm8.46 2.367l.016.019 1.051 1.066-4.93.002 1.058-1.086h2.805zM4.492 7.1l9.544-.005c.61 0 1.067.15 1.353.453.283.292.426.743.426 1.34v4.56c0 1.22-.583 1.815-1.782 1.815l-9.543.005c-1.2 0-1.782-.593-1.782-1.815v-4.56c0-.594.143-1.045.426-1.339.291-.3.748-.454 1.358-.454zM18.23 17.463h2.282c.496 0 1.328-.238 1.328-1.843l-.003-7.24c0-1.606-.832-1.844-1.328-1.844h-2.283c-.493 0-1.316.241-1.316 1.843l.003 7.241c0 1.605.823 1.843 1.316 1.843zm-.004-10.367h2.28c.19 0 .768 0 .768 1.283l.005 7.241c0 1.283-.576 1.283-.767 1.283h-2.283c-.207 0-.756 0-.756-1.283l-.003-7.24c0-1.284.549-1.284.756-1.284z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPersonalComputerLight;
