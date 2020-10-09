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

const IconSunLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M12.334 18.143h-.594c-1.696-.025-5.625-.655-5.625-6.044 0-5.378 3.896-5.995 5.574-6.012h.118c.168 0 .34 0 .49.009 1.704.042 5.659.709 5.659 6.036.002 5.328-3.93 5.978-5.622 6.011m9.088-6.619h-2.514c-.042 0-.084.017-.128.025-.11-1.922-.712-3.27-1.542-4.198a.171.171 0 00.042-.025l1.822-1.805a.435.435 0 000-.6.423.423 0 00-.603 0l-1.821 1.805c-.009.017-.017.034-.026.042-1.516-1.264-3.413-1.482-4.228-1.516V2.57A.422.422 0 0012 2.15a.419.419 0 00-.423.42v2.682c-.838.017-2.71.21-4.2 1.474-.017-.016-.026-.033-.043-.05L5.572 4.922a.413.413 0 00-.594 0 .42.42 0 000 .6L6.74 7.275a.15.15 0 01.05.033c-.803.928-1.398 2.284-1.498 4.243-.034-.008-.068-.025-.101-.025H2.573a.422.422 0 00-.423.42c0 .238.188.42.423.42h2.618c.033 0 .058-.008.086-.016.05 1.973.592 3.354 1.357 4.332a.176.176 0 00-.05.034l-1.755 1.735a.43.43 0 000 .6.424.424 0 00.297.125.45.45 0 00.272-.1.461.461 0 00.177-.101l1.6-1.592c.017-.017.025-.042.042-.067 1.507 1.39 3.472 1.633 4.36 1.667v2.438a.424.424 0 00.847 0v-2.438c.832-.025 2.872-.252 4.422-1.679.017.026.033.06.059.085l1.591 1.586a.41.41 0 00.298.117c.109 0 .22-.033.305-.117a.435.435 0 000-.6l-1.6-1.586a.21.21 0 00-.104-.067c.796-.978 1.356-2.377 1.399-4.375.033.008.067.017.109.017h2.514a.417.417 0 00.423-.42.416.416 0 00-.418-.42"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSunLight;
