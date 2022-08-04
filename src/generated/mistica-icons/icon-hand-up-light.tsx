/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconHandUpLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.39 9.732c.23-.078.49-.118.774-.118 1.258 0 2.036.79 2.039 2.065v7c0 .969-.272 1.745-.81 2.3-.54.557-1.378.865-2.36.865H9.244c-.782 0-1.126-.745-1.272-1.062-.137-.298-.613-1.265-1.17-2.396l-.04-.08-.208-.424a404.696 404.696 0 01-2.537-5.223c-.4-.854-.24-1.742.41-2.263a1.789 1.789 0 011.13-.398c.44.003.866.154 1.208.432.364.29.67.694 1.008 1.271l.003-7.428c.087-1.348.863-2.118 2.13-2.118 1.316 0 2.133.826 2.133 2.16v2.904c.208-.058.438-.09.684-.09 1.003 0 1.703.505 1.944 1.354.232-.076.493-.118.776-.118 1.005 0 1.709.51 1.947 1.367zm1.418 10.67c.387-.398.58-.98.58-1.729l-.003-6.991c0-.824-.412-1.241-1.224-1.241-.19 0-.367.025-.518.075a.806.806 0 01-.639-.056.821.821 0 01-.4-.504c-.143-.51-.535-.767-1.166-.767-.193 0-.37.025-.52.075a.819.819 0 01-1.04-.555c-.143-.504-.535-.759-1.162-.759-.171 0-.328.02-.465.06a.823.823 0 01-.219.03.818.818 0 01-.812-.82V4.316c0-.876-.457-1.339-1.32-1.339-.529 0-1.238.138-1.316 1.348V11.7c0 .37-.247.695-.6.793a.811.811 0 01-.915-.373c-.309-.526-.552-.84-.813-1.047a1.125 1.125 0 00-.703-.255.987.987 0 00-.625.218c-.347.278-.414.765-.179 1.266.678 1.449 1.82 3.77 2.74 5.636.552 1.118 1.07 2.177 1.218 2.496.193.42.345.585.535.585h7.787c.762 0 1.393-.22 1.779-.619z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHandUpLight;
