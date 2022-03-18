/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSearchDatabaseFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.36 5.505c-1.193-.35-1.918-.824-2.109-1.373v-.007a.037.037 0 00-.011-.01c.193-.546.919-1.03 2.1-1.38 1.258-.368 2.92-.575 4.681-.575 1.762 0 3.423.207 4.67.574 1.246.37 1.955.852 2.11 1.426 0 0-.01.008-.01.02-.21.53-.926.986-2.092 1.327-1.257.367-2.907.575-4.67.575-1.761 0-3.414-.208-4.669-.577zm3.05 7.347c0-.577-.142-1.115-.383-1.605a3.836 3.836 0 00-.507-.773l-.025-.031a3.052 3.052 0 00-.367-.373 3.508 3.508 0 00-.224-.182 4.676 4.676 0 01-.079-.06c-.059-.045-.117-.091-.182-.13a3.74 3.74 0 00-.524-.277 1.262 1.262 0 00-.121-.047 4.104 4.104 0 00-.72-.21l-.03-.007a3.99 3.99 0 00-.689-.067 3.983 3.983 0 00-1.375.258C6.74 9.89 5.71 11.252 5.71 12.852s1.03 2.96 2.473 3.504c.294.112.608.18.933.216l.128.016c.104.014.207.029.314.029a3.89 3.89 0 001.628-.365c.263-.123.507-.277.736-.45.073-.057.149-.115.219-.177a3.13 3.13 0 00.24-.232c.082-.084.152-.173.225-.265l.008-.01.052-.064c.039-.047.076-.092.11-.14a3.52 3.52 0 00.356-.685l.017-.047c.056-.148.107-.3.143-.453l.009-.034.039-.165c.039-.224.07-.448.07-.678zm.995-1.524c.207.009.412.017.625.017 1.762 0 3.423-.199 4.67-.566 1.237-.367 1.918-.924 2.148-1.344V5.49c-.46.355-1.081.644-1.88.876-1.341.395-3.095.61-4.938.61-1.843 0-3.597-.215-4.936-.61-.818-.232-1.45-.538-1.91-.896v2.602c-2.137.588-3.709 2.507-3.709 4.779 0 1.216.448 2.328 1.194 3.193L2.34 19.3a.592.592 0 000 .852.626.626 0 00.874 0l3.361-3.286a5.111 5.111 0 001.608.756v1.958c0 .698.725 1.272 2.157 1.695 1.269.37 2.927.574 4.68.574 1.751 0 3.412-.207 4.67-.574 1.431-.42 2.157-.995 2.157-1.695v-3.543c-.485.367-1.13.68-1.88.896-1.333.395-3.084.61-4.938.61-1.135 0-2.221-.092-3.213-.246a5.269 5.269 0 001.134-.756c.662.067 1.359.104 2.079.104 1.762 0 3.423-.208 4.67-.575 1.237-.367 1.918-.924 2.148-1.344v-3.983c-.485.367-1.13.672-1.88.888-1.333.395-3.084.61-4.938.61-.08 0-.16-.004-.24-.008a5.96 5.96 0 00-.191-.009 4.777 4.777 0 00-.202-.896h.008z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchDatabaseFilled;
