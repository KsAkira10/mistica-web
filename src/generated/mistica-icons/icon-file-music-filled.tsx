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

const IconFileMusicFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.54 3.67v1.764c0 .658.212 1.213.613 1.608.406.398.98.61 1.663.61h1.774L13.54 3.67zm5.7 4.09c.03.072.047.153.047.237v12.305c0 .751-.636 1.384-1.386 1.384H5.909c-.74 0-1.387-.647-1.387-1.384V3.384C4.522 2.658 5.183 2 5.91 2h7.3a.85.85 0 01.605.25l5.213 5.125a.845.845 0 01.212.384zm-4.51 4.56l-3.743-1.032v-.61l3.743 1.03v.611zm-.773 6.089h-.104c-.513-.008-.77-.291-.77-.843 0-.205 0-.827.756-.835h.112c.518.014.779.297.779.84 0 .547-.26.827-.773.838zM9.189 16.4h-.115c-.51-.009-.77-.292-.77-.844 0-.204 0-.826.756-.832h.11c.518.012.781.297.781.844 0 .54-.26.82-.762.832zm5.947-5.673l-4.328-1.193-.134-.02a.726.726 0 00-.72.734v3.591a2.038 2.038 0 00-.757-.168h-.142c-.824.009-1.785.507-1.785 1.888 0 1.381.964 1.885 1.79 1.897h.143c.793-.017 1.706-.493 1.776-1.746l.014-3.33 3.742 1.034v2.437a2.038 2.038 0 00-.756-.169l-.143-.002c-.823.008-1.784.507-1.784 1.888 0 1.38.966 1.885 1.79 1.896h.143c.826-.017 1.79-.518 1.79-1.888v-6.115a.746.746 0 00-.64-.734z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMusicFilled;
