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

const IconGasStationFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.644 8.826c0 .628-.476 1.16-1.039 1.16h-5c-.563 0-1.042-.532-1.042-1.16v-3.09c0-.616.485-1.159 1.042-1.159h5c.555 0 1.04.543 1.04 1.16v3.09zm8.86-.277c0 .008-.005.017-.005.025v.143c-.023.451-.185 1.188-1.311 1.207l-.149.003h-.056c-1.314-.02-1.314-1.039-1.314-1.423 0-.384 0-1.398 1.289-1.406h.045l.162.003c.482.011.785.151.983.342l.048.05c.303.336.305.798.305 1.028.003.003.003.017.003.028zm1.202.067c0-.036.005-.067.005-.103 0-.872-.263-1.449-.619-1.84l-.002-.006-.009-.009a1.036 1.036 0 00-.078-.078l-4.334-4.378a.605.605 0 00-.854-.006.602.602 0 00-.005.852l2.823 2.851c-.745.084-2.174.518-2.174 2.594 0 2.431 1.978 2.622 2.505 2.63h.072c.06 0 .118 0 .168-.003a3.02 3.02 0 001.292-.322l.005 8.098c0 1.37-.955 1.594-1.523 1.605h-.182c-.57-.008-1.521-.23-1.521-1.616v-3.874a2.748 2.748 0 00-2.748-2.742h-.48V3.417c0-.72-.672-1.378-1.408-1.378H3.434c-.737 0-1.409.658-1.409 1.378v16.914c0 .733.658 1.378 1.41 1.378h9.204c.75 0 1.409-.645 1.409-1.378v-6.855h.479c.848 0 1.54.69 1.54 1.535v3.874c0 2.056 1.462 2.807 2.79 2.824H19c1.25-.023 2.709-.773 2.709-2.813l-.003-10.28z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconGasStationFilled;
