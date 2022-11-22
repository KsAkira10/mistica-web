/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMobilePlayLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M20.94 3.08c.607.607.901 1.476.901 2.65v12.557c0 1.182-.294 2.05-.91 2.658-.608.608-1.476.905-2.65.905h-6.274c-1.174 0-2.034-.297-2.65-.902-.54-.532-.838-1.28-.902-2.266v-.558c-.053 0-.105.002-.156.004a3.743 3.743 0 01-.155.005c-3.782-.003-5.989-1.908-5.989-5.995 0-4.078 2.207-5.991 5.989-5.991.054 0 .106.002.157.004.05.002.097.004.145.004v-.429c0-1.156.294-2.02.91-2.635.617-.622 1.485-.936 2.65-.936h6.275c1.182.006 2.05.308 2.658.924zm.08 2.65c0-.945-.212-1.625-.663-2.076-.451-.451-1.123-.673-2.076-.673h-6.274c-.936 0-1.617.23-2.068.69-.45.459-.672 1.131-.672 2.058v.485c3.093.361 4.866 2.274 4.866 5.924 0 3.65-1.773 5.563-4.858 5.925v.582c.048.754.261 1.33.664 1.714.443.451 1.124.667 2.068.667h6.274c.953 0 1.625-.213 2.076-.667.45-.442.664-1.123.664-2.072V5.729zm-7.708 6.408c0-3.479-1.692-5.17-5.168-5.17-3.48 0-5.168 1.691-5.168 5.17 0 3.48 1.689 5.171 5.168 5.171 3.476 0 5.168-1.692 5.168-5.17zm-2.992.003l-3.524-2.037v4.073l3.524-2.036zm1.028-.356a.409.409 0 010 .709l-4.756 2.748a.41.41 0 01-.613-.356v-5.49a.41.41 0 01.613-.353c0-.003 4.756 2.742 4.756 2.742zm2.734 6.345c0 .328.093.588.277.776.188.193.46.294.788.291.327 0 .6-.1.787-.291.185-.188.277-.448.277-.776 0-.667-.398-1.067-1.064-1.067-.667 0-1.065.397-1.065 1.067z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMobilePlayLight;
