/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDollarSymbolRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.943 11.066c.664.101 1.33.247 1.97.552a4.035 4.035 0 012.26 2.983c.252 1.443-.224 2.961-1.277 4.062a5.205 5.205 0 01-2.956 1.54v.65c0 .538-.423.975-.944.975-.52 0-.944-.437-.944-.975v-.633a8.57 8.57 0 01-3.893-1.535.995.995 0 01-.233-1.358l.012-.016.01-.015c.3-.415.88-.51 1.295-.21a6.763 6.763 0 002.815 1.165v-5.479c-1.05-.182-2.132-.51-2.997-1.44-.787-.846-1.149-1.974-1.017-3.179a5.06 5.06 0 012.14-3.563 5.017 5.017 0 011.871-.773v-.672A.96.96 0 0112 2.17a.96.96 0 01.944.975v.616a6.764 6.764 0 013.373 1.479c.403.347.465.95.134 1.37l-.014.017-.014.016a.92.92 0 01-1.3.107 4.864 4.864 0 00-2.179-1.009v5.325zM9.423 9.98c.42.454.988.662 1.632.796V5.834c-.288.092-.571.21-.835.386a3.12 3.12 0 00-1.3 2.152c-.05.437 0 1.07.502 1.607zm5.134 7.311c.61-.638.902-1.535.764-2.344-.086-.49-.367-1.157-1.204-1.56-.348-.168-.75-.264-1.174-.342v5.151c.602-.151 1.163-.431 1.614-.905z"
            />
        </svg>
    );
};

export default IconDollarSymbolRegular;
