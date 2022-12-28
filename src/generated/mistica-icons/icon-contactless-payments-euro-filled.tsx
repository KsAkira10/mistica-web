/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconContactlessPaymentsEuroFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.994 2c-1.882 0-3.42 1.504-3.515 3.388h13.372C17.756 3.504 16.218 2 14.337 2H7.994zm0 20c-1.882 0-3.42-1.504-3.515-3.388h13.372C17.756 20.496 16.218 22 14.337 22H7.994zm13.687-5.318a6.75 6.75 0 00-.117-9.378.699.699 0 00-.997 0 .722.722 0 000 1.01 5.31 5.31 0 01.09 7.385.722.722 0 00.027 1.01.692.692 0 00.487.197.71.71 0 00.51-.224zm-1.777-7.7a4.382 4.382 0 01.126 6.013.681.681 0 01-.519.233.688.688 0 01-.478-.187.726.726 0 01-.04-1.01 2.947 2.947 0 00-.086-4.038.722.722 0 010-1.01.699.699 0 01.997 0zm-2.04-2.524v11.084H4.47V6.458h13.395zm-8.583 4.998c.252-1.317 1.396-2.314 2.768-2.314.492 0 .98.133 1.408.384.253.147.577.06.722-.196a.54.54 0 00-.194-.732 3.835 3.835 0 00-1.94-.53c-1.958 0-3.578 1.481-3.835 3.393h-.568a.53.53 0 00-.528.534.53.53 0 00.528.535h.568c.257 1.912 1.877 3.393 3.835 3.393a3.84 3.84 0 001.94-.53.54.54 0 00.194-.732.526.526 0 00-.722-.196 2.786 2.786 0 01-1.408.384c-1.376 0-2.521-1.002-2.77-2.323h2.946a.53.53 0 00.528-.535.53.53 0 00-.528-.535H9.281z"
            />
        </svg>
    );
};

export default IconContactlessPaymentsEuroFilled;
