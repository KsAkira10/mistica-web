/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconExitFullscreenRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.99 14.797a.845.845 0 010 1.69h-4.507v4.509a.845.845 0 01-1.689 0V15.64c0-.468.378-.843.843-.843h5.353zm-12.644 0c.465 0 .843.378.843.843v5.353a.845.845 0 01-1.686 0v-4.51h-4.51a.84.84 0 01-.812-.874.846.846 0 01.812-.812h5.353zm0-12.647c.465 0 .843.378.843.843v5.353a.844.844 0 01-.843.843H2.993a.845.845 0 010-1.689H7.5V2.993c0-.465.378-.843.846-.843zm7.294 7.04a.844.844 0 01-.843-.844V2.993a.845.845 0 011.686 0V7.5h4.51a.845.845 0 010 1.69H15.64z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExitFullscreenRegular;
