/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAlarmClockRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.803 6.79a9.41 9.41 0 013.83-3.414.73.73 0 00.338-.965.717.717 0 00-.957-.34A10.792 10.792 0 002.596 6a.717.717 0 00.603 1.109.7.7 0 00.604-.32zm13.191-4.72c1.802.87 3.33 2.224 4.418 3.93.218.34.119.79-.219 1.01a.764.764 0 01-.385.112.72.72 0 01-.603-.333 9.41 9.41 0 00-3.83-3.413.73.73 0 01-.338-.965.718.718 0 01.957-.34zM11.29 6.801a.72.72 0 01.714-.72.72.72 0 01.714.724v6.506H8.415a.72.72 0 01-.714-.721.72.72 0 01.714-.721h2.874V6.8z"
            />
            <path
                fill={fillColor}
                d="M21.146 12.41c0-5.084-4.105-9.226-9.142-9.226-5.038 0-9.142 4.142-9.142 9.226a9.252 9.252 0 002.802 6.642l-1.699 1.714A.723.723 0 004.474 22a.713.713 0 00.508-.212l1.794-1.811A9.004 9.004 0 0012 21.643a9.004 9.004 0 005.224-1.666l1.794 1.81a.712.712 0 001.016 0 .723.723 0 000-1.02l-1.699-1.715a9.241 9.241 0 002.81-6.642zm-16.851 0c0-4.287 3.461-7.78 7.709-7.78 4.247 0 7.709 3.493 7.709 7.78 0 4.286-3.462 7.78-7.71 7.78-4.247 0-7.708-3.486-7.708-7.78z"
            />
        </svg>
    );
};

export default IconAlarmClockRegular;
