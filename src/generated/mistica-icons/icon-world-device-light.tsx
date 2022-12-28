/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconWorldDeviceLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path fill={fillColor} d="M14.518 21.643a.714.714 0 110-1.429.714.714 0 010 1.429z" />
            <path
                fill={fillColor}
                d="M19.875 2c1 0 1.786.786 1.75 1.786v6.071c0 1-.786 1.786-1.786 1.786h-2.5c-.821 0-1.5-.572-1.714-1.322-.214-.071-.393-.071-.536 0-.571.286-.964.965-1 1.679 0 .429.072 1.25.965 1.821 1.535 1.036 1.5 1.965 1.428 2.822-.036.678-.071 1.357.679 2.178a8.195 8.195 0 002.357-5.75c0-.214.143-.357.357-.357s.357.143.357.357c0 2.858-1.321 5.465-3.571 7.215a.507.507 0 01-.215.071.325.325 0 01-.285-.143.384.384 0 01.071-.5c.143-.107.286-.25.429-.357-.965-1.071-.893-1.964-.857-2.714.071-.822.107-1.393-1.108-2.179A2.608 2.608 0 0113.411 12c.035-1 .607-1.893 1.393-2.286.25-.143.5-.143.785-.107v-3.5a8.18 8.18 0 00-4.285-1.214c-.5 0-.965.071-1.429.143.429.821 1.107 2.321.786 3.25-.25.75-1.215 2.107-3.072 2-.178-.036-.357 0-.464 0 .214.107.607.25 1.286.464 0 0 1 .25 1.607 1.357a1.271 1.271 0 001.643.536c.321-.179.714-.143 1.035.036.322.178.572.535.608.892.107.822-.072 2.393-1.536 3.072-.607.286-.714.607-.822 1.071-.107.393-.214.822-.642 1.215-.215.214-.536.321-.858.321a2 2 0 01-.607-.107c-1-.322-2.25-1.464-2.643-3.179a5.356 5.356 0 01-.142-1.321c0-.393-.322-1.857-.893-2.286-.143-.107-.286-.143-.465-.071-.607.214-.928.107-1.535-.25a9.436 9.436 0 00-.072 1.035 8.215 8.215 0 008.215 8.215c.357 0 .75-.036 1.142-.072.179 0 .358.143.393.322a.419.419 0 01-.321.393c-.393.035-.822.071-1.214.071-4.929 0-8.929-4-8.929-8.929 0-4.928 4-8.928 8.929-8.928 1.5 0 2.964.393 4.285 1.107V3.786c0-1 .786-1.786 1.786-1.786h2.5zM9.982 8c.214-.607-.321-1.893-.821-2.821a8.204 8.204 0 00-5.857 6.107c.714.428.857.428 1.214.321.393-.107.786-.071 1.107.179.857.643 1.179 2.464 1.179 2.857 0 .428.035.786.107 1.143.285 1.393 1.321 2.357 2.143 2.643.178.035.571.142.785-.072.25-.25.357-.536.429-.857.143-.5.286-1.107 1.214-1.536 1.357-.643 1.143-2.285 1.143-2.357-.036-.143-.107-.286-.25-.357a.383.383 0 00-.393-.036c-.964.429-2.071.072-2.571-.821-.429-.786-1.179-1-1.179-1-1.571-.5-2.071-.822-2.036-1.286.036-.571.929-.643 1.429-.607A2.353 2.353 0 009.982 8zm7.393-5.286c-.607 0-1.071.465-1.071 1.072h4.642c0-.607-.464-1.072-1.071-1.072h-2.5zM16.304 4.5v4.643h4.642V4.5h-4.642zm3.571 6.429c.607 0 1.071-.465 1.071-1.072h-4.642c0 .607.464 1.072 1.071 1.072h2.5z"
            />
        </svg>
    );
};

export default IconWorldDeviceLight;
