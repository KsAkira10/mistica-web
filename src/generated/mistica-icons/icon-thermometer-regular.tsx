/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconThermometerRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.909 4.963V15.15A4.105 4.105 0 0116 17.925C16 20.185 14.218 22 12 22s-4-1.816-4-4.075c0-1.036.4-2.036 1.091-2.776V4.963C9.091 3.336 10.402 2 12 2c1.598 0 2.909 1.336 2.909 2.963zM9.452 17.925c0 1.447 1.13 2.595 2.548 2.595 1.417 0 2.544-1.148 2.548-2.595 0-.74-.326-1.44-.837-1.924a.674.674 0 01-.255-.556V4.963c0-.82-.651-1.483-1.456-1.483-.805 0-1.456.668-1.456 1.483v10.482c0 .22-.11.408-.255.556a2.688 2.688 0 00-.837 1.924z"
                fill={fillColor}
            />
            <path
                d="M12.546 4.963v11.222a1.835 1.835 0 011.272 1.744c0 1.036-.801 1.851-1.818 1.851s-1.818-.815-1.818-1.851a1.83 1.83 0 011.272-1.74V4.963c0-.296.255-.555.546-.555.29 0 .546.26.546.555zM11.274 17.93c0 .404.326.74.726.74a.736.736 0 00.726-.74.74.74 0 00-.726-.74.74.74 0 00-.726.74z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconThermometerRegular;
