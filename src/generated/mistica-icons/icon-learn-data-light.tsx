/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLearnDataLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.936 2.155c1.647 0 3.21.199 4.403.56 1.664.504 2.507 1.292 2.505 2.34v13.887c0 1.048-.844 1.835-2.505 2.339-1.201.361-2.764.56-4.406.56-1.639 0-3.201-.199-4.4-.557-1.664-.504-2.505-1.291-2.505-2.342v-.246l-.06-.03a.74.74 0 01-.144-.082c-.88-.698-2.087-1.029-2.947-1.183a1.086 1.086 0 01-.893-1.072v-2.432l-1.227-.549a1.001 1.001 0 01-.597-.924c-.003-.4.233-.762.597-.925L8.03 9.14V5.053c0-.165.02-.328.065-.484h.002c.233-.81 1.05-1.435 2.437-1.855 1.194-.361 2.757-.56 4.401-.56zm-4.165 1.347c-1.065.325-1.709.76-1.874 1.266a.057.057 0 00.004.007.052.052 0 01.007.013c.165.501.815.936 1.874 1.258 1.118.336 2.597.524 4.165.524 1.569 0 3.05-.188 4.165-.524 1.034-.314 1.678-.737 1.863-1.222l.007-.007a.029.029 0 00.01-.015c-.151-.53-.784-.966-1.888-1.3-1.12-.336-2.6-.523-4.168-.523-1.569 0-3.048.187-4.165.523zM3.09 12.253a.18.18 0 00-.112.17.18.18 0 00.112.172l5.4 2.42a.19.19 0 00.155 0l5.403-2.42a.18.18 0 00.112-.171.187.187 0 00-.112-.174l-5.4-2.42a.185.185 0 00-.154 0L3.09 12.253zm1.936 4.342c.946.17 2.294.54 3.308 1.347.17.134.411.134.58 0 1.014-.804 2.358-1.174 3.31-1.345a.267.267 0 00.222-.263v-2.117l-3.468 1.551c-.26.115-.557.115-.818 0l-3.356-1.504v2.067c0 .13.093.241.222.264zm14.078 3.899c1.277-.387 1.924-.908 1.922-1.558v-3.254c-.437.336-1.006.621-1.678.826-1.19.361-2.751.56-4.4.56-.654 0-1.292-.036-1.908-.098-.16.224-.4.378-.673.429-.86.154-2.07.484-2.95 1.182a1.24 1.24 0 01-.568.24v.118c0 .647.647 1.168 1.925 1.555 1.12.336 2.602.524 4.162.524 1.563 0 3.045-.185 4.168-.524zM10.547 6.833c-.723-.219-1.286-.496-1.698-.824v3.048c.02.006.04.01.06.012.023.004.046.007.069.016l5.132 2.297c.277.011.557.02.84.02 1.569 0 3.05-.188 4.165-.524 1.11-.337 1.706-.85 1.913-1.238V6.026c-.411.32-.969.591-1.68.807-1.19.361-2.751.56-4.4.56-1.648 0-3.21-.199-4.401-.56zm2.717 7.017v2.322c.549.05 1.112.081 1.689.081 1.568 0 3.05-.188 4.165-.524 1.104-.336 1.706-.848 1.913-1.235v-3.656c-.434.337-1.003.62-1.678.824-1.19.358-2.75.557-4.4.557.014.068.028.135.028.205 0 .406-.23.759-.597.924l-1.12.502z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLearnDataLight;
