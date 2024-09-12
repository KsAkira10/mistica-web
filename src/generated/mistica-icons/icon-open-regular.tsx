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

const IconOpenRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m21.841 19.458-.02-5.812c.04-.72-.167-1.339-.593-1.793a2.27 2.27 0 0 0-1.23-.658l-6.297-6.28c.13-.258.207-.543.207-.852a1.913 1.913 0 0 0-1.91-1.913c-1.053 0-1.91.857-1.91 1.913 0 .309.081.594.21.852l-6.289 6.291a2.364 2.364 0 0 0-1.854 2.317l.02 5.812c-.04.717.168 1.336.593 1.793.423.454 1.045.706 1.754.711l14.947-.002a2.373 2.373 0 0 0 2.372-2.379M11.29 4.063a.708.708 0 1 1 1.417 0 .708.708 0 1 1-1.418 0m9.347 15.398a1.17 1.17 0 0 1-1.171 1.174l-14.941.003c-.376-.003-.68-.118-.883-.33-.196-.211-.29-.525-.268-.94l-.02-5.845a1.17 1.17 0 0 1 1.17-1.174l14.942-.003c.378.003.68.118.882.33.196.21.292.522.27.94zM11.998 5.977c.308 0 .594-.082.852-.21l5.395 5.378-12.474.002 5.376-5.378c.257.13.543.208.851.208m-4.902 11.37c-.199 0-.532 0-.532-1.015 0-1.022.333-1.022.532-1.022.185 0 .53 0 .53 1.022 0 1.014-.33 1.014-.53 1.014m1.47-1.015c0-1.7-.92-1.955-1.47-1.955-.552 0-1.473.255-1.473 1.955s.921 1.953 1.473 1.953c.55 0 1.47-.255 1.47-1.953m2.048-.266c-.02.023-.044.048-.235.05h-.336v-.761h.28c.224 0 .277.047.277.047.04.045.079.157.079.342 0 .227-.034.286-.065.322m.678-1.297c-.213-.227-.526-.336-.952-.336v.003h-.83a.4.4 0 0 0-.4.4v2.987c0 .22.18.4.4.4h.132a.4.4 0 0 0 .401-.4v-.788h.39c.383 0 .68-.123.885-.358.204-.23.302-.538.302-.944 0-.41-.112-.734-.328-.964m2.695 2.533a.4.4 0 0 1 .4.4v.118a.4.4 0 0 1-.4.4h-1.47a.4.4 0 0 1-.401-.4v-2.986a.4.4 0 0 1 .4-.4h1.426c.123 0 .235.052.314.148a.4.4 0 0 1 .078.338l-.025.118a.4.4 0 0 1-.392.314h-.871v.493h.66a.4.4 0 0 1 .401.4v.118a.4.4 0 0 1-.4.4h-.661v.541h.941zm3.74-2.468a.4.4 0 0 0-.401-.4h-.123a.4.4 0 0 0-.4.4v1.392l-1.068-1.614a.4.4 0 0 0-.333-.179h-.096a.4.4 0 0 0-.4.4v2.99c0 .22.179.4.4.4h.12a.4.4 0 0 0 .401-.4V16.43l1.065 1.614c.073.112.199.179.333.179h.1a.4.4 0 0 0 .402-.4z"
            />
        </svg>
    );
};

export default IconOpenRegular;
