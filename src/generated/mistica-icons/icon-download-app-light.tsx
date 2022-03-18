/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDownloadAppLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.55 21.834H8.448c-1.028 0-1.77-.238-2.266-.731-.502-.496-.745-1.244-.745-2.28V5.167c0-1.008.243-1.745.742-2.249.507-.512 1.25-.762 2.269-.762h7.1c1.031 0 1.774.244 2.272.745.499.502.74 1.241.74 2.266v13.656c0 1.036-.244 1.781-.745 2.28-.496.493-1.238.731-2.266.731zM8.448 2.716c-.863 0-1.474.194-1.871.594-.393.395-.583 1.003-.583 1.857v13.656c0 1.742.711 2.45 2.45 2.45h7.102c1.742 0 2.45-.708 2.45-2.45V5.167c0-.87-.187-1.484-.573-1.87-.387-.387-1-.58-1.874-.58H8.448zM11.79 15.86a.282.282 0 00.42.003l3.452-3.927a.28.28 0 00-.21-.465h-1.796V6.207a.665.665 0 00-.664-.74h-1.927a.69.69 0 00-.555.19.639.639 0 00-.207.5v5.313H8.561a.281.281 0 00-.185.07.282.282 0 00-.025.395l3.44 3.924zm-.616 2.801c0-.568.328-.834.832-.834s.83.266.83.834c0 .275-.074.477-.208.614-.146.148-.359.221-.622.221s-.476-.073-.622-.221c-.134-.137-.21-.339-.21-.614zm-1.997-6.63l2.824 3.222 2.832-3.222h-1.457a.28.28 0 01-.28-.28V6.187c0-.014 0-.028.003-.042a.097.097 0 00-.023-.081.098.098 0 00-.073-.037h-1.955c-.011 0-.022 0-.036-.002a.142.142 0 00-.118.039.085.085 0 00-.034.061v5.625a.28.28 0 01-.28.28H9.177z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDownloadAppLight;
