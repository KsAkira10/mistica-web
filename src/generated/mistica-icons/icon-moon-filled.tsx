/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMoonFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.296 16.355a.423.423 0 00-.493-.056c-1.432.812-2.972.96-3.77.98-.2.008-.449.008-.673.008-1.605-.022-6.837-.616-6.837-7.17 0-4.835 2.792-6.446 5.134-6.947a.42.42 0 00-.011-.824 11.65 11.65 0 00-1.796-.187l-.896-.009c-2.202.031-9.39.82-9.39 9.818 0 1.622.457 9.723 9.457 9.871.297 0 .616 0 .874-.008 1.462-.023 6.395-.457 8.496-4.992a.415.415 0 00-.095-.484z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMoonFilled;
