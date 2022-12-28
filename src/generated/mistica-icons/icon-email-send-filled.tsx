/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEmailSendFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.96 11.575a.571.571 0 00.4.418l8.268 2.29L15.023 21 4.107 9.9 10.89 3l2.068 8.575zm-.875-8.467l1.899 7.862L22 13.192 12.085 3.108zm-.648 15.813a.761.761 0 00-.754-.766H5.02a.761.761 0 00-.754.766c0 .423.338.767.754.767h5.663a.761.761 0 00.754-.767zm-4.532-3.837a.76.76 0 01.753.766.761.761 0 01-.753.767H2.754A.761.761 0 012 15.85c0-.422.338-.766.754-.766h4.15z"
            />
        </svg>
    );
};

export default IconEmailSendFilled;
