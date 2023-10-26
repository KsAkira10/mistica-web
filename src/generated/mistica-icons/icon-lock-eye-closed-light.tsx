/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLockEyeClosedLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.806 9.715h-.34V7.62c0-3.098-2.45-5.619-5.46-5.619-3.011 0-5.461 2.521-5.461 5.62v2.103h-.339c-.939 0-1.706.79-1.706 1.756v8.42c0 .967.767 1.756 1.706 1.756h8.184c.19 0 .338-.156.338-.348a.342.342 0 0 0-.338-.35H6.206c-.56 0-1.02-.468-1.02-1.045V11.47c0-.577.46-1.05 1.02-1.05h11.592c.56 0 1.02.473 1.02 1.05v8.42c0 .374-.198.726-.514.91a.35.35 0 0 0-.124.482.33.33 0 0 0 .467.128c.53-.309.853-.894.853-1.52v-8.42c.004-.966-.756-1.756-1.694-1.756ZM7.234 7.62c0-2.705 2.143-4.91 4.772-4.91 2.629 0 4.771 2.205 4.771 4.91v2.104H7.234V7.62Z"
            />
            <path
                fill={fillColor}
                d="M10.3 15.683c0-.966.767-1.755 1.706-1.755.938 0 1.706.79 1.706 1.755 0 .966-.768 1.756-1.706 1.756-.939 0-1.706-.79-1.706-1.756Zm.685.008c0 .577.46 1.05 1.02 1.05.562 0 1.021-.473 1.021-1.05 0-.577-.46-1.05-1.02-1.05-.561 0-1.02.473-1.02 1.05Z"
            />
            <path
                fill={fillColor}
                d="M12.006 12.878c-3.897 0-5.024 2.523-5.086 2.662l-.001.003a.342.342 0 0 0 0 .277l.001.003c.065.146 1.186 2.662 5.086 2.662 3.897 0 5.023-2.523 5.086-2.663v-.002a.341.341 0 0 0 0-.277v-.003c-.063-.139-1.19-2.662-5.086-2.662Zm0 4.91c-2.988 0-4.117-1.612-4.394-2.105.277-.489 1.414-2.104 4.394-2.104 2.995 0 4.117 1.611 4.393 2.104-.276.49-1.413 2.105-4.393 2.105ZM16.438 22a.688.688 0 0 0 .678-.697.688.688 0 0 0-.678-.698.688.688 0 0 0-.677.698c0 .385.303.697.677.697Z"
            />
        </svg>
    );
};

export default IconLockEyeClosedLight;
