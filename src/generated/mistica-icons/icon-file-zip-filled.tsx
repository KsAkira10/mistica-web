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

const IconFileZipFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.51 2c.23 0 .445.087.61.244l5.303 5.131c.17.171.263.39.263.625v12.305c0 .751-.644 1.384-1.409 1.384H8.098c-.75 0-1.409-.647-1.409-1.384l.034-2.773h-2.3A2.432 2.432 0 012 15.106v-4.092a2.426 2.426 0 012.42-2.426h2.266V3.384C6.686 2.658 7.36 2 8.096 2h7.414zm-1.244 7.801H4.42c-.667 0-1.207.54-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.095c0-.666-.54-1.21-1.207-1.21zm-6.1 1.457v.518l-1.771 2.56h1.781v.622H5.328v-.496l1.798-2.582H5.381v-.622h2.784zm1.467-.003v3.703h-.846v-3.703h.846zm2.081 0c.58 0 .947.081 1.185.302.202.185.297.471.297.866s-.092.692-.277.9c-.216.243-.552.358-1.04.358h-.596v1.277h-.846v-3.703h1.277zm-.03.613h-.396v1.182h.418v-.002c.272 0 .384-.04.493-.14.098-.098.146-.255.146-.471 0-.199-.043-.347-.14-.44-.104-.092-.261-.129-.522-.129zm4.162-8.199v1.765c0 .658.216 1.213.622 1.608.414.4.997.61 1.692.61h1.804L15.846 3.67z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileZipFilled;
