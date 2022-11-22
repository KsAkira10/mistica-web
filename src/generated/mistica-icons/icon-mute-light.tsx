/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMuteLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.53 15.182V2.372a.378.378 0 00-.175-.322.336.336 0 00-.353 0l-7.51 4.59c-.012.007-.02.017-.03.026a.076.076 0 01-.02.02l-4.36-4.575a.335.335 0 00-.497 0 .38.38 0 000 .522l12.242 12.853v5.5l-9.171-5.6a.333.333 0 00-.177-.052H3.184V8.668h2.294a.378.378 0 00.177-.047l.555-.337a.387.387 0 00.131-.507.35.35 0 00-.483-.138l-.47.285H2.832a.362.362 0 00-.352.37v7.405c0 .204.158.37.352.37h2.552l9.618 5.874a.34.34 0 00.352.005.378.378 0 00.177-.323v-5.404l3.454 3.627a.344.344 0 00.249.109c.09 0 .18-.038.248-.11a.376.376 0 000-.52l-3.951-4.145zM7.945 7.218l6.882-4.201v11.426L7.944 7.218zM20.824 22c.387 0 .704-.332.704-.74 0-.407-.316-.74-.705-.74-.388 0-.704.333-.704.74 0 .408.316.74.704.74z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMuteLight;
