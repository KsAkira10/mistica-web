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

const IconChemistryRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M3.52 20.605h17.073l-5.577-7.344c-.877.24-1.97.372-3.127.372-1.07 0-2.09-.117-2.93-.322l-5.44 7.294zm6.602-8.848l-.345.453c1.348.233 3.107.224 4.412-.025l-.32-.428a.592.592 0 01-.125-.365V3.401h-3.496v6.997c0 .008-.008.034-.008.05 0 .017.008.034.008.05v.894a.604.604 0 01-.126.365zm11.507 8.168c.269.423.286.893.067 1.283a1.262 1.262 0 01-1.103.638H3.333a1.19 1.19 0 01-1.02-.588 1.142 1.142 0 01.016-1.168l6.653-8.908v-.677a.347.347 0 010-.132V3.4h-.768a.631.631 0 01-.63-.622.628.628 0 01.633-.619h7.574a.622.622 0 010 1.244h-.781v7.781l6.619 8.74zm-6.165-1.947c0-1.112-.925-1.205-1.163-1.213-.03 0-.061-.003-.092-.003h-.023c-.243.003-1.145.084-1.145 1.205 0 1.12.913 1.21 1.157 1.213h.112c.23 0 1.154-.087 1.154-1.202zm-1.252-2.042l.112.003c.986.025 1.983.664 1.983 2.039 0 1.378-.997 2.017-1.983 2.034h-.14c-.99-.014-1.986-.65-1.986-2.04 0-1.392.994-2.025 1.983-2.033l.03-.003zm-4.255.692c.129-.003.644-.05.644-.673 0-.619-.515-.669-.647-.672h-.065c-.134 0-.638.048-.638.67 0 .624.51.672.644.675h.062zm.02-2.171c.705.017 1.467.493 1.467 1.501 0 1.012-.765 1.485-1.473 1.499h-.087c-.712-.011-1.474-.485-1.474-1.502 0-1.022.762-1.492 1.471-1.498h.095z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChemistryRegular;
