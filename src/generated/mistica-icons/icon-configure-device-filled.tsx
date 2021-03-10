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

const IconConfigureDeviceFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.668 2c2.157 0 3.25 1.106 3.246 3.291v13.11c0 2.215-1.061 3.29-3.249 3.29H10.48c-2.187 0-3.249-1.075-3.249-3.29v-3.236a.841.841 0 01-.804-.84v-.53a2.834 2.834 0 01-.221-.07l-.356.356a.84.84 0 01-1.188 0l-.733-.73a.84.84 0 010-1.189l.355-.355a5.108 5.108 0 01-.07-.222H3.69a.84.84 0 01-.84-.84V9.71a.84.84 0 01.84-.84h.527c.02-.076.045-.15.07-.222l-.356-.356a.84.84 0 010-1.187l.734-.731a.84.84 0 011.188 0l.356.355c.072-.025.145-.047.221-.07v-.524a.837.837 0 01.804-.84c0-1.11.26-1.913.795-2.462C8.573 2.272 9.377 2 10.483 2zm-3.583 15.308c-.58 0-.955.303-.955.958 0 .314.087.55.241.706.168.17.412.252.714.252.303 0 .547-.081.715-.252.154-.157.24-.39.24-.706 0-.653-.375-.958-.955-.958zM8.31 6.134H7.273V7.35c-.485.05-.9.18-1.244.387l-.77-.77-.734.73.768.77c-.202.337-.334.751-.387 1.244H3.69v1.037h1.216c.053.493.182.907.387 1.244l-.77.77.733.73.77-.77c.345.208.762.334 1.244.387v1.216h1.037v-1.213c.484-.05.899-.18 1.243-.387l.77.77.732-.733-.77-.77c.201-.337.333-.751.386-1.244h1.216V9.714h-1.216c-.05-.493-.182-.907-.387-1.243l.774-.774-.732-.73-.77.77c-.344-.208-.762-.334-1.244-.387V6.134zm-.52 2.642c.921 0 1.453.46 1.453 1.454s-.532 1.453-1.454 1.453c-.921 0-1.453-.459-1.453-1.453 0-.995.532-1.454 1.453-1.454z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconConfigureDeviceFilled;
