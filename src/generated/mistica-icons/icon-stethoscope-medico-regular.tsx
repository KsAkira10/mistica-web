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

const IconStethoscopeMedicoRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.51 14.395c.624-.011.94-.345.94-.989 0-.647-.318-.983-.951-.994l-.138-.003c-.921.011-.921.745-.921.989 0 .655.316.989.938 1 .003-.003.132-.003.132-.003zm-12.272-.062c-.118 0-.227-.008-.342-.014v.636h.768v-.638a6.846 6.846 0 01-.426.016zM3.252 9.064c.165 2.723 1.473 4.048 3.989 4.048 2.512 0 3.818-1.325 3.986-4.048H10.8c-.196 2.213-1.498 3.513-3.56 3.513-2.065 0-3.364-1.3-3.563-3.513h-.426zm16.894 2.219c.804.218 1.54.849 1.54 2.12 0 1.603-1.16 2.194-2.154 2.21h-.168c-.994-.014-2.154-.605-2.154-2.218 0-1.378.84-2.003 1.703-2.163V9.496c0-1.639-1.16-1.91-1.851-1.927l-.222-.003c-.678.005-1.812.263-1.812 1.916l.003.075v7.995c0 2.994-2.16 4.098-4.011 4.131-.073 0-.157.003-.241.003h-.107c-1.94-.028-4.014-1.134-4.014-4.154v-1.358h-.26c-.404 0-.734-.353-.734-.79v-1.236C3.289 13.574 2 11.605 2 8.454c0-.336.277-.61.616-.61h.182V4.66c-.002-.115-.025-1.316.67-2.022.31-.32.72-.488 1.185-.496A.88.88 0 015.126 2h.076c.16.003.776.067.776.804 0 .74-.62.795-.774.798h-.072c-.101 0-.376-.025-.569-.218a.378.378 0 00-.21.106c-.263.266-.328.89-.322 1.151v3.205h.238c.342 0 .616.274.616.61 0 1.928.793 2.905 2.353 2.905s2.353-.977 2.353-2.904c0-.337.277-.611.616-.611h.255V4.66c.006-.227-.042-.89-.322-1.174a.412.412 0 00-.302-.12c-.194.207-.477.235-.58.235h-.073c-.154-.003-.77-.061-.77-.798 0-.737.616-.798.773-.801h.075c.087 0 .303.022.485.154.022-.003.042-.014.064-.014.477 0 .9.17 1.219.498.692.706.672 1.908.666 2.042v3.163h.163c.342 0 .616.274.616.61 0 3.113-1.255 5.076-3.577 5.676v1.255c0 .437-.328.79-.734.79h-.277v1.352c0 2.614 1.958 2.922 2.798 2.936.104.003.216 0 .308-.003.84-.017 2.799-.33 2.799-2.913V9.493c0-2.305 1.636-3.134 3.033-3.148.084 0 .182 0 .264.002 1.409.034 3.056.877 3.056 3.149v1.787zm-.628 1.658c.084.003.406.037.406.423 0 .387-.325.417-.406.42h-.039c-.087 0-.406-.03-.406-.423 0-.389.316-.417.4-.417l.045-.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconStethoscopeMedicoRegular;
