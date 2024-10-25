'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAngelRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.898 3.669c0 1.588-4.078 1.668-4.895 1.668S7.11 5.257 7.11 3.67 11.187 2 12.003 2c.817 0 4.895.08 4.895 1.669m-1.239 0c-.468-.237-1.73-.555-3.656-.555-1.925 0-3.187.318-3.656.555.469.237 1.73.554 3.656.554s3.188-.317 3.656-.554m-.622 11.737a5.22 5.22 0 0 0 2.042-4.148c0-2.858-2.278-5.186-5.076-5.186S6.928 8.4 6.928 11.258c0 1.697.802 3.2 2.041 4.148-3.025.91-5.182 3.143-5.298 5.821a.735.735 0 0 0 .691.773h.032a.735.735 0 0 0 .724-.706c.116-2.674 3.201-4.845 6.885-4.845 3.68 0 6.77 2.176 6.885 4.845a.73.73 0 0 0 .724.706h.033a.735.735 0 0 0 .69-.773c-.115-2.678-2.273-4.91-5.298-5.821m-3.034-7.845c2 0 3.624 1.659 3.624 3.702s-1.624 3.702-3.624 3.702-3.623-1.664-3.623-3.702c0-2.043 1.624-3.702 3.623-3.702"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.898 3.669c0 1.588-4.078 1.668-4.895 1.668S7.11 5.257 7.11 3.67 11.187 2 12.003 2c.817 0 4.895.08 4.895 1.669m-1.239 0c-.468-.237-1.73-.555-3.656-.555-1.925 0-3.187.318-3.656.555.469.237 1.73.554 3.656.554s3.188-.317 3.656-.554m-.622 11.737a5.22 5.22 0 0 0 2.042-4.148c0-2.858-2.278-5.186-5.076-5.186S6.928 8.4 6.928 11.258c0 1.697.802 3.2 2.041 4.148-3.025.91-5.182 3.143-5.298 5.821a.735.735 0 0 0 .691.773h.033a.735.735 0 0 0 .723-.706c.116-2.674 3.202-4.845 6.885-4.845 3.68 0 6.77 2.176 6.885 4.845a.73.73 0 0 0 .724.706h.033a.735.735 0 0 0 .69-.773c-.115-2.678-2.273-4.91-5.298-5.821m-3.034-7.845c2 0 3.624 1.659 3.624 3.702s-1.624 3.702-3.624 3.702-3.623-1.664-3.623-3.702c0-2.043 1.624-3.702 3.623-3.702"
                />
            </svg>
        );
    }
};

export default IconAngelRegular;
