/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconAlarmLightLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.472 22.076c.22 0 .41-.14.432-.203l-.003-2.34c-.022-.037-.21-.178-.429-.178H4.622c-.232 0-.404.132-.43.188v2.355c.017.04.192.178.43.178h14.85zM5.942 11.668v6.738h12.206v-6.738c0-4.07-2.054-6.134-6.104-6.134-4.048 0-6.101 2.063-6.101 6.134zm13.53 6.764c.72 0 1.35.513 1.35 1.102v2.364c0 .585-.633 1.102-1.35 1.102H4.622c-.733 0-1.35-.504-1.35-1.102v-2.364c0-.598.62-1.102 1.35-1.102h.404v-6.767c0-4.615 2.429-7.058 7.021-7.058 4.595 0 7.024 2.44 7.024 7.058v6.763h.401v.004zm-7.425-14.83a.462.462 0 01-.46-.463V1.46a.461.461 0 01.92 0v1.682a.46.46 0 01-.46.46zM3.595 9.226c0 .253-.207.46-.46.463H1.46A.464.464 0 011 9.226v-.003c0-.257.207-.464.46-.464h1.672c.253.003.46.21.463.467zm18.945-.432a.461.461 0 010 .92h-1.675a.461.461 0 01-.46-.46V9.25c0-.254.207-.464.46-.464l1.675.007zM4.94 4.945L3.758 3.76a.467.467 0 010-.655.459.459 0 01.648-.003l.003.003 1.183 1.187a.468.468 0 01-.006.657.459.459 0 01-.645-.003zm12.982-.003a.464.464 0 01-.464-.46c0-.122.05-.241.138-.329l1.183-1.19a.459.459 0 01.648-.003l.003.003a.467.467 0 010 .655l-1.183 1.19a.44.44 0 01-.325.134z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmLightLight;
