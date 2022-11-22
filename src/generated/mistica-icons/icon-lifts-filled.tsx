/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLiftsFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.029 3.787V22H2.91V3.787C2.91 2.805 3.709 2 4.694 2h8.555c.981 0 1.78.805 1.78 1.787zM7.724 6.645c0 .685.556 1.248 1.24 1.248a1.248 1.248 0 00.005-2.496c-.689 0-1.245.562-1.245 1.248zm12.653 4.288a.693.693 0 01-.502-.21l-1.278-1.28-1.277 1.28a.712.712 0 01-1.009 0 .716.716 0 010-1.011l2.286-2.29 2.286 2.29a.715.715 0 01-.506 1.22zm.502 3.36a.715.715 0 000-1.01.712.712 0 00-1.009 0l-1.277 1.28-1.278-1.28a.712.712 0 00-1.009 0 .716.716 0 000 1.01l2.287 2.29 2.285-2.29zM10.784 8.08c.31-.398.502-.896.502-1.435 0-1.28-1.04-2.323-2.317-2.323a2.323 2.323 0 00-2.318 2.323c0 .544.187 1.042.501 1.435-.912.375-1.57 1.285-1.57 2.313v4.823h1.069v3.927a.532.532 0 101.068 0v-4.997H6.651v-3.748c0-.773.652-1.427 1.423-1.427H9.86c.771 0 1.424.654 1.424 1.427v3.748h-1.068v5.001c0 .298.237.535.534.535a.532.532 0 00.534-.535v-3.926h1.068v-4.828h.004c0-1.028-.662-1.938-1.57-2.313z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLiftsFilled;
