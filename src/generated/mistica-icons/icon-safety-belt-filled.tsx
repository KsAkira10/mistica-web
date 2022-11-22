/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSafetyBeltFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.029 8.724a.654.654 0 00.042-.044l.916-.922a.82.82 0 000-1.162l-2.323-2.328a.807.807 0 00-.554-.241l-1.723-.05L6.805 2.39a.822.822 0 00-1.16 0L2.404 5.64a.825.825 0 000 1.165l1.594 1.6.112 1.668a.813.813 0 00.238.527l2.322 2.33a.82.82 0 001.16 0l4.199-4.205zm9.577 9.628l-3.241 3.246a.807.807 0 01-.58.241.807.807 0 01-.58-.24l-1.7-1.704-1.799-.106a.827.827 0 01-.532-.238l-2.46-2.462a.825.825 0 010-1.163l.376-.378-1.342-1.345a.82.82 0 01-.24-.582.83.83 0 01.24-.583l3.241-3.25a.817.817 0 011.16 0l1.342 1.345.375-.375a.817.817 0 011.16 0l2.456 2.462a.816.816 0 01.236.502l.168 1.748 1.72 1.72a.82.82 0 010 1.162z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSafetyBeltFilled;
