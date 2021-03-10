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

const IconContactBookFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.116 2.017a2.74 2.74 0 012.737 2.737v14.165a2.738 2.738 0 01-2.737 2.734h-8.7c-.307 0-.603-.048-.881-.136A2.704 2.704 0 014.634 19.6a2.873 2.873 0 01-.131-.862V4.664c0-.353.068-.696.2-1.012l.021-.06a2.458 2.458 0 011.384-1.365c.324-.138.676-.21 1.04-.21h8.968zm1.597 13.308h-.443l.001 4.694c.274-.286.442-.674.442-1.1v-3.594zm-5.597-2.947H9.752c-.734 0-1.342.258-1.759.745-.387.457-.594 1.081-.594 1.807v.89c0 .303.213.55.474.55h6.126c.26 0 .473-.247.473-.55l-.003-.89c0-.728-.204-1.353-.594-1.807-.417-.487-1.025-.745-1.759-.745zm5.597-2.888h-.443v4.692h.443V9.49zM10.93 6.913c-1.54 0-2.425.89-2.425 2.434s.88 2.426 2.425 2.426c1.547 0 2.435-.88 2.435-2.426 0-1.546-.888-2.434-2.435-2.434zm6.34-3.26l-.001 4.694h.443V4.754c0-.427-.168-.815-.442-1.101z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconContactBookFilled;
