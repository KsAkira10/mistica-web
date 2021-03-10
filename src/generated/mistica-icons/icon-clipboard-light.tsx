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

const IconClipboardLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.56 20.715V4.75c0-.081-.264-.33-.63-.33h-2.945c.012.098.028.193.031.294l.006.19-.003.093c-.045 1.302-1.244 1.574-3.03 1.574-1.785 0-2.984-.272-3.032-1.591v-.194l.006-.092c.003-.098.022-.182.036-.274H6.05c-.369 0-.63.252-.63.33v15.964c0 .112.275.33.63.33h11.878c.358 0 .633-.221.633-.33zM11.988 2.96c-1.454 0-2.157.569-2.213 1.79l-.005.154c.014.392.03.863 2.221.863 2.19 0 2.207-.474 2.218-.818v-.132a2.663 2.663 0 00-.109-.694c-.252-.782-.941-1.163-2.112-1.163zm5.939.658c.756 0 1.445.541 1.445 1.132v15.964c0 .613-.661 1.131-1.443 1.131H6.053c-.782 0-1.443-.518-1.443-1.131V4.75c0-.591.69-1.132 1.443-1.132h3.15c.418-.946 1.376-1.459 2.785-1.459 1.717 0 2.462.74 2.782 1.46h3.157zm-6.84 1.474a.405.405 0 01-.407-.4c0-.222.182-.401.406-.401h1.801c.224 0 .406.179.406.4 0 .222-.182.4-.406.4h-1.8z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconClipboardLight;
