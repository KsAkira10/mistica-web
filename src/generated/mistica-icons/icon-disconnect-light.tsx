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

const IconDisconnectLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.501 2.156c4.804 0 7.336 2.535 7.336 7.32 0 4.792-2.532 7.319-7.336 7.319-.563 0-1.09-.045-1.593-.12v2.263c0 .96-.247 1.666-.751 2.162-.496.502-1.205.74-2.157.74H5.059c-.947 0-1.656-.241-2.16-.74-.501-.493-.748-1.207-.748-2.16V9.084c0-.935.247-1.633.751-2.134.504-.521 1.213-.768 2.16-.768h2.644c.977-2.63 3.316-4.025 6.795-4.025m0 13.79c4.306 0 6.482-2.17 6.482-6.47 0-4.292-2.176-6.468-6.482-6.468-2.994 0-4.955 1.081-5.868 3.173H10c.955 0 1.664.247 2.165.751.505.502.743 1.199.743 2.151v6.74c.495.078 1.03.123 1.593.123M7.53 17.983c.524 0 .838.313.838.837 0 .255-.073.462-.216.61-.148.152-.361.23-.619.23s-.47-.078-.619-.23q-.218-.223-.218-.61c0-.526.31-.837.834-.837m4.524-8.9c0-.714-.162-1.224-.496-1.557-.333-.33-.846-.493-1.56-.493H5.06c-.709 0-1.213.17-1.555.51-.33.342-.501.843-.501 1.54v9.858c0 .714.162 1.224.501 1.557.334.33.838.493 1.555.493h4.938c.717 0 1.23-.163 1.563-.493.33-.333.493-.843.493-1.557zm2.149.886 2.129 2.123a.427.427 0 0 0 .599.003.43.43 0 0 0 0-.603l-2.003-2V6.795a.426.426 0 1 0-.851 0v2.871c0 .115.044.221.126.303"
            />
        </svg>
    );
};

export default IconDisconnectLight;
