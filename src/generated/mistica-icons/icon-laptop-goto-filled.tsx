/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLaptopGotoFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M22 16.127v-.712h-1.787v-8.26c0-1.19-.965-2.155-2.144-2.155H5.927c-1.184 0-2.144.97-2.144 2.156v2.693h6.089l-.187-.188a1.261 1.261 0 010-1.78 1.245 1.245 0 011.769 0l3.204 3.223-3.204 3.222a1.243 1.243 0 01-1.765 0 1.262 1.262 0 010-1.78l.188-.188h-6.09v3.052H2v.717A2.866 2.866 0 004.857 19h14.286A2.866 2.866 0 0022 16.127zm-11.813-7.74a.533.533 0 01.76 0l2.706 2.717-2.702 2.716a.531.531 0 01-.38.156.54.54 0 01-.38-.92l1.409-1.415H2.535A.534.534 0 012 11.104c0-.299.238-.538.535-.538h9.06L10.187 9.15a.54.54 0 010-.763z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLaptopGotoFilled;
