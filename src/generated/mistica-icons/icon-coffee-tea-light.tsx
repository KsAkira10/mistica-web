/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCoffeeTeaLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path fill={fillColor} d="M21.018 19.25a.784.784 0 100-1.569.784.784 0 000 1.568z" />
            <path
                fill={fillColor}
                d="M16.313 5.683c.118.196.157.392.078.549l-.274.745c-.079.196.04.431.235.51.04 0 .079.039.118.039a.377.377 0 00.353-.275l.274-.745c.118-.392.04-.823-.157-1.215l-.235-.51a.747.747 0 01-.04-.706l.393-.705c.118-.196.04-.432-.157-.55-.196-.078-.431-.039-.549.158l-.431.744v.04c-.196.47-.157 1.02.078 1.45l.314.471zm-5.49 0c.118.157.118.392.079.588l-.274.706c-.079.196.039.431.235.51.039 0 .078.039.157.039.157 0 .313-.079.353-.235l.274-.745v-.04c.118-.392.04-.823-.157-1.176l-.274-.549c-.118-.235-.157-.51-.04-.706l.393-.745c.117-.196.039-.43-.157-.549-.196-.039-.432 0-.55.196l-.391.745a1.708 1.708 0 00.078 1.451l.275.51zm2.784-.353a.92.92 0 01.118.784l-.314.863c-.078.196.04.431.236.51.039 0 .078.039.156.039.157 0 .314-.079.353-.235l.314-.863v-.04c.118-.47.04-.98-.196-1.372l-.353-.666a1.126 1.126 0 01-.078-.941l.431-.863c.118-.157.079-.392-.118-.51-.196-.078-.43-.039-.549.157l-.47.863c-.235.549-.196 1.176.118 1.647l.352.627zm-7.88 3.333v1.568h-1.57c-1.098 0-1.96.863-1.96 1.96v4.314a1.94 1.94 0 001.96 1.96h1.804a5.123 5.123 0 004.862 3.53h5.881c1.255 0 2.47-.471 3.411-1.295a.42.42 0 00.04-.549.42.42 0 00-.55-.039 4.45 4.45 0 01-2.901 1.098h-5.881a4.3 4.3 0 01-4.313-4.313v-7.45h14.507v6.666c0 .235.157.392.392.392.235 0 .392-.157.392-.392v-7.45H5.726zm.078 9.018H4.158c-.667 0-1.176-.51-1.176-1.176v-4.313c0-.667.51-1.177 1.176-1.177h1.568v5.882c0 .274.04.51.079.784z"
            />
        </svg>
    );
};

export default IconCoffeeTeaLight;
