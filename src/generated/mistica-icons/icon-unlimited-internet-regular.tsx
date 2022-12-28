/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconUnlimitedInternetRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.715 2.5C8.3 2.5 4.597 5.674 3.664 9.91c-.384.08-.754.271-1.051.58A2.15 2.15 0 002 12c0 .57.22 1.108.613 1.51a2.09 2.09 0 001.051.58c.933 4.236 4.63 7.41 9.051 7.41 5.12 0 9.285-4.26 9.285-9.495.005-5.246-4.165-9.505-9.285-9.505zM9.342 4.74c-.855 1.332-1.454 3.179-1.687 5.296a2.072 2.072 0 00-.65.445l-.717.738-.718-.734a2.012 2.012 0 00-.489-.36 8.024 8.024 0 014.26-5.386zm-2.295 7.255l.718-.734a1.002 1.002 0 011.44 0c.192.197.297.459.297.734 0 .276-.105.538-.297.734a1.002 1.002 0 01-1.44 0l-.718-.734zm-3.973 0c0-.275.105-.537.297-.734a1.003 1.003 0 011.436 0l.718.734-.718.734a1.002 1.002 0 01-1.44 0 1.06 1.06 0 01-.293-.734zm2.496 1.51l.718-.734.718.734c.192.197.411.342.649.445.233 2.117.832 3.969 1.687 5.297-2.112-1.029-3.708-3.002-4.26-5.382.173-.098.342-.21.488-.36zm6.432 6.359c-1.303-.59-2.528-2.74-2.907-5.835a2.057 2.057 0 001.353-1.304h1.554v7.139zm-1.554-8.598a2.058 2.058 0 00-1.353-1.304c.384-3.095 1.604-5.246 2.907-5.84v7.144h-1.554zm10.094 0h-2.66c-.106-2.637-.773-4.942-1.788-6.527 2.44 1.193 4.192 3.642 4.448 6.527zm-4.096 0h-3.017V4.127c1.476.669 2.857 3.347 3.017 7.139zm-3.017 8.598v-7.14h3.017c-.156 3.792-1.536 6.471-3.017 7.14zm4.448-7.14h2.66c-.251 2.885-2.002 5.335-4.448 6.527 1.015-1.585 1.682-3.89 1.788-6.526z"
            />
        </svg>
    );
};

export default IconUnlimitedInternetRegular;
