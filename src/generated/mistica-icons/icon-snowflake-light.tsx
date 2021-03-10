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

const IconSnowflakeLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.49 12.38h.304a.439.439 0 100-.879h-.187l1.112-1.112a.436.436 0 000-.622.441.441 0 00-.622 0l-1.737 1.737h-1.165l.585-.586a.441.441 0 000-.621.441.441 0 00-.621 0l-1.208 1.207h-3.837l3.678-3.678h2.266a.439.439 0 100-.88h-1.384l.092-.092a.436.436 0 000-.622.436.436 0 00-.621 0l-.02.02V5.014a.439.439 0 10-.88 0v2.12l-3.8 3.79V7.159l1.288-1.288a.441.441 0 000-.622.441.441 0 00-.622 0l-.667.667v-1.21L14.24 2.91a.436.436 0 000-.622.441.441 0 00-.622 0l-1.17 1.171v-.305a.439.439 0 10-.88 0v.305l-1.171-1.17a.441.441 0 00-.622 0 .441.441 0 000 .621l1.795 1.796v1.092l-.549-.55a.441.441 0 00-.622 0 .441.441 0 000 .623l1.171 1.173v3.838L7.892 7.204V5.011a.439.439 0 10-.88 0v1.31l-.091-.092a.436.436 0 00-.622 0 .441.441 0 000 .622l.092.093h-1.31a.439.439 0 100 .88h2.192l3.678 3.677H7.178l-1.207-1.207a.441.441 0 00-.622 0 .436.436 0 000 .622l.586.585H4.652L2.915 9.764a.441.441 0 00-.622 0 .436.436 0 000 .622l1.112 1.112h-.188a.439.439 0 100 .88h.303l-1.23 1.23a.44.44 0 00.311.753.432.432 0 00.311-.129l1.854-1.851h1.21l-.63.63a.436.436 0 000 .622.437.437 0 00.622 0L7.22 12.38h3.765l-3.796 3.795H5.07a.439.439 0 100 .88h1.238l-.02.02a.441.441 0 00.311.75.432.432 0 00.311-.129l.093-.092v1.383a.439.439 0 10.88 0v-2.266l3.677-3.678v3.838l-1.17 1.17a.441.441 0 000 .623c.17.173.45.173.621 0l.55-.55v1.166l-1.796 1.795a.441.441 0 000 .622.44.44 0 00.621 0l1.171-1.17v.187a.439.439 0 10.88 0v-.188l1.17 1.171a.449.449 0 00.312.13.432.432 0 00.31-.13.436.436 0 000-.622l-1.795-1.795v-1.283l.667.664a.437.437 0 00.622 0 .441.441 0 000-.622l-1.289-1.288v-3.765l3.796 3.795v2.19a.439.439 0 10.88 0v-1.31l.019.02a.437.437 0 00.622 0 .436.436 0 000-.622l-.02-.02h1.311a.439.439 0 100-.88h-2.19l-3.782-3.79h3.837l1.253 1.253a.437.437 0 00.621 0 .441.441 0 000-.622l-.63-.63h1.093l1.851 1.854a.437.437 0 00.622 0 .44.44 0 000-.625l-1.227-1.23z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSnowflakeLight;
