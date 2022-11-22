/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMicrophoneFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M8.52 5.518v8.52c0 1.973 1.53 3.52 3.485 3.52 1.954 0 3.485-1.547 3.485-3.52v-8.52C15.49 3.546 13.959 2 12.005 2S8.52 3.546 8.52 5.518zM16.044 22a.74.74 0 00-.014-1.48h-3.302v-.796c2.691-.365 4.772-2.688 4.772-5.5a.737.737 0 00-.733-.74.737.737 0 00-.732.74c0 2.243-1.813 4.073-4.035 4.073-2.222 0-4.035-1.826-4.035-4.073a.737.737 0 00-.732-.74.737.737 0 00-.733.74c0 2.812 2.085 5.135 4.772 5.5v.797H7.97a.737.737 0 00-.733.74c0 .407.33.739.733.739h8.074z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.323 6.53c0-2.82-1.536-4.375-4.325-4.375-2.79 0-4.328 1.555-4.328 4.375v6.79c0 2.821 1.535 4.376 4.325 4.376 2.793 0 4.328-1.555 4.328-4.376V6.53zm-3.348 14.345a.96.96 0 00-.955-.966.96.96 0 00-.955.966.962.962 0 00.955.966.962.962 0 00.955-.966zm2.373-1.933a.96.96 0 01.955.966.962.962 0 01-.955.967.96.96 0 01-.956-.966.96.96 0 01.956-.967zm3.627-1.336a.96.96 0 00-.955-.966.96.96 0 00-.955.966.962.962 0 00.955.966.962.962 0 00.955-.966zm0-4.255a.82.82 0 01.815.824.82.82 0 01-.815.826.82.82 0 01-.815-.826.818.818 0 01.815-.824zm-9.372 6.557a.96.96 0 00-.956-.966.957.957 0 00-.955.966.96.96 0 00.955.967.962.962 0 00.956-.966zM5.975 16.64a.96.96 0 01.955.966.962.962 0 01-.955.966.962.962 0 01-.955-.966.96.96 0 01.955-.966zM5.02 15a.82.82 0 00.815-.825.818.818 0 00-.815-.824.818.818 0 00-.815.824.82.82 0 00.815.826z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMicrophoneFilled;
