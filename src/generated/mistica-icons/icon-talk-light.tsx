'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTalkLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15 6.274a.826.826 0 1 1-.001-1.652.826.826 0 0 1 0 1.652m0-1.093a.27.27 0 0 0-.267.267c0 .145.12.266.266.266s.266-.12.266-.266A.27.27 0 0 0 15 5.18M16.358 5.448a.826.826 0 1 0 1.652 0 .826.826 0 0 0-1.652 0m.56 0c0-.146.12-.267.266-.267s.266.12.266.267c0 .145-.12.266-.266.266a.27.27 0 0 1-.266-.266M19.37 6.274a.826.826 0 1 1-.001-1.652.826.826 0 0 1 0 1.652m0-1.093a.27.27 0 0 0-.267.267c0 .145.12.266.266.266s.266-.12.266-.266a.27.27 0 0 0-.266-.267"
            />
            <path
                fill={fillColor}
                d="M14.66 10.646a.5.5 0 0 1-.092-.008c-.395-.07-.395-.434-.395-.555V8.725h-.39c-.71 0-1.249-.574-1.249-1.333V3.49c0-.737.6-1.334 1.334-1.334H20.5c.736 0 1.333.597 1.333 1.334v3.902c0 .736-.596 1.333-1.333 1.333h-4.258c-.33.493-.97 1.45-1.005 1.51l-.005.006c-.08.121-.27.405-.573.405m-.792-7.93a.773.773 0 0 0-.773.774v3.902c0 .456.282.773.689.773h.67c.153 0 .28.126.28.28v1.532l.016-.025.014-.02a417 417 0 0 1 1.095-1.641.27.27 0 0 1 .233-.124H20.5a.775.775 0 0 0 .773-.773V3.49a.775.775 0 0 0-.773-.774zM6.008 14.691c.6.636 1.479.958 2.613.958 1.135 0 2.014-.322 2.614-.955.566-.602.854-1.445.854-2.513s-.289-1.913-.854-2.512c-.6-.636-1.48-.958-2.614-.958s-2.014.322-2.613.958c-.566.602-.855 1.445-.855 2.512 0 1.068.286 1.91.855 2.51m2.613-5.42c2.404 0 2.908 1.585 2.908 2.91s-.504 2.908-2.908 2.908c-1.325 0-2.907-.504-2.907-2.908 0-1.327.504-2.91 2.907-2.91M2.156 21.554c0 .154.126.28.28.28h12.37a.28.28 0 0 0 .28-.277v-1.042c0-1.27-.33-2.238-.977-2.894-.647-.655-1.617-.986-2.877-.986H6.01c-1.26 0-2.227.33-2.877.983s-.978 1.628-.978 2.894zm12.37-.28H2.716v-.762c0-1.112.272-1.955.813-2.499.54-.543 1.375-.818 2.482-.818h5.22c1.107 0 1.945.275 2.483.818.537.544.812 1.384.812 2.499z"
            />
        </svg>
    );
};

export default IconTalkLight;
