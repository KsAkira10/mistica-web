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

const IconTrashCanFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.347 6.137h-7.01V4.325c0-.423.092-.728.276-.9.233-.212.57-.193.628-.19l5.188-.003c.3 0 .515.073.66.227.236.25.267.69.258.877v1.801zM14.5 17.011a.601.601 0 11-1.205 0V10.85a.601.601 0 111.205 0v6.162zm-4.11 0a.601.601 0 11-1.204 0V10.85a.601.601 0 111.204 0v6.162zM21.084 6.137h-4.535V4.375c.008-.106.053-1.058-.577-1.734-.26-.28-.74-.613-1.543-.613l-5.13.006a2.002 2.002 0 00-1.484.493c-.45.409-.68 1.014-.68 1.798v1.812H2.601a.601.601 0 100 1.205H4.06l.003 11.087c-.003.056-.084 1.397.815 2.358.574.614 1.392.927 2.428.927h9.042c.006 0 .028.003.065.003.291 0 1.456-.053 2.31-.871.603-.577.908-1.381.908-2.39V7.343h1.457c.33 0 .602-.27.602-.603a.607.607 0 00-.605-.602z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTrashCanFilled;
