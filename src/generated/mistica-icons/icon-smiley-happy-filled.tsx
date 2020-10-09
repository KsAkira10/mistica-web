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

const IconSmileyHappyFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.84 2c6.219 0 9.846 3.14 9.846 9.846 0 6.706-3.627 9.84-9.846 9.84-6.218 0-9.84-3.134-9.84-9.84C2 5.14 5.622 2 11.84 2zM17 13.613c-.02.02-1.927 2.076-5.123 2.11-.031 0-3.236.115-5.188-2.07a.613.613 0 10-.916.818c2.09 2.339 5.247 2.481 5.983 2.481.087 0 .14-.002.154-.002 3.734-.042 5.914-2.415 6.003-2.516a.615.615 0 00-.913-.82zm-8.143-3.22c.356 0 .653-.113.86-.323.205-.207.305-.493.305-.846 0-.723-.448-1.17-1.165-1.17-.72 0-1.165.447-1.165 1.17 0 .353.104.639.305.846.207.207.504.322.86.322zm5.972 0c.356 0 .653-.113.86-.326.202-.207.305-.493.305-.846 0-.722-.448-1.17-1.165-1.17-.72 0-1.165.448-1.165 1.17 0 .353.104.639.308.846.204.21.501.325.857.325z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSmileyHappyFilled;
