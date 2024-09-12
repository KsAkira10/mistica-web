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

const IconPreOrderRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.493 5.242c.104-.396-.138-.792-.484-.865a.665.665 0 0 0-.83.505l-2.112 8.309H8.013L5.655 3.472c-.104-.72-.938-1.3-1.837-1.3h-.657c-.38 0-.691.323-.691.72s.311.72.691.72h.657c.208 0 .415.109.484.18L7.564 17.2c-.868.396-1.456 1.265-1.456 2.31 0 .685.242 1.302.726 1.77.45.469 1.076.72 1.698.72 1.352 0 2.424-1.12 2.424-2.526 0-.396-.07-.756-.242-1.085h4.99a2.75 2.75 0 0 0-.242 1.085c0 1.41 1.076 2.527 2.424 2.527.657 0 1.249-.252 1.733-.757.45-.468.691-1.121.691-1.77 0-1.41-1.075-2.526-2.424-2.526H8.912v-.108L8.36 14.6H19.1zM8.532 20.594a.92.92 0 0 1-.726-.324c-.208-.18-.311-.468-.311-.757 0-.612.45-1.085 1.04-1.085.277 0 .554.108.727.324q.31.325.311.757c0 .617-.453 1.085-1.041 1.085m10.084-.324a.98.98 0 0 1-.726.324c-.588 0-1.041-.468-1.041-1.085q0-.432.311-.757a.98.98 0 0 1 .726-.324c.592 0 1.041.469 1.041 1.085q0 .432-.31.757"
                />
                <path
                    fill={fillColor}
                    d="M11.064 5.427c0-.289-.242-.54-.519-.54h-.519c.519-.83 1.283-1.41 2.182-1.663 2.044-.576 4.122.685 4.68 2.82a3.95 3.95 0 0 1-.38 2.998c-.52.905-1.319 1.59-2.321 1.842-2.044.577-4.122-.684-4.68-2.819a7 7 0 0 1-.138-.905c0-.288-.242-.54-.518-.54-.277 0-.519.252-.519.54 0 .397.07.793.173 1.158.588 2.238 2.532 3.756 4.68 3.756.414 0 .829-.072 1.248-.18 1.248-.361 2.285-1.194 2.946-2.347a5.07 5.07 0 0 0 .484-3.828c-.668-2.679-3.334-4.269-5.9-3.544-1.038.289-1.906.901-2.563 1.77v-.252c0-.288-.242-.54-.518-.54-.277 0-.519.252-.519.54v2.274h2.182c.277 0 .519-.252.519-.54"
                />
                <path
                    fill={fillColor}
                    d="M13.211 3.765c-.277 0-.519.252-.519.54V7.27l1.422 1.553c.103.108.242.18.38.18a.43.43 0 0 0 .346-.144.575.575 0 0 0 .034-.756L13.73 6.836v-2.53c0-.289-.242-.541-.519-.541"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.493 5.242c.104-.396-.138-.792-.484-.865a.665.665 0 0 0-.83.505l-2.112 8.309H8.013L5.655 3.472c-.104-.72-.938-1.3-1.837-1.3h-.657c-.38 0-.691.323-.691.72s.311.72.691.72h.657c.208 0 .415.109.484.18L7.564 17.2c-.868.396-1.456 1.265-1.456 2.31 0 .685.242 1.302.726 1.77.45.469 1.076.72 1.698.72 1.352 0 2.424-1.12 2.424-2.526 0-.396-.07-.756-.242-1.085h4.99a2.75 2.75 0 0 0-.242 1.085c0 1.41 1.076 2.527 2.424 2.527.657 0 1.249-.252 1.733-.757.45-.468.691-1.121.691-1.77 0-1.41-1.075-2.526-2.424-2.526H8.912v-.108L8.36 14.6H19.1zM8.532 20.594a.92.92 0 0 1-.726-.324c-.208-.18-.311-.468-.311-.757 0-.612.45-1.085 1.04-1.085.277 0 .554.108.727.324q.31.325.311.757c0 .617-.453 1.085-1.041 1.085m10.084-.324a.98.98 0 0 1-.726.324c-.588 0-1.041-.468-1.041-1.085q0-.432.311-.757a.98.98 0 0 1 .726-.324c.592 0 1.041.469 1.041 1.085q0 .432-.31.757"
                />
                <path
                    fill={fillColor}
                    d="M11.064 5.427c0-.289-.242-.54-.519-.54h-.519c.519-.83 1.283-1.41 2.182-1.663 2.044-.576 4.122.685 4.68 2.82a3.95 3.95 0 0 1-.38 2.998c-.52.905-1.319 1.59-2.321 1.842-2.044.577-4.122-.684-4.68-2.819a7 7 0 0 1-.138-.905c0-.288-.242-.54-.518-.54-.277 0-.519.252-.519.54 0 .397.07.793.173 1.158.588 2.238 2.532 3.756 4.68 3.756.414 0 .829-.072 1.248-.18 1.248-.361 2.285-1.194 2.946-2.347a5.07 5.07 0 0 0 .484-3.828c-.668-2.679-3.334-4.269-5.9-3.544-1.038.289-1.906.901-2.563 1.77v-.252c0-.288-.242-.54-.518-.54-.277 0-.519.252-.519.54v2.274h2.182c.277 0 .519-.252.519-.54"
                />
                <path
                    fill={fillColor}
                    d="M13.211 3.765c-.277 0-.519.252-.519.54V7.27l1.422 1.553c.103.108.242.18.38.18a.43.43 0 0 0 .346-.144.575.575 0 0 0 .034-.756L13.73 6.836v-2.53c0-.289-.242-.541-.519-.541"
                />
            </svg>
        );
    }
};

export default IconPreOrderRegular;
