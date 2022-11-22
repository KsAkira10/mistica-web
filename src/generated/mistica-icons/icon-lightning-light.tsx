/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLightningLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.832 11.208a.41.41 0 01.3.292.409.409 0 01-.104.406L8.437 21.72a.405.405 0 01-.516.056.421.421 0 01-.156-.502l2.874-7.417-4.477-1.095a.412.412 0 01-.297-.289.43.43 0 01.098-.406l9.21-9.77a.405.405 0 01.519-.062c.165.11.23.322.157.507l-2.9 7.275 4.883 1.19zm-6.258 2.513l-2.316 5.983 7.678-7.854-4.636-1.13a.419.419 0 01-.286-.563l2.274-5.708-7.235 7.678 4.238 1.037a.41.41 0 01.266.212.422.422 0 01.017.345z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLightningLight;
