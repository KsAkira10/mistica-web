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

const IconBusRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.56 4.526c.439.014 2.534.175 4.171 1.817 1.297 1.303 1.955 3.174 1.958 5.56v3.381c0 .583-.252 1.171-.692 1.614-.442.445-1.025.7-1.602.7h-.224c-.454 1.064-1.446 1.692-2.82 1.692-1.376 0-2.368-.628-2.822-1.692H9.664c-.454 1.064-1.446 1.692-2.82 1.692-1.393 0-2.396-.642-2.841-1.731a2.332 2.332 0 01-1.308-.658C2.252 16.455 2 15.867 2 15.287v-8.45c0-.583.252-1.172.695-1.614.44-.443 1.022-.698 1.6-.698zm.787 9.725c-1.26 0-1.899.644-1.899 1.913 0 1.269.639 1.913 1.9 1.913 1.26 0 1.898-.644 1.898-1.913 0-1.269-.638-1.913-1.899-1.913zm-9.507 0c-1.26 0-1.899.644-1.899 1.913 0 1.269.639 1.913 1.9 1.913 1.26 0 1.898-.644 1.898-1.913 0-1.269-.638-1.913-1.899-1.913zm8.255-2.875H3.204v3.911c0 .26.124.535.342.754.056.058.132.086.196.128 0-1.935 1.188-3.134 3.101-3.134s3.101 1.199 3.101 3.126c0 .078-.014.149-.017.224h3.34c-.006-.075-.02-.146-.02-.224 0-1.927 1.19-3.126 3.103-3.126 1.913 0 3.101 1.199 3.101 3.126 0 .076-.014.143-.017.219.244-.012.507-.135.709-.34.216-.218.339-.492.339-.753v-1.216c-1.227-2.504-4.58-2.687-5.387-2.695zm.42-5.64h-1.092v4.428h.465c.146-.009 3.482-.135 5.594 1.888v-.146c0-5.87-4.47-6.155-4.968-6.17zm-7.885 0H4.294c-.258 0-.532.125-.748.344-.215.216-.342.498-.342.753v3.33H7.63V5.736zm5.591 0h-4.39v4.428h4.39V5.735z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBusRegular;
