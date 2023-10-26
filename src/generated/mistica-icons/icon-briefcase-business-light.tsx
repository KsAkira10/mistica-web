/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBriefcaseBusinessLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.147 5.853h-4.133C15.626 3.893 13.986 2.5 12 2.5c-2.019 0-3.796 1.45-4.199 3.353H3.853A1.862 1.862 0 0 0 2 7.717v11.551c0 1.025.83 1.865 1.853 1.865h11.479a.371.371 0 0 0 0-.744H3.853c-.611 0-1.109-.5-1.109-1.116V7.717c0-.615.498-1.116 1.11-1.116h16.293c.611 0 1.109.501 1.109 1.116v11.551c0 .615-.498 1.116-1.11 1.116h-.369a.371.371 0 0 0 0 .744h.37A1.862 1.862 0 0 0 22 19.263V7.717a1.865 1.865 0 0 0-1.853-1.864Zm-11.588 0C8.948 4.36 10.384 3.244 12 3.244c1.578 0 2.891 1.073 3.26 2.609h-6.7ZM17.555 21.5c.407 0 .739-.334.739-.744a.743.743 0 0 0-.74-.744.743.743 0 0 0-.739.744c0 .41.332.744.74.744Zm-10.74-6.004c.228 0 .417.186.417.42v1.487c0 .23-.185.42-.417.42a.416.416 0 0 1-.417-.42v-1.492c0-.23.19-.415.417-.415Zm3.934-2.003c0-.234-.19-.42-.417-.42a.422.422 0 0 0-.417.42v3.91c0 .234.185.42.417.42.232 0 .417-.19.417-.42v-3.91Zm3.104-3.029c.228 0 .417.186.417.42v6.52c0 .228-.185.419-.417.419a.416.416 0 0 1-.417-.42v-6.519c0-.234.185-.42.417-.42Zm3.284 6.94c0 .233.19.419.418.419.227 0 .417-.19.417-.42V8.461a.416.416 0 0 0-.418-.42.419.419 0 0 0-.417.42v8.942Z"
            />
        </svg>
    );
};

export default IconBriefcaseBusinessLight;
