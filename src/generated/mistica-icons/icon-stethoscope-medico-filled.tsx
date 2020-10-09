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

const IconStethoscopeMedicoFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.563 13.633h-.05c-.112-.003-.53-.042-.53-.549s.415-.543.524-.543h.053c.11.002.53.044.53.549.002.501-.42.54-.527.543m.566-2.627v-1.74c0-2.302-1.672-3.162-3.11-3.196-.08 0-.176 0-.266-.003-1.425.011-3.086.852-3.086 3.2l.002 8.218c0 2.647-2.014 2.972-2.882 2.986-.092.002-.207.002-.31.002-.866-.014-2.878-.33-2.878-3.01v-1.858h.27c.285 0 .526-.252.526-.549v-1.185c2.244-.54 3.462-2.398 3.462-5.378a.406.406 0 00-.409-.403h-.123V4.742c.003-.134.025-1.327-.664-2.03a1.66 1.66 0 00-1.213-.496c-.011 0-.02.005-.033.005C9.22 2.022 8.944 2 8.84 2h-.078c-.16.003-.784.064-.784.81 0 .745.624.803.781.806h.076c.098-.003.355-.025.549-.201.022.002.042.014.064.014.143 0 .241.036.328.123.28.283.325.941.32 1.168v3.372a.406.406 0 00-.39.401c0 2.022-1.238 3.608-2.82 3.608-1.567 0-2.704-1.518-2.704-3.608a.403.403 0 00-.361-.395V4.703c-.006-.207.042-.865.32-1.148a.42.42 0 01.327-.126c.022 0 .042-.012.064-.014.193.176.448.198.546.201h.076c.157-.003.782-.061.782-.806 0-.746-.625-.807-.788-.81H5.07c-.104.003-.38.022-.574.221-.011 0-.023-.005-.034-.005-.476 0-.893.17-1.213.495-.68.704-.66 1.9-.658 2.012V8.09h-.182A.405.405 0 002 8.493c0 3.03 1.26 4.902 3.58 5.403v1.157c0 .3.24.55.526.55h.264v1.86c0 3.072 2.112 4.195 4.09 4.223h.131c.078 0 .157 0 .221-.003 1.885-.033 4.087-1.154 4.087-4.198V9.322l-.003-.073c0-1.7 1.171-1.963 1.872-1.969l.226.003c.712.017 1.908.3 1.908 1.983v1.72c-.644.132-1.577.583-1.577 2.095 0 2 1.644 2.157 2.081 2.163h.073c.045 0 .087 0 .126-.003.415-.006 2.081-.163 2.081-2.149 0-1.467-.91-1.938-1.557-2.086"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStethoscopeMedicoFilled;
