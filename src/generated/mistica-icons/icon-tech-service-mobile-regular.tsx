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

const IconTechServiceMobileRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.604 2.15c2.157 0 3.25 1.106 3.25 3.291v13.11c0 2.215-1.062 3.29-3.25 3.29H11.42c-2.188 0-3.25-1.075-3.25-3.29l.002-2.236a3.029 3.029 0 01-3.78 2.51.84.84 0 01-.378-1.406l.655-.656-.045-.31-.31-.045-.656.65a.839.839 0 01-1.406-.375 3.03 3.03 0 013.204-3.793l2.714-2.717V5.441c0-1.106.26-1.91.796-2.46.543-.56 1.347-.831 2.454-.831h7.184zm0 1.12H11.42c-.79 0-1.33.163-1.653.493-.322.331-.476.88-.476 1.678L9.29 9.052l.802-.801a3.08 3.08 0 01.039-.832l.045-.205a3.03 3.03 0 012.93-2.266c.263 0 .526.034.781.107a.84.84 0 01.378 1.406l-.655.655.045.311.31.045.656-.655a.839.839 0 011.406.375 3.02 3.02 0 01-3.202 3.793L9.29 14.52v4.03c0 .807.158 1.36.48 1.687.322.328.86.484 1.65.484h7.184c.79 0 1.328-.16 1.65-.484.322-.325.48-.88.48-1.686V5.44c0-1.563-.597-2.17-2.13-2.17zm-3.582 14.188c.577 0 .955.305.955.958 0 .314-.087.546-.24.706-.169.17-.413.252-.715.252-.303 0-.546-.081-.714-.252-.155-.157-.241-.392-.241-.706.002-.655.378-.958.955-.958zm-1.916-11.67a2.188 2.188 0 00-2.112 2.751l-5.252 5.255a2.182 2.182 0 00-2.675 2.675l.952-.952 1.353.193.193 1.353-.952.953a2.186 2.186 0 002.675-2.678l.882-.884v-.004l.005-.001 4.368-4.366c.308.084.632.098.945.042l.187-.042a2.182 2.182 0 001.543-2.675l-.952.952-1.353-.193-.194-1.353.953-.953a2.272 2.272 0 00-.566-.072z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTechServiceMobileRegular;
