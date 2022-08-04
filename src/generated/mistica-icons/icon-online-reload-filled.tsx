/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOnlineReloadFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.555 4.885c1.101 0 1.942.328 2.505.972.52.6.787 1.468.787 2.583v4.94c0 1.116-.264 1.984-.788 2.583-.563.642-1.406.97-2.504.97H5.446c-1.1 0-1.941-.328-2.504-.972-.521-.6-.787-1.468-.787-2.583V8.44c0-1.115.266-1.984.787-2.583.563-.644 1.406-.972 2.504-.972h13.11zM2.75 19.117h18.504c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56H2.749a.562.562 0 00-.56.56c0 .308.252.56.56.56zm7.602-7.08l.002-.006-.002-.011a.423.423 0 00-.328-.496.423.423 0 00-.496.327 6.74 6.74 0 00-.09.575l-.005.047c-.244-.428-.367-.98-.367-1.652 0-1.877.941-2.79 2.874-2.79a4.57 4.57 0 011.05.112.422.422 0 00.493-.303.423.423 0 00-.296-.515 5.33 5.33 0 00-1.247-.137c-2.395 0-3.714 1.288-3.714 3.63 0 .734.129 1.367.38 1.888l-.033-.009-.235-.064a.422.422 0 00-.224.812l.235.065.207.057c.335.093.548.152.67.175.07.014.137.022.207.022.384 0 .664-.235.754-.646.03-.136.052-.304.075-.474l.014-.104a6.55 6.55 0 01.076-.504zm5.297-2.891a.422.422 0 00.518-.295.413.413 0 00-.294-.51l-.235-.064-.236-.065a11.17 11.17 0 00-.644-.167c-.485-.098-.854.143-.958.627-.03.135-.053.303-.076.474l-.014.103a6.22 6.22 0 01-.075.504c-.003 0-.003.003-.003.006-.045.227.1.448.328.496a.422.422 0 00.495-.328 6.74 6.74 0 00.09-.574l.006-.048c.243.429.367.98.367 1.653 0 1.877-.941 2.79-2.874 2.79a4.493 4.493 0 01-1.04-.112.42.42 0 10-.196.818c.404.092.821.137 1.236.134 2.395 0 3.714-1.288 3.714-3.63 0-.734-.129-1.367-.38-1.888l.035.011.236.065z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOnlineReloadFilled;
