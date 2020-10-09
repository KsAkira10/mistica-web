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

const IconAppsFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.632 2.15h3.224c.54 0 .98.44.98.98v3.224a.98.98 0 01-.98.98h-3.224a.98.98 0 01-.98-.98V3.13c0-.54.44-.98.98-.98zm-7.25 0h3.225c.54 0 .98.44.98.98v3.224a.98.98 0 01-.98.98h-3.225a.98.98 0 01-.98-.98V3.13c0-.54.437-.98.98-.98zm-7.252 0h3.224c.541 0 .98.44.98.98v3.224a.98.98 0 01-.98.98H3.13a.98.98 0 01-.98-.98V3.13c0-.54.44-.98.98-.98zm14.502 7.252h3.224c.54 0 .98.44.98.98v3.225c0 .54-.44.98-.98.98h-3.224c-.54 0-.98-.44-.98-.98v-3.225c0-.543.44-.98.98-.98zm-7.25 0h3.225c.54 0 .98.44.98.98v3.225c0 .54-.44.98-.98.98h-3.225c-.54 0-.98-.44-.98-.98v-3.225c0-.543.437-.98.98-.98zm-7.252 0h3.224c.541 0 .98.44.98.98v3.225a.98.98 0 01-.98.98H3.13c-.54 0-.98-.44-.98-.98v-3.225c0-.543.44-.98.98-.98zm7.252 7.25h3.225c.54 0 .98.44.98.98v3.224c0 .54-.44.98-.98.98h-3.225c-.54 0-.98-.44-.98-.98v-3.224c0-.54.437-.98.98-.98zm7.227 0h3.224c.541 0 .98.44.98.98v3.224a.98.98 0 01-.98.98H17.61c-.54 0-.98-.44-.98-.98v-3.224c0-.54.437-.98.98-.98zm-14.479 0h3.224c.541 0 .98.44.98.98v3.224a.98.98 0 01-.98.98H3.13c-.54 0-.98-.44-.98-.98v-3.224c0-.54.44-.98.98-.98z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAppsFilled;
