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

const IconMultideviceLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M14.963 2h5.277c.986 0 1.76.786 1.76 1.787v10.352c0 1-.774 1.787-1.76 1.787h-5.277c-.986 0-1.76-.786-1.76-1.787V7.356H3.706v11.787H12.5c.212 0 .351.142.351.357s-.14.357-.351.357H3.707v.356c0 .603.455 1.07 1.053 1.07h10.56c.594 0 1.053-.462 1.053-1.07v-2.857c0-.214.14-.356.351-.356.212 0 .351.142.351.357v2.856c0 1-.774 1.787-1.76 1.787H4.76C3.774 22 3 21.214 3 20.213V6.287c0-1 .774-1.787 1.76-1.787h8.442v-.713c0-1 .775-1.787 1.76-1.787zm6.335 3.218h-7.389v7.5h7.389v-7.5zm-6.335-2.5c-.599 0-1.054.461-1.054 1.069V4.5h7.384v-.713c0-.603-.455-1.07-1.053-1.07h-5.277zM3.707 6.287v.357h9.495V5.218H4.76c-.594 0-1.053.461-1.053 1.069zm16.533 8.926c.598 0 1.053-.462 1.058-1.07v-.713h-7.389v.713c0 .604.455 1.07 1.054 1.07h5.277zm-5.628 5a.709.709 0 01-.703-.713c0-.393.315-.713.703-.713.387 0 .702.32.702.713a.709.709 0 01-.702.713z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.083 16.927c0-.322.185-.47.468-.47.283 0 .465.148.468.47 0 .154-.042.266-.118.345-.084.084-.201.123-.35.123-.148 0-.269-.04-.35-.123-.076-.076-.118-.19-.118-.345z"
                    fill={fillColor}
                />
                <path
                    d="M5.167 16.636h10.099v.38c0 1.222.593 1.816 1.815 1.816h2.938c1.221 0 1.815-.594 1.815-1.818v-6.49c0-.61-.148-1.056-.45-1.362-.306-.305-.752-.453-1.365-.453h-1.47v-.286c0-1.045-.244-1.852-.72-2.398-.508-.58-1.278-.874-2.292-.874H5.167c-1.014 0-1.784.294-2.29.874-.48.546-.72 1.353-.72 2.398v4.941c0 1.045.243 1.852.72 2.398.506.58 1.276.874 2.29.874zm0-.56c-1.672 0-2.45-.863-2.45-2.715V8.423c0-1.852.778-2.714 2.45-2.714h10.37c1.672 0 2.451.862 2.451 2.714v.286h-.907c-.608 0-1.054.154-1.362.465-.305.31-.454.75-.454 1.353v5.549H5.167zm10.659-5.55c0-.89.364-1.254 1.255-1.254h2.938c.902 0 1.255.35 1.255 1.255v6.49c0 .902-.35 1.255-1.255 1.255h-2.938c-.902 0-1.255-.35-1.255-1.255v-6.49zm-8.202 8.311h5.462a.28.28 0 00.28-.28.28.28 0 00-.28-.28H7.624a.28.28 0 00-.28.28c0 .155.126.28.28.28z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMultideviceLight;
