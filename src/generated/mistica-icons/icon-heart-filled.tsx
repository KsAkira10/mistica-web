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

const IconHeartFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.238 2.168c1.196.062 2.3.48 3.11 1.174 1.394 1.196 1.856 3.151 1.296 5.504-.515 2.162-1.512 4.403-2.969 6.664-1.151 1.79-2.076 2.947-3.639 4.563a.487.487 0 01-.036.042c-.154.16-.692.7-1.146 1.028a3.422 3.422 0 01-1.277.574c-.132.031-.266.05-.4.056h-.017l-.062.005h-.078c-.05 0-.096 0-.138-.002h-.017a2.42 2.42 0 01-.4-.056c-.46-.104-.896-.3-1.277-.574-.457-.33-.995-.874-1.149-1.031-1.588-1.639-2.515-2.801-3.678-4.605-1.453-2.258-2.453-4.502-2.969-6.667-.56-2.353-.098-4.305 1.297-5.504.81-.692 1.916-1.11 3.11-1.17 1.257-.065 2.562.254 3.772.926a54.2 54.2 0 011.297.745c.093.05.205.05.3 0 .462-.274.885-.518 1.3-.747 1.207-.67 2.512-.99 3.77-.925z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHeartFilled;
