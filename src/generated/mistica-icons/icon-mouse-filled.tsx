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

const IconMouseFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M6.489 2.16a.55.55 0 01.549.549c0 .888 1.064 1.204 2.062 1.204h1.918c.869 0 1.544.39 1.9 1.096.254.501.26.989.26 1.045l.001.37c1.502.09 2.693.545 3.545 1.352.995.95 1.502 2.356 1.502 4.185v4.311c0 1.896-.44 3.263-1.345 4.174-.924.93-2.322 1.38-4.277 1.38-1.776 0-3.163-.459-4.12-1.37-.998-.946-1.502-2.355-1.502-4.184v-4.31c0-1.83.504-3.239 1.501-4.186.86-.816 2.07-1.272 3.598-1.356l.002-.364c0-.02-.011-.308-.157-.577-.174-.322-.462-.47-.91-.47h-1.92c-.895 0-1.663-.2-2.218-.574-.605-.412-.938-1.026-.938-1.726a.55.55 0 01.549-.549zm1.504 10.482c-.277-.031-.532.115-.571.322-.04.207.154.4.431.428 1.58.163 3.165.244 4.754.241 1.588 0 3.173-.078 4.753-.24.277-.029.47-.222.432-.43-.04-.206-.295-.35-.572-.321a44.516 44.516 0 01-4.613.232 44.516 44.516 0 01-4.614-.232zm4.61-4.34a.55.55 0 00-.548.55v2.877a.552.552 0 00.549.549.55.55 0 00.549-.55V8.853a.552.552 0 00-.55-.55z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMouseFilled;
