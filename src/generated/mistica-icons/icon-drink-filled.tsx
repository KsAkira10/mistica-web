/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDrinkFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.204 2.239l3.678 2.047c.3.174.409.546.238.84a.614.614 0 01-.849.241l-2.955-1.641-.347 1.45h.781c.807 0 1.465.656 1.465 1.46l-.258 2.188-1.38 11.636c0 .728-.65 1.383-1.457 1.383H6.89c-.81 0-1.465-.655-1.465-1.459l-1.38-11.56-.25-2.112c0-.877.658-1.532 1.465-1.532h9.428l.608-2.544a.6.6 0 01.359-.423.611.611 0 01.549.026zm.765 4.324c0-.042-.099-.14-.216-.14h-1.081l-.575 2.404H13.81l.583-2.404h-9.13a.215.215 0 00-.215.216l.258 2.188h8.504l-2.457 10.235a.621.621 0 00.465.745l.02.003a.619.619 0 00.732-.468l2.528-10.515h1.606l.266-2.264zM9.697 17.87c.14 0 .3-.06.465-.224.442-.44.126-.821.03-.91l-.041-.043a.698.698 0 00-.449-.19c-.131 0-.29.05-.456.216-.434.428-.118.817-.025.91l.042.042a.635.635 0 00.434.199zm-1.558-3.813c.244 0 .535-.1.84-.406.774-.778.216-1.46.051-1.624a.634.634 0 00-.075-.084c-.098-.09-.398-.348-.799-.348-.249 0-.54.098-.832.398-.781.77-.207 1.468-.05 1.633.017.025.05.059.076.084.098.098.397.347.79.347z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDrinkFilled;
