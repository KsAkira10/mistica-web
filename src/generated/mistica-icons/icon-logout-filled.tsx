/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLogoutFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.5 5.212v.18H5.62v-.18A3.202 3.202 0 0 1 8.838 2h6.44A3.203 3.203 0 0 1 18.5 5.212ZM5.62 18.788v-.18h12.876v.18A3.202 3.202 0 0 1 15.278 22h-6.44a3.202 3.202 0 0 1-3.218-3.212ZM5.62 6.464v4.284h6.44c.681 0 1.255.572 1.255 1.252s-.574 1.252-1.255 1.252H5.62v4.284H18.5V6.464H5.62Z"
            />
            <path
                fill={fillColor}
                d="M12.06 11.464H3.508l1.394-1.392a.517.517 0 0 0 0-.752.519.519 0 0 0-.753 0L1.5 12l2.649 2.712a.543.543 0 0 0 .397.144.55.55 0 0 0 .396-.144.517.517 0 0 0 0-.752l-1.394-1.392h8.548a.553.553 0 0 0 .537-.536c-.004-.284-.288-.568-.573-.568Z"
            />
        </svg>
    );
};

export default IconLogoutFilled;
