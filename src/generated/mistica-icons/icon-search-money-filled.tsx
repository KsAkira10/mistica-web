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

const IconSearchMoneyFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.392 4.388a7.845 7.845 0 01.378 10.497l5.703 5.705a.561.561 0 01-.792.792l-5.696-5.697a7.792 7.792 0 01-5.14 1.919A7.846 7.846 0 014.298 4.209a7.848 7.848 0 0111.095.179zM9.846 3.032A6.726 6.726 0 005.09 14.514a6.728 6.728 0 009.495.053.373.373 0 01.05-.056l.019-.015.128-.13a6.726 6.726 0 00-.143-9.328c-.012-.014-.026-.025-.037-.037a6.68 6.68 0 00-4.756-1.969zM5.555 5.466a6.145 6.145 0 118.688 8.689 6.145 6.145 0 01-8.688-8.689zm4.448-.185a.382.382 0 00-.381.381v.267c-1.224.112-2 .899-2 2.072 0 .765.35 1.72 2 1.964v2.129c-.432-.056-.863-.227-1.291-.513a.642.642 0 00-.342-.11.526.526 0 00-.532.522c0 .19.084.347.252.465.568.39 1.227.619 1.913.67v.523c0 .21.17.381.38.381a.38.38 0 00.379-.38v-.547c.557-.07 1.025-.26 1.372-.56.44-.378.673-.913.67-1.546 0-.78-.356-1.751-2.045-1.995V6.987c.291.06.574.163.835.308a.725.725 0 00.314.087.518.518 0 00.515-.515c0-.112-.04-.322-.303-.485-.378-.232-.851-.383-1.358-.442v-.278a.379.379 0 00-.378-.38zm.375 4.799c.863.185.992.566.992.958 0 .543-.37.921-.992 1.039zM9.62 6.96v1.927c-.824-.188-.947-.572-.947-.933 0-.552.35-.91.947-.995z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSearchMoneyFilled;
