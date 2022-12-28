/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPayAsYouGoPoundFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.666 14.545c-.384 0-.696.33-.696.727 0 .397.316.727.696.727h4.592c.384 0 .696-.33.696-.727 0-.397-.316-.727-.696-.727h-2.816c.036-.146.036-.288.036-.435v-1.563h1.392c.384 0 .696-.33.696-.727 0-.4-.316-.727-.696-.727h-1.392V9.64c0-.547.348-.911.872-.911.316 0 .452.071.592.184.276.255.732.255.976-.071.244-.289.244-.765-.068-1.02-.524-.472-1.116-.547-1.496-.547-1.288 0-2.264 1.02-2.264 2.365v1.454h-.348c-.384 0-.696.33-.696.727 0 .402.316.727.696.727h.348v1.563c-.004.255-.176.435-.424.435z"
            />
            <path
                fill={fillColor}
                d="M21.189 17.378a.735.735 0 01.8.619.684.684 0 01-.588.806l-3.724.581-.524-3.89a.727.727 0 01.592-.836.735.735 0 01.8.618l.208 1.563A9.025 9.025 0 0020.181 12c0-4.73-3.656-8.546-8.215-8.546-1.216 0-2.364.289-3.48.836a.73.73 0 01-.94-.364c-.14-.363 0-.798.349-.982A9.516 9.516 0 0112.002 2c5.291 0 9.57 4.471 9.535 10 0 1.998-.56 3.928-1.604 5.562l1.256-.184zm-9.187 3.168a7.96 7.96 0 003.551-.836.641.641 0 01.908.326.748.748 0 01-.316.982 9.094 9.094 0 01-4.143.982c-5.287 0-9.57-4.471-9.57-10 0-1.998.591-3.928 1.635-5.566l-1.256.184c-.384.075-.728-.218-.8-.619a.727.727 0 01.592-.836l3.76-.547.524 3.89a.727.727 0 01-.592.836H6.19a.693.693 0 01-.696-.618L5.287 7.16A8.757 8.757 0 003.823 12c0 4.73 3.656 8.546 8.179 8.546z"
            />
        </svg>
    );
};

export default IconPayAsYouGoPoundFilled;
