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

const IconEmailRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.502 17.527c-.154.182-.471.224-.706.23-1.513.025-15.762-.003-15.92 0a.53.53 0 01-.296-.138c-.18-.173-.216-.495-.216-.733V8.174l6.832 4.294a3.04 3.04 0 001.661.513c.47 0 1.009-.123 1.563-.485l7.216-4.347-.011 8.737.008.095c-.003.003.045.342-.131.546M3.888 6.217l16.263.002c.014 0 .342.011.451.552l-7.826 4.717c-.966.63-1.835.039-1.9-.009l-7.49-4.708c.026-.163.08-.342.18-.448.05-.048.132-.107.322-.107m17.941 10.63l.014-9.776c-.045-1.711-1.224-2.075-1.706-2.047L3.891 5.02c-.482 0-.9.168-1.202.487-.571.6-.532 1.51-.526 1.577v9.799c0 .68.193 1.215.577 1.588.49.476 1.103.493 1.15.479.387 0 6.52.014 11.093.014a437.3 437.3 0 004.835-.014c.89-.014 1.373-.373 1.62-.667.453-.549.42-1.221.391-1.437"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEmailRegular;
