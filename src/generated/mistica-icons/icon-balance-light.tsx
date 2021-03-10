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

const IconBalanceLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.223 2.15a.31.31 0 01.069.008l-.069-.008a.279.279 0 01.184.069.09.09 0 01.015.012l5.462 5.462c.022.022.04.047.053.073l.007.019c.007.013.01.027.014.04a.312.312 0 01.008.067v13.11c0 .44-.387.826-.827.826H5.576c-.431 0-.826-.395-.826-.826V2.976c0-.417.409-.826.826-.826h7.647zm-.28.56H5.576c-.106 0-.266.16-.266.266v18.026c0 .12.146.266.266.266H18.14c.13 0 .266-.138.266-.266V8.172h-2.45c-.88 0-1.634-.288-2.18-.832-.546-.543-.832-1.296-.832-2.179V2.71zm-2.148 9.023a.28.28 0 01.28.28v7.336a.28.28 0 01-.28.28.28.28 0 01-.28-.28v-7.336a.28.28 0 01.28-.28zm4.053 1.257a.28.28 0 01.28.28l.001.368a2.46 2.46 0 011.07.336c.128.078.198.19.198.31a.322.322 0 01-.322.323.463.463 0 01-.202-.056l-.003-.003a2.211 2.211 0 00-.741-.257l-.001 1.664.006.002c.711.09 1.56.414 1.56 1.46-.005.872-.596 1.446-1.565 1.546v.372a.28.28 0 01-.281.28.28.28 0 01-.28-.28l-.001-.369a2.828 2.828 0 01-1.346-.491.345.345 0 01-.163-.3.334.334 0 01.336-.33.426.426 0 01.224.073c.316.21.634.342.95.393l-.001-1.752-.048-.008c-1.102-.206-1.34-.87-1.34-1.407 0-.83.535-1.398 1.388-1.5v-.374a.28.28 0 01.281-.28zM8.036 7.35a.28.28 0 01.28.28v11.706a.28.28 0 01-.28.28.28.28 0 01-.28-.28V7.629a.28.28 0 01.28-.28zm7.094 9.29l-.001 1.679c.558-.075.893-.393.893-.871 0-.32-.112-.663-.892-.808zm-1.28-1.534c0 .276.09.6.717.76v-1.57c-.449.084-.716.378-.716.81zm4.16-7.493l-4.507-4.504v2.053c0 1.488.964 2.451 2.451 2.451h2.056z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBalanceLight;
