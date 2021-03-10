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

const IconRobotRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.3 11.68h4.543V4.67H6.196v2.123c.003.028.008.056.008.084V9.77c0 .028-.005.056-.008.084v1.83h4.543c.012 0 .02-.006.031-.006h2.499c.011-.003.02.002.03.002zm-1.9 1.974h1.236v-.753H11.4v.753zm8.376 1.224h-6.49c-.006 0-.012.006-.02.006h-2.499c-.005 0-.01-.006-.02-.006H4.264v5.74h1.832l-.003-.034v-3.678c0-.675.563-1.224 1.264-1.224h9.33c.698 0 1.264.546 1.264 1.224v3.678l-.003.034h1.832v-5.74h-.003zm-12.42 5.706h9.33v-3.678h-9.33v3.678zM4.269 9.766h.664v-2.89h-.664v2.89zm14.84.011h.672v-2.89h-.672v2.89zm-1.266 3.126H13.9v.754h5.877c.697 0 1.263.549 1.263 1.224v5.74c0 .675-.566 1.224-1.263 1.224H4.263C3.566 21.845 3 21.298 3 20.62v-5.74c0-.675.566-1.224 1.263-1.224h5.877v-.754H6.196c-.697 0-1.263-.546-1.263-1.224v-.689h-.664c-.698 0-1.263-.546-1.263-1.224v-2.89c0-.676.565-1.225 1.263-1.225h.664v-.983c0-.675.566-1.224 1.263-1.224h5.32v-.269a.613.613 0 01-.152-.39c0-.35.294-.635.656-.635.36 0 .655.286.655.636a.62.62 0 01-.151.39v.268h5.32c.697 0 1.262.546 1.262 1.224v.995h.675c.698 0 1.264.546 1.264 1.224v2.89c0 .676-.566 1.225-1.264 1.225h-.675v.677c0 .675-.565 1.224-1.263 1.224zm-8.21-5.322a.456.456 0 00.462-.448.454.454 0 00-.462-.445.454.454 0 00-.462.445c0 .25.204.448.462.448zm1.639-.445c0 .877-.737 1.588-1.642 1.588-.905 0-1.641-.711-1.641-1.588 0-.874.736-1.588 1.641-1.588s1.642.714 1.642 1.588zm3.134.429a.454.454 0 00.462-.446.454.454 0 00-.462-.445.454.454 0 00-.462.445c0 .244.207.446.462.446zm0-2.034c.905 0 1.639.711 1.639 1.588 0 .874-.737 1.588-1.639 1.588s-1.641-.711-1.641-1.588c.002-.877.74-1.588 1.641-1.588zm-.765 3.896c.348 0 .63.275.63.61a.62.62 0 01-.63.612h-3.24a.622.622 0 01-.63-.611.62.62 0 01.63-.61h3.24z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRobotRegular;
