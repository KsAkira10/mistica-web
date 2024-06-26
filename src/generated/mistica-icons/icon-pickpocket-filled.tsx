'use client';
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

const IconPickpocketFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3.453 12.796c0-.671.4-1.146 1.068-1.146h1.964l1.093-2.107a.85.85 0 0 1 1.146-.35l3.672 1.982a.84.84 0 0 1 .378.425c.572.096 1.032.518 1.032 1.121v1.647h-3.164l1.29-2.422-1.975-1.064-1.858 3.486H7.085l2.082-3.91-.828-.447-2.322 4.36H3.453zm6.275.547.314.168a.35.35 0 0 0 .482-.147l.422-.79a.4.4 0 0 0 .028-.274.36.36 0 0 0-.175-.214l-.314-.168a.354.354 0 0 0-.482.146l-.421.79a.4.4 0 0 0-.029.275.36.36 0 0 0 .175.214M3.45 15.578l.003 1.904c0 2.49 2.014 4.518 4.49 4.518h1.35a4.53 4.53 0 0 0 4.513-4.518v-1.904zm17.413-7.896-1.16.122-.14.775a.6.6 0 0 1-.178.335l-1.472 1.454a.7.7 0 0 1-.214.14l-2.132.82c-.221.09-.45.133-.678.133a1.84 1.84 0 0 1-1.786-1.425 1.822 1.822 0 0 1-2.37-.019 1.8 1.8 0 0 1-.44-.567 1.84 1.84 0 0 1-.108-1.407l.232-.69A1.83 1.83 0 0 1 8.8 5.915a1.846 1.846 0 0 1 1.408-2.192l3.778-.883.668-.532a.6.6 0 0 1 .364-.135L19.56 2a.624.624 0 0 1 .646.607.624.624 0 0 1-.6.65l-4.335.161-3.01 2.396-.89 2.625a.585.585 0 0 0 .375.736.592.592 0 0 0 .74-.379l.87-2.446a.63.63 0 0 1 .268-.31l1.036-.604a1.68 1.68 0 0 1 2.3.596 1.7 1.7 0 0 1-.59 2.322 1 1 0 0 1-.082.039l-1.62.668a.595.595 0 0 0-.321.768.58.58 0 0 0 .76.321l2.024-.779 1.236-1.221.19-1.043a.63.63 0 0 1 .55-.514l1.624-.168c.343-.04.65.214.686.56.04.35-.21.661-.554.697M10.857 6.064l.278-.828a.64.64 0 0 1 .204-.29l.353-.282-1.214.283a.59.59 0 0 0 .236 1.153zm3.339 1.84 1.568-.647a.436.436 0 0 0-.475-.732l-.854.497-.007.02-.314.897a1 1 0 0 0 .082-.035"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3.453 12.796c0-.671.4-1.146 1.068-1.146h1.964l1.093-2.107a.85.85 0 0 1 1.146-.35l3.672 1.982a.84.84 0 0 1 .378.425c.572.096 1.032.518 1.032 1.121v1.647h-3.164l1.29-2.422-1.976-1.064L8.1 14.368H7.085l2.082-3.91-.828-.447-2.322 4.36H3.453zm6.275.547.314.168a.353.353 0 0 0 .482-.147l.422-.79a.4.4 0 0 0 .028-.274.36.36 0 0 0-.175-.214l-.314-.168a.356.356 0 0 0-.482.146l-.422.79a.4.4 0 0 0-.028.275.36.36 0 0 0 .175.214m-6.279 2.235.004 1.904c0 2.49 2.014 4.518 4.49 4.518h1.35a4.53 4.53 0 0 0 4.513-4.518v-1.904zm17.414-7.896-1.16.122-.14.775a.6.6 0 0 1-.178.335l-1.472 1.454a.7.7 0 0 1-.214.14l-2.132.82q-.334.134-.679.133a1.84 1.84 0 0 1-1.785-1.425 1.822 1.822 0 0 1-2.37-.019 1.8 1.8 0 0 1-.44-.567 1.84 1.84 0 0 1-.108-1.407l.232-.69A1.83 1.83 0 0 1 8.8 5.915a1.846 1.846 0 0 1 1.407-2.192l3.779-.882.668-.533a.6.6 0 0 1 .364-.135L19.56 2a.624.624 0 0 1 .646.607.624.624 0 0 1-.6.65l-4.335.161-3.011 2.396-.89 2.625a.585.585 0 0 0 .375.736.592.592 0 0 0 .74-.379l.871-2.446a.63.63 0 0 1 .268-.31l1.036-.604a1.68 1.68 0 0 1 2.3.596 1.7 1.7 0 0 1-.59 2.322 1 1 0 0 1-.082.039l-1.621.668a.595.595 0 0 0-.321.768.58.58 0 0 0 .76.321l2.025-.779 1.236-1.22.19-1.044a.63.63 0 0 1 .55-.514l1.624-.168c.343-.04.65.214.686.56.04.35-.21.662-.554.697M10.856 6.064l.279-.828a.64.64 0 0 1 .204-.29l.353-.282-1.214.283a.589.589 0 0 0 .236 1.153zm3.34 1.84 1.567-.647a.436.436 0 0 0-.475-.732l-.853.497-.007.021-.315.896a1 1 0 0 0 .083-.035"
                />
            </svg>
        );
    }
};

export default IconPickpocketFilled;
