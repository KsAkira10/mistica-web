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

const IconConferenceFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.944 6.034c.633 0 1.146.551 1.146 1.235v1.09c0 .683-.513 1.235-1.146 1.235h-.381v.003H5.207v-.003h-.38c-.634 0-1.146-.552-1.146-1.235V7.266c0-.683.512-1.235 1.145-1.235h2.807v-.67c0-.109.04-.213.112-.291l.625-.672a.85.85 0 01-.222-.58c0-.219.079-.429.225-.583l.899-.969a.74.74 0 01.54-.24.74.74 0 01.54.24l.547.591a.87.87 0 010 1.163L10 4.986a.727.727 0 01-1.081 0l-.011-.011-.513.552v.498h6.98v-.498l-.515-.558-.014.014a.727.727 0 01-1.081 0l-.9-.966a.87.87 0 010-1.163l.55-.59a.735.735 0 01.54-.242.74.74 0 01.54.241l.9.97a.86.86 0 01.006 1.154l.63.677a.426.426 0 01.112.292v.67h2.8v.008zm-13.737 4.52v-.302h13.356v.303c0 .68-.513 1.235-1.146 1.235h-1.154v.003H7.504v-.003H6.35c-.63 0-1.143-.555-1.143-1.235zm2.297 7.18v-5.286h8.76v5.286h-8.76zm9.89.655c.634 0 1.147.552 1.147 1.236v.857c0 .683-.513 1.235-1.146 1.235H6.373c-.634 0-1.146-.552-1.146-1.235v-.857c0-.675.501-1.222 1.123-1.233h10.21v-.003h.835z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconConferenceFilled;
