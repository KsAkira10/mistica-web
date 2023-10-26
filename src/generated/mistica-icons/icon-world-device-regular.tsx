/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconWorldDeviceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.212 2h-3.214c-.786 0-1.429.643-1.429 1.429V5.25a8.8 8.8 0 0 0-4.285-1.107c-4.929 0-8.929 4-8.929 8.928 0 4.929 4 8.929 8.929 8.929 4.928 0 8.928-4 8.928-8.929 0-.5-.036-.964-.107-1.428h.107c.786 0 1.429-.643 1.429-1.429V3.43c0-.786-.643-1.429-1.429-1.429Zm.357 3.036v3.571h-3.928V5.036h3.928ZM16.998 3.07h3.214c.179 0 .357.179.357.358v.535h-3.928V3.43c0-.179.178-.358.357-.358ZM8.962 5.93c.393.892.607 1.642.464 2 0 0-.5 1.464-2.178 1.357-1.357-.072-1.572.464-1.607.785-.036.572.464.929 2.143 1.465.035 0 .678.178 1.071.928a2.183 2.183 0 0 0 2.786.929.304.304 0 0 1 .25 0c.071.036.143.143.143.214 0 .072.214 1.607-1.036 2.143-1 .464-1.179 1.143-1.322 1.679-.071.321-.142.571-.392.75-.179.142-.5.071-.608.035-.785-.25-1.75-1.214-2.035-2.5a5.294 5.294 0 0 1-.107-1.107c0-.428-.322-2.286-1.25-3-.393-.286-.822-.357-1.25-.214l-.108.036a7.674 7.674 0 0 1 5.036-5.5Zm2.322 14.642a7.5 7.5 0 0 1-7.5-7.5c0-.178 0-.321.035-.5.143 0 .286-.035.465-.107l.107-.035c.107-.036.178-.036.285.035.5.393.822 1.822.822 2.143 0 .5.036.929.143 1.357.393 1.786 1.714 2.965 2.75 3.286.25.071.464.107.678.107.393 0 .715-.107.965-.357.464-.429.607-.893.714-1.286.107-.464.178-.714.714-.964 1.536-.714 1.75-2.393 1.643-3.286-.071-.428-.321-.821-.679-1a1.326 1.326 0 0 0-1.214-.035 1.046 1.046 0 0 1-1.393-.465c-.571-1.071-1.535-1.393-1.714-1.428-.179-.036-.321-.107-.429-.143 1.679-.107 2.572-1.393 2.822-2.107.25-.715-.072-1.75-.429-2.607a7.08 7.08 0 0 1 1.25-.108c1.607 0 3.072.5 4.286 1.358v2.464c-.286-.036-.571 0-.857.107-.857.429-1.429 1.393-1.5 2.429-.072 1.071.428 2.035 1.357 2.642 1.107.715 1.071 1.215 1.036 2-.036.643-.107 1.393.464 2.25-1.357 1.108-3 1.75-4.821 1.75Zm7.5-7.5c0 1.929-.75 3.679-1.929 5-.25-.5-.214-.928-.179-1.428.072-.893.143-1.893-1.535-2.964-.822-.536-.893-1.286-.857-1.679.035-.679.392-1.286.892-1.536.072-.035.25-.035.393 0 .143.643.715 1.143 1.393 1.143h1.643c.143.5.179.964.179 1.464Zm1.428-2.5h-3.214a.384.384 0 0 1-.357-.357V9.68h3.928v.535a.384.384 0 0 1-.357.357Z"
            />
        </svg>
    );
};

export default IconWorldDeviceRegular;
