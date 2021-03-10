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

const IconListDocumentLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.569 20.425V3.576c0-.327-.263-.599-.398-.599H5.841c-.135 0-.398.272-.398.6v16.845c0 .342.24.6.398.6l12.33.003c.157-.003.398-.258.398-.6zm-.403-18.269c.638 0 1.224.678 1.224 1.42v16.85c0 .755-.572 1.417-1.224 1.417L5.849 21.84c-.653 0-1.224-.661-1.224-1.418V3.576c-.003-.742.583-1.42 1.221-1.42h12.32zM7.746 8.72a.82.82 0 11-.002-1.64.82.82 0 01.001 1.64zm0 2.46a.82.82 0 110 1.64.82.82 0 010-1.64zm2.876-2.46a.412.412 0 01-.414-.409.41.41 0 01.414-.409h5.731c.23 0 .415.185.415.41a.412.412 0 01-.415.408h-5.73zM16.353 12c.23 0 .415.185.415.41a.412.412 0 01-.415.408h-5.73a.412.412 0 01-.415-.409.41.41 0 01.414-.409h5.731zm-8.608 3.283a.82.82 0 11.002 1.64.82.82 0 01-.002-1.64zm8.608.818c.23 0 .415.185.415.41a.41.41 0 01-.415.408h-5.73a.412.412 0 01-.415-.409.41.41 0 01.414-.409h5.731z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconListDocumentLight;
