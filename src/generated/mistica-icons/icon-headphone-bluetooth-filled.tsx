/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHeadphoneBluetoothFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.968 7.084c-1.496 0-2.528.712-2.528 3.424 0 2.712 1.032 3.424 2.528 3.424s2.528-.712 2.528-3.424c0-2.712-1.032-3.424-2.528-3.424Zm-.224 6.372v-2.34l-.976.976-.352-.352 1.224-1.228-1.224-1.232.352-.352.976.976V7.56l1.776 1.776-1.172 1.172 1.172 1.172-1.776 1.776Z"
            />
            <path fill={fillColor} d="m13.244 9.34-1-.568v1.136l1-.568Zm0 2.336-1 .568v-1.132l1 .564Z" />
            <path
                fill={fillColor}
                d="M12 2C6.484 2 2 6.484 2 12v6.252C2 20.388 3.536 22 5.572 22h1.784v-7.5H5.572a3.5 3.5 0 0 0-2.144.716V12c0-4.724 3.848-8.572 8.572-8.572 4.724 0 8.572 3.848 8.572 8.572v3.216a3.483 3.483 0 0 0-2.144-.716h-1.784V22h1.784C20.464 22 22 20.388 22 18.248V12c0-5.516-4.484-10-10-10Z"
            />
        </svg>
    );
};

export default IconHeadphoneBluetoothFilled;
