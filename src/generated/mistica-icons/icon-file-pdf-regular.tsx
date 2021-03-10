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

const IconFilePdfRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.51 2.025c.23 0 .445.087.61.244l5.3 5.132c.11.106.174.243.219.386.03.073.047.154.047.238V20.33c0 .751-.644 1.384-1.409 1.384H8.095c-.75 0-1.409-.647-1.409-1.384l.034-2.77h-2.3A2.427 2.427 0 012 15.134V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.726.673-1.384 1.41-1.384h7.414zm-.88 1.219H8.095c-.073 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.095a2.427 2.427 0 01-2.42 2.426h-6.33l-.034 2.779c0 .05.1.16.193.16h12.182c.098 0 .194-.096.194-.169V8.896H18.16c-1.014 0-1.891-.33-2.535-.952-.65-.627-.995-1.487-.995-2.482V3.244zm-.364 6.585H4.42a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21V11.04c0-.666-.54-1.21-1.207-1.21zM9.16 11.297c.703 0 1.17.11 1.479.417.297.292.45.754.45 1.42 0 .673-.145 1.138-.45 1.451-.278.283-.703.418-1.365.418H8.017v-3.706H9.16zm-3.227 0c.58 0 .947.081 1.185.302.201.185.297.471.297.866s-.093.695-.278.9c-.215.243-.552.358-1.039.358h-.597V15h-.84v-3.703h1.272zm8.243 0l-.064.61H12.58v.9h1.213v.633H12.58V15h-.846v-3.703h2.442zm-5.056.619h-.26v2.47h.358c.379 0 .65-.114.796-.33.146-.216.196-.465.196-.922 0-.532-.081-.781-.26-.974-.169-.18-.418-.244-.83-.244zM5.9 11.91h-.396v1.182h.418v-.002c.271 0 .383-.04.493-.14.098-.099.145-.255.145-.471 0-.199-.042-.347-.14-.44-.103-.092-.26-.129-.52-.129zm9.946-8.215v1.764c0 .659.216 1.213.622 1.608.414.4.997.61 1.692.61h1.797l-4.111-3.982z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePdfRegular;
