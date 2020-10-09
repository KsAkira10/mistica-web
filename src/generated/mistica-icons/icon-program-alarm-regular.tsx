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

const IconProgramAlarmRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M6.045 17.737h13.83c-1.449-2.093-1.295-4.897-1.286-5.042V8.93c0-1.84-.519-3.25-1.538-4.199-1.62-1.504-4.023-1.358-4.048-1.367-.017.009-.033 0-.042 0-.017 0-.03.009-.047 0-.146-.008-3.538-.193-4.953 2.591 3.311.087 5.235 1.84 5.235 5.468 0 3.74-2.039 5.485-5.52 5.485-.398 0-.77-.031-1.124-.073a6.198 6.198 0 01-.507.902zm8.303 2.398c.322-.356.42-.838.45-1.19h-3.68c.025.352.12.837.445 1.198.308.33.762.499 1.393.499.63-.003 1.084-.171 1.392-.507zM3.373 11.423c0 2.919 1.37 4.277 4.305 4.277 2.936 0 4.306-1.358 4.306-4.277.002-2.919-1.367-4.277-4.306-4.277-2.935 0-4.305 1.358-4.305 4.277zm18.25 6.451c.2.16.274.426.184.667a.588.588 0 01-.566.4h-5.227c-.033.55-.185 1.362-.759 1.995-.535.602-1.31.907-2.3.907-.988 0-1.764-.305-2.3-.907-.573-.636-.72-1.448-.753-1.995H4.678a.591.591 0 01-.566-.4.584.584 0 01.188-.667c.412-.339.754-.779 1.034-1.302-2.034-.67-3.174-2.35-3.174-5.149 0-3.328 1.619-5.073 4.443-5.412 1.507-3.958 5.924-3.868 6.353-3.843.364-.025 3.002-.098 4.918 1.68 1.28 1.183 1.927 2.889 1.927 5.082v3.804c-.005.073-.184 3.507 1.821 5.14zM8.946 13.686L7.25 12a.596.596 0 01-.18-.426V9.29c0-.334.272-.603.608-.603.334 0 .608.27.608.603v2.033l1.521 1.51s.496.4.496.734c0 .38-.291.54-.625.549-.308.008-.616-.314-.73-.429z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconProgramAlarmRegular;
