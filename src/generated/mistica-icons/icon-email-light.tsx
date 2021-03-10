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

const IconEmailLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.834 17.817c-.168.199-.462.305-.874.31-1.543.026-16.092 0-16.246 0a.755.755 0 01-.451-.198c-.188-.185-.283-.488-.283-.902V7.682l7.3 4.63c.041.029.68.488 1.568.488.448 0 .964-.118 1.493-.468l7.678-4.664-.009 9.426c0 .003.068.434-.176.723M3.719 5.837l16.586.002c.103.003.593.065.691.883l-8.095 4.918c-1.11.726-2.098.04-2.16-.003L2.986 6.716c.02-.219.081-.521.255-.703.115-.118.272-.177.48-.177m18.106 11.19L21.84 6.93c-.042-1.538-1.012-1.888-1.535-1.908L3.719 5.016c-.434 0-.81.15-1.078.437-.524.554-.488 1.411-.482 1.484v10.087c0 .644.18 1.146.53 1.487.277.27.646.426 1.033.435.098 0 6.555.01 11.333.01 2.415 0 4.398-.002 4.919-.01.667-.012 1.17-.219 1.496-.614.473-.571.364-1.297.356-1.305"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEmailLight;
