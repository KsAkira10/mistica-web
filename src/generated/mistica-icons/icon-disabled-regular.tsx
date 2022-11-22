/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDisabledRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.313 18.576l-1.062-3.944c-.24-.9-1.162-1.606-2.102-1.606H14.5l-1.55-5.628a2.968 2.968 0 001.276-2.437C14.227 3.33 12.915 2 11.299 2 9.684 2 8.372 3.327 8.372 4.96c0 .868.372 1.649.967 2.19-.427.395-.7.96-.7 1.58v3.584c0 1.166.976 2.153 2.13 2.153h4.529c.05.294.077.597.077.895 0 2.87-2.306 5.201-5.142 5.201-2.837 0-5.142-2.332-5.142-5.2 0-1.841.93-3.508 2.491-4.458a.718.718 0 00.24-.982.701.701 0 00-.97-.243c-1.994 1.21-3.182 3.337-3.182 5.687C3.67 19.026 6.611 22 10.228 22s6.558-2.974 6.558-6.633a7.29 7.29 0 00-.059-.895h.413c.304 0 .658.266.736.546l1.062 3.943a.708.708 0 00.871.5.73.73 0 00.504-.885zm-9.018-15.14c.83 0 1.507.685 1.507 1.525a1.52 1.52 0 01-1.512 1.524A1.523 1.523 0 019.788 4.96c0-.845.676-1.524 1.507-1.524zm-1.24 8.874V8.725c0-.363.35-.716.709-.716h.88l1.38 5.021h-2.26v-.004c-.359 0-.708-.354-.708-.716z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDisabledRegular;
