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

const IconListDocumentFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.844 2H17.16C18.175 2 19 2.83 19 3.849V22H5V3.854C5 2.83 5.83 2 6.844 2m2.395 17.265 3.89-3.911a.557.557 0 0 0 .005-.787.55.55 0 0 0-.783 0l-3.107 3.124-1.269-1.275a.55.55 0 0 0-.782 0 .557.557 0 0 0 0 .787zm3.89-9.168a.557.557 0 0 0 .005-.787.55.55 0 0 0-.783 0l-3.107 3.124-1.269-1.275a.55.55 0 0 0-.782 0 .557.557 0 0 0 0 .786l2.046 2.063zM9.24 8.893l3.89-3.911a.556.556 0 0 0 .005-.782.55.55 0 0 0-.783 0L9.244 7.324 7.975 6.048a.55.55 0 0 0-.782 0 .557.557 0 0 0 0 .787z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.844 2H17.16C18.175 2 19 2.83 19 3.849V22H5V3.854C5 2.83 5.83 2 6.844 2m2.395 17.265 3.89-3.911a.557.557 0 0 0 .005-.787.55.55 0 0 0-.783 0l-3.107 3.124-1.269-1.275a.55.55 0 0 0-.782 0 .557.557 0 0 0 0 .787zm3.89-9.168a.557.557 0 0 0 .005-.787.55.55 0 0 0-.783 0l-3.107 3.124-1.269-1.275a.55.55 0 0 0-.782 0 .557.557 0 0 0 0 .786l2.046 2.063zM9.24 8.893l3.89-3.911a.556.556 0 0 0 .005-.782.55.55 0 0 0-.783 0L9.244 7.324 7.975 6.048a.55.55 0 0 0-.782 0 .557.557 0 0 0 0 .787z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.012 2.155h11.983c.729 0 1.393.76 1.39 1.591v16.507c0 .863-.639 1.591-1.392 1.591l-11.98-.003c-.754 0-1.393-.73-1.393-1.59V3.742c0-.832.664-1.588 1.392-1.588m2.205 4.992a.803.803 0 0 0-.804.8c0 .443.361.802.804.802a.8.8 0 0 0 .806-.801.81.81 0 0 0-.806-.801m8.297.257H10.95a.604.604 0 0 0-.605.603.605.605 0 0 0 .605.602h5.563a.604.604 0 0 0 .605-.602.604.604 0 0 0-.605-.603m.08 5.233a.605.605 0 0 0 .606-.602.604.604 0 0 0-.605-.603h-5.566a.606.606 0 0 0-.605.603.605.605 0 0 0 .605.602zm0 4.011a.607.607 0 0 0 .606-.602.604.604 0 0 0-.605-.602h-5.566a.604.604 0 0 0-.605.602.605.605 0 0 0 .605.602zm-8.369-3.81a.803.803 0 1 0 .001-1.603.803.803 0 0 0 0 1.604m-.804 3.208a.803.803 0 0 0 1.608 0 .803.803 0 0 0-1.608 0"
                />
            </svg>
        );
    }
};

export default IconListDocumentFilled;
