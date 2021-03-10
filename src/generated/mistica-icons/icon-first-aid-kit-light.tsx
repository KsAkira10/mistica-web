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

const IconFirstAidKitLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.005 19.367V7.605a.44.44 0 00-.443-.437H3.436a.44.44 0 00-.442.437v11.762c0 .24.199.437.442.437h17.126a.44.44 0 00.443-.437zM8.204 4.429v1.91h7.59v-1.91c0-.05-.15-.194-.442-.194H8.646c-.29 0-.442.143-.442.194zm12.358 1.91c.706 0 1.28.569 1.28 1.266v11.762c0 .698-.574 1.266-1.28 1.266H3.436c-.706 0-1.28-.568-1.28-1.266V7.605c0-.697.574-1.266 1.28-1.266h3.93v-1.91c0-.575.563-1.023 1.28-1.023h6.706c.717 0 1.28.448 1.28 1.023v1.91h3.93zm-4.775 6.235c0 .05.016.082.022.087l-.05-.437v.415l-2.488.003a.413.413 0 01-.42-.415V9.77c-.006-.014-.006-.022-.003-.028h-1.686l-.023 2.485c0 .23-.187.415-.42.415l-2.484.002c-.017.003-.023.003-.028 0v1.675l2.512.017c.233 0 .42.185.42.415l.003 2.456c.003.014.003.023 0 .026h1.692l.017-2.485a.417.417 0 01.42-.412h2.485c.014-.005.022-.005.028-.003v-1.759h.003zm-.029-.764c.46 0 .866.358.866.764v1.821c0 .406-.403.765-.866.765h-2.064l.003 2.045c0 .462-.356.854-.773.854h-1.84c-.42 0-.774-.392-.774-.854l-.002-2.045-2.068.003c-.468 0-.865-.35-.865-.765v-1.82c0-.415.395-.766.865-.766l2.065-.002V9.765c0-.457.361-.855.773-.855h1.84c.412 0 .773.401.773.855v2.042l2.067.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFirstAidKitLight;
