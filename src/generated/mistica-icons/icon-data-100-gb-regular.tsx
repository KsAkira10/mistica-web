'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconData100GbRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.216 6.429 15.43 2.643C15.037 2.214 14.466 2 13.894 2H6.287a2.15 2.15 0 0 0-2.143 2.143V22H19.86V7.964c0-.571-.215-1.143-.643-1.535M18.43 20.57H5.573V4.143c0-.393.321-.714.714-.714h7.607c.179 0 .357.071.5.214l3.822 3.821a.7.7 0 0 1 .214.5zm-6.071-4.821A2.866 2.866 0 0 1 9.5 18.607a2.866 2.866 0 0 1-2.857-2.857 2.866 2.866 0 0 1 2.857-2.857c.643 0 1.286.214 1.786.643.214.178.286.535.071.75-.178.214-.535.285-.75.071a1.82 1.82 0 0 0-1.107-.393c-1 0-1.785.786-1.785 1.786S8.5 17.536 9.5 17.536c.786 0 1.465-.536 1.715-1.25H9.859a.55.55 0 0 1-.536-.536.55.55 0 0 1 .536-.536h1.964a.55.55 0 0 1 .535.536M10.93 6.464c-1.214 0-1.964 1.072-1.964 2.857 0 1.75.75 2.858 1.964 2.858 1.178 0 1.964-1.108 1.964-2.858s-.75-2.857-1.964-2.857m0 4.643c-.857 0-.893-1.5-.893-1.786 0-.535.071-1.785.893-1.785.821 0 .893 1.357.893 1.785 0 .893-.286 1.786-.893 1.786m4.643-4.643c-1.215 0-1.965 1.072-1.965 2.857 0 1.75.75 2.858 1.965 2.858 1.178 0 1.964-1.108 1.964-2.858s-.75-2.857-1.964-2.857m0 4.643c-.857 0-.893-1.5-.893-1.786 0-.535.071-1.785.893-1.785.821 0 .893 1.357.893 1.785 0 .893-.286 1.786-.893 1.786m-9.25-3.536a.53.53 0 0 1 .286-.678l.892-.357a.5.5 0 0 1 .5.071c.143.107.25.25.25.429v4.643a.55.55 0 0 1-.535.535.55.55 0 0 1-.536-.535V7.786l-.143.071c-.286.107-.607-.036-.714-.286m10.357 8q.321-.428.321-.964c0-.928-.75-1.714-1.714-1.714h-1.714a.55.55 0 0 0-.536.536v4.642c0 .286.25.536.536.536h2.071c.929 0 1.714-.75 1.714-1.714 0-.536-.25-1-.678-1.322m-1.393-1.607a.64.64 0 0 1 .643.643c0 .357-.286.607-.643.607h-1.143v-1.25zm.357 3.572h-1.5v-1.25h1.5a.64.64 0 0 1 .643.643c0 .357-.286.607-.643.607"
            />
        </svg>
    );
};

export default IconData100GbRegular;
