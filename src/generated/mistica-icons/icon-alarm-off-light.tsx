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

const IconAlarmOffLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M4.363 18.064c1.729-2.09 1.555-5.177 1.544-5.3V8.89c0-.95.137-1.79.4-2.52l10.659 11.697-12.603-.003zm9.202 2.375c-.356.387-.893.586-1.605.586-.711 0-1.25-.196-1.605-.58-.448-.488-.52-1.18-.527-1.558h4.267c-.009.384-.09 1.068-.53 1.552zM7.571 4.46c1.753-1.597 4.339-1.446 4.364-1.443.02.003.04.003.059 0 .025-.003 2.61-.154 4.364 1.443 1.1 1.003 1.661 2.493 1.661 4.431v3.849c-.008.148-.185 3.235 1.543 5.325h-1.47L6.697 5.557c.238-.412.524-.782.874-1.098zm13.308 16.666l-2.042-2.24h1.725a.42.42 0 00.395-.272.407.407 0 00-.129-.457c-2.173-1.734-1.977-5.33-1.974-5.392V8.89c0-2.176-.653-3.871-1.936-5.036-1.933-1.76-4.622-1.675-4.955-1.656-.333-.02-3.022-.1-4.96 1.659a5.46 5.46 0 00-.894 1.056l-2.387-2.62a.429.429 0 00-.594-.033.404.404 0 00-.042.569l.009.008L5.69 5.686c-.409.91-.624 1.977-.624 3.201v3.9c.002.036.198 3.633-1.975 5.366a.4.4 0 00-.13.457.421.421 0 00.396.272h5.627c.003.501.107 1.409.737 2.098.521.571 1.272.86 2.235.86.961 0 1.712-.289 2.233-.857.63-.687.74-1.591.745-2.101h2.776l2.538 2.787c.157.17.42.185.593.034a.403.403 0 00.045-.566c0-.003-.005-.006-.008-.012z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAlarmOffLight;
