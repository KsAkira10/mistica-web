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

const IconArrowRightLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.805 21.814a.938.938 0 01-.35-.067c-.35-.143-.555-.473-.55-.888L10.9 17.08c0-.081-.079-.145-.174-.145H3.827c-.524.008-.936-.14-1.23-.44-.305-.311-.456-.779-.44-1.353V8.923c-.01-.66.124-1.112.426-1.425.28-.289.684-.435 1.238-.443h.006l6.902.003c.095 0 .174-.065.174-.146l-.023-3.518c-.017-.524.244-.992.653-1.165.384-.166.818-.045 1.185.33l8.904 8.958c.18.174.267.345.264.518 0 .154-.07.297-.205.426l-8.974 8.93c-.261.275-.589.423-.902.423zm-7.98-5.47h6.901c.42 0 .762.33.762.736l.006 3.782v.005c-.003.168.061.289.182.336.134.054.372.031.608-.218.002-.003.002-.006.005-.006l8.975-8.935.006-.006c.005-.003.008-.008.01-.011a.49.49 0 00-.075-.087l-.003-.003-8.907-8.96c-.112-.115-.33-.292-.532-.205-.183.079-.306.333-.295.608v.008l.023 3.524a.75.75 0 01-.762.737l-6.9-.003c-.386.006-.655.093-.82.263-.185.19-.269.521-.26 1.009v6.243c-.009.286.03.678.271.925.177.18.446.269.801.263 0-.005 0-.005.003-.005z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconArrowRightLight;
