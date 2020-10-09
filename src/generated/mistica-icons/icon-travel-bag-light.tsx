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

const IconTravelBagLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.83 19.88V7.24c0-.181-.142-.331-.2-.345H7.247c-.051.011-.193.16-.193.342v12.64c0 .203.142.339.193.342h9.39c.05.002.194-.139.194-.34zM9.736 2.828v3.234h4.414V2.83H9.736zm6.9 3.24c.547 0 1.044.56 1.044 1.17v12.64c0 .625-.485 1.171-1.043 1.171H15.57c0 .017.003.028.003.045 0 .718-.582.775-.73.775h-.07c-.153-.003-.729-.06-.729-.78 0-.017.003-.026.003-.043H9.875c0 .017.006.028.006.045 0 .719-.585.775-.73.775H9.08c-.154-.003-.73-.06-.73-.78 0-.017.003-.026.003-.043h-1.11c-.555 0-1.043-.548-1.043-1.17V7.242c0-.613.497-1.17 1.043-1.17H8.88v-3.38c0-.367.34-.692.733-.692h4.651c.39 0 .733.322.733.693v3.376h1.64zm-2.41 11.69a.624.624 0 00.035-.21v-5.211H9.628v5.211c0 .088.018.162.036.21h4.561zm-4.563-8.29a.628.628 0 00-.04.21v1.829h4.631v-1.83a.57.57 0 00-.039-.21H9.664zm4.703-.826c.467 0 .744.529.744 1.038v7.87c0 .503-.262 1.037-.744 1.037H9.519c-.482 0-.744-.534-.744-1.038V9.68c0-.51.277-1.037.744-1.037h4.848z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTravelBagLight;
