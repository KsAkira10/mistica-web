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

const IconBeachUmbrellaFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M7.324 14.163c-1.837-4.53-.356-7.893.583-9.378l4 6.672-4.583 2.706zM5.828 5.752c-.851 2.075-1.386 5.246.27 9.134l-2.11 1.246c-.09.054-.14.101-.356.043a.4.4 0 01-.252-.216c-.82-1.941-1.033-3.784-.636-5.476.401-1.743 1.443-3.325 3.084-4.731zm12.463 1.932l-5.168 3.054-4.06-6.768c1.648-.221 5.463-.18 9.228 3.714zm3.022-2.302a.378.378 0 01.1.291.391.391 0 01-.195.283L19.52 6.959c-2.86-3.05-5.776-4.093-7.994-4.356 1.731-.515 3.386-.594 4.941-.221 1.762.423 3.392 1.431 4.846 3zm-13.515-.74l-.373-.622a.668.668 0 01.266-.93.735.735 0 01.975.255l.35.586-1.218.711zm5.33 6.12l6.025 10.054a.665.665 0 01-.266.93.76.76 0 01-.353.09.718.718 0 01-.619-.342L11.91 11.477l1.218-.714z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBeachUmbrellaFilled;
