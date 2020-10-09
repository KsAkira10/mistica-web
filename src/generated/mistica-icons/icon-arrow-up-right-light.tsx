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

const IconArrowUpRightLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.934 20.486c-.34 0-.681-.168-1.017-.501l-5.053-5.048-.009-.008c-.683-.745-.115-1.32.157-1.594l.003-.003 5.238-5.168c.07-.07.081-.182.017-.244L6.497 5.147l-.006-.005c-.252-.264-.325-.731-.17-1.09.142-.33.442-.518.825-.518h12.606a.669.669 0 01.537.182.672.672 0 01.182.538l-.005 12.666a.766.766 0 01-.474.737c-.372.165-.87.09-1.16-.176l-.008-.009-2.563-2.563a.155.155 0 00-.109-.042.195.195 0 00-.134.062l-5.096 5.075c-.319.323-.652.482-.988.482zm-5.67-5.94l5.05 5.044c.443.442.782.448 1.213.017l5.093-5.07a.756.756 0 01.512-.224.711.711 0 01.524.204l2.56 2.56a.57.57 0 00.55.073c.126-.056.142-.148.142-.221v-.003l.006-12.68c0-.009 0-.02.003-.029.005-.047-.003-.084-.02-.1-.017-.017-.056-.026-.1-.02-.01 0-.02.003-.029.003H7.152c-.162 0-.26.056-.314.179-.072.168-.025.387.062.479l2.77 2.77c.138.138.21.325.205.524a.744.744 0 01-.224.513l-5.238 5.168c-.407.406-.398.54-.149.812z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowUpRightLight;
