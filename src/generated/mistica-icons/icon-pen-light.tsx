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

const IconPenLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.925 8.597l-.829.824-4.565-4.516.845-.837c2.037-2.011 3.77-.76 4.423-.126.079.078.163.165.233.235.639.664 1.91 2.423-.107 4.42zM3.267 19.628L4.34 20.69l-1.272.232.2-1.294zM6.13 17.2l-2.014-1.995 9.83-9.723 2.013 1.995L6.13 17.2zm-.804 3.308L3.421 18.62l.395-2.555 4.025 3.98-2.515.463zm3.381-.76L6.715 17.78l9.83-9.722 1.969 1.946-9.807 9.746zM20.631 3.612c-.084-.084-.165-.168-.252-.252-1.33-1.294-3.498-1.938-5.59.132L3.233 14.919a.368.368 0 00-.104.205c-.003.008-.011.014-.011.022L2.16 21.37a.41.41 0 00.484.465l6.02-1.103c.014 0 .028.008.042.008.11 0 .216-.042.294-.12.006-.006.009-.014.014-.023.003-.003.011-.003.014-.005L20.514 9.177c2.67-2.644.566-5.1.117-5.566z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPenLight;
