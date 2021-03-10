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

const IconRocketFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M3.91 16.678C3.196 17.395 2 18.92 2 21.095c0 .342.275.62.616.62 2.244 0 3.821-1.343 4.395-1.92.97-.974.97-2.14 0-3.117-.972-.978-2.129-.975-3.1 0m13.067.165a2.617 2.617 0 00-.317-1.535 23.843 23.843 0 01-2.877 2.11c.171.366.334.736.485 1.097.19.454.462 1.101.655 1.376 1.272-1.02 1.953-2.034 2.054-3.048zM5.398 9.518c.325.137.655.283.983.437a23.915 23.915 0 012.095-2.893 2.597 2.597 0 00-1.42-.27c-1.017.104-2.036.802-3.03 2.068.277.193.92.468 1.372.658zm14.619-6.221c-.776-.087-2.527.014-4.454.566l4.302 4.327c.558-1.96.653-3.739.563-4.487a.478.478 0 00-.411-.406zM17.944 14.15c-.118.12-.233.227-.345.334.28.43.715 1.3.608 2.45-.131 1.412-1.017 2.762-2.63 4.014a.999.999 0 01-.894.233c-.703-.165-1.056-1.014-1.549-2.188-.134-.325-.28-.652-.425-.972l-.555.272c-.703.328-1.26.49-1.697.49-.348 0-.62-.103-.824-.308l-4.322-4.344c-.6-.552-.224-1.639.174-2.521l.285-.577a32.733 32.733 0 00-.851-.376c-1.168-.496-2.011-.851-2.177-1.557-.045-.182-.067-.546.252-.922C4.218 6.583 5.56 5.692 6.966 5.557a3.804 3.804 0 012.356.558l.286-.3c3.297-3.314 8.624-3.972 10.554-3.748.78.101 1.384.709 1.485 1.482.202 1.636-.303 7.185-3.703 10.602zm-3.577-4.2c-.577 0-.784-.208-.784-.788 0-.582.204-.787.784-.787.577 0 .784.208.784.787 0 .58-.207.788-.784.788zm0-2.816c-1.26 0-2.014.757-2.014 2.026 0 1.269.753 2.025 2.014 2.025 1.26 0 2.014-.76 2.014-2.025 0-1.266-.754-2.026-2.014-2.026z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRocketFilled;
