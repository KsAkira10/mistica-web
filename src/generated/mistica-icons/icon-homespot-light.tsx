/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHomespotLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.903 8.272c0 .2-.158.363-.353.363a.359.359 0 01-.353-.363c0-3.608-2.857-6.546-6.365-6.546a.359.359 0 01-.353-.363c0-.2.159-.363.353-.363 3.898 0 7.071 3.263 7.071 7.272zm-2.83.363a.359.359 0 00.354-.363c0-2.607-2.06-4.726-4.595-4.726a.359.359 0 00-.353.364c0 .2.159.363.353.363 2.141 0 3.889 1.792 3.889 3.999 0 .2.158.363.353.363zm-2.47 12.002c0 .2-.16.363-.354.363H7.11V8.272c0-1.001.792-1.82 1.77-1.82h4.952c.973 0 1.77.814 1.77 1.82v8.003c0 .2-.158.363-.353.363a.359.359 0 01-.353-.363V8.272c0-.6-.475-1.09-1.06-1.09H8.88c-.584 0-1.06.49-1.06 1.09v12.002h7.43c.194 0 .352.163.352.363zm-4.247-9.455c-.778 0-1.412-.652-1.412-1.453 0-.805.633-1.457 1.412-1.452.779 0 1.412.651 1.412 1.452 0 .8-.633 1.453-1.412 1.453zm0-.727c.39 0 .706-.326.706-.726a.711.711 0 00-.706-.726.717.717 0 00-.706.726c0 .4.317.726.706.726zm3.893 8.73c.39 0 .706-.326.706-.727a.714.714 0 00-.706-.726.717.717 0 00-.706.726c0 .4.317.726.706.726z"
            />
        </svg>
    );
};

export default IconHomespotLight;
