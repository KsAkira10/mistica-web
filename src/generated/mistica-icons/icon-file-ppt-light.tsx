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

const IconFilePptLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.744 2.156c.183 0 .353.07.485.196l5.409 5.236a.683.683 0 01.168.325.39.39 0 01.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.564-1.23-1.205l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.27v-4.179a2.27 2.27 0 012.266-2.268h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.571zm-.691.827H8.17c-.182 0-.406.207-.406.378v5.52h6.706a2.27 2.27 0 012.266 2.27v4.179a2.27 2.27 0 01-2.266 2.269H7.803l-.036 3.042c0 .182.204.372.406.372H20.61v.003c.207 0 .403-.185.403-.378V8.756h-2.565c-.98 0-1.827-.317-2.443-.916-.622-.603-.952-1.429-.952-2.384V2.983zm-.58 6.725H4.42c-.793 0-1.44.647-1.44 1.443v4.179c0 .795.644 1.442 1.44 1.442h10.053c.792 0 1.44-.647 1.44-1.442v-4.18c0-.795-.645-1.442-1.44-1.442zm-8.56 1.754c.59 0 .963.08 1.207.308.204.187.302.479.302.882s-.092.706-.28.916c-.221.25-.563.364-1.059.364h-.605v1.3h-.86v-3.77h1.295zm3.414 0c.591 0 .964.08 1.207.308.205.187.303.479.303.882s-.093.706-.28.916c-.221.25-.563.364-1.059.364h-.605v1.3h-.86v-3.77h1.294zm5.023 0l-.068.621h-1.14v3.149h-.86v-3.149h-1.168v-.621h3.236zm-8.471.624h-.403v1.202H5.9v-.003c.275 0 .393-.04.502-.143.098-.098.148-.257.148-.479 0-.204-.045-.353-.143-.445-.103-.093-.263-.132-.53-.132zm3.415 0H8.89v1.202h.426v-.003c.274 0 .392-.04.501-.143.098-.098.149-.257.149-.479 0-.204-.045-.353-.143-.445-.104-.093-.263-.132-.53-.132zm6.585-8.921v2.291c0 .728.24 1.347.7 1.79.462.445 1.11.683 1.869.683h2.35l-4.92-4.764z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePptLight;
