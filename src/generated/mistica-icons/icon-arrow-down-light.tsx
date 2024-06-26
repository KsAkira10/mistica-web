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

const IconArrowDownLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.866 2c-.37 0-.675.324-.675.716v8.392h4.89c.335 0 .538.284.604.536.035.108.137.464-.101.716L12 20.036 4.42 12.36a.65.65 0 0 1-.102-.716c.102-.216.305-.536.605-.536h4.89V2.716c0-.396-.304-.716-.675-.716-.37 0-.675.324-.675.716V9.68h-3.54c-.807 0-1.549.572-1.853 1.392-.305.784-.172 1.68.406 2.252L12 22l8.527-8.644c.574-.608.71-1.464.406-2.284-.335-.824-1.046-1.392-1.854-1.392h-3.54V2.716c0-.392-.303-.716-.674-.716"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.163 3.423a.707.707 0 0 1-.698-.711c0-.396.318-.712.698-.712s.698.316.698.712c0 .388-.31.711-.698.711M2.987 12.992 12.002 22l9.023-9.008c.498-.512.643-1.264.357-1.96-.286-.703-.937-1.155-1.659-1.155h-4.207v-5.01a.353.353 0 0 0-.35-.356.353.353 0 0 0-.348.356v5.722h4.921c.533 0 .867.363 1.008.711.133.332.149.808-.208 1.172l-8.525 8.52L3.49 12.48c-.357-.364-.341-.848-.208-1.18.134-.34.475-.711 1.008-.711h4.898v-8.23a.353.353 0 0 0-.35-.355.353.353 0 0 0-.348.356v7.517H4.28c-.721 0-1.372.452-1.658 1.155-.279.696-.146 1.44.364 1.96"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.946 21.858h.003q.26 0 .515-.263l8.958-8.902c.376-.367.496-.801.33-1.185-.173-.41-.64-.67-1.164-.653l-3.519.023c-.08 0-.145-.079-.145-.174l.003-6.908c-.009-.554-.154-.958-.443-1.238-.314-.302-.768-.437-1.426-.425H8.84c-.575-.017-1.042.134-1.353.44q-.451.441-.44 1.229v6.9c0 .094-.064.173-.146.173l-3.778.005c-.415-.005-.745.2-.888.55-.166.403-.026.896.355 1.257l8.93 8.967q.195.203.426.204M2.781 11.651c.048-.118.162-.182.325-.182.003 0 .008 0 .005.002h.006l3.782-.005a.75.75 0 0 0 .736-.762V3.796q-.007-.534.264-.8c.246-.242.638-.28.924-.272h6.244c.487-.009.817.075 1.008.26.17.165.258.434.263.82l-.003 6.9c0 .42.331.762.737.762l3.524-.023h.008c.275-.01.53.113.608.295.087.201-.09.42-.204.532l-8.961 8.907-.003.003a.5.5 0 0 1-.087.076l-.003-.003-.008-.008-.005-.006-8.936-8.975-.006-.005c-.249-.236-.274-.474-.218-.608"
                />
            </svg>
        );
    }
};

export default IconArrowDownLight;
