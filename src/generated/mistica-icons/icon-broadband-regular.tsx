/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBroadbandRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.928 10.929a.564.564 0 00.952.4c1.054-1.022 1.589-2.537 1.589-4.504 0-1.974-.538-3.493-1.6-4.515a.559.559 0 00-.792.014.559.559 0 00.014.793c.832.804 1.255 2.05 1.255 3.708 0 1.653-.42 2.897-1.247 3.7a.56.56 0 00-.17.404zm-1.686-.84a.562.562 0 01-.56-.56c0-.152.061-.298.17-.401.508-.493.765-1.266.765-2.3 0-1.034-.258-1.815-.77-2.305a.561.561 0 01.779-.807c.736.706 1.109 1.754 1.109 3.11 0 1.35-.373 2.394-1.104 3.106a.57.57 0 01-.39.157zm-2.079 8.854c-.29 0-.532-.09-.7-.258-.168-.168-.25-.397-.25-.686 0-.583.365-.944.95-.944.586 0 .95.361.95.944 0 .289-.084.518-.25.686-.165.168-.411.258-.7.258zm-3.443-.258c.169.168.41.258.701.258s.535-.09.7-.258c.166-.168.25-.397.25-.686 0-.583-.364-.944-.95-.944-.585 0-.95.361-.95.944 0 .289.082.518.25.686z"
            />
            <path
                fill={fillColor}
                d="M7.914 13.887h10.644c1.07 0 1.9.3 2.468.888.546.566.824 1.375.824 2.403v1.373c0 1.028-.278 1.835-.824 2.403-.568.591-1.4.888-2.468.888H5.446c-1.07 0-1.899-.3-2.467-.888-.547-.569-.824-1.375-.824-2.403v-1.373c0-1.028.277-1.835.824-2.403.568-.591 1.397-.888 2.467-.888h1.348V6.825c0-.308.252-.56.56-.56.308 0 .56.252.56.56v7.062zm-2.468 1.12c-.753 0-1.31.185-1.66.547-.34.35-.51.896-.51 1.624v1.373c0 .728.17 1.274.51 1.624.35.362.907.547 1.66.547h13.112c.754 0 1.311-.185 1.662-.547.338-.35.51-.896.51-1.624v-1.373c0-.728-.172-1.274-.51-1.624-.35-.362-.908-.547-1.662-.547H5.446z"
            />
        </svg>
    );
};

export default IconBroadbandRegular;
