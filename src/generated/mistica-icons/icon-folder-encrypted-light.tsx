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

const IconFolderEncryptedLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.936 10.508c0-1.123.347-1.711 1.26-1.711s1.26.585 1.26 1.711-.347 1.706-1.26 1.706-1.26-.58-1.26-1.706m1.26-1.207c-.39 0-.543.297-.543 1.207s.154 1.154.543 1.154c.39 0 .543-.246.543-1.154s-.154-1.207-.543-1.207M8.787 8.797c-.913 0-1.26.588-1.26 1.711 0 1.126.347 1.706 1.26 1.706s1.26-.58 1.26-1.706-.347-1.711-1.26-1.711m0 .504c.39 0 .544.3.544 1.207 0 .908-.155 1.154-.544 1.154-.39 0-.543-.243-.543-1.154s.154-1.207.543-1.207M16.65 10.508c0-1.123.347-1.711 1.26-1.711s1.26.585 1.26 1.711-.347 1.706-1.26 1.706-1.26-.58-1.26-1.706m1.258-1.207c-.39 0-.544.297-.544 1.207s.154 1.154.543 1.154c.39 0 .544-.246.544-1.154s-.154-1.207-.544-1.207M11.616 11.702V9.41h-.53v-.459c.194-.028.522-.056.754-.056.337 0 .451.081.451.322v2.487h.465v.485h-1.694v-.487zM4.955 17.102h-.552v.488h1.695v-.485h-.465v-2.487c0-.241-.115-.322-.45-.322-.233 0-.561.027-.754.056v.459h.526zM13.972 11.702h.552V9.41h-.527v-.459c.194-.028.521-.056.754-.056.336 0 .45.081.45.322v2.487h.466v.485h-1.695zM8.787 14.2c-.913 0-1.26.589-1.26 1.712 0 1.126.347 1.706 1.26 1.706s1.26-.58 1.26-1.706S9.7 14.2 8.788 14.2m.544 1.712c0 .907-.155 1.154-.544 1.154-.39 0-.543-.244-.543-1.154s.154-1.208.543-1.208c.39 0 .544.3.544 1.208M17.91 14.2c-.913 0-1.26.589-1.26 1.712 0 1.126.347 1.706 1.26 1.706s1.26-.58 1.26-1.706-.347-1.712-1.26-1.712m.541 1.712c0 .907-.154 1.154-.544 1.154-.389 0-.543-.244-.543-1.154s.154-1.208.543-1.208c.39 0 .544.3.544 1.208M11.616 17.105h-.554v.487h1.694v-.484h-.465V14.62c0-.24-.114-.322-.45-.322-.233 0-.56.028-.754.056v.46h.53zM13.972 17.105h.552v-2.291h-.527v-.46a6 6 0 0 1 .754-.056c.336 0 .45.082.45.322v2.488h.466v.484h-1.695z"
            />
            <path
                fill={fillColor}
                d="M20.583 6.063a1.26 1.26 0 0 1 1.255 1.263v11.616a1.26 1.26 0 0 1-1.255 1.264H3.409a1.26 1.26 0 0 1-1.258-1.264V5.067A1.26 1.26 0 0 1 3.41 3.802h7.317a1.26 1.26 0 0 1 1.254 1.264v1c.003-.003 8.603-.003 8.603-.003m.434 12.88V7.325a.435.435 0 0 0-.434-.437H11.57a.41.41 0 0 1-.409-.411V5.066a.44.44 0 0 0-.434-.44H3.41a.44.44 0 0 0-.437.44v13.88c0 .24.196.436.437.436h17.174a.44.44 0 0 0 .434-.44"
            />
        </svg>
    );
};

export default IconFolderEncryptedLight;
