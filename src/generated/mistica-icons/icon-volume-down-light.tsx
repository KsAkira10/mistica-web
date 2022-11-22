/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVolumeDownLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.703 2.368V21.63a.374.374 0 01-.185.323.363.363 0 01-.37-.005l-1.384-.811a.372.372 0 01.375-.64l.83.483V3.012l-9.636 5.6a.363.363 0 01-.185.053H2.74v6.668h2.408c.067 0 .128.018.185.052l4.993 2.892a.37.37 0 11-.374.64l-4.908-2.845H2.37a.37.37 0 01-.37-.37V8.295a.37.37 0 01.37-.37h2.679l10.1-5.875a.368.368 0 01.37 0 .361.361 0 01.184.318zM12 19.036a.74.74 0 000 1.48.74.74 0 000-1.48zm5.183-7.407h4.447a.37.37 0 010 .74h-4.447a.37.37 0 010-.74z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVolumeDownLight;
