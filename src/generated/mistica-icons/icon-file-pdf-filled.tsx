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

const IconFilePdfFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.51 2.025c.23 0 .445.087.61.244l5.3 5.132c.11.106.174.243.219.386.03.073.047.154.047.238V20.33c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.409-.647-1.409-1.384l.034-2.77h-2.3A2.427 2.427 0 012 15.134V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.726.673-1.384 1.41-1.384h7.414zM14.266 9.83H4.42a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21V11.04c0-.666-.54-1.21-1.207-1.21zm-5.19 1.468c.703 0 1.17.11 1.479.417.297.292.45.754.45 1.42 0 .673-.145 1.138-.45 1.451-.278.283-.703.418-1.365.418H7.933v-3.706h1.143zm-3.227 0c.58 0 .947.081 1.185.302.201.185.297.471.297.866s-.093.695-.278.9c-.215.243-.552.358-1.039.358h-.597V15h-.84v-3.703h1.272zm8.243 0l-.064.61h-1.532v.9h1.213v.633h-1.213V15h-.846v-3.703h2.442zm-5.056.619h-.26v2.47h.358c.379 0 .65-.114.796-.33.146-.216.196-.465.196-.922 0-.532-.081-.781-.26-.974-.169-.18-.418-.244-.83-.244zm-3.22-.006H5.42v1.182h.418v-.002c.271 0 .383-.04.493-.14.098-.098.145-.255.145-.471 0-.199-.042-.347-.14-.44-.104-.092-.26-.129-.52-.129zm10.03-8.215V5.46c0 .659.216 1.213.622 1.608.414.4.997.61 1.692.61h1.797l-4.111-3.982z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePdfFilled;
