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

const IconHandUpFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.164 9.62c-.283 0-.54.039-.773.117-.238-.857-.942-1.367-1.95-1.367-.283 0-.543.042-.776.118-.24-.849-.941-1.353-1.944-1.353-.246 0-.476.03-.683.09V4.321c0-1.333-.818-2.162-2.135-2.162-1.266 0-2.042.77-2.129 2.118v7.428c-.339-.577-.644-.98-1.008-1.272a1.927 1.927 0 00-1.207-.43c-.404 0-.801.13-1.132.397-.65.52-.81 1.409-.409 2.263.68 1.448 1.826 3.776 2.748 5.647a213.96 213.96 0 011.21 2.476c.146.32.49 1.062 1.272 1.062h7.787c.983 0 1.82-.308 2.361-.866.538-.554.81-1.33.81-2.302v-6.997c-.006-1.275-.785-2.065-2.042-2.065z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHandUpFilled;
