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

const IconConfigureTvDecoderRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.843 5.345a.84.84 0 01.84.843v.523c.076.02.149.045.222.07l.356-.355a.84.84 0 011.187 0l.734.734a.84.84 0 010 1.187l-.356.356c.026.073.048.146.07.221h.524a.84.84 0 01.84.84v1.037a.84.84 0 01-.84.84h-.524c-.02.076-.044.149-.07.222l.356.353c.084.083.146.18.187.283h1.172c1.187 0 2.148.963 2.148 2.148v2.02a2.15 2.15 0 01-2.148 2.148H4.148A2.152 2.152 0 012 16.667v-2.02c0-1.188.964-2.148 2.148-2.148h6.136a.836.836 0 01.187-.283l.355-.356a5.108 5.108 0 01-.07-.221h-.524a.84.84 0 01-.84-.84V9.761a.84.84 0 01.84-.84h.524c.02-.076.045-.149.07-.222l-.355-.355a.84.84 0 010-1.188l.73-.734a.84.84 0 011.188 0l.356.356c.073-.025.146-.048.221-.07v-.524a.84.84 0 01.84-.84zm3.124 8.272l-.519.517a.84.84 0 01-1.187 0l-.356-.355a5.108 5.108 0 01-.222.07v.524a.84.84 0 01-.84.84h-1.036a.84.84 0 01-.84-.84v-.524a3.026 3.026 0 01-.222-.07l-.356.355a.84.84 0 01-1.187 0l-.517-.515H4.148c-.568 0-1.028.46-1.028 1.028v2.02c0 .568.46 1.028 1.028 1.028h15.393c.568 0 1.028-.46 1.028-1.028v-2.02c0-.569-.46-1.028-1.028-1.028h-1.55l-.024-.002zm.378 2.352a.594.594 0 010 1.188h-2.656a.594.594 0 010-1.188h2.656zm-13.401.137a.457.457 0 110 .914.457.457 0 010-.914zm1.695 0a.457.457 0 110 .914.457.457 0 010-.914zm1.638 0a.457.457 0 110 .914.457.457 0 010-.914zm6.566-9.921h-1.036V7.4c-.485.05-.9.179-1.244.386l-.77-.77-.731.73.77.771c-.202.336-.333.75-.387 1.244H10.23v1.036h1.215c.05.493.182.908.387 1.244l-.697.698c.049.07.082.152.095.24l.56.566.77-.77c.345.207.762.333 1.244.386v1.216h1.036v-1.216c.485-.05.9-.179 1.244-.386l.77.77.586-.583a.557.557 0 01.084-.212l-.706-.706c.202-.336.333-.75.386-1.244h1.216V9.765h-1.216c-.05-.493-.182-.908-.386-1.244l.773-.773-.734-.731-.77.77c-.345-.207-.762-.333-1.244-.386V6.185zm-.518 1.801c.692 0 1.25.196 1.655.588.423.41.639.98.639 1.706s-.216 1.297-.639 1.706c-.406.39-.963.588-1.655.588-.692 0-1.25-.196-1.656-.588-.423-.409-.638-.98-.638-1.706 0-.725.215-1.297.638-1.706.407-.39.964-.588 1.656-.588zm0 .84c-.922 0-1.454.46-1.454 1.454 0 .995.532 1.454 1.454 1.454.921 0 1.454-.46 1.454-1.454s-.533-1.454-1.454-1.454z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconConfigureTvDecoderRegular;
