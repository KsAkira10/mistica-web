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

const IconAdnFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.878 2.15c.356 0 .644.28.644.622 0 2.263-1.613 3.554-3.302 4.61 1.689 1.057 3.302 2.348 3.302 4.611s-1.613 3.555-3.305 4.608c1.69 1.056 3.303 2.347 3.303 4.61a.633.633 0 01-.645.622.634.634 0 01-.644-.621c0-1.838-1.462-2.821-3.221-3.877-1.76 1.056-3.221 2.036-3.221 3.877a.633.633 0 01-.645.621.634.634 0 01-.644-.621c0-2.264 1.613-3.555 3.303-4.611-.757-.47-1.493-.994-2.082-1.627a.619.619 0 01-.148-.16c-.642-.75-1.07-1.656-1.07-2.82 0-2.261 1.613-3.555 3.302-4.612-1.689-1.056-3.302-2.347-3.302-4.61 0-.345.288-.622.644-.622.356 0 .644.28.644.622 0 1.84 1.46 2.82 3.222 3.877 1.762-1.054 3.22-2.037 3.22-3.877 0-.345.29-.622.645-.622zm-.714 10.479H8.859c.095.468.294.877.577 1.244h5.15c.28-.37.483-.776.578-1.244zM12.01 8.114c-.432.26-.843.52-1.224.784h2.45a21.167 21.167 0 00-1.226-.784z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAdnFilled;
