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

const IconBoxRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 2 3.5 7.097v9.802L12 22l8.5-5.097V7.097L12 2Zm0 9.177L9.307 9.63l6.392-3.74 2.697 1.615L12 11.176Zm-4.125-2.37L5.603 7.507 12 3.67l2.298 1.38-6.423 3.758Zm-2.956-.045 6.374 3.657v7.483L4.919 16.08V8.762Zm7.788 3.657 6.374-3.657v7.318l-6.374 3.823v-7.484Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.802 8.21a.533.533 0 0 1 .011.23c.017.09.031.18.034.28v11.447c0 .925-.818 1.678-1.826 1.678H3.989c-1.009 0-1.826-.753-1.826-1.678V8.72c0-.162.03-.316.078-.465l.001-.02c0-.006 0-.012.002-.019l1.333-4.739c.048-.734.77-1.32 1.653-1.32h13.547c.88 0 1.6.583 1.653 1.317l1.372 4.736Zm-2.82-4.652c0-.098-.093-.173-.207-.176H14.11l.462 3.655h5.397l-.966-3.333a.428.428 0 0 1-.022-.146Zm-13.96 0a.502.502 0 0 1-.02.143l-.94 3.339h5.041l.387-3.655H5.23c-.115 0-.208.078-.208.173ZM20.015 20.61c.202 0 .378-.21.378-.448V8.715c0-.238-.176-.449-.378-.449h-5.36l.002 2.462c0 .34-.325.614-.725.614h-4.18c-.4 0-.725-.275-.725-.614V8.266H3.983c-.202 0-.375.21-.375.449v11.447c0 .238.173.448.375.448h16.032ZM13.21 8.266h-2.73v1.846h2.73V8.266Zm-.092-1.23-.465-3.649H10.94l-.387 3.65h2.563Z"
                />
            </svg>
        );
    }
};

export default IconBoxRegular;
