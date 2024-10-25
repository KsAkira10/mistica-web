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

const IconTachometerRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.195 5.862 19.952 8.11A10.6 10.6 0 0 1 22 14.419c0 1.771-.485 3.433-1.532 5.224a.72.72 0 0 1-.612.357.7.7 0 0 1-.37-.11.766.766 0 0 1-.238-1.023c.905-1.553 1.326-2.967 1.326-4.453a9.14 9.14 0 0 0-1.408-4.89l-4.019 7.267-.02.033q-.01.015-.02.033-.157.223-.348.424a3.8 3.8 0 0 1-2.757 1.186 3.8 3.8 0 0 1-2.756-1.186c-1.518-1.581-1.518-4.157 0-5.738.132-.133.27-.257.407-.362q.027-.021.064-.043l4.187-2.514a5.5 5.5 0 0 0-1.902-.348c-3.15 0-5.714 2.753-5.714 6.138 0 1.634.645 3.077 1.91 4.286.293.281.312.748.047 1.052a.696.696 0 0 1-1.01.048c-1.55-1.481-2.373-3.343-2.373-5.386 0-4.21 3.2-7.628 7.14-7.628 1.216 0 2.377.328 3.41.933l1.28-.767a8.3 8.3 0 0 0-4.694-1.466c-4.727 0-8.572 4.004-8.572 8.928 0 1.49.42 2.905 1.326 4.453.206.352.1.81-.238 1.023a.7.7 0 0 1-.983-.247C2.49 17.848 2 16.19 2 14.419 2 8.671 6.49 4 12.002 4c2.277 0 4.375.8 6.057 2.138l2.163-1.29a.69.69 0 0 1 .86.119.77.77 0 0 1 .113.895m-7.451 10.371a2 2 0 0 0 .187-.219l4.7-8.5-8.16 4.89a2 2 0 0 0-.215.196c-.96 1-.96 2.633 0 3.633s2.523 1 3.488 0"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.195 5.862 19.952 8.11A10.6 10.6 0 0 1 22 14.419c0 1.771-.485 3.433-1.532 5.224a.72.72 0 0 1-.612.357.7.7 0 0 1-.37-.11.766.766 0 0 1-.238-1.023c.905-1.553 1.326-2.967 1.326-4.453a9.14 9.14 0 0 0-1.408-4.89l-4.019 7.267-.02.033q-.01.015-.02.033-.157.223-.348.424a3.8 3.8 0 0 1-2.757 1.186 3.8 3.8 0 0 1-2.756-1.186c-1.518-1.581-1.518-4.157 0-5.738.132-.133.27-.257.407-.362q.027-.021.064-.043l4.187-2.514a5.5 5.5 0 0 0-1.902-.348c-3.15 0-5.714 2.753-5.714 6.138 0 1.634.645 3.077 1.91 4.286.293.281.312.748.047 1.052a.696.696 0 0 1-1.01.048c-1.55-1.481-2.373-3.343-2.373-5.386 0-4.21 3.2-7.628 7.14-7.628 1.216 0 2.377.328 3.41.933l1.28-.767a8.3 8.3 0 0 0-4.694-1.466c-4.727 0-8.572 4.004-8.572 8.928 0 1.49.42 2.905 1.326 4.453.206.352.1.81-.238 1.023a.7.7 0 0 1-.983-.247C2.49 17.848 2 16.19 2 14.419 2 8.671 6.49 4 12.002 4c2.277 0 4.375.8 6.057 2.138l2.163-1.29a.69.69 0 0 1 .86.119.77.77 0 0 1 .113.895m-7.451 10.371a2 2 0 0 0 .187-.219l4.7-8.5-8.16 4.89a2 2 0 0 0-.215.196c-.96 1-.96 2.633 0 3.633s2.523 1 3.488 0"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 5.044c6.432 0 9.83 3.334 9.83 9.64 0 1.417-.177 2.702-.53 3.823q-.013.044-.036.086l-.02.043a.6.6 0 0 1-.54.33H3.29a.6.6 0 0 1-.577-.415c-.356-1.131-.538-2.43-.538-3.868 0-6.305 3.398-9.639 9.823-9.639m8.258 12.74c.244-.919.367-1.96.367-3.1 0-5.612-2.902-8.457-8.622-8.457S3.382 9.07 3.382 14.683c0 1.143.123 2.185.364 3.1zm-7.375-2.944a1.26 1.26 0 0 0-.88-.356c-.692.003-1.252.552-1.25 1.23 0 .68.561 1.23 1.253 1.23.585.002 1.095-.401 1.224-.972l6.364-1.83h.004l.003-.002h.002c.31-.093.49-.42.4-.731a.6.6 0 0 0-.748-.401zm-.894-5.347a.595.595 0 0 1-.602-.591v-.799c0-.325.269-.59.602-.59s.602.265.602.59v.799a.595.595 0 0 1-.602.59m-4 .361-.577-.566a.616.616 0 0 0-.854 0l-.011.011c-.225.23-.219.6.01.824l.58.569a.607.607 0 0 0 .852 0l.014-.014a.586.586 0 0 0-.014-.824M5.97 13.445c.334 0 .603.263.603.591a.597.597 0 0 1-.603.591h-.815a.597.597 0 0 1-.602-.591c0-.328.269-.591.602-.591zm10.012-2.756a.6.6 0 0 0 .851-.003l.577-.566.011-.011a.583.583 0 0 0-.01-.824.61.61 0 0 0-.852 0l-.578.566-.014.014a.586.586 0 0 0 .014.824"
                />
            </svg>
        );
    }
};

export default IconTachometerRegular;
