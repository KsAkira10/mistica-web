/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFilePngFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.111 7.803l.003.003v-.003h-.003zm-8.599 5.515c0-1.151.608-1.93 1.86-1.93.364 0 .8.076 1.036.177l-.106.613a3.293 3.293 0 00-.871-.134c-.743 0-1.048.44-1.048 1.24 0 .415.053.754.216.978.134.188.355.297.708.297.135 0 .317-.017.446-.036v-.773h-.516v-.603h1.35v1.877c-.35.107-.907.188-1.31.188-1.32-.003-1.765-.729-1.765-1.894zm-7.065-1.86h1.264c.574 0 .94.082 1.176.3.199.182.297.468.297.86 0 .392-.092.689-.275.893-.215.241-.549.356-1.03.356h-.591v1.27h-.84v-3.679zM5.7 13.237c.27 0 .381-.036.49-.14.099-.098.146-.252.146-.468 0-.199-.042-.344-.14-.434-.1-.092-.258-.129-.515-.129h-.392v1.171H5.7zm2.694-1.779h-.619v3.675h.737v-2.23l1.689 2.23h.672v-3.675h-.737v2.353l-1.742-2.353z"
                fill={fillColor}
            />
            <path
                d="M21.792 7.912c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.248c-.747 0-1.409-.647-1.409-1.383l.034-2.774H4.571a2.425 2.425 0 01-2.42-2.423v-4.095a2.427 2.427 0 012.42-2.426h2.266V3.534c0-.726.67-1.384 1.409-1.384h7.414a.86.86 0 01.614.25l5.296 5.126c.115.109.18.243.222.386zm-1.681-.11L15.999 3.82v1.764c0 .656.216 1.213.622 1.608.415.4.997.61 1.692.61h1.798zM4.573 16.468h9.846a1.21 1.21 0 001.208-1.208v-4.095a1.21 1.21 0 00-1.208-1.21H4.573a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.208 1.207 1.208z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePngFilled;
