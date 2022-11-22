/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconIotSensorTemperatureFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.91 15.148V4.963C14.91 3.333 13.602 2 12 2S9.09 3.332 9.09 4.963v10.185c-.69.74-1.09 1.74-1.09 2.779C8 20.189 9.783 22 12 22c2.216 0 4-1.816 4-4.073 0-1.038-.4-2.039-1.09-2.779zM12 19.781c-1.02 0-1.82-.816-1.82-1.854 0-.816.544-1.517 1.27-1.74V4.963c0-.294.257-.554.545-.554.29 0 .545.26.545.554v11.224a1.829 1.829 0 011.271 1.74c.01 1.038-.791 1.854-1.811 1.854zm.726-1.854a.734.734 0 00-.726-.74c-.4 0-.726.332-.726.74s.326.74.726.74c.4 0 .726-.332.726-.74z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconIotSensorTemperatureFilled;
