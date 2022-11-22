/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconEmailSendLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.073 2.5l-7.34 7.698 10.665 11.185a.37.37 0 00.266.117.37.37 0 00.266-.117.402.402 0 000-.558L4.802 10.198l6.03-6.323 1.954 8.008a.395.395 0 00.267.285l7.51 2.197-2.942 3.11a.412.412 0 000 .559.367.367 0 00.532 0L22 13.964 11.073 2.5zm.644 1.796l8.802 9.232-7.055-2.06-1.747-7.172zm4.65 16.011c.416 0 .755-.355.755-.791 0-.437-.338-.792-.755-.792-.416 0-.755.355-.755.792 0 .436.34.791.755.791zm-5.671-.791c0 .218-.17.396-.378.396H4.647a.387.387 0 01-.377-.396c0-.218.169-.396.377-.396h5.671c.209 0 .378.177.378.396zM2.377 16.74h4.157a.388.388 0 00.378-.396.387.387 0 00-.378-.396H2.377a.387.387 0 00-.377.396c0 .218.17.396.377.396z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEmailSendLight;
