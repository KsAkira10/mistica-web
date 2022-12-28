/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCutLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.015 14.377c2.414 0 3.825 1.188 3.825 3.736 0 2.54-1.411 3.727-3.825 3.727-2.422 0-3.834-1.187-3.834-3.727 0-.762.143-1.383.378-1.91l-.015-.015a.453.453 0 01-.052-.058c-.773-1.565-1.599-2.327-2.733-2.467a.065.065 0 00-.017.005 2.492 2.492 0 00-1.02.382c-.528.344-.999.901-1.452 1.736.353.574.546 1.319.546 2.251 0 2.54-1.411 3.727-3.825 3.727-2.42.003-3.831-1.187-3.831-3.727s1.411-3.735 3.834-3.735c.386 0 .739.039 1.075.106l1.985-1.932-4.9-4.777c-1.986-1.93-2.238-3.906-.692-5.421a.443.443 0 01.597 0l7.725 7.53 7.735-7.53a.426.426 0 01.588 0c1.554 1.517 1.305 3.491-.68 5.424l-4.868 4.743a.078.078 0 01-.03.02l-.009.004-.003.001 2.033 1.983c.026.025.05.067.068.098a5.602 5.602 0 011.397-.174zm-6.701-1.557c1.918 0 2.977 1.213 3.682 2.467l.647-.562L3.781 3.162c-1.1 1.409-.109 2.907.97 3.957l5.894 5.744a6.31 6.31 0 01.669-.043zm6.7 8.2c2.034 0 2.986-.925 2.986-2.907 0-1.991-.95-2.915-2.985-2.915-2.042 0-2.994.924-2.994 2.915 0 1.982.95 2.907 2.994 2.907zm-7.918-7.527l-.454-.434-1.672 1.63c.27.114.504.262.712.433.437-.722.893-1.254 1.414-1.63zm-4.102 7.454c2.033 0 2.985-.927 2.985-2.91 0-.812-.16-1.442-.488-1.907 0-.008-.008-.008-.008-.008a.673.673 0 00-.06-.093 1.598 1.598 0 01-.032-.047c-.488-.582-1.277-.86-2.397-.86-2.042 0-2.994.927-2.994 2.915 0 1.986.952 2.91 2.994 2.91zm6.39-10.56l1.554 1.515.012-.017a.116.116 0 01.013-.017l4.87-4.752c.772-.744 1.251-1.515 1.405-2.212.123-.627-.02-1.201-.44-1.742l-7.414 7.225zm6.765 7.723c0-.81-.308-1.109-1.137-1.109-.84 0-1.137.289-1.137 1.11 0 .817.297 1.105 1.137 1.105.84 0 1.137-.288 1.137-1.106zm-1.137-1.93c1.249 0 1.98.617 1.98 1.927 0 1.314-.731 1.927-1.98 1.927s-1.977-.613-1.977-1.927c-.003-1.31.728-1.926 1.977-1.926zM7.128 18.036c0-.807-.308-1.11-1.137-1.11-.84 0-1.137.289-1.137 1.11-.003.82.297 1.108 1.137 1.108.84 0 1.137-.29 1.137-1.108zM5.99 16.108c1.249 0 1.98.613 1.98 1.927 0 1.313-.731 1.926-1.98 1.926-1.25 0-1.98-.61-1.98-1.924 0-1.313.728-1.93 1.98-1.93zm5.625-4.357c0-.277-.154-.409-.417-.409s-.417.132-.417.409c0 .28.154.409.417.409.26 0 .417-.13.417-.41z"
            />
        </svg>
    );
};

export default IconCutLight;
