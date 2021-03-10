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

const IconTshirtLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.476 10.104L17.7 9.242a.415.415 0 00-.392.022.414.414 0 00-.188.35l.034 11.406H7.1l.034-11.406a.407.407 0 00-.58-.373l-1.82.875L3.08 6.435l5.476-3.182c.232 1.927 1.479 2.977 3.571 2.977 2.087 0 3.328-1.05 3.563-2.963l5.238 3.17-1.453 3.667zm2.168-4.193L15.54 2.214c-.003-.003-.008-.003-.011-.003a.368.368 0 00-.098-.034l-.07-.014c-.009 0-.014-.005-.023-.005-.014 0-.025.005-.039.008a.428.428 0 00-.1.02.456.456 0 00-.138.086c-.006.003-.011.012-.017.017-.02.023-.045.04-.059.068-.008.016-.01.03-.016.047 0 .003-.003.006-.003.006a.386.386 0 00-.03.16c0 1.91-.917 2.837-2.805 2.837-1.885 0-2.801-.93-2.801-2.84a.405.405 0 00-.608-.356L2.361 5.908a.413.413 0 00-.168.527l1.975 4.4a.404.404 0 00.543.202l1.613-.773-.033 11.168c0 .11.042.216.117.291.076.079.18.12.286.12h10.869c.106 0 .21-.041.285-.12a.418.418 0 00.118-.29l-.034-11.163 1.583.767a.403.403 0 00.552-.218l1.745-4.398a.412.412 0 00-.168-.51z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTshirtLight;
