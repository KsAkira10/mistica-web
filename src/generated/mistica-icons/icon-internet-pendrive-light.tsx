/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconInternetPendriveLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.9 5.868a.414.414 0 00.408-.42.418.418 0 00-.409-.423c-6.468 0-9.748 3.381-9.748 10.048 0 .235.182.423.41.423.226 0 .408-.19.408-.423 0-6.194 2.919-9.205 8.93-9.205zm.473 9.308c0-.47-.264-.689-.673-.689-.409 0-.675.219-.678.69 0 .226.062.394.171.51.118.122.292.181.505.181.212 0 .386-.059.504-.182.109-.115.17-.283.17-.51zm-.082-6.308c0 .233-.182.42-.409.42-3.804 0-5.652 1.908-5.652 5.827 0 .232-.182.42-.41.42a.414.414 0 01-.408-.42c0-4.364 2.238-6.67 6.47-6.67.224 0 .41.188.41.423zm8.729 4.742v3.029c0 .198-.154.364-.342.366h-.96V13.25h.98a.37.37 0 01.322.361zm-2.66 4.52h-5.935c-1.799-.068-2.709-1.073-2.709-2.995 0-1.921.91-2.927 2.695-2.986h5.94c.3 0 .547.255.547.572v4.703h.008v.134a.562.562 0 01-.546.572zm3.476-4.53c-.014-.66-.537-1.199-1.17-1.199H20v.003h-.322c-.14-.627-.684-1.098-1.33-1.098h-5.956c-2.255.073-3.498 1.434-3.498 3.83 0 2.389 1.243 3.753 3.498 3.837h5.966c.659 0 1.208-.485 1.337-1.126h.98c.642 0 1.162-.544 1.162-1.207V13.6z"
            />
        </svg>
    );
};

export default IconInternetPendriveLight;
