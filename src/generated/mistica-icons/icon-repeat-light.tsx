/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRepeatLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M3.455 6.708h8.564c2.807 0 5.102 2.4 5.102 5.336 0 1.522-.62 2.971-1.711 3.961a.424.424 0 00-.038.532.376.376 0 00.257.112.4.4 0 00.256-.112 6.131 6.131 0 001.969-4.497c0-3.356-2.622-6.097-5.83-6.097h-8.57L4.62 4.645a.38.38 0 000-.532.342.342 0 00-.508 0L2 6.323l2.113 2.136a.376.376 0 00.256.113.4.4 0 00.257-.113.38.38 0 000-.531l-1.17-1.22zm15.961 8.883a.38.38 0 000 .531l1.203 1.259h-8.6c-2.808 0-5.103-2.4-5.103-5.337 0-.57.075-1.14.257-1.716.074-.19-.038-.42-.22-.498-.182-.078-.4.04-.475.23a7.259 7.259 0 00-.294 1.98c0 3.356 2.621 6.097 5.83 6.097h8.563l-1.166 1.22a.38.38 0 00.257.643.4.4 0 00.256-.112L22 17.718l-2.076-2.171c-.107-.113-.363-.113-.508.044zM8.558 8.23c0-.42-.327-.762-.728-.762-.406 0-.727.342-.727.761 0 .42.326.761.727.761.401 0 .728-.341.728-.76z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRepeatLight;
